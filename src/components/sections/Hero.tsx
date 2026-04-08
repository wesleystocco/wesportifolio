import { ArrowDownRight, FolderGit2, Layers3, RadioTower, Sparkles } from "lucide-react";

import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";

const highlightItems = [
  { label: "Frontend", value: "React, Next.js e Tailwind" },
  { label: "Backend", value: "Node, Python e Supabase" },
  { label: "Foco", value: "UI/UX, IA aplicada e produto" },
];

const profileHighlights = [
  "Desenvolvimento full-stack com interesse especial por interfaces claras e produtos digitais modernos.",
  "Repertorio que mistura tecnologia, comunicacao e didatica, o que ajuda a transformar ideia complexa em experiencia usavel.",
  "Portfolio em evolucao com projetos como FluencyOS e SekkoLab IA, alem desta camada visual autoral.",
];

const stackPreview = ["Next.js", "TypeScript", "Supabase", "Framer Motion", "Python", "UI/UX"];

export function Hero() {
  return (
    <section
      id="home"
      className="grid min-h-[calc(100vh-9rem)] items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-12"
    >
      <div className="max-w-3xl">
        <p className="section-kicker">Portfolio / Wesley Stocco</p>
        <h1 className="font-display mt-5 max-w-4xl text-5xl font-bold leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-8xl">
          Wesley Stocco
          <span className="mt-2 block text-gradient">Full-stack com foco em produto, IA e experiencia digital.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
          Desenvolvedor em formacao, construindo interfaces com mais atmosfera, clareza
          e intencao. Este portfolio reune projetos, repertorio tecnico e uma base visual
          pensada para apresentar trabalho de forma mais memoravel.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <GlowButton
            href="#sobre"
            icon={ArrowDownRight}
          >
            Ver perfil
          </GlowButton>
          <GlowButton
            href="https://github.com/wesleystocco/wesportifolio"
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            icon={FolderGit2}
          >
            Ver no GitHub
          </GlowButton>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {stackPreview.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white/62"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {highlightItems.map((item) => (
            <GlassCard key={item.label} className="rounded-[24px] px-4 py-4">
              <div className="text-xs uppercase tracking-[0.22em] text-white/40">
                {item.label}
              </div>
              <div className="mt-2 font-display text-lg font-semibold text-white sm:text-xl">
                {item.value}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <GlassCard
        id="trajetoria"
        className="rounded-[32px] p-5 sm:p-7 lg:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="section-kicker">Resumo profissional</p>
            <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Um perfil que cruza tecnologia, narrativa e experiencia
            </h2>
          </div>
          <div className="rounded-full border border-[#e3adc1]/25 bg-[#d05b84]/10 p-3 text-[#f0c4d4]">
            <Sparkles className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {profileHighlights.map((item, index) => (
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
              <Layers3 className="h-4 w-4 text-[#e3adc1]" />
              <span className="text-sm font-medium">Projetos em destaque</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-white/58">
              FluencyOS e SekkoLab IA apontam a direcao do portfolio: software com
              interface forte, integracao moderna e espaco para IA aplicada.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/8 bg-black/20 p-4">
            <div className="flex items-center gap-3 text-white">
              <RadioTower className="h-4 w-4 text-[#e3adc1]" />
              <span className="text-sm font-medium">Direcao de trabalho</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-white/58">
              O objetivo aqui nao e so mostrar codigo, mas apresentar criterio visual,
              clareza de produto e capacidade de evolucao tecnica.
            </p>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
