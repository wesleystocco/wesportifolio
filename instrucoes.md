# 🚀 PORTFÓLIO WESLEY STOCCO — DOCUMENTAÇÃO TÉCNICA COMPLETA
> Versão 2.0 | Última atualização: 2026 | Stack: Next.js + Supabase + Tailwind + Framer Motion

---

## 📋 ÍNDICE

1. [Visão Geral do Projeto](#1-visão-geral-do-projeto)
2. [Identidade Visual & Design System](#2-identidade-visual--design-system)
3. [Arquitetura Técnica](#3-arquitetura-técnica)
4. [Stack Tecnológica Completa](#4-stack-tecnológica-completa)
5. [Estrutura de Pastas](#5-estrutura-de-pastas)
6. [Sitemap & Fluxo de Navegação](#6-sitemap--fluxo-de-navegação)
7. [Requisitos Funcionais (RF)](#7-requisitos-funcionais-rf)
8. [Requisitos Não Funcionais (RNF)](#8-requisitos-não-funcionais-rnf)
9. [Modelo de Dados — Supabase](#9-modelo-de-dados--supabase)
10. [Componentes UI — Especificação Detalhada](#10-componentes-ui--especificação-detalhada)
11. [Animações & Microinterações](#11-animações--microinterações)
12. [Integração de IA — Wesley.IA](#12-integração-de-ia--wesleyia)
13. [SEO & Performance](#13-seo--performance)
14. [Ambiente de Desenvolvimento](#14-ambiente-de-desenvolvimento)
15. [Etapas de Produção (Sprints)](#15-etapas-de-produção-sprints)
16. [Otimizações & Boas Práticas](#16-otimizações--boas-práticas)
17. [Variáveis de Ambiente](#17-variáveis-de-ambiente)
18. [Gestão de Riscos & Fallbacks](#18-gestão-de-riscos--fallbacks)
19. [Critérios de Entrega (Definition of Done)](#19-critérios-de-entrega-definition-of-done)
20. [Informações Pessoais & Conteúdo](#20-informações-pessoais--conteúdo)

---

## 1. VISÃO GERAL DO PROJETO

| Campo | Detalhe |
|---|---|
| **Nome** | Portfólio Wesley.IA |
| **Domínio sugerido** | wesleystocco.dev |
| **Objetivo** | Apresentar projetos, habilidades e perfil profissional de forma imersiva e tecnológica para recrutadores e clientes |
| **Público-alvo** | Recrutadores de TI, Tech Leads, CTOs, empresas buscando Devs Full-stack e especialistas em IA |
| **Tipo de aplicação** | SPA (Single Page Application) com scroll suave + rotas dinâmicas para projetos |
| **Infraestrutura** | 100% gratuita (Vercel + Supabase Free Tier) |
| **IDE** | VS Code com extensões recomendadas (ver seção 14) |

### Diferenciais Competitivos
- Background com vídeo 3D orgânico em loop (a "flor")
- Glassmorphism com iluminação dinâmica reagindo ao cursor
- Splash Screen estilo "desbloqueio de celular"
- Bot de IA treinado com o currículo do Wesley
- Easter egg: Terminal secreto com `Ctrl+K`
- Filtro dinâmico de projetos por tecnologia
- Cursor customizado com efeito magnético

---

## 2. IDENTIDADE VISUAL & DESIGN SYSTEM

### 2.1 Paleta de Cores

```
BACKGROUND   → #0D0809  (preto quente — base de tudo)
GLASS-DARK   → #590B19  (vinho escuro — fundo dos cards)
NEON-RED     → #A6122D  (vermelho neon — destaques primários)
PINK-DARK    → #A61B4E  (rosa escuro — gradientes)
MAGENTA      → #BF246D  (magenta vibrante — botões, CTAs, cursor)
```

### 2.2 Uso de Cores por Elemento

| Elemento | Cor | Opacidade |
|---|---|---|
| Background global | `#0D0809` | 100% |
| Card Glassmorphism fundo | `#590B19` | 10–15% |
| Borda dos cards | `#FFFFFF` | 8–12% |
| Botão CTA primário | `#BF246D` | 100% |
| Botão CTA hover (glow) | `#BF246D` | + shadow spread |
| Cursor customizado | `#BF246D` | 60% blur |
| Ícones e tags | `#A6122D` | 100% |
| Texto principal | `#F5F0F0` | 90% |
| Texto secundário | `#A0A0A0` | 70% |
| Borda de foco/active | `#A61B4E` | 100% |

### 2.3 Tipografia

```
Fonte Principal:  "Inter" (Google Fonts) — corpo de texto, parágrafos
Fonte Accent:     "Space Grotesk" (Google Fonts) — títulos, headings
Fonte Monospace:  "Fira Code" (Google Fonts) — terminal, código, tags técnicas
```

#### Escala Tipográfica

| Tag | Tamanho | Peso | Uso |
|---|---|---|---|
| H1 | 64px / 4rem | 800 | Nome principal na Hero |
| H2 | 40px / 2.5rem | 700 | Títulos de seção |
| H3 | 24px / 1.5rem | 600 | Títulos de card |
| Body | 16px / 1rem | 400 | Texto corrido |
| Small | 14px / 0.875rem | 400 | Tags, labels |
| Mono | 13px / 0.8rem | 400 | Terminal, código |

### 2.4 Glassmorphism — Receita Tailwind CSS

```css
/* Card padrão — copiar e reutilizar */
.glass-card {
  background: rgba(89, 11, 25, 0.10);        /* #590B19 a 10% */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

/* Versão Tailwind */
className="bg-[#590B19]/10 backdrop-blur-xl border border-white/8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"

/* Glow no hover */
className="hover:border-[#BF246D]/30 hover:shadow-[0_0_20px_rgba(191,36,109,0.2)] transition-all duration-300"
```

### 2.5 Efeito de Borda com Glow Dinâmico (CSS Custom)

```css
/* O fundo da borda segue o cursor do mouse */
.glow-border {
  background: radial-gradient(
    circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(191, 36, 109, 0.3),
    transparent 70%
  );
}
```

---

## 3. ARQUITETURA TÉCNICA

```
┌──────────────────────────────────────────────────┐
│                    VISITANTE                      │
└──────────────────┬───────────────────────────────┘
                   │ HTTPS
┌──────────────────▼───────────────────────────────┐
│             VERCEL CDN (Edge Network)             │
│         Next.js App Router — SSR/SSG/ISR          │
│  ┌──────────────────────────────────────────┐     │
│  │  /app (App Router)                       │     │
│  │    /page.tsx         → Landing Page      │     │
│  │    /projetos/[slug]  → Projeto Detalhe   │     │
│  │    /api/chat         → Route Handler IA  │     │
│  └──────────────────────────────────────────┘     │
└──────────────────┬───────────────────────────────┘
                   │ Supabase JS Client SDK
┌──────────────────▼───────────────────────────────┐
│              SUPABASE (Backend-as-a-Service)       │
│  ┌──────────┐  ┌──────────┐  ┌──────────────┐    │
│  │PostgreSQL│  │  Auth    │  │   Storage    │    │
│  │ projects │  │ (Admin)  │  │  (imagens)   │    │
│  └──────────┘  └──────────┘  └──────────────┘    │
└───────────────────────────────────────────────────┘
```

### Estratégia de Renderização por Página/Seção

| Seção | Estratégia | Justificativa |
|---|---|---|
| Hero, Sobre, Skills | **SSG** (Static) | Conteúdo fixo — máxima velocidade |
| Lista de Projetos | **ISR** (revalidate: 3600) | Atualiza a cada 1h sem rebuild completo |
| Detalhe do Projeto | **SSG + fallback** | Gerado no build + novos projetos on-demand |
| API Chat (Wesley.IA) | **Route Handler** | Server-side para esconder a API Key OpenAI |

---

## 4. STACK TECNOLÓGICA COMPLETA

### Core

| Camada | Tecnologia | Versão | Plano Gratuito |
|---|---|---|---|
| Framework | Next.js (App Router) | 14+ | ✅ Ilimitado |
| Linguagem | TypeScript | 5+ | ✅ |
| Estilização | Tailwind CSS | 3+ | ✅ |
| Animações | Framer Motion | 11+ | ✅ |
| Banco de dados | Supabase (PostgreSQL) | — | ✅ 500MB |
| Hospedagem | Vercel | — | ✅ Hobby Tier |
| Ícones | Lucide React | — | ✅ |

### UI Extras

| Biblioteca | Uso |
|---|---|
| `react-parallax-tilt` | Efeito 3D tilt nos cards ao hover |
| `@supabase/ssr` | Integração Supabase com Next.js App Router |
| `clsx` + `tailwind-merge` | Merge condicional de classes Tailwind |
| `next/font` | Carregamento otimizado de fontes Google |
| `react-intersection-observer` | Animações de entrada ao fazer scroll |
| `sonner` | Toast notifications elegantes |

### Instalação Completa

```bash
# Criar o projeto
npx create-next-app@latest wesley-portfolio \
  --typescript --tailwind --eslint \
  --src-dir --app --import-alias "@/*"

cd wesley-portfolio

# Instalar dependências principais
npm install framer-motion @supabase/ssr @supabase/supabase-js \
  react-parallax-tilt lucide-react clsx tailwind-merge \
  react-intersection-observer sonner

# Instalar fontes (via next/font — não precisa instalar)
# Inter, Space Grotesk, Fira Code são carregadas via next/font/google
```

---

## 5. ESTRUTURA DE PASTAS

```
wesley-portfolio/
├── public/
│   ├── videos/
│   │   └── flower-bg.webm          # Vídeo background (formato .webm — leve)
│   ├── images/
│   │   └── og-image.png            # Imagem para Open Graph (1200x630px)
│   └── cv-wesley-stocco.pdf        # Currículo para download
│
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout (fontes, metadata global)
│   │   ├── page.tsx                # Landing page (todas as seções)
│   │   ├── projetos/
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Página de detalhe do projeto
│   │   └── api/
│   │       └── chat/
│   │           └── route.ts        # Endpoint do bot Wesley.IA
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── SplashScreen.tsx    # Animação de entrada
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Contact.tsx
│   │   ├── ui/
│   │   │   ├── GlassCard.tsx       # Card glassmorphism reutilizável
│   │   │   ├── GlowButton.tsx      # Botão com efeito glow
│   │   │   ├── CustomCursor.tsx    # Cursor customizado
│   │   │   ├── ProjectCard.tsx     # Card de projeto com tilt 3D
│   │   │   ├── SkillIcon.tsx       # Ícone de skill com levitação
│   │   │   ├── TagFilter.tsx       # Filtro de tecnologia
│   │   │   └── AITerminal.tsx      # Terminal secreto Ctrl+K
│   │   └── background/
│   │       └── VideoBackground.tsx # Vídeo em loop fixo no fundo
│   │
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts           # Cliente Supabase (browser)
│   │   │   └── server.ts           # Cliente Supabase (server components)
│   │   └── utils.ts                # cn() helper para Tailwind
│   │
│   ├── types/
│   │   └── index.ts                # Interfaces TypeScript
│   │
│   └── hooks/
│       ├── useMousePosition.ts     # Hook para capturar posição do cursor
│       └── useScrollAnimation.ts   # Hook para animações no scroll
│
├── .env.local                      # Variáveis de ambiente (nunca commitar!)
├── .env.example                    # Template das variáveis (commitar)
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

---

## 6. SITEMAP & FLUXO DE NAVEGAÇÃO

```
[ Acesso ao site ]
        ↓
[ Splash Screen — Animação 2s ]
  "Iniciando Wesley_Stocco.exe..."
  Slide-up revelando o site
        ↓
[ Navbar fixa — glassmorphism ]
  Logo | Sobre | Skills | Projetos | Contato | [Wesley.IA 🤖]
        ↓
┌─────────────────────────────────────────────┐
│  SEÇÃO 1 — HERO                             │
│  Vídeo flor no fundo                        │
│  "Wesley Stocco"                            │
│  "Full-stack Dev | IA & UI/UX"              │
│  [Ver Projetos]  [Baixar CV]                │
└─────────────────────────────────────────────┘
        ↓ scroll
┌─────────────────────────────────────────────┐
│  SEÇÃO 2 — SOBRE MIM                        │
│  Cards de vidro com experiências            │
│  Timeline lateral animada                   │
└─────────────────────────────────────────────┘
        ↓ scroll
┌─────────────────────────────────────────────┐
│  SEÇÃO 3 — SKILLS                           │
│  Grid de ícones levitando por categoria     │
│  Front-end | Back-end | IA & Ferramentas    │
└─────────────────────────────────────────────┘
        ↓ scroll
┌─────────────────────────────────────────────┐
│  SEÇÃO 4 — PROJETOS                         │
│  Filtros de tags dinâmicos                  │
│  Grid de cards com Tilt 3D                  │
│  [Clique] → /projetos/[slug]                │
└─────────────────────────────────────────────┘
        ↓ scroll
┌─────────────────────────────────────────────┐
│  SEÇÃO 5 — CONTATO                          │
│  Links sociais + formulário                 │
│  Chat Wesley.IA integrado                   │
└─────────────────────────────────────────────┘

EASTER EGG: Ctrl+K em qualquer momento
→ Abre terminal glassmorphism do Wesley.IA
```

---

## 7. REQUISITOS FUNCIONAIS (RF)

| ID | Prioridade | Ator | Ação | Resultado | Critério de aceite |
|---|---|---|---|---|---|
| RF01 | 🔴 Alta | Visitante | Ver projetos | Grid dinâmico do Supabase | Dado acesso à seção, quando carrega, então vejo cards com título, tags e capa |
| RF02 | 🔴 Alta | Visitante | Filtrar projetos por tag | Ver apenas projetos da stack clicada | Dado que clico em "Next.js", então grid reorganiza com animação mostrando só os filtrados |
| RF03 | 🔴 Alta | Visitante | Abrir detalhe do projeto | Ver página `/projetos/[slug]` | Dado que clico no card, então abre página com descrição completa, imagens e links |
| RF04 | 🔴 Alta | Visitante | Baixar CV | Download do PDF | Dado que clico em "Baixar CV", então inicia download de `cv-wesley-stocco.pdf` |
| RF05 | 🔴 Alta | Visitante | Ver Splash Screen | Animação de entrada ao acessar | Dado que acessa o site, então vê animação de terminal + slide-up por 2s |
| RF06 | 🟡 Média | Visitante | Enviar mensagem de contato | Formulário funcional | Dado formulário preenchido, quando envia, então aparece toast de confirmação e salva no Supabase |
| RF07 | 🟡 Média | Visitante | Interagir com Wesley.IA | Chat responde sobre o perfil | Dado que abre terminal e digita, então IA responde com dados do currículo |
| RF08 | 🟡 Média | Visitante | Usar filtro de skills | Ver projetos por tecnologia | Dado clique em tag, quando filtro aplica, então animação de saída/entrada dos cards |
| RF09 | 🟢 Baixa | Admin (Wesley) | Adicionar projeto pelo Supabase | Projeto aparece automaticamente no site | Dado inserção na tabela `projects`, quando ISR revalida, então novo projeto aparece |
| RF10 | 🟢 Baixa | Visitante | Ativar Easter Egg (Ctrl+K) | Terminal secreto abre | Dado qualquer tela, quando pressiona Ctrl+K, então modal terminal glassmorphism abre com cursor piscando |

---

## 8. REQUISITOS NÃO FUNCIONAIS (RNF)

| ID | Categoria | Requisito |
|---|---|---|
| RNF01 | Performance | LCP (Largest Contentful Paint) < 2.5s |
| RNF02 | Performance | Animações a 60fps (sem janks) em Chrome e Safari desktop |
| RNF03 | Performance | Vídeo background em `.webm` < 5MB |
| RNF04 | Performance | Score Lighthouse ≥ 90 (Performance, SEO, Accessibility) |
| RNF05 | Custo | 100% gratuito — não exceder free tiers do Supabase (500MB) e Vercel (100GB bandwidth) |
| RNF06 | Responsividade | Layout funcional de 320px (mobile) até 2560px (ultrawide) |
| RNF07 | Acessibilidade | WCAG 2.1 AA — contraste mínimo 4.5:1, navegação por teclado, tags ARIA |
| RNF08 | Segurança | API Key da OpenAI nunca exposta no cliente — sempre via Route Handler |
| RNF09 | Segurança | Supabase RLS (Row Level Security) ativo em todas as tabelas |
| RNF10 | SEO | Metadata dinâmica por página + Open Graph + Sitemap.xml automático |
| RNF11 | Manutenabilidade | Projetos gerenciáveis via painel Supabase sem tocar no código |
| RNF12 | Compatibilidade | Chrome, Firefox, Safari, Edge — últimas 2 versões |

---

## 9. MODELO DE DADOS — SUPABASE

### Tabela: `projects`

| Campo | Tipo | Restrição | Exemplo |
|---|---|---|---|
| `id` | UUID | PK, default `gen_random_uuid()` | `550e8400-...` |
| `title` | VARCHAR(100) | NOT NULL | `FluencyOS` |
| `slug` | VARCHAR(120) | NOT NULL, UNIQUE | `fluencyos` |
| `short_description` | VARCHAR(200) | NOT NULL | `Plataforma SaaS com IA para aprendizado` |
| `full_description` | TEXT | — | Markdown completo |
| `cover_image_url` | TEXT | — | `https://...supabase.co/storage/...` |
| `gallery_images` | TEXT[] | — | `[url1, url2, url3]` |
| `technologies` | TEXT[] | NOT NULL | `['Next.js', 'Tailwind', 'OpenAI']` |
| `github_url` | TEXT | — | `https://github.com/wesley/fluencyos` |
| `live_url` | TEXT | — | `https://fluencyos.vercel.app` |
| `featured` | BOOLEAN | DEFAULT false | `true` |
| `order_index` | INT | DEFAULT 0 | `1` |
| `created_at` | TIMESTAMPTZ | DEFAULT now() | `2026-04-08T10:00:00Z` |

### Tabela: `contact_messages`

| Campo | Tipo | Restrição |
|---|---|---|
| `id` | UUID | PK |
| `name` | VARCHAR(100) | NOT NULL |
| `email` | VARCHAR(200) | NOT NULL |
| `message` | TEXT | NOT NULL |
| `read` | BOOLEAN | DEFAULT false |
| `created_at` | TIMESTAMPTZ | DEFAULT now() |

### SQL para criar as tabelas no Supabase

```sql
-- Habilitar extensão UUID
create extension if not exists "pgcrypto";

-- Tabela de projetos
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

-- Tabela de mensagens
create table contact_messages (
  id uuid primary key default gen_random_uuid(),
  name varchar(100) not null,
  email varchar(200) not null,
  message text not null,
  read boolean default false,
  created_at timestamptz default now()
);

-- RLS: apenas leitura pública para projetos
alter table projects enable row level security;
create policy "Public can read projects"
  on projects for select using (true);

-- RLS: qualquer um pode inserir mensagem, só admin lê
alter table contact_messages enable row level security;
create policy "Public can insert messages"
  on contact_messages for insert with check (true);
```

---

## 10. COMPONENTES UI — ESPECIFICAÇÃO DETALHADA

### 10.1 `SplashScreen.tsx`

**Comportamento:**
- Cobre 100% da tela com `#0D0809`
- Exibe texto de terminal com efeito de digitação: `> Iniciando Wesley_Stocco.exe...`
- Após 1.5s, dispara animação `y: "-100%"` com `ease: "easeInOut"` duração 1s
- Usa `useState` para controlar visibilidade e `useEffect` com timer
- Salva flag `sessionStorage.setItem('splash-shown', 'true')` para não repetir na mesma sessão

```tsx
// Framer Motion config
const variants = {
  visible: { y: 0 },
  hidden: { y: "-100%" }
}
transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
```

### 10.2 `VideoBackground.tsx`

```tsx
<div className="fixed inset-0 -z-10 overflow-hidden">
  {/* Overlay escuro */}
  <div className="absolute inset-0 bg-[#0D0809]/75 z-10" />
  
  {/* Vídeo */}
  <video
    autoPlay loop muted playsInline
    preload="none"
    className="absolute w-full h-full object-cover scale-110"
  >
    <source src="/videos/flower-bg.webm" type="video/webm" />
    {/* Fallback estático */}
    <div className="absolute inset-0 bg-[#0D0809]" />
  </video>
</div>
```

### 10.3 `GlassCard.tsx` (componente reutilizável)

```tsx
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // ex: "#BF246D"
}

// Classes base:
"bg-[#590B19]/10 backdrop-blur-xl border border-white/8 
 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]
 transition-all duration-300
 hover:border-[#BF246D]/25 hover:shadow-[0_0_30px_rgba(191,36,109,0.15)]"
```

### 10.4 `CustomCursor.tsx`

```tsx
// Dois elementos: o ponto central + o círculo externo com delay
// useMousePosition hook → atualiza coordenadas via CSS vars
// Ao hover em links/botões: escala 2.5x com blur aumentado
// Implementado com requestAnimationFrame para 60fps garantido

const cursorStyle = {
  left: `${position.x}px`,
  top: `${position.y}px`,
  background: `radial-gradient(circle, rgba(191,36,109,0.8) 0%, transparent 70%)`,
}
```

### 10.5 `ProjectCard.tsx`

**Estrutura:**
```
┌────────────────────────────────┐
│  [IMAGEM DE CAPA com zoom]     │  ← transform: scale(1.05) no hover
│                                │
├────────────────────────────────┤
│  Título do Projeto             │  ← Space Grotesk 600
│  Descrição curta...            │  ← Inter 400, 14px, 2 linhas max
│                                │
│  [Next.js] [Tailwind] [IA]     │  ← Tags coloridas com #A6122D
│                                │
│  [GitHub ↗]    [Live Demo ↗]  │  ← Botões fantasma com glow
└────────────────────────────────┘
```

**Efeito Tilt:**
```tsx
import Tilt from 'react-parallax-tilt';

<Tilt
  tiltMaxAngleX={8}
  tiltMaxAngleY={8}
  glareEnable={true}
  glareMaxOpacity={0.1}
  glareColor="#BF246D"
  glareBorderRadius="16px"
  scale={1.02}
>
  <GlassCard>...</GlassCard>
</Tilt>
```

### 10.6 `SkillIcon.tsx`

**Categorias e Skills:**

```
FRONT-END:  React, Next.js, TypeScript, Tailwind CSS, Framer Motion
BACK-END:   Node.js, Python, FastAPI, PostgreSQL, Supabase
IA & TOOLS: OpenAI API, LangChain, Prompt Engineering, Git, Figma
```

**Animação de levitação:**
```tsx
// Framer Motion — cada ícone com delay diferente
animate={{ y: [0, -8, 0] }}
transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
```

---

## 11. ANIMAÇÕES & MICROINTERAÇÕES

### 11.1 Catálogo de Animações

| Animação | Biblioteca | Trigger | Duração |
|---|---|---|---|
| Splash Screen slide-up | Framer Motion | Mount inicial | 1s |
| Fade-in de seções | Framer Motion + Intersection Observer | Scroll into view | 0.6s |
| Tilt 3D dos cards | react-parallax-tilt | Mouse move | Contínuo |
| Glow de borda dinâmico | CSS custom + JS | Mouse move | Contínuo |
| Levitação de ícones | Framer Motion | Auto | 3s loop |
| Filtro de projetos | Framer Motion AnimatePresence | Click na tag | 0.4s |
| Cursor customizado | requestAnimationFrame | Mouse move | Contínuo |
| Botões (hover glow) | Tailwind transition | Mouse hover | 0.3s |
| Navbar blur (scroll) | Framer Motion useScroll | Scroll | 0.2s |
| Typing effect (splash) | setInterval custom | Mount | 1.5s |

### 11.2 Scroll Animations — Padrão de Entrada

```tsx
// Hook useScrollAnimation.ts
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

// Uso em cada seção
<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
>
```

### 11.3 Filtro de Projetos com AnimatePresence

```tsx
<AnimatePresence mode="popLayout">
  {filteredProjects.map(project => (
    <motion.div
      key={project.id}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <ProjectCard {...project} />
    </motion.div>
  ))}
</AnimatePresence>
```

### 11.4 Glow Dinâmico nas Bordas dos Cards

```tsx
// useMousePosition.ts — captura posição relativa ao card
const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  
  e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
  e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
};
```

---

## 12. INTEGRAÇÃO DE IA — WESLEY.IA

### 12.1 Arquitetura do Bot

```
[Usuário digita no terminal]
         ↓
[Next.js Route Handler /api/chat]
  - Valida input (rate limiting básico)
  - Monta mensagem com system prompt
         ↓
[API OpenAI gpt-3.5-turbo]
  - System prompt com currículo completo
  - Temperatura: 0.7
  - Max tokens: 300
         ↓
[Streaming da resposta para o frontend]
[Exibe caractere por caractere no terminal]
```

### 12.2 System Prompt Completo (Engenharia de Prompt)

```
Você é Wesley.IA, o assistente virtual do portfólio de Wesley Stocco.
Sua função é ajudar recrutadores, tech leads e clientes a entender
o perfil profissional de Wesley.

PERFIL:
- Nome: Wesley Stocco
- Cargo: Desenvolvedor Full-stack | Especialista em IA & UI/UX
- Formação: Análise e Desenvolvimento de Sistemas (4º semestre)
- Localização: Brasil

EXPERIÊNCIAS:
- Educador de Robótica — Amadotec
  Ensino de programação e robótica educacional
- Endomarketing — HSVP (Hospital São Vicente de Paulo)
  Comunicação interna e criação de conteúdo

PROJETOS PRINCIPAIS:
- FluencyOS: Plataforma SaaS com IA para aprendizado de idiomas
  Stack: Next.js, OpenAI API, Supabase
- SekkoLab IA: Ferramentas de SEO com Inteligência Artificial
  Stack: Python, Next.js, OpenAI API

SKILLS TÉCNICAS:
Front-end: React, Next.js, TypeScript, Tailwind CSS
Back-end: Node.js, Python, FastAPI
Banco de dados: PostgreSQL, Supabase
IA: Engenharia de Prompt, OpenAI API, automação de fluxos
Design: Figma, UI/UX, Glassmorphism

CONTATO:
Email: [EMAIL_AQUI]
GitHub: [GITHUB_AQUI]
LinkedIn: [LINKEDIN_AQUI]

INSTRUÇÕES DE COMPORTAMENTO:
- Responda SEMPRE em português
- Seja profissional mas acessível
- Valorize os projetos e habilidades de Wesley
- Seja direto — respostas máx. 3 parágrafos curtos
- Se perguntarem algo que você não sabe, redirecione para o contato
- Nunca invente informações que não estão no seu contexto
```

### 12.3 Implementação do Route Handler

```typescript
// src/app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { message } = await req.json();
  
  if (!message || message.length > 500) {
    return NextResponse.json({ error: 'Mensagem inválida' }, { status: 400 });
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: message }
      ],
      max_tokens: 300,
      temperature: 0.7,
    }),
  });

  const data = await response.json();
  return NextResponse.json({ reply: data.choices[0].message.content });
}
```

### 12.4 Terminal Secreto — Easter Egg

**Trigger:** `Ctrl+K` (detectado globalmente via `useEffect` + `keydown`)

**Visual:**
```
┌─────────────────────────────────────────┐
│  ◉ Wesley.IA Terminal           [ESC×]  │  ← Glassmorphism modal
├─────────────────────────────────────────┤
│  > Olá! Sou o assistente do Wesley.     │
│    Pergunte qualquer coisa sobre        │
│    meu perfil, projetos ou skills.      │
│                                         │
│  user: Qual sua experiência com IA?     │
│  > Wesley tem experiência em...         │
│                                         │
│  ██ _                                   │  ← Cursor piscando
└─────────────────────────────────────────┘
```

---

## 13. SEO & PERFORMANCE

### 13.1 Metadata — `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Wesley Stocco | Desenvolvedor Full-stack & UI/UX',
  description: 'Portfólio de Wesley Stocco — Desenvolvedor Full-stack especializado em IA, UI/UX e arquiteturas modernas com Next.js e React.',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'UI/UX', 'Inteligência Artificial', 'Full-stack', 'Wesley Stocco'],
  authors: [{ name: 'Wesley Stocco' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://wesleystocco.dev',
    title: 'Wesley Stocco | Full-stack Dev & IA',
    description: 'Portfólio imersivo com Glassmorphism, animações premium e bot de IA.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wesley Stocco | Full-stack Dev',
    images: ['/images/og-image.png'],
  },
};
```

### 13.2 Otimizações de Performance

```typescript
// next.config.ts
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ hostname: '*.supabase.co' }],
  },
  experimental: {
    optimizeCss: true,
  },
};
```

**Checklist de Performance:**
- [ ] Vídeo em `.webm` (60-70% menor que `.mp4`)
- [ ] Imagens em `.avif`/`.webp` via `next/image`
- [ ] `loading="lazy"` nas imagens abaixo do fold
- [ ] Fontes com `display: swap` e `preload`
- [ ] ISR para lista de projetos (revalidate: 3600)
- [ ] `preload="none"` no vídeo (não bloqueia o LCP)
- [ ] `will-change: transform` somente nos elementos animados
- [ ] Suspense boundaries em componentes que buscam dados

---

## 14. AMBIENTE DE DESENVOLVIMENTO

### 14.1 Extensões VS Code Recomendadas

```json
// .vscode/extensions.json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",        // Tailwind IntelliSense
    "esbenp.prettier-vscode",            // Formatação automática
    "dbaeumer.vscode-eslint",            // Linting
    "formulahendry.auto-rename-tag",     // Renomear tags JSX
    "christian-kohler.path-intellisense",// Autocomplete de caminhos
    "pkief.material-icon-theme",         // Ícones de arquivo
    "eamodio.gitlens",                   // Git avançado
    "supabase.supabase-vscode"           // Supabase no editor
  ]
}
```

### 14.2 Configuração do VS Code

```json
// .vscode/settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

### 14.3 Prettier + ESLint

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "printWidth": 100
}
```

---

## 15. ETAPAS DE PRODUÇÃO (SPRINTS)

### SPRINT 0 — Setup & Configuração (1–2 dias)

**Objetivo:** Ambiente pronto e rodando localmente

```bash
# Checklist Sprint 0
[ ] Criar projeto Next.js com TypeScript e Tailwind
[ ] Instalar todas as dependências (seção 4)
[ ] Configurar tailwind.config.ts com as cores do projeto
[ ] Criar conta no Supabase e criar projeto "wesley-portfolio"
[ ] Criar tabelas `projects` e `contact_messages` (SQL da seção 9)
[ ] Configurar .env.local com as chaves do Supabase
[ ] Criar repositório no GitHub e fazer primeiro commit
[ ] Configurar deploy na Vercel apontando para o GitHub
[ ] Testar: site básico rodando em localhost:3000 e na Vercel
```

### SPRINT 1 — Estrutura Visual Base (3–4 dias)

**Objetivo:** A "casca" do site com todo o visual funcionando

```bash
[ ] Implementar VideoBackground.tsx (vídeo em loop + overlay)
[ ] Implementar SplashScreen.tsx (animação de entrada)
[ ] Criar Navbar glassmorphism com smooth scroll
[ ] Implementar Hero Section completo
[ ] Configurar fontes (Inter, Space Grotesk, Fira Code via next/font)
[ ] Criar GlassCard.tsx como componente base
[ ] Criar GlowButton.tsx
[ ] Implementar CustomCursor.tsx
[ ] Seção About com cards de experiência e timeline
[ ] Responsividade mobile da Navbar e Hero
```

### SPRINT 2 — Projetos & Supabase (3–4 dias)

**Objetivo:** Projetos dinâmicos integrados ao banco

```bash
[ ] Configurar Supabase client (browser + server)
[ ] Criar função fetchProjects() em /lib/supabase/
[ ] Implementar Projects Section com busca ao Supabase
[ ] Criar ProjectCard.tsx com Tilt 3D
[ ] Implementar TagFilter.tsx com AnimatePresence
[ ] Criar página dinâmica /projetos/[slug]
[ ] Inserir projetos de exemplo no Supabase (FluencyOS, SekkoLab IA)
[ ] Upload de imagens de capa no Supabase Storage
[ ] Testar filtro dinâmico de tecnologias
```

### SPRINT 3 — Skills, Contato & IA (3–4 dias)

**Objetivo:** Todas as seções funcionando + bot de IA

```bash
[ ] Seção Skills com ícones levitando por categoria
[ ] Seção Contato com formulário (salva no Supabase)
[ ] Implementar Route Handler /api/chat
[ ] Criar AITerminal.tsx (modal do terminal secreto)
[ ] Implementar Easter Egg Ctrl+K
[ ] Testar Wesley.IA com perguntas sobre o currículo
[ ] Scroll animations em todas as seções (fadeInUp)
[ ] Glow dinâmico de borda nos cards
```

### SPRINT 4 — SEO, Performance & Launch (2–3 dias)

**Objetivo:** Site pronto para produção

```bash
[ ] Configurar metadata completo (SEO + Open Graph)
[ ] Criar og-image.png (1200x630px)
[ ] Gerar sitemap.xml automático (next-sitemap)
[ ] Rodar Lighthouse — target ≥ 90 em tudo
[ ] Testar em mobile (320px, 375px, 768px)
[ ] Testar em Safari (atenção ao backdrop-filter)
[ ] Verificar console sem erros
[ ] Configurar Vercel Analytics
[ ] Deploy final + custom domain (se disponível)
[ ] Compartilhar no LinkedIn 🚀
```

---

## 16. OTIMIZAÇÕES & BOAS PRÁTICAS

### 16.1 Performance do Glassmorphism em Mobile

```tsx
// Evitar lag em dispositivos mais fracos
// Tailwind Media Query: blur leve no mobile, pesado no desktop
className="backdrop-blur-sm md:backdrop-blur-xl"

// Ou via CSS
@media (max-width: 768px) {
  .glass-card {
    backdrop-filter: blur(4px); /* Leve no mobile */
  }
}
```

### 16.2 Supabase — Boas Práticas

```typescript
// Sempre usar tipagem com generics do Supabase
import { Database } from '@/types/supabase';

const supabase = createClient<Database>(url, key);

// Paginação para não sobrecarregar a API
const { data } = await supabase
  .from('projects')
  .select('*')
  .order('order_index', { ascending: true })
  .range(0, 11); // Máx 12 projetos por vez
```

### 16.3 Framer Motion — Desempenho

```tsx
// Usar transform ao invés de left/top — GPU accelerated
// ✅ Bom:
animate={{ x: 0, opacity: 1 }}

// ❌ Evitar:
animate={{ left: '0px', opacity: 1 }}

// Reduzir animações para quem prefere
const shouldReduceMotion = useReducedMotion();
const animProps = shouldReduceMotion ? {} : { variants, initial, animate };
```

### 16.4 TypeScript — Interfaces Principais

```typescript
// src/types/index.ts

export interface Project {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  full_description: string | null;
  cover_image_url: string | null;
  gallery_images: string[] | null;
  technologies: string[];
  github_url: string | null;
  live_url: string | null;
  featured: boolean;
  order_index: number;
  created_at: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export interface MousePosition {
  x: number;
  y: number;
}
```

---

## 17. VARIÁVEIS DE AMBIENTE

### `.env.local` (nunca commitar no Git)

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...

# OpenAI — Futuro (Wesley.IA)
OPENAI_API_KEY=sk-proj-...

# Site URL (para Open Graph)
NEXT_PUBLIC_SITE_URL=https://wesleystocco.dev
```

### `.env.example` (commitar no Git)

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
OPENAI_API_KEY=
NEXT_PUBLIC_SITE_URL=
```

### Configurar na Vercel

```
Dashboard Vercel → Projeto → Settings → Environment Variables
Adicionar cada variável manualmente (nunca compartilhar as chaves)
```

---

## 18. GESTÃO DE RISCOS & FALLBACKS

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| Vídeo pesado travando carregamento | Alta | Alto | `.webm` < 5MB + `preload="none"` + fallback `#0D0809` |
| Glassmorphism lento em mobile | Média | Médio | `backdrop-blur-sm` no mobile via media query |
| Exceder free tier Supabase | Baixa | Médio | Paginação + cache ISR 1h |
| API Key OpenAI exposta | Baixa | Crítico | SEMPRE via Route Handler server-side |
| Safari não suportar backdrop-filter | Baixa | Médio | `-webkit-backdrop-filter` como prefixo |
| Vercel cold start lento | Baixa | Baixo | SSG para páginas estáticas + ISR para projetos |
| Animações causando janks | Média | Médio | `will-change: transform` + `useReducedMotion` |

---

## 19. CRITÉRIOS DE ENTREGA (DEFINITION OF DONE)

Para cada feature ser considerada **entregue**, ela deve:

- [ ] Renderizar sem erros no console (JS/HTTP)
- [ ] Funcionar em Chrome, Firefox e Safari (últimas 2 versões)
- [ ] Funcionar em mobile 375px e desktop 1440px
- [ ] Animações rodando a 60fps (verificar via DevTools → Performance)
- [ ] Dados do Supabase carregando corretamente em produção (Vercel)
- [ ] Não expor nenhuma chave privada no cliente
- [ ] Código com TypeScript sem erros (`npm run build` sem warnings)
- [ ] Componente responsivo (sem overflow horizontal)

---

## 20. INFORMAÇÕES PESSOAIS & CONTEÚDO

### Hero Section — Texto

```
Título principal:  Wesley Stocco
Subtítulo:         Desenvolvedor Full-stack | IA & UI/UX
Tagline:           Construindo interfaces que parecem do futuro.
                   Hoje.
CTAs:              [Ver Projetos]   [Baixar CV]
```

### About Section — Cards

**Card 1 — Formação**
```
🎓 Análise e Desenvolvimento de Sistemas
   4º Semestre em andamento
```

**Card 2 — Experiência**
```
🤖 Educador de Robótica
   Amadotec — Ensino de programação e robótica educacional
```

**Card 3 — Experiência**
```
📢 Endomarketing
   HSVP — Hospital São Vicente de Paulo
   Comunicação interna e criação de conteúdo digital
```

### Projetos para cadastrar no Supabase

**Projeto 1: FluencyOS**
```
title:             FluencyOS
slug:              fluencyos
short_description: Plataforma SaaS com IA para aprendizado de idiomas
technologies:      ['Next.js', 'TypeScript', 'OpenAI API', 'Supabase', 'Tailwind CSS']
featured:          true
order_index:       1
```

**Projeto 2: SekkoLab IA**
```
title:             SekkoLab IA
slug:              sekkolab-ia
short_description: Ferramentas de SEO potencializadas por Inteligência Artificial
technologies:      ['Python', 'Next.js', 'OpenAI API', 'FastAPI']
featured:          true
order_index:       2
```

### Links para preencher

```
Email:    [SEU_EMAIL@gmail.com]
GitHub:   https://github.com/[SEU_USUARIO]
LinkedIn: https://linkedin.com/in/[SEU_USUARIO]
CV PDF:   Colocar em /public/cv-wesley-stocco.pdf
```

---

## 🎯 RESUMO RÁPIDO — O QUE FAZER PRIMEIRO

```
1. Criar projeto Next.js               → npx create-next-app@latest
2. Instalar dependências               → npm install framer-motion ...
3. Criar projeto no Supabase           → app.supabase.com
4. Criar tabelas (SQL da seção 9)      → Supabase SQL Editor
5. Configurar .env.local               → Seção 17
6. Configurar tailwind.config.ts       → Cores da seção 2
7. Criar VideoBackground.tsx           → Sprint 1
8. Criar SplashScreen.tsx              → Sprint 1
9. Conectar Supabase → Projects        → Sprint 2
10. Deploy na Vercel                   → Conectar ao GitHub
```

---

*Documentação gerada para o projeto Portfólio Wesley.IA — 2026*
*Stack: Next.js 14 + TypeScript + Tailwind CSS + Framer Motion + Supabase + Vercel*
## STATUS DE EXECUCAO - FASE 0 (2026-04-08)

### O que ja foi feito nesta sessao

- [x] Base do projeto criada com Next.js App Router, TypeScript, Tailwind CSS, ESLint e pasta `src/`
- [x] Projeto movido para a raiz desta pasta para manter a documentacao e o codigo juntos
- [x] Dependencias iniciais instaladas: `framer-motion`, `@supabase/ssr`, `@supabase/supabase-js`, `react-parallax-tilt`, `lucide-react`, `clsx`, `tailwind-merge`, `react-intersection-observer`, `sonner`
- [x] Arquivos de ambiente preparados: `.env.example` e `.env.local`
- [x] Utilitarios iniciais do Supabase preparados em `src/lib/supabase/`
- [x] Script SQL extraido para `supabase/schema.sql`
- [x] Repositorio Git local inicializado

### Pendencias para fechar a Fase 0

- [ ] Criar o projeto `wesley-portfolio` no Supabase
- [ ] Copiar a `NEXT_PUBLIC_SUPABASE_URL` e a `NEXT_PUBLIC_SUPABASE_ANON_KEY` para `.env.local`
- [ ] Executar o SQL de `supabase/schema.sql` no SQL Editor do Supabase
- [ ] Criar o repositorio remoto no GitHub e enviar o primeiro push
- [ ] Importar o repositorio na Vercel e cadastrar as mesmas variaveis de ambiente
- [ ] Confirmar a URL publica funcionando

### Observacoes praticas

- No PowerShell deste ambiente, use `npm.cmd` em vez de `npm` por causa da policy de execucao de scripts.
- O `vercel` CLI ainda nao esta instalado localmente, mas a conta Vercel ja esta acessivel pelo plugin.
- A pagina inicial ainda esta no template padrao do Next.js de proposito. O objetivo desta fase e validar estrutura, dependencias, ambiente e deploy antes da interface customizada.

### Ponto de parada atual

Se pararmos aqui, o proximo passo recomendado e:

1. criar o projeto no Supabase;
2. preencher `.env.local`;
3. rodar o SQL de `supabase/schema.sql`;
4. validar localmente com `npm.cmd run dev`.
