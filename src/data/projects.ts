export interface Project {
  name: string;
  description: string;
  tags: string[];
  /** Omitted for projects whose repository is private. */
  github?: string;
  /** Public deployment, if the project is live. */
  url?: string;
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
    name: "AutoProject",
    description:
      "An autonomous project manager where a project is a graph of tickets — nodes with dependency edges, each able to hold its own subgraph — and AI coding agents do the work underneath. Any ticket (or the whole graph, in dependency order) can be handed to Claude Code or Codex, which implements it end-to-end in the workspace folder; tickets marked for human review pause for feedback before continuing. Projects are plain folders with autosaved state and inherited context files, so there is no database or login.",
    tags: ["AI Agents", "Automation", "Developer Tools", "Next.js", "React Flow"],
    github: "https://github.com/Victoriano012/AutoProject",
  },
  {
    name: "Closer Congress",
    description:
      "A working demonstration of a legislature where you don't pick one party every four years: each citizen holds an ordered list of single-issue parties, and on every bill the first party in the list with an opinion casts their vote, so an animal-rights party can come first without speaking for you on tax policy. It runs on real US bills pulled daily from GovTrack and govinfo, a simulated electorate of 10,000 citizens, and 32 parties whose votes are cast by an AI model, with the outcome compared side by side to what Congress actually did. Signed-in users can build and keep their own delegation list.",
    tags: [
      "TypeScript",
      "Next.js",
      "AI Agents",
      "Civic Tech",
      "Neon Postgres",
      "Auth.js",
      "Vercel",
    ],
    github: "https://github.com/Victoriano012/CloserCongress",
    url: "https://closercongress.vercel.app",
  },
];
