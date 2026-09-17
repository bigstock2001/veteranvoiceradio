# VVR Team Portal — weekend checklist

## Donald: account setup
- [ ] Create a separate Supabase account for Veteran Voice Radio using the VVR organizational email.
- [ ] Create a dedicated VVR Supabase project; do not use or alter the fantasy sports project.
- [ ] Connect/authorize the VVR Supabase project through the supported integration when ready. Never paste database passwords, service-role keys, or other secrets into chat or GitHub.
- [ ] In the VVR Google account, create a VVR Team Drive folder and share appropriate access with Brandon and Donald. Google Drive connection can happen later.
- [ ] Confirm which people should be administrators, board members, and volunteers before inviting anyone.

## Development: portal bones
- [x] Add isolated, explicitly non-secure portal UI preview and preview route.
- [x] Commit draft Supabase schema and task-permission SQL migrations to GitHub (not applied or tested).
- [ ] Review SQL migrations for correctness and row-level security before applying to the dedicated VVR project.
- [ ] Add server-side authentication and verified membership/role checks. Never use client-only role toggles for access control.
- [ ] Connect tasks, events, and announcements to persistent data with server-enforced permissions.
- [ ] Test admin, board, volunteer, and signed-out access, including direct URLs and API calls.
- [ ] Connect Google Drive only after the folder and document-specific sharing are ready; do not expose legal or financial files to volunteers.
- [ ] Verify builds and deployment before advertising the portal as usable.

**Current state:** UI preview and unexecuted SQL files only. No production login, database, Google Drive connection, or verified deployment. This checklist contains no credentials or confidential documents.
