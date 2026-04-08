create extension if not exists "pgcrypto";

create table projects (
  id uuid primary key default gen_random_uuid(),
  title varchar(100) not null,
  slug varchar(120) not null unique,
  short_description varchar(200) not null,
  full_description text,
  cover_image_url text,
  gallery_images text[],
  technologies text[] not null default '{}',
  github_url text,
  live_url text,
  featured boolean default false,
  order_index int default 0,
  created_at timestamptz default now()
);

create table contact_messages (
  id uuid primary key default gen_random_uuid(),
  name varchar(100) not null,
  email varchar(200) not null,
  message text not null,
  read boolean default false,
  created_at timestamptz default now()
);

alter table projects enable row level security;

create policy "Public can read projects"
  on projects for select using (true);

alter table contact_messages enable row level security;

create policy "Public can insert messages"
  on contact_messages for insert with check (true);
