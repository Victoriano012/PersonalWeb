export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  details?: string[];
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
  /** Victor's name, to be rendered in italics */
  highlight?: boolean;
  /** Equal contribution (asterisk in the CV) */
  equalContribution?: boolean;
}

export interface Publication {
  title: string;
  authors: Author[];
  /** Primary venue name, e.g. "NeurIPS"; omitted when not accepted anywhere */
  venue?: string;
  /** Year of the primary venue, when known */
  year?: number;
  /** Publication status at the primary venue */
  status?: "Under review";
  /** Secondary workshop presentation, e.g. "ICML 2026 FoGen" */
  workshop?: string;
  link?: string;
}

export interface AwardItem {
  /** The individual result, e.g. "Gold Medal" */
  label: string;
  year?: string;
  /** Extra qualifier for the result, e.g. the subject or level */
  detail?: string;
}

export interface Award {
  title: string;
  org?: string;
  year?: string;
  /** One sentence explaining what the award is */
  description?: string;
  /** Individual results, when the award covers several distinct ones */
  items?: AwardItem[];
}

export interface ContactLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "email";
}

export interface Profile {
  name: string;
  tagline: string;
  /** First-person self-description shown on the home page */
  bio: string[];
  links: ContactLink[];
}
