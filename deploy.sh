#!/bin/bash
echo "📦 Syncing files..."
rsync -avz --exclude='node_modules' --exclude='.next' \
  ./ dede@192.168.100.2:/var/www/dedemuhi.info/

echo "🔨 Building & restarting..."
ssh dede@192.168.100.2 "cd /var/www/dedemuhi.info && npm run build && pm2 restart dedemuhi"

echo "✅ Deploy selesai!"
