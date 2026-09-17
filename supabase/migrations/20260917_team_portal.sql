-- VVR Team Portal foundation. Apply only after configuring Supabase Auth.
-- No public signup grants access: a trusted administrator must add memberships.
create extension if not exists pgcrypto;

create table if not exists public.vvr_memberships (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null check (role in ('admin', 'board', 'volunteer')),
  display_name text not null check (char_length(display_name) between 1 and 120),
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create or replace function public.vvr_role()
returns text language sql stable security definer
set search_path = ''
as $$
  select role from public.vvr_memberships
  where user_id = (select auth.uid()) and active = true
  limit 1
$$;
revoke all on function public.vvr_role() from public;
grant execute on function public.vvr_role() to authenticated;

create table if not exists public.vvr_tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(title) between 1 and 200),
  description text not null default '' check (char_length(description) <= 10000),
  assigned_to uuid references public.vvr_memberships(user_id) on delete set null,
  due_date date,
  status text not null default 'todo' check (status in ('todo', 'in_progress', 'done')),
  visibility text not null default 'team' check (visibility in ('team', 'board')),
  created_by uuid not null references public.vvr_memberships(user_id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.vvr_events (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(title) between 1 and 200),
  description text not null default '' check (char_length(description) <= 10000),
  starts_at timestamptz not null,
  ends_at timestamptz,
  location text not null default '' check (char_length(location) <= 300),
  visibility text not null default 'team' check (visibility in ('team', 'board')),
  created_by uuid not null references public.vvr_memberships(user_id),
  created_at timestamptz not null default now(),
  constraint vvr_event_end_after_start check (ends_at is null or ends_at >= starts_at)
);

create table if not exists public.vvr_announcements (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(title) between 1 and 200),
  body text not null check (char_length(body) between 1 and 10000),
  visibility text not null default 'team' check (visibility in ('team', 'board')),
  created_by uuid not null references public.vvr_memberships(user_id),
  created_at timestamptz not null default now()
);

alter table public.vvr_memberships enable row level security;
alter table public.vvr_tasks enable row level security;
alter table public.vvr_events enable row level security;
alter table public.vvr_announcements enable row level security;

-- Membership lookup is limited to active team members; only admins manage accounts.
create policy "team can read active members" on public.vvr_memberships
for select to authenticated using (public.vvr_role() is not null and active = true);
create policy "admins add members" on public.vvr_memberships
for insert to authenticated with check (public.vvr_role() = 'admin');
create policy "admins update members" on public.vvr_memberships
for update to authenticated using (public.vvr_role() = 'admin') with check (public.vvr_role() = 'admin');
create policy "admins remove members" on public.vvr_memberships
for delete to authenticated using (public.vvr_role() = 'admin');

create policy "team reads authorized tasks" on public.vvr_tasks
for select to authenticated using (public.vvr_role() is not null and (visibility = 'team' or public.vvr_role() in ('admin','board')));
create policy "board creates tasks" on public.vvr_tasks
for insert to authenticated with check (public.vvr_role() in ('admin','board') and created_by = (select auth.uid()));
create policy "board updates tasks or assignee updates own status" on public.vvr_tasks
for update to authenticated using (public.vvr_role() in ('admin','board') or (visibility = 'team' and assigned_to = (select auth.uid()) and public.vvr_role() = 'volunteer'))
with check (public.vvr_role() in ('admin','board') or (visibility = 'team' and assigned_to = (select auth.uid()) and public.vvr_role() = 'volunteer'));
create policy "board deletes tasks" on public.vvr_tasks
for delete to authenticated using (public.vvr_role() in ('admin','board'));

create policy "team reads authorized events" on public.vvr_events
for select to authenticated using (public.vvr_role() is not null and (visibility = 'team' or public.vvr_role() in ('admin','board')));
create policy "board creates events" on public.vvr_events
for insert to authenticated with check (public.vvr_role() in ('admin','board') and created_by = (select auth.uid()));
create policy "board updates events" on public.vvr_events
for update to authenticated using (public.vvr_role() in ('admin','board')) with check (public.vvr_role() in ('admin','board'));
create policy "board deletes events" on public.vvr_events
for delete to authenticated using (public.vvr_role() in ('admin','board'));

create policy "team reads authorized announcements" on public.vvr_announcements
for select to authenticated using (public.vvr_role() is not null and (visibility = 'team' or public.vvr_role() in ('admin','board')));
create policy "board creates announcements" on public.vvr_announcements
for insert to authenticated with check (public.vvr_role() in ('admin','board') and created_by = (select auth.uid()));
create policy "board updates announcements" on public.vvr_announcements
for update to authenticated using (public.vvr_role() in ('admin','board')) with check (public.vvr_role() in ('admin','board'));
create policy "board deletes announcements" on public.vvr_announcements
for delete to authenticated using (public.vvr_role() in ('admin','board'));

-- IMPORTANT before production: restrict volunteer task UPDATE to status only via
-- a dedicated SECURITY DEFINER RPC that validates the assignee and permitted
-- status transitions; the broad UPDATE policy above permits editing other columns.
-- Do not expose task mutation UI to volunteers until that RPC is implemented.
-- Google Drive permissions must be enforced in Drive separately; this schema
-- does not authorize or proxy Drive files.
