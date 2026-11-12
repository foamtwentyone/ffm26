#!/usr/bin/env python3
"""Сборка архивов для российских игровых площадок: Яндекс Игры, Игры ВКонтакте, Одноклассники.

    python3 tools/build-platforms.py            # все площадки
    python3 tools/build-platforms.py yandex vk  # выбранные

Результат: dist/<площадка>/ (папка) и dist/ffm26-<площадка>.zip (index.html в корне архива).
Отличия от сайта: шрифты локальные (без Google Fonts), нет офлайн-кэша (service worker) и манифеста,
подключён SDK площадки (window.FM_PLATFORM), реклама через js/platform.js. Картинки img/ не нужны —
гербы и флаги уже встроены в js/data/*.js.
"""
import os, re, shutil, sys, zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, 'dist')
PLATFORMS = {
    # Яндекс отдаёт SDK по относительному адресу /sdk.js со своего хостинга
    'yandex': '<script src="/sdk.js"></script>',
    # VK Bridge (MIT) — лежит в архиве, внешних запросов нет
    'vk': '<script src="js/vendor/vk-bridge.min.js"></script>',
    # FAPI Одноклассников подгружается js/platform.js с api.ok.ru (так требует платформа)
    'ok': '',
}
COPY = ['css', 'js', 'icons', 'fonts']


def build(name):
    out = os.path.join(DIST, name)
    shutil.rmtree(out, ignore_errors=True)
    os.makedirs(out)
    for d in COPY:
        shutil.copytree(os.path.join(ROOT, d), os.path.join(out, d), ignore=shutil.ignore_patterns('*.map'))
    if name != 'vk':
        shutil.rmtree(os.path.join(out, 'js', 'vendor'), ignore_errors=True)
    html = open(os.path.join(ROOT, 'index.html'), encoding='utf-8').read()
    # шрифты — локально
    html, n = re.subn(r'\s*<link rel="preconnect"[^\n]*fonts\.googleapis\.com[^\n]*\n', '\n  <link rel="stylesheet" href="fonts/fonts.css">\n', html)
    assert n == 1, 'не нашёл подключение Google Fonts'
    # без манифеста и офлайн-кэша: площадка сама раздаёт файлы
    html = re.sub(r'\s*<link rel="manifest"[^>]*>', '', html)
    html, n = re.subn(r'\s*<script>\s*// офлайн-режим.*?</script>', '', html, flags=re.S)
    assert n == 1, 'не нашёл регистрацию service worker'
    # площадка и её SDK — перед js/platform.js
    tag = f'<script>window.FM_PLATFORM = {name!r};</script>' + (('\n  ' + PLATFORMS[name]) if PLATFORMS[name] else '')
    html, n = re.subn(r'(\s*)(<script src="js/platform\.js)', lambda m: f'{m.group(1)}{tag}{m.group(1)}{m.group(2)}', html, count=1)
    assert n == 1, 'не нашёл js/platform.js в index.html'
    assert 'googleapis' not in html and 'serviceWorker' not in html
    open(os.path.join(out, 'index.html'), 'w', encoding='utf-8').write(html)
    z = os.path.join(DIST, f'ffm26-{name}.zip')
    if os.path.exists(z):
        os.remove(z)
    with zipfile.ZipFile(z, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as zf:
        for base, _, files in os.walk(out):
            for f in sorted(files):
                p = os.path.join(base, f)
                zf.write(p, os.path.relpath(p, out))
    return z


if __name__ == '__main__':
    names = sys.argv[1:] or list(PLATFORMS)
    for nm in names:
        if nm not in PLATFORMS:
            sys.exit(f'неизвестная площадка: {nm} (есть: {", ".join(PLATFORMS)})')
        z = build(nm)
        print(f'{nm}: {os.path.relpath(z, ROOT)} — {os.path.getsize(z) / 1048576:.1f} МБ')
