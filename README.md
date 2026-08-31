# Victor Conchello — personal website

Personal website of Victor Conchello Vendrell. Built with Next.js (App Router) and Tailwind CSS, deployed on Vercel.

## Local development

```bash
npm install
npm run dev     # http://localhost:4300
npm run build   # production build
npm run lint
```

## Deployment

Hosted on Vercel. Pushes to `main` deploy automatically to production; other branches get preview deployments.

## Structure

- `app/` — App Router pages (one route per topic), root layout, global styles
- `components/` — shared layout/UI (nav, hero, page shell) and one component per content section
- `src/data/` — typed content data (education, experience, research, projects, awards)
