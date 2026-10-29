// Офлайн-режим: файлы игры хранятся на устройстве. VERSION меняется при каждом обновлении (tools/bump.sh) —
// тогда новая версия скачивается целиком, а старая удаляется.
const VERSION = 'v202610291332';
const CACHE = `ffm26-${VERSION}`;
const FONTS = 'ffm26-fonts';

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const html = await (await fetch('./index.html', { cache: 'no-store' })).text();
    // всё, что подключает страница: стили и скрипты с номером версии
    const assets = [...html.matchAll(/(?:src|href)="((?:js|css)\/[^"]+)"/g)].map((m) => m[1]);
    const cache = await caches.open(CACHE);
    await cache.addAll(['./', './index.html', './manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', ...assets]);
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE && k !== FONTS) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // шрифты Google — из кэша, при первой загрузке сохраняются
  if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.open(FONTS).then(async (c) => (await c.match(req)) || fetch(req).then((r) => { c.put(req, r.clone()); return r; })));
    return;
  }
  if (url.origin !== location.origin) return;
  // страница — сначала из сети (чтобы видеть обновления), без сети — из кэша
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).catch(() => caches.match('./index.html')));
    return;
  }
  // файлы игры — из кэша, недостающие докачиваются
  e.respondWith(caches.match(req).then((r) => r || fetch(req).then((res) => {
    if (res.ok) caches.open(CACHE).then((c) => c.put(req, res.clone()));
    return res;
  })));
});
