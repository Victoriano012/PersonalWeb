import type { Publication, ResearchEntry } from "./types";

/** Research Experience merged with Preprints & Submissions. */
export const researchExperience: ResearchEntry[] = [
  {
    role: "Visiting Student",
    organization: "Van der Schaar Lab, Cambridge",
    period: "Jan 2025 - Jun 2025",
    description:
      "Conducted Bachelor's thesis research, supervised by Prof. Mihaela van der Schaar, on training LLMs for long-term strategic conversation, leading to the GameTalk paper.",
  },
  {
    role: "Research Science Institute (RSI '19)",
    organization: "MIT",
    period: "2019",
    description:
      "I developed an exhaustive classification of the optimal ways to use X-Rays at CAT Scans, modeling the human body as ℝ₃³.",
  },
];

export const publications: Publication[] = [
  {
    title:
      "Memory-Efficient Looped Transformer: Decoupling Compute from Memory in Looped Language Models",
    authors: [
      {
        name: "Victor Conchello Vendrell",
        highlight: true,
        equalContribution: true,
      },
      { name: "Arnau Padres Masdemont", equalContribution: true },
      { name: "Niccolò Grillo" },
      { name: "Jordi Ros-Giralt" },
      { name: "Arash Behboodi" },
      { name: "Fabio Valerio Massoli" },
    ],
    venue: "NeurIPS",
    year: 2026,
    status: "Under review",
    workshop: "ICML 2026 FoGen",
    link: "https://arxiv.org/pdf/2605.07721",
  },
  {
    title:
      "Optimizing Teacher-Student Partitioning for Scalable Knowledge Distillation on HPC Systems",
    authors: [
      { name: "Adrian P. Dieguez" },
      { name: "Victor Conchello Vendrell", highlight: true },
      { name: "Alex Batlle" },
      { name: "Vinnam Kim" },
      { name: "Jordi Ros-Giralt" },
      { name: "Harris Teague" },
    ],
    venue: "ISC High Performance",
    year: 2026,
    link: "https://arxiv.org/pdf/2606.27797",
  },
  {
    title: "GameTalk: Training LLMs for Strategic Conversation",
    authors: [
      { name: "Victor Conchello Vendrell", highlight: true },
      { name: "Max Ruiz Luyten" },
      { name: "Mihaela van der Schaar" },
    ],
    venue: "arXiv",
    link: "https://arxiv.org/pdf/2601.16276",
  },
  {
    title:
      "M3Kang: Evaluating Multilingual Multimodal Mathematical Reasoning in Vision-Language Models",
    authors: [
      {
        name: "Victor Conchello Vendrell",
        highlight: true,
        equalContribution: true,
      },
      { name: "Aleix Torres-Camps", equalContribution: true },
      { name: "Nathaniel Mitrani Hadida", equalContribution: true },
      { name: "Àlex Batlle Casellas", equalContribution: true },
      { name: "Arnau Padrés Masdemont" },
      { name: "Jordi Ros-Giralt" },
    ],
    workshop: "ICLR 2026 LLM Reasoning",
    link: "https://arxiv.org/pdf/2601.16218",
  },
];
