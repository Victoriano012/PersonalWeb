# personal-web

Personal website of Victor Conchello Vendrell, built with Next.js (App Router) and Tailwind CSS, deployed on Vercel.

## Development

```bash
npm install
npm run dev   # serves on http://localhost:4300
```

### Detached dev server (survives agent/terminal sessions)

A plain `npm run dev` is a child of the shell that started it and dies when that
session ends. Use the helper instead — it frees the port, starts the server in a
new session (SIGHUP-immune, stdin detached, output to a log) and writes a pid file:

```bash
./scripts/dev-detached.sh
```

- URL: http://localhost:4300
- Log: `/tmp/personal-web-dev.log`
- PID file: `/tmp/personal-web-dev.pid`

Stop it (kills the whole process group, i.e. `npm` and the `next` child):

```bash
kill -- -"$(cat /tmp/personal-web-dev.pid)"
```

Check it: `curl -s -o /dev/null -w '%{http_code}' http://localhost:4300` → `200`,
and `ps -o ppid= -p "$(cat /tmp/personal-web-dev.pid)"` → `1` (reparented to init).

## Structure

- `app/` — App Router pages, root layout, global styles/theme
- `components/` — Header (sticky nav), Footer (contact links), `Section` wrapper
- `components/sections/` — one component per homepage section (About, Education, Experience, Research & Publications, Projects, Awards)
- `src/data/` — typed content data (`types.ts`, `profile.ts`, `sections.ts`)
