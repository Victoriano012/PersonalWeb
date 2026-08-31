# personal-web

Personal website of Victor Conchello Vendrell, built with Next.js (App Router) and Tailwind CSS, deployed on Vercel.

## Development

```bash
npm install
npm run dev   # serves on http://localhost:4300
```

### Supervised dev server (survives session ends *and* stray kills)

```bash
./scripts/dev-server.sh start    # install + load the LaunchAgent
./scripts/dev-server.sh status   # pid + HTTP status
./scripts/dev-server.sh stop     # unload it
```

- URL: http://localhost:4300
- Log: `/tmp/personal-web-dev.log` (appended across restarts)
- PID file: `/tmp/personal-web-dev.pid`
- LaunchAgent: `~/Library/LaunchAgents/com.victor.personal-web-dev.plist`, label `com.victor.personal-web-dev`

**Why launchd, not `nohup`/`setsid`.** The earlier `scripts/dev-detached.sh` approach
did detach correctly — the server reparented to pid 1 and outlived the shell that
started it. It still went down, because detaching only protects against SIGHUP; it
does nothing when something sends the process an explicit SIGTERM/SIGKILL. In a repo
where several agents/terminals share one dev server, the usual culprit is another
session cleaning up its own stray Next.js process with a broad
`pkill -f next` or `lsof -ti :4300 | xargs kill -9` — those patterns cannot tell the
shared server apart from the caller's own probe and take both down.

No amount of extra detaching fixes that. What fixes it is supervision that *restarts*
the server after a kill, which is what `KeepAlive=true` gives us. Verified: `kill -9`
on the server brings a new pid back, serving 200, within ~10s.

If you need to clear the port, prefer `./scripts/dev-server.sh stop` over a broad
`pkill` so the LaunchAgent doesn't immediately restart what you just killed.

## Structure

- `app/` — App Router pages, root layout, global styles/theme
- `components/` — Header (sticky nav), Footer (contact links), `Section` wrapper
- `components/sections/` — one component per homepage section (About, Education, Experience, Research & Publications, Projects, Awards)
- `src/data/` — typed content data (`types.ts`, `profile.ts`, `sections.ts`)
