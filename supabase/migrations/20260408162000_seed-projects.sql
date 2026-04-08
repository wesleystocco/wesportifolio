insert into projects (
  title,
  slug,
  short_description,
  full_description,
  cover_image_url,
  gallery_images,
  technologies,
  github_url,
  live_url,
  featured,
  order_index
)
values
  (
    'FluencyOS',
    'fluencyos',
    'Plataforma SaaS com IA para aprendizado de idiomas.',
    'FluencyOS nasce como uma proposta de produto digital para tornar o aprendizado de idiomas mais adaptativo, com uma experiencia clara, ritmo de estudo consistente e apoio de inteligencia artificial ao longo da jornada.

Na pratica, o projeto combina Next.js, TypeScript, Tailwind CSS, Supabase e integracoes com IA para estruturar um ambiente que possa crescer em conteudo, personalizacao e recorrencia de uso.

Dentro deste portfolio, FluencyOS representa o tipo de trabalho que mais interessa seguir aprofundando: software com interface forte, arquitetura moderna e produto orientado a experiencia.',
    null,
    null,
    array['Next.js', 'TypeScript', 'OpenAI API', 'Supabase', 'Tailwind CSS'],
    null,
    null,
    true,
    1
  ),
  (
    'SekkoLab IA',
    'sekkolab-ia',
    'Ferramentas de SEO potencializadas por inteligencia artificial.',
    'SekkoLab IA explora uma frente mais analitica e estrategica: uso de inteligencia artificial para acelerar processos de SEO, apoiar geracao de conteudo e organizar fluxos com foco em performance digital.

O projeto conecta repertorio tecnico e pensamento de produto, unindo backend, automacao e experiencia de uso em uma ferramenta que ajuda a transformar tarefas repetitivas em processos mais inteligentes.

Dentro do portfolio, SekkoLab IA ajuda a mostrar amplitude: nao apenas interface, mas tambem integracao, logica de negocio e uso pragmatico de IA.',
    null,
    null,
    array['Python', 'Next.js', 'OpenAI API', 'FastAPI'],
    null,
    null,
    true,
    2
  )
on conflict (slug) do update
set
  title = excluded.title,
  short_description = excluded.short_description,
  full_description = excluded.full_description,
  technologies = excluded.technologies,
  github_url = excluded.github_url,
  live_url = excluded.live_url,
  featured = excluded.featured,
  order_index = excluded.order_index;
