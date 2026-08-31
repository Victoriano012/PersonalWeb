import type { ExperienceEntry } from "./types";

/** Work Experience merged with Academic Service, newest first. */
export const experience: ExperienceEntry[] = [
  {
    role: "AI Researcher",
    organization: "Qualcomm",
    period: "Jul 2025 - Aug 2026",
    description:
      "Investigating and improving the capabilities of frontier reasoning models.",
    kind: "work",
  },
  {
    role: "Co-organizer and Teacher",
    period: "2024",
    description:
      "Co-organized and taught a mathematics outreach course for secondary school students.",
    kind: "academic-service",
  },
  {
    role: "First-Year Student Mentor",
    organization: "UPC",
    period: "2023 - 2024",
    description:
      "Mentored first-year students taking the B.S. in Mathematics and the B.S. in Data Science simultaneously.",
    kind: "academic-service",
  },
  {
    role: "Quantitative Research Intern",
    organization: "Jane Street",
    period: "Jul 2023 - Sep 2023",
    description:
      "Predictive modeling of markets and trading algorithm development.",
    kind: "work",
  },
  {
    role: "AI Research Intern",
    organization: "Huawei",
    period: "Jul 2022 - Sep 2022",
    description:
      "Developed a state-of-the-art model for automatic model selection for outlier detection on time series.",
    kind: "work",
  },
  {
    role: "Software Engineer Intern",
    organization: "Wiris",
    period: "Jul 2021 - Sep 2021",
    description:
      "Implemented interactive chart visualization for educational purposes.",
    kind: "work",
  },
];
