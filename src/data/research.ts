import type { Publication, ResearchEntry } from "./types";

/** Research Experience merged with Preprints & Submissions. */
export const researchExperience: ResearchEntry[] = [
  {
    role: "Visiting Student",
    organization: "Van der Schaar Lab, Cambridge",
    period: "Jan 2025 - Jun 2025",
    description:
      "Conducted Bachelor's thesis research, supervised by Prof. Mihaela van der Schaar, on training LLMs for long-term strategic conversation, leading to a paper under review at AIStats.",
  },
  {
    role: "Research Science Institute (RSI '19)",
    organization: "MIT",
    period: "2019",
    description:
      "I developed an exhaustive classification of the optimal ways to use X-Rays at CAT Scans, modeling the human body as ℝ₃³.",
  },
];

// TODO: paper URLs are placeholders in the CV — fill in real links when available.
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
    venue: "Under review at NeurIPS 2026. Presented at ICML 2026 FoGen.",
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
    venue: "Presented at ISC High Performance 2026.",
  },
  {
    title: "GameTalk: Training LLMs for Strategic Conversation",
    authors: [
      { name: "Victor Conchello Vendrell", highlight: true },
      { name: "Max Ruiz Luyten" },
      { name: "Mihaela van der Schaar" },
    ],
    venue: "Under review at AIStats.",
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
    venue: "Under review at NeurIPS 2026. Presented at ICLR 2026 LLM Reasoning.",
  },
];
