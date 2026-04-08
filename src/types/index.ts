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
