#!/usr/bin/env bash
# Start the Next.js dev server on port 4300, fully detached from the calling
# shell (new session id, SIGHUP-immune, stdin closed, output to a log file) so
# it survives an agent/terminal session ending.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PORT=4300
LOG=/tmp/personal-web-dev.log
PIDFILE=/tmp/personal-web-dev.pid

# 1. Free the port.
lsof -ti ":$PORT" 2>/dev/null | xargs -r kill -9 2>/dev/null || true

cd "$ROOT"
: > "$LOG"

# 2. New session (macOS has no setsid) + nohup + detached stdin.
nohup python3 -c 'import os,sys; os.setsid(); os.execvp(sys.argv[1], sys.argv[1:])' \
  npm run dev >"$LOG" 2>&1 </dev/null &
PID=$!
disown "$PID" 2>/dev/null || true

# 3. Remember the pid.
echo "$PID" > "$PIDFILE"

echo "pid=$PID port=$PORT log=$LOG"
