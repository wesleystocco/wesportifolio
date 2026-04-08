# Wesportifolio

Base inicial do portfolio de Wesley Stocco em Next.js, com preparacao para Supabase e deploy na Vercel.

## Fase 0

Status atual:

- estrutura Next.js criada com App Router, TypeScript e Tailwind CSS
- dependencias iniciais instaladas
- clientes base do Supabase preparados
- script SQL inicial disponivel em `supabase/schema.sql`
- deploy local validado com `npm.cmd run dev`

## Rodando localmente

1. Preencha o arquivo `.env.local`
2. Instale dependencias com `npm.cmd install`
3. Rode `npm.cmd run dev`
4. Acesse `http://localhost:3000`

## Arquivos importantes

- `instrucoes.md`: documentacao principal do projeto
- `supabase/schema.sql`: criacao das tabelas iniciais
- `src/lib/supabase/`: utilitarios de conexao

## Proximos passos

- criar projeto no Supabase
- preencher variaveis de ambiente
- executar o SQL inicial
- conectar GitHub + Vercel
