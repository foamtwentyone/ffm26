# Иностранные лиги: составы с onefutsal.com — клубы лиги, арена, эмблема, игроки (амплуа, дата рождения, рыночная
# стоимость) и гражданство со страницы игрока. Страницы кэшируются в .cache/raw (of_*.html).
# Пишет .cache/onefutsal.json. Запуск: python3 tools/onefutsal.py, затем python3 tools/build.py
import html, json, os, re, subprocess, sys, time
from concurrent.futures import ThreadPoolExecutor

CACHE = os.path.dirname(os.path.abspath(__file__)) + '/.cache'
BASE = CACHE + '/raw'
SITE = 'https://onefutsal.com'
LEAGUES = {'esp': '1451', 'por': 'liga-plakard-portugaliya', 'ita': 'seriya-a1-chempionat-italii-po-mini-futbolu', 'bra': 'braziliya'}


def get(url):
    p = f"{BASE}/of_{re.sub(r'[^a-z0-9]+', '_', url.split('onefutsal.com/')[1].lower()).strip('_')}.html"
    if not os.path.exists(p) or os.path.getsize(p) < 5000:
        for i in range(5):
            r = subprocess.run(['curl', '-sS', '-m', '40', '-A', 'Mozilla/5.0', url, '-o', p], capture_output=True)
            if r.returncode == 0 and os.path.exists(p) and os.path.getsize(p) > 5000: break
            time.sleep(2 * (i + 1))
        else:
            print('FAIL', url, file=sys.stderr)
            return ''
    return open(p, encoding='utf8', errors='replace').read()


def txt(s): return ' '.join(html.unescape(re.sub(r'<[^>]+>', ' ', s)).split())


def info(page, label):
    m = re.search(rf'<div class="label">{label}</div>\s*<div class="value">(.*?)</div>', page, re.S)
    return m and txt(m.group(1))


def club(url):
    page = get(url)
    name = txt(re.search(r'<h1[^>]*>(.*?)</h1>', page, re.S).group(1)).strip('«»" ')
    logo = re.search(r'class="img-entry-header[^"]*">.*?<img[^>]*src="([^"]+)"', page, re.S)
    players = []
    squad = page.split('Состав команды', 1)[1].split('Трансферы', 1)[0] if 'Состав команды' in page else ''
    for it in re.findall(r'<div class="i">(.*?)</a>\s*</div>', squad, re.S):
        purl = re.search(r'href="([^"]+/player/[^"]+)"', it)
        f = {k: txt(v) for k, v in re.findall(r'<div class="(name|text|date|price)">(.*?)</div>', it, re.S)}
        if not purl or 'name' not in f: continue
        d = re.search(r'(\d\d\.\d\d\.\d{4})г\.\s*\((\d+)', f.get('date', ''))
        value = int(re.sub(r'\D', '', f.get('price', '')) or 0)
        players.append({'url': purl.group(1), 'name': f['name'], 'pos': f.get('text', ''), 'birth': d and d.group(1),
                        'age': d and int(d.group(2)), 'value': value})
    return {'url': url, 'name': name, 'arena': info(page, 'Домашняя арена'), 'logo': logo and logo.group(1), 'players': players}


def nationality(purl):
    # со страницы игрока — гражданство и дата рождения (на странице клуба её бывает нет)
    page = get(purl)
    return purl, (info(page, 'Гражданство'), info(page, 'Дата рождения'))


out = []
for lg, slug in LEAGUES.items():
    page = get(f'{SITE}/league/{slug}/')
    urls = list(dict.fromkeys(re.findall(r'https://onefutsal\.com/club/[^"/]+/', page)))
    with ThreadPoolExecutor(3) as ex: clubs = list(ex.map(club, urls))
    for c in clubs: c['league'] = lg
    out += clubs
    print(lg, len(clubs), 'клубов', sum(len(c['players']) for c in clubs), 'игроков', file=sys.stderr)
purls = sorted({p['url'] for c in out for p in c['players']})
with ThreadPoolExecutor(4) as ex: nat = dict(ex.map(nationality, purls))
for c in out:
    for p in c['players']:
        p['nat'], born = nat.get(p['url'], (None, None))
        d = re.search(r'(\d\d\.\d\d\.\d{4})г\.\s*\((\d+)', born or '')
        if not p['age'] and d: p['birth'], p['age'] = d.group(1), int(d.group(2))
json.dump(out, open(CACHE + '/onefutsal.json', 'w', encoding='utf8'), ensure_ascii=False, indent=1)
