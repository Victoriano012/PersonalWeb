#!/usr/bin/env bash
# Supervise the Next.js dev server on port 4300 with a launchd LaunchAgent.
#
# Why launchd and not just `nohup`/`setsid`: detaching alone works (the process
# does reparent to launchd and survives the shell that started it), but it does
# not survive a *sibling* Next.js invocation in this same project directory.
# A `next build` or a second `next dev` takes over `.next/`, and the running dev
# server shuts itself down cleanly. KeepAlive=true brings it straight back.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LABEL=com.victor.personal-web-dev
PLIST="$HOME/Library/LaunchAgents/$LABEL.plist"
TARGET="gui/$(id -u)/$LABEL"
PORT=4300
LOG=/tmp/personal-web-dev.log
PIDFILE=/tmp/personal-web-dev.pid
NPM="$(command -v npm)"

install_plist() {
  mkdir -p "$HOME/Library/LaunchAgents"
  cat > "$PLIST" <<PLIST_EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key><string>$LABEL</string>
  <key>ProgramArguments</key>
  <array>
    <string>$NPM</string>
    <string>run</string>
    <string>dev</string>
  </array>
  <key>WorkingDirectory</key><string>$ROOT</string>
  <key>EnvironmentVariables</key>
  <dict>
    <key>PATH</key><string>$(dirname "$NPM"):/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin</string>
    <key>NODE_ENV</key><string>development</string>
  </dict>
  <key>RunAtLoad</key><true/>
  <key>KeepAlive</key><true/>
  <key>ThrottleInterval</key><integer>5</integer>
  <key>StandardOutPath</key><string>$LOG</string>
  <key>StandardErrorPath</key><string>$LOG</string>
</dict>
</plist>
PLIST_EOF
}

pid_of() { launchctl print "$TARGET" 2>/dev/null | awk '/^\tpid = /{print $3}'; }

case "${1:-start}" in
  start)
    install_plist
    launchctl bootout "$TARGET" 2>/dev/null || true
    lsof -ti ":$PORT" 2>/dev/null | xargs kill -9 2>/dev/null || true
    launchctl bootstrap "gui/$(id -u)" "$PLIST"
    launchctl kickstart "$TARGET" >/dev/null 2>&1 || true
    for _ in $(seq 1 40); do
      [ "$(curl -s -o /dev/null -w '%{http_code}' "http://localhost:$PORT" || true)" = 200 ] && break
      sleep 0.5
    done
    pid_of > "$PIDFILE"
    echo "started label=$LABEL pid=$(cat "$PIDFILE") port=$PORT log=$LOG"
    ;;
  stop)
    launchctl bootout "$TARGET" 2>/dev/null || true
    rm -f "$PIDFILE"
    echo "stopped $LABEL"
    ;;
  status)
    echo "pid=$(pid_of)"
    echo "http=$(curl -s -o /dev/null -w '%{http_code}' "http://localhost:$PORT" || echo down)"
    ;;
  *) echo "usage: $0 {start|stop|status}" >&2; exit 2 ;;
esac
