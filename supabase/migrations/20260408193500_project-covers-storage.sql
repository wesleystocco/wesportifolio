insert into storage.buckets (
  id,
  name,
  public,
  file_size_limit,
  allowed_mime_types
)
values (
  'project-covers',
  'project-covers',
  true,
  5242880,
  array['image/svg+xml', 'image/png', 'image/jpeg', 'image/webp']
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

update projects
set
  cover_image_url = 'https://elrlfathiqnddmempcul.supabase.co/storage/v1/object/public/project-covers/fluencyos-cover.svg',
  gallery_images = array[
    'https://elrlfathiqnddmempcul.supabase.co/storage/v1/object/public/project-covers/fluencyos-cover.svg',
    'https://elrlfathiqnddmempcul.supabase.co/storage/v1/object/public/project-covers/fluencyos-panel.svg'
  ]
where slug = 'fluencyos';

update projects
set
  cover_image_url = 'https://elrlfathiqnddmempcul.supabase.co/storage/v1/object/public/project-covers/sekkolab-ia-cover.svg',
  gallery_images = array[
    'https://elrlfathiqnddmempcul.supabase.co/storage/v1/object/public/project-covers/sekkolab-ia-cover.svg',
    'https://elrlfathiqnddmempcul.supabase.co/storage/v1/object/public/project-covers/sekkolab-ia-panel.svg'
  ]
where slug = 'sekkolab-ia';
