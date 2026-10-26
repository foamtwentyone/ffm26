#!/bin/sh
# Новый номер версии для файлов игры: браузер и офлайн-кэш приложения подхватывают обновление.
cd "$(dirname "$0")/.." || exit 1
V=$(date -u +%Y%m%d%H%M)
sed -i -E "s#\?v=[0-9]+\"#?v=$V\"#g" index.html
sed -i -E "s#^const VERSION = '[^']*';#const VERSION = 'v$V';#" sw.js
echo "$V"
