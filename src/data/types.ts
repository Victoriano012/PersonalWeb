export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

export interface ExperienceEntry {
  role: string;
  organization: string;
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
  /** Venue / status line, e.g. "Under review at NeurIPS 2026. Presented at ICML 2026 FoGen." */
  venue: string;
  url?: string;
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
