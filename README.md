# personal-web

Personal website of Victor Conchello Vendrell, built with Next.js (App Router) and Tailwind CSS, deployed on Vercel.

## Development

```bash
npm install
npm run dev
```

## Structure

- `app/` — App Router pages, root layout, global styles/theme
- `components/` — Header (sticky nav), Footer (contact links), `Section` wrapper
- `components/sections/` — one component per homepage section (About, Education, Experience, Research & Publications, Projects, Awards)
- `src/data/` — typed content data (`types.ts`, `profile.ts`, `sections.ts`)
