export const sections = [
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research & Publications" },
  { id: "projects", label: "Projects" },
  { id: "awards", label: "Awards" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
