import type { Project } from "@/types";

import { createPublicClient } from "./public";

function getProjectsClient() {
  try {
    return createPublicClient();
  } catch (error) {
    console.error("Supabase client is unavailable for project queries.", error);
    return null;
  }
}

function sortProjects(projects: Project[]) {
  return [...projects].sort((left, right) => {
    if (left.featured !== right.featured) {
      return Number(right.featured) - Number(left.featured);
    }

    return left.order_index - right.order_index;
  });
}

export async function fetchProjects(): Promise<Project[]> {
  const supabase = getProjectsClient();

  if (!supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("featured", { ascending: false })
    .order("order_index", { ascending: true });

  if (error) {
    console.error("Failed to fetch projects", error);
    return [];
  }

  return sortProjects((data ?? []) as Project[]);
}

export async function fetchProjectBySlug(slug: string): Promise<Project | null> {
  const supabase = getProjectsClient();

  if (!supabase) {
    return null;
  }

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error(`Failed to fetch project by slug: ${slug}`, error);
    return null;
  }

  return (data as Project | null) ?? null;
}
