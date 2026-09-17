-- Security hardening: volunteers must not be able to modify arbitrary task fields.
-- A future status-only RPC can allow assignees to update progress safely.
drop policy if exists "board updates tasks or assignee updates own status" on public.vvr_tasks;
create policy "board updates tasks" on public.vvr_tasks
for update to authenticated
using (public.vvr_role() in ('admin','board'))
with check (public.vvr_role() in ('admin','board'));
