-- Run once in the Supabase SQL editor of the project that WEAM owns.
create table if not exists public.members (
  id uuid primary key references auth.users(id) on delete cascade,
  nickname text,
  consent_at timestamptz not null,
  consent_v text not null,
  joined_at timestamptz not null default now()
);
alter table public.members enable row level security;
create policy "own select" on public.members for select to authenticated using (auth.uid() = id);
create policy "own insert" on public.members for insert to authenticated with check (auth.uid() = id);
create policy "own update" on public.members for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);
create policy "own delete" on public.members for delete to authenticated using (auth.uid() = id);
create or replace function public.delete_me() returns void
language sql security definer set search_path = public, auth as $$
  delete from auth.users where id = auth.uid();
$$;
revoke all on function public.delete_me() from public, anon;
grant execute on function public.delete_me() to authenticated;
