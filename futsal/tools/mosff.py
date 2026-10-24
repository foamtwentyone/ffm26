# Московская зона Первой лиги: «Чемпионат г. Москвы по футзалу "Первая лига"» на mosff.ru (страницы собираются
# скриптами, поэтому открываются в Chromium через Playwright). Пишет .cache/mosff.json в формате заявок scrape.py.
# Запуск: python3 tools/mosff.py
import html, json, os, re, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
CACHE = HERE + '/.cache'
RAW = CACHE + '/raw'
os.makedirs(RAW, exist_ok=True)
TOURNAMENT = 1114
RENDER = r"""
const { chromium } = require('playwright');
(async () => {
  const [url, out] = process.argv.slice(1);
  const b = await chromium.launch();
  const p = await b.newPage({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36' });
  for (let i = 0; i < 3; i++) { try { await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 }); break; } catch (e) {} }
  await p.waitForTimeout(5000);
  require('fs').writeFileSync(out, await p.content());
  await b.close();
})();
"""
POS = {'Вратарь': 'Вр.', 'Защитник': 'Зщ.', 'Полузащитник': 'Ун..', 'Универсал': 'Ун..', 'Нападающий': 'Нп.'}


def render(url, name):
    path = f'{RAW}/{name}'
    if not os.path.exists(path) or os.path.getsize(path) < 5000:
        subprocess.run(['node', '-e', RENDER, url, path], check=True)
    return open(path, encoding='utf8').read()


def txt(s): return ' '.join(html.unescape(re.sub(r'<[^>]+>', ' ', s)).split())


page = render(f'https://mosff.ru/tournament/{TOURNAMENT}', f'mosff_{TOURNAMENT}.html')
ids = []
for m in re.finditer(r'/tournament/%d/teams/(\d+)/application' % TOURNAMENT, page):
    if m.group(1) not in ids: ids.append(m.group(1))
teams = []
for tid in ids:
    a = render(f'https://mosff.ru/tournament/{TOURNAMENT}/teams/{tid}/application', f'mosff_app_{tid}.html')
    name = re.search(r'alt="Логотип команды ([^"]+)"', a)
    logo = re.search(r'src="(https://hb\.bizmrg\.com/st\.mosmff\.ru/team/%s/logo/[^"]+)"' % tid, a)
    players = []
    for card in re.findall(r'<li class="composition__item">(.*?)</li>', a, re.S):
        full = txt(re.search(r'composition__title[^>]*>(.*?)</div>', card, re.S).group(1))
        part = card.split('composition__info', 1)[1].split('table-composition', 1)[0] if 'composition__info' in card else ''
        info = [txt(x) for x in re.findall(r'<div>(.*?)</div>', part, re.S)]
        vals = [txt(x) for x in re.findall(r'table-composition__value">(.*?)</div>', card, re.S)]
        amp = next((POS[x] for x in info if x in POS), 'Ун..')
        birth = next((x for x in info if re.match(r'\d\d\.\d\d\.\d{4}$', x)), '')
        pid = re.search(r'/player/(\d+)', card).group(1)
        w = full.split()
        # формат как в заявках РФС: «Фамилия Имя», дата рождения и возраст на октябрь 2026, игры и голы
        if birth:
            d, mth, y = map(int, birth.split('.'))
            age = 2026 - y - ((mth, d) > (10, 24))
            birth = f'{birth}, {age} лет'
        players.append({'pid': 'm' + pid, 'name': ' '.join(w[:2]), 'full': full, 'amp': amp, 'birth': birth, 'stats': [vals[0] if vals else '0', vals[2] if len(vals) > 2 else '0']})
    clean = re.sub(r'^(МФК|ФК|МФС)\s+', '', name.group(1)) if name else tid
    teams.append({'league': 'mosff', 'host': 'https://mosff.ru', 'team_id': 'm' + tid, 'name': clean, 'region': 'Москва', 'logo': logo and logo.group(1), 'players': players})
    print(clean, len(players), file=sys.stderr)
json.dump(teams, open(CACHE + '/mosff.json', 'w'), ensure_ascii=False, indent=1)
