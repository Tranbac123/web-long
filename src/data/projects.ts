import daisy1 from "../assets/placeholders/daisy-1.jpg";
import daisy2 from "../assets/placeholders/daisy-2.jpg";
import daisy3 from "../assets/placeholders/daisy-3.png";
import daisy4 from "../assets/placeholders/daisy-4.png";
import daisy5 from "../assets/placeholders/daisy-5.png";
import daisy6 from "../assets/placeholders/daisy-6.png";
import daisy7 from "../assets/placeholders/daisy-7.jpg";
import daisy8 from "../assets/placeholders/daisy-8.png";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface GalleryBlock {
  src: string;
  alt: string;
  /** "full" = full-width landscape, "half" = one of a two-column row. */
  span: "full" | "half";
}

export interface Project {
  slug: string;
  index: string;
  title: string;
  year: string;
  /** Short category/meta label, e.g. "Branding, Web Design, System". */
  category: string;
  /** One-line descriptor for cards. */
  summary: string;
  /** Detail-page meta. */
  role: string;
  description: string;
  /** Second detail paragraph — only defined for projects with a Figma detail page. */
  approach?: string;
  tools: string;
  /** Year shown on the project-detail intro — only Luminary has a Figma detail page. */
  detailYear?: string;
  cover: ProjectImage;
  gallery: GalleryBlock[];
  /** Optional explicit "next project" override (defaults to array order). */
  nextSlug?: string;
}

/**
 * Single source of truth for all project content.
 * Home, About, Work and Project Detail all read from this array —
 * no project data is duplicated inside pages.
 *
 * The detail gallery follows the reference pattern for every project:
 *   full landscape -> two-column -> full landscape -> two-column.
 */
const detailGallery: GalleryBlock[] = [
  { src: daisy8, alt: "Wide landscape gallery image", span: "full" },
  { src: daisy3, alt: "Gallery detail, left column", span: "half" },
  { src: daisy4, alt: "Gallery detail, right column", span: "half" },
  { src: daisy8, alt: "Wide landscape gallery image", span: "full" },
  { src: daisy3, alt: "Gallery detail, left column", span: "half" },
  { src: daisy4, alt: "Gallery detail, right column", span: "half" },
];

export const projects: Project[] = [
  {
    slug: "luminary-studio",
    index: "01",
    title: "Luminary Studio",
    year: "2026",
    category: "Branding · Web Design · Motion",
    summary: "A light-led visual identity and editorial web experience.",
    role: "Web Design, Motion, Branding",
    description:
      "The brief was simple: make it feel alive. Luminary Studio needed a digital presence that matched the energy of their work — bold, confident, and impossible to ignore.",
    approach:
      "We stripped everything back. No clutter, no noise — just type, motion, and white space doing the heavy lifting. Every scroll triggers something. Every hover has intent.",
    tools: "Figma · GSAP · Next.js · Three.js",
    detailYear: "2024",
    cover: { src: daisy2, alt: "Cover image for Luminary Studio" },
    gallery: detailGallery,
    nextSlug: "polaris-protocol",
  },
  {
    slug: "orbital-finance",
    index: "02",
    title: "Orbital Finance",
    year: "2026",
    category: "UI Design",
    summary: "A calm, data-dense interface for a modern finance platform.",
    role: "Product Design, UI Systems",
    description:
      "A clean, data-dense product interface that keeps complex finance tools calm and legible.",
    tools: "Figma · React · TypeScript",
    cover: { src: daisy3, alt: "Cover image for Orbital Finance" },
    gallery: detailGallery,
  },
  {
    slug: "plant-shop",
    index: "03",
    title: "Plant Shop",
    year: "2026",
    category: "UI Design",
    summary: "A quiet, image-led storefront for an independent plant shop.",
    role: "UI Design, Art Direction",
    description:
      "A quiet, image-led storefront that lets the product breathe and the typography lead.",
    tools: "Figma · Webflow",
    cover: { src: daisy4, alt: "Cover image for Plant Shop" },
    gallery: detailGallery,
  },
  {
    slug: "aether-ai-studio",
    index: "04",
    title: "Aether - AI Studio",
    year: "2026",
    category: "Art Direction · 3D · Creative Coding",
    summary: "An experimental AI studio site driven by 3D and creative code.",
    role: "Creative Direction, 3D, Creative Coding",
    description:
      "An experimental studio presence where generative 3D and creative coding set the tone.",
    tools: "Three.js · WebGL · GSAP · React",
    cover: { src: daisy5, alt: "Cover image for Aether - AI Studio" },
    gallery: detailGallery,
  },
  {
    slug: "polaris-protocol",
    index: "05",
    title: "Polaris Protocol",
    year: "2026",
    category: "UX Strategy",
    summary: "A 3D-led brand strategy for an emerging protocol.",
    role: "Brand Strategy, 3D Direction",
    description:
      "A 3D-led brand strategy that gives an emerging protocol a confident, spatial language.",
    tools: "Blender · Three.js · Figma",
    cover: { src: daisy6, alt: "Cover image for Polaris Protocol" },
    gallery: detailGallery,
  },
  {
    slug: "terra",
    index: "06",
    title: "Terra",
    year: "2026",
    category: "Sustainability",
    summary: "An editorial identity for a sustainability initiative.",
    role: "Identity, Editorial Design",
    description:
      "An editorial identity for a sustainability initiative — grounded, warm, and honest.",
    tools: "Figma · React",
    cover: { src: daisy7, alt: "Cover image for Terra" },
    gallery: detailGallery,
  },
];

/** Small image reused for the Home intro and service-row thumbnails. */
export { daisy1 as introThumb };

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);

export const getNextProject = (slug: string): Project => {
  const current = getProjectBySlug(slug);
  if (current?.nextSlug) {
    const explicit = getProjectBySlug(current.nextSlug);
    if (explicit) return explicit;
  }
  const i = projects.findIndex((project) => project.slug === slug);
  return projects[(i + 1) % projects.length];
};
