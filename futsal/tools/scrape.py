# Шаг 1 из 2: скачивает заявки команд Суперлиги (superliga.rfs.ru) и Высшей лиги (futsal.rfs.ru) 2026/27
# и карточки игроков (полное имя с отчеством и число матчей). Страницы кэшируются в tools/.cache.
# Запуск: python3 tools/scrape.py, затем python3 tools/build.py
import re, html, json, os, subprocess, sys, time
from concurrent.futures import ThreadPoolExecutor
CACHE = os.path.dirname(os.path.abspath(__file__)) + '/.cache'
BASE = CACHE + '/raw'
os.makedirs(BASE, exist_ok=True)

def get(url, name):
    p = f'{BASE}/{name}'
    if not os.path.exists(p) or os.path.getsize(p) < 1000:
        # сайты РФС иногда рвут соединение — повторяем
        for i in range(6):
            r = subprocess.run(['curl', '-sS', '-m', '40', '-A', 'Mozilla/5.0', url, '-o', p], capture_output=True)
            if r.returncode == 0 and os.path.getsize(p) > 0: break
            time.sleep(2 * (i + 1))
        else:
            print('FAIL', url, file=sys.stderr)
            return ''
    return open(p, encoding='utf8').read()

def txt(s): return html.unescape(re.sub(r'<[^>]+>', ' ', s)).split() and ' '.join(html.unescape(re.sub(r'<[^>]+>', ' ', s)).split())

T = [('sl', 'https://superliga.rfs.ru', 1066129), ('vl', 'https://futsal.rfs.ru', 1066108)]
out = []
JUNK = {'1425963','1425964','1425962','1425960','1425959','1425967','1412842','1425958','1425966'}
for lg, host, tid in T:
    t = get(f'{host}/tournament/{tid}/teams', f'{lg}_teams.html')
    ids = []
    for m in re.finditer(r'teams/application\?team_id=(\d+)', t):
        if m.group(1) not in ids: ids.append(m.group(1))
    for team_id in ids:
        if lg == 'vl' and team_id in JUNK: continue
        a = get(f'{host}/tournament/{tid}/teams/application?team_id={team_id}', f'{lg}_app_{team_id}.html')
        name = re.search(r'blk-tteams__promo-name"[^>]*>(.*?)</a>', a, re.S)
        name = txt(name.group(1)) if name else None
        region = re.search(r'Регион</div><div class="blk-tteams__attributes-value">(.*?)</div>', a)
        logo = re.search(r'https://st\.joinsport\.io/team/%s/logo/[^"\s]+' % team_id, a)
        pane = a.split('js-tteams-pane" id="players-1"', 1)[1].split('id="players-2"', 1)[0] if 'js-tteams-pane" id="players-1"' in a else ''
        players = []
        for row in re.findall(r'<tr class="blk-tteams__row">(.*?)</tr>', pane, re.S):
            cells = re.findall(r'<td class="blk-tteams__cell([^"]*)"[^>]*>(.*?)</td>', row, re.S)
            d = {}
            vars_ = []
            for cls, c in cells:
                if '--number' in cls: d['num'] = txt(c)
                elif '--amplua' in cls: d['amp'] = txt(c)
                elif '--player' in cls:
                    d['pid'] = re.search(r'/player/(\d+)', c).group(1)
                    d['name'] = txt(re.search(r'player-name">(.*?)</p>', c, re.S).group(1))
                elif '--birth' in cls: d['birth'] = txt(c)
                elif '--var' in cls: vars_.append(txt(c))
            d['stats'] = vars_
            players.append(d)
        out.append({'league': lg, 'host': host, 'team_id': team_id, 'name': name, 'region': region and txt(region.group(1)), 'logo': logo and logo.group(0), 'players': players})
        print(lg, team_id, name, region and txt(region.group(1)), len(players), file=sys.stderr)
json.dump(out, open(CACHE + '/teams.json', 'w'), ensure_ascii=False, indent=1)

# карточки игроков: полное имя (у россиян есть отчество) и матчи за всё время на сайте
def card(job):
    lg, host, pid = job
    t = get(f'{host}/player/{pid}', f'pl_{lg}_{pid}.html')
    t = re.sub(r'<script.*?</script>|<style.*?</style>|<svg.*?</svg>', '', t, flags=re.S)
    m = re.search(r'Статистика игрока ([^,<]+),', t)
    g = re.search(r'Игры (\d+) Голы (\d+)', ' '.join(html.unescape(re.sub(r'<[^>]+>', ' ', t)).split()))
    return f'{lg}_{pid}', {'full': m.group(1).strip() if m else None, 'games': int(g.group(1)) if g else 0, 'goals': int(g.group(2)) if g else 0}
jobs = [(t['league'], t['host'], p['pid']) for t in out for p in t['players']]
with ThreadPoolExecutor(4) as ex: pinfo = dict(ex.map(card, jobs))
json.dump(pinfo, open(CACHE + '/pinfo.json', 'w'), ensure_ascii=False, indent=0)
print('игроков:', len(pinfo), file=sys.stderr)
