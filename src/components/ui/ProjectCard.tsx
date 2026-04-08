"use client";

import Tilt from "react-parallax-tilt";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const accentBySlug: Record<string, string> = {
  fluencyos: "from-[#7b2140]/90 via-[#b44d73]/45 to-[#1a1013]/90",
  "sekkolab-ia": "from-[#472341]/90 via-[#8761a8]/35 to-[#120d14]/90",
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const coverClassName =
    accentBySlug[project.slug] ?? "from-[#4f1d2f]/90 via-[#8f425f]/35 to-[#110d0f]/90";

  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      glareEnable
      glareMaxOpacity={0.08}
      glareColor="#dca0b6"
      glareBorderRadius="28px"
      scale={1.01}
      className="h-full"
    >
      <GlassCard className="h-full rounded-[28px] border-white/10">
        <div className="flex h-full flex-col">
          <div
            className={cn(
              "relative overflow-hidden rounded-t-[28px] border-b border-white/8 bg-gradient-to-br p-6",
              coverClassName,
            )}
          >
            {project.cover_image_url ? (
              <Image
                src={project.cover_image_url}
                alt={`Capa do projeto ${project.title}`}
                fill
                sizes="(min-width: 1024px) 32rem, 100vw"
                className="object-cover opacity-72"
              />
            ) : null}

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,4,5,0.14),rgba(8,4,5,0.72))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%)]" />
            <div className="relative flex min-h-44 flex-col justify-between">
              <div className="section-kicker">Projeto em destaque</div>
              <div>
                <div className="font-display text-3xl font-semibold text-white">
                  {project.title}
                </div>
                <div className="mt-2 max-w-xs text-sm leading-7 text-white/72">
                  {project.short_description}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-5">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-[#d05b84]/16 bg-[#d05b84]/8 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#f0c4d4]"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/projetos/${project.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#c7527d] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#d05b84]"
              >
                Ver projeto
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              {project.github_url ? (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/78 transition hover:border-white/18 hover:text-white"
                >
                  GitHub
                  <FolderGit2 className="h-4 w-4" />
                </a>
              ) : null}

              {project.live_url ? (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/78 transition hover:border-white/18 hover:text-white"
                >
                  Live demo
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </GlassCard>
    </Tilt>
  );
}
