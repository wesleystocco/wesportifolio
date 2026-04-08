import { ArrowUpRight, FolderGit2, Sparkles } from "lucide-react";

import { GlassCard } from "@/components/ui/GlassCard";

const links = [
  { href: "#home", label: "Inicio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#fase-1", label: "Fase 1" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 px-4 pt-4 sm:px-6 lg:px-8">
      <GlassCard className="mx-auto max-w-7xl rounded-full px-4 py-3 sm:px-5">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="min-w-0">
            <div className="text-[11px] font-medium uppercase tracking-[0.32em] text-white/45">
              Wesley.IA
            </div>
            <div className="truncate font-display text-sm font-semibold text-white sm:text-base">
              Wesley Stocco
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/72 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="https://github.com/wesleystocco/wesportifolio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-4 py-2 text-sm font-medium text-white transition hover:border-[#bf246d]/40 hover:bg-[#bf246d]/14"
          >
            <Sparkles className="h-4 w-4 text-[#f76ea7]" />
            <span className="hidden sm:inline">Acompanhar build</span>
            <span className="sm:hidden">GitHub</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-3 flex items-center gap-2 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/72 transition hover:border-white/25 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/wesleystocco/wesportifolio"
            target="_blank"
            rel="noreferrer"
            className="ml-auto rounded-full border border-white/10 p-2 text-white/72 transition hover:border-white/25 hover:text-white"
            aria-label="Abrir repositorio no GitHub"
          >
            <FolderGit2 className="h-4 w-4" />
          </a>
        </div>
      </GlassCard>
    </header>
  );
}
