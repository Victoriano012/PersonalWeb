export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

export interface ExperienceEntry {
  role: string;
  /** Company or institution; omitted when the role has no formal employer */
  organization?: string;
  period: string;
  description: string;
  kind: "work" | "academic-service";
}

export interface ResearchEntry {
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface Author {
  name: string;
  /** Victor's name, to be rendered in bold */
  highlight?: boolean;
  /** Equal contribution (asterisk in the CV) */
  equalContribution?: boolean;
}

export interface Publication {
  title: string;
  authors: Author[];
  /** Primary venue name, e.g. "NeurIPS" */
  venue: string;
  /** Year of the primary venue, when known */
  year?: number;
  /** Publication status at the primary venue */
  status?: "Under review" | "Presented";
  /** Secondary workshop presentation, e.g. "ICML 2026 FoGen" */
  workshop?: string;
  link?: string;
}

export interface Award {
  title: string;
  organization: string;
  period: string;
  description?: string;
}

export interface ContactLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "email" | "phone";
}

export interface Profile {
  name: string;
  tagline: string;
  links: ContactLink[];
}
