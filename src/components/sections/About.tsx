import { Bot, GraduationCap, Megaphone, MoveRight } from "lucide-react";

import { GlassCard } from "@/components/ui/GlassCard";

const cards = [
  {
    title: "Formacao",
    icon: GraduationCap,
    eyebrow: "Academico",
    description:
      "Analise e Desenvolvimento de Sistemas em andamento, com foco em base solida para produto, interface e backend moderno.",
  },
  {
    title: "Educador de Robotica",
    icon: Bot,
    eyebrow: "Experiencia",
    description:
      "Ensino de programacao e robotica educacional com traducao de conceitos complexos em experiencias claras e envolventes.",
  },
  {
    title: "Endomarketing",
    icon: Megaphone,
    eyebrow: "Comunicacao",
    description:
      "Criacao de conteudo, alinhamento de mensagem e sensibilidade visual para comunicar valor com clareza.",
  },
];

const journey = [
  "Hoje / Portfolio, produtos com IA e aprofundamento em frontend, backend e experiencia digital.",
  "Amadotec / Ensino de programacao e robotica educacional com foco em clareza e construcao de repertorio.",
  "HSVP / Endomarketing, comunicacao interna e conteudo com sensibilidade visual.",
  "ADS / Formacao em Analise e Desenvolvimento de Sistemas em andamento.",
];

export function About() {
  return (
    <section id="sobre" className="pb-10">
      <div className="mb-8 max-w-3xl">
        <p className="section-kicker">Perfil e repertorio</p>
        <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Um portfolio melhor quando a narrativa combina com o trabalho.
        </h2>
        <p className="mt-4 text-base leading-8 text-white/68 sm:text-lg">
          A proposta aqui e apresentar Wesley com mais contexto: base tecnica,
          experiencia em comunicacao, vivencia com ensino e interesse real em
          produtos digitais com interface e identidade.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <GlassCard key={card.title} className="rounded-[28px] p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d05b84]/12 text-[#f0c4d4]">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.22em] text-white/40">
                  {card.eyebrow}
                </p>
                <h3 className="font-display mt-3 text-2xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/62">
                  {card.description}
                </p>
              </GlassCard>
            );
          })}
        </div>

        <GlassCard className="rounded-[32px] p-6 sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="section-kicker">Trajetoria</p>
              <h3 className="font-display mt-4 text-3xl font-semibold text-white">
                Caminho profissional
              </h3>
            </div>
            <div className="rounded-full border border-white/10 bg-white/7 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/56">
              Em andamento
            </div>
          </div>

          <div className="mt-8 space-y-5">
            {journey.map((item, index) => (
              <div key={item} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/20 font-mono text-xs text-white/75">
                    0{index + 1}
                  </div>
                  {index < journey.length - 1 ? (
                    <div className="mt-2 h-full w-px bg-white/12" />
                  ) : null}
                </div>
                <div className="pb-4">
                  <p className="text-sm leading-7 text-white/68 sm:text-base">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wesportifolio.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#f0c4d4] transition hover:text-white"
          >
            Abrir versao publicada
            <MoveRight className="h-4 w-4" />
          </a>
        </GlassCard>
      </div>
    </section>
  );
}
