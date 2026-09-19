#!/bin/bash
echo "📦 Syncing files..."
rsync -avz --exclude='node_modules' --exclude='.next' --exclude='.git' \
  ./ dede@100.69.17.110:/var/www/dedemuhi.info/

echo "🔨 Building & restarting..."
ssh dede@100.69.17.110 'export PATH="$HOME/.hermes/node/bin:$HOME/.local/bin:$PATH" && cd /var/www/dedemuhi.info && npm install && npm run build && pm2 restart dedemuhi'

echo "✅ Deploy selesai!"
