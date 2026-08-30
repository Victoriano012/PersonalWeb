export interface Project {
  name: string;
  description: string;
  tags: string[];
  github: string;
}

export const projects: Project[] = [
  {
    name: "FoodApp",
    description:
      "A mobile-first recipe and shopping list app built as an installable PWA, so it feels like a native app on the phone. It has three swipeable tabs — recipes (with photos, portions scaling, and markdown instructions), an aggregating shopping list that merges quantities across recipes, and an ingredient registry that keeps units consistent. Each user signs in with Google and their data is stored server-side with per-user AES-256-GCM encryption, so it follows them across devices while the database holds only ciphertext.",
    tags: [
      "Next.js",
      "React 19",
      "JavaScript",
      "PWA",
      "Auth.js",
      "Neon Postgres",
      "Vercel",
    ],
    github: "https://github.com/Victoriano012/FoodApp",
  },
  {
    name: "InvestApp",
    description:
      "A multi-user investment tracker where transactions are entered manually and market prices are fetched automatically from Yahoo Finance, with everything computed in EUR. It offers a sortable portfolio view with per-lot annualized returns, highly customizable gain and capital-allocation charts with zooming and per-trade markers, and 'basket' assets bought in equal parts (with exact frozen compositions per buy). Per-user portfolio data is encrypted with AES-256-GCM, and Google sign-in keeps each user's portfolio private.",
    tags: [
      "TypeScript",
      "Next.js",
      "Yahoo Finance API",
      "Data Visualization",
      "Neon Postgres",
      "Vercel",
    ],
    github: "https://github.com/Victoriano012/InvestApp",
  },
  {
    // FIXME: The AutoJira repo is private or unreachable on GitHub
    // (https://api.github.com/repos/Victoriano012/AutoJira returned 404 on 2026-08-30),
    // so this entry is a best-guess placeholder. Please correct the description,
    // tags, and link once the repo is public or the details are confirmed.
    name: "AutoJira",
    description:
      "An autonomous ticket-driven development tool: projects are broken down into Jira-style tickets with dependencies and attachments, and AI coding agents pick them up and complete them end-to-end — implementing, committing, and reporting back — with each ticket's results feeding into the ones that depend on it.",
    tags: ["AI Agents", "Automation", "Developer Tools"],
    github: "https://github.com/Victoriano012/AutoJira",
  },
];
