import { Layers3 } from "lucide-react";

import { fetchProjects } from "@/lib/supabase/projects";
import { TagFilter } from "@/components/ui/TagFilter";

export async function Projects() {
  const projects = await fetchProjects();

  return (
    <section id="projetos" className="pb-10">
      <div className="mb-8 max-w-3xl">
        <p className="section-kicker">Projetos selecionados</p>
        <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Trabalhos que mostram direcao tecnica e criterio de produto.
        </h2>
        <p className="mt-4 text-base leading-8 text-white/68 sm:text-lg">
          Esta secao passa a ser alimentada pelo Supabase. O objetivo e deixar o
          portfolio vivo, facil de atualizar e pronto para crescer sem editar a
          home a cada novo projeto.
        </p>
      </div>

      <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/66">
        <Layers3 className="h-4 w-4 text-[#f0c4d4]" />
        <span>Filtro dinamico por tecnologia e cards com tilt 3D</span>
      </div>

      {projects.length > 0 ? (
        <TagFilter projects={projects} />
      ) : (
        <div className="rounded-[30px] border border-dashed border-white/12 bg-black/18 px-6 py-10 text-white/60">
          A tabela de projetos esta pronta, mas ainda sem itens visiveis. Depois
          de inserir dados no Supabase, esta secao passa a renderizar automaticamente.
        </div>
      )}
    </section>
  );
}
