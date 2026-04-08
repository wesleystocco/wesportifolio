"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/types";

type TagFilterProps = {
  projects: Project[];
};

export function TagFilter({ projects }: TagFilterProps) {
  const [activeTag, setActiveTag] = useState("Todos");

  const values = new Set<string>();

  projects.forEach((project) => {
    project.technologies.forEach((technology) => {
      values.add(technology);
    });
  });

  const tags = ["Todos", ...Array.from(values).sort()];

  const filteredProjects =
    activeTag === "Todos"
      ? projects
      : projects.filter((project) => project.technologies.includes(activeTag));

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          const isActive = tag === activeTag;

          return (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={
                isActive
                  ? "rounded-full border border-[#dca0b6]/28 bg-[#d05b84]/14 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white"
                  : "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/60 transition hover:border-white/18 hover:text-white"
              }
            >
              {tag}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div layout className="mt-8 grid gap-5 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProjects.length === 0 ? (
        <div className="mt-8 rounded-[28px] border border-dashed border-white/12 bg-black/18 px-6 py-8 text-sm text-white/60">
          Nenhum projeto encontrado para esta tecnologia ainda.
        </div>
      ) : null}
    </div>
  );
}
