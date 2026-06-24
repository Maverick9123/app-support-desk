#!/bin/bash
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:$PATH"
[ -s "$HOME/.nvm/nvm.sh" ] && source "$HOME/.nvm/nvm.sh"
cd "$(dirname "$0")"
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies (first time only)..."
    npm install
fi
echo "Starting AppSupport Desk..."
npm run dev &
sleep 6
open http://localhost:3000
wait
