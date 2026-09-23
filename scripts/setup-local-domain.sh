#!/usr/bin/env bash
# Makes http://annelynn.local point at the Vite dev server (port 5173) on this Mac.
#   1. Adds annelynn.local to /etc/hosts (IPv4 + IPv6 — the IPv6 line avoids
#      macOS's ~5 second Bonjour lookup delay for .local names).
#   2. Forwards port 80 → 5173 on the loopback interface with pf, so no ":5173"
#      is needed in the URL. The forward is cleared on reboot; re-run
#      `npm run domain` after restarting your Mac.
# Undo: sudo bash scripts/setup-local-domain.sh --remove
set -euo pipefail

HOST="annelynn.local"
PORT="${PORT:-5173}"
HOSTS="/etc/hosts"
MARK="# annelynn-portfolio"

if [[ $EUID -ne 0 ]]; then
  echo "Please run with sudo:  sudo bash $0 $*"; exit 1
fi

if [[ "${1:-}" == "--remove" ]]; then
  sed -i '' "/$MARK/d" "$HOSTS"
  pfctl -f /etc/pf.conf 2>/dev/null || true
  dscacheutil -flushcache; killall -HUP mDNSResponder 2>/dev/null || true
  echo "Removed $HOST from $HOSTS and restored the default firewall rules."
  exit 0
fi

# 1) hosts entries (idempotent)
if ! grep -q "$MARK" "$HOSTS"; then
  cp "$HOSTS" "$HOSTS.bak-annelynn"
  printf '127.0.0.1\t%s %s\n::1\t\t%s %s\n' "$HOST" "$MARK" "$HOST" "$MARK" >> "$HOSTS"
  echo "✓ Added $HOST to $HOSTS (backup: $HOSTS.bak-annelynn)"
else
  echo "✓ $HOST already in $HOSTS"
fi
dscacheutil -flushcache; killall -HUP mDNSResponder 2>/dev/null || true

# 2) port 80 → $PORT on loopback. Load Apple's default pf.conf with our
#    redirect inserted right after Apple's own rdr-anchor line.
RULES="$(mktemp)"
awk -v p="$PORT" '
  { print }
  /^rdr-anchor "com.apple\/\*"/ {
    print "rdr pass on lo0 inet  proto tcp from any to 127.0.0.1 port 80 -> 127.0.0.1 port " p
    print "rdr pass on lo0 inet6 proto tcp from any to ::1       port 80 -> ::1       port " p
  }' /etc/pf.conf > "$RULES"
pfctl -ef "$RULES" 2>&1 | grep -v -E 'ALTQ|^No ALTQ|pf already enabled|flushing of rules' || true
rm -f "$RULES"
echo "✓ Port 80 now forwards to $PORT"
echo
echo "Start the site with:  npm run dev"
echo "Then open:            http://$HOST"
