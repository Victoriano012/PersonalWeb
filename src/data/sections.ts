export const sections = [
  { id: "education", href: "/education", label: "Education" },
  { id: "experience", href: "/experience", label: "Experience" },
  { id: "research", href: "/research", label: "Research" },
  { id: "projects", href: "/projects", label: "Projects" },
  { id: "awards", href: "/awards", label: "Awards" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
