import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, FolderGit2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { GlassCard } from "@/components/ui/GlassCard";
import { fetchProjectBySlug, fetchProjects } from "@/lib/supabase/projects";

export const revalidate = 3600;

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await fetchProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await fetchProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projeto nao encontrado | Wesley Stocco",
    };
  }

  return {
    title: `${project.title} | Wesley Stocco`,
    description: project.short_description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await fetchProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const paragraphs =
    project.full_description?.split(/\n\s*\n/).filter(Boolean) ?? [project.short_description];

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-8 px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-white/62 transition hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para a home
      </Link>

      <GlassCard className="overflow-hidden rounded-[32px]">
        <div className="border-b border-white/8 bg-[linear-gradient(135deg,rgba(208,91,132,0.16),rgba(13,8,9,0.18))] px-6 py-10 sm:px-8">
          <p className="section-kicker">Projeto</p>
          <h1 className="font-display mt-4 text-4xl font-semibold text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
            {project.short_description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[#d05b84]/16 bg-[#d05b84]/8 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#f0c4d4]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="space-y-5 text-white/72">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-4">
            <GlassCard className="rounded-[24px] p-5">
              <p className="section-kicker">Links</p>
              <div className="mt-5 flex flex-col gap-3">
                {project.github_url ? (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition hover:border-white/16 hover:text-white"
                  >
                    <span>Repositorio</span>
                    <FolderGit2 className="h-4 w-4" />
                  </a>
                ) : null}

                {project.live_url ? (
                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition hover:border-white/16 hover:text-white"
                  >
                    <span>Versao publicada</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}

                {!project.github_url && !project.live_url ? (
                  <div className="rounded-[20px] border border-dashed border-white/10 bg-black/16 px-4 py-4 text-sm text-white/52">
                    Links externos ainda nao publicados para este projeto.
                  </div>
                ) : null}
              </div>
            </GlassCard>

            <GlassCard className="rounded-[24px] p-5">
              <p className="section-kicker">Status</p>
              <div className="mt-5 space-y-3 text-sm text-white/68">
                <div className="flex items-center justify-between">
                  <span>Destaque no portfolio</span>
                  <span>{project.featured ? "Sim" : "Nao"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Ordem</span>
                  <span>{project.order_index}</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </GlassCard>
    </main>
  );
}
