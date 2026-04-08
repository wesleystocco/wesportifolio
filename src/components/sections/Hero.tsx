import { ArrowDownRight, FolderGit2, Layers3, RadioTower, Sparkles } from "lucide-react";

import { GlassCard } from "@/components/ui/GlassCard";

const statusItems = [
  { label: "Local", value: "Online" },
  { label: "Vercel", value: "Publico" },
  { label: "Supabase", value: "Conectado" },
];

const phaseItems = [
  "Fase 0 concluida com GitHub, Vercel e Supabase ativos",
  "Fase 1 iniciada pela estrutura visual base",
  "Proximo foco: navbar, hero, cards e motion refinado",
];

export function Hero() {
  return (
    <section
      id="home"
      className="grid min-h-[calc(100vh-9rem)] items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-12"
    >
      <div className="max-w-3xl">
        <p className="section-kicker">Sprint 1 / Estrutura visual base</p>
        <h1 className="font-display mt-5 max-w-4xl text-5xl font-bold leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-8xl">
          Wesley Stocco
          <span className="mt-2 block text-gradient">Full-stack, IA e UI/UX.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
          Construindo uma landing imersiva com video organico, glassmorphism e
          uma estrutura pronta para crescer com projetos, skills e Wesley.IA.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#sobre"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#bf246d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d6367f] hover:shadow-[0_0_28px_rgba(191,36,109,0.38)]"
          >
            Explorar estrutura
            <ArrowDownRight className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/wesleystocco/wesportifolio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
          >
            Ver no GitHub
            <FolderGit2 className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {statusItems.map((item) => (
            <GlassCard key={item.label} className="rounded-[24px] px-4 py-4">
              <div className="text-xs uppercase tracking-[0.22em] text-white/40">
                {item.label}
              </div>
              <div className="mt-2 font-display text-xl font-semibold text-white">
                {item.value}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <GlassCard
        id="fase-1"
        className="rounded-[32px] p-5 sm:p-7 lg:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="section-kicker">Base de lancamento</p>
            <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Casca visual no ar
            </h2>
          </div>
          <div className="rounded-full border border-[#f76ea7]/30 bg-[#bf246d]/14 p-3 text-[#ff9dc4]">
            <Sparkles className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {phaseItems.map((item, index) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-[24px] border border-white/8 bg-black/16 px-4 py-4"
            >
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/7 font-mono text-xs text-white/72">
                0{index + 1}
              </div>
              <p className="text-sm leading-7 text-white/72 sm:text-base">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="rounded-[24px] border border-white/8 bg-black/20 p-4">
            <div className="flex items-center gap-3 text-white">
              <Layers3 className="h-4 w-4 text-[#f76ea7]" />
              <span className="text-sm font-medium">Estrutura modular</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-white/58">
              Componentes separados para evoluir Splash, video, navbar e secoes
              sem baguncar a `page.tsx`.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/8 bg-black/20 p-4">
            <div className="flex items-center gap-3 text-white">
              <RadioTower className="h-4 w-4 text-[#f76ea7]" />
              <span className="text-sm font-medium">Status de projeto</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-white/58">
              A base esta pronta para ganhar animacoes extras, projetos dinamicos
              e a camada de IA nas proximas fases.
            </p>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
