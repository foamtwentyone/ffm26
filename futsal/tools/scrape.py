# Шаг 1 из 3: скачивает заявки команд сезона 2026/27 с сайтов РФС и карточки игроков (полное имя с отчеством
# и число матчей). Страницы кэшируются в tools/.cache.
#   Суперлига — superliga.rfs.ru; Высшая лига, Кубок России (из него — клубы Первой лиги), ЮФЛ U-19 и U-17 — futsal.rfs.ru.
# Запуск: python3 tools/scrape.py, затем python3 tools/build.py и python3 tools/logos.py
import re, html, json, os, subprocess, sys, time
from concurrent.futures import ThreadPoolExecutor

CACHE = os.path.dirname(os.path.abspath(__file__)) + '/.cache'
BASE = CACHE + '/raw'
os.makedirs(BASE, exist_ok=True)
SL, FUTSAL = 'https://superliga.rfs.ru', 'https://futsal.rfs.ru'
# турнир: (сайт, id, нужны ли карточки игроков)
TOURNAMENTS = {'sl': (SL, 1066129, True), 'vl': (FUTSAL, 1066108, True), 'cup': (FUTSAL, 1066980, True),
               'u19': (FUTSAL, 1067383, False), 'u17': (FUTSAL, 1067382, False)}


def get(url, name):
    p = f'{BASE}/{name}'
    if not os.path.exists(p) or os.path.getsize(p) < 1000:
        # сайты РФС иногда рвут соединение — повторяем
        for i in range(6):
            r = subprocess.run(['curl', '-sS', '-m', '40', '-A', 'Mozilla/5.0', url, '-o', p], capture_output=True)
            if r.returncode == 0 and os.path.exists(p) and os.path.getsize(p) > 0: break
            time.sleep(2 * (i + 1))
        else:
            print('FAIL', url, file=sys.stderr)
            return ''
    return open(p, encoding='utf8').read()


def txt(s): return ' '.join(html.unescape(re.sub(r'<[^>]+>', ' ', s)).split())


def application(lg, host, tid, team_id):
    a = get(f'{host}/tournament/{tid}/teams/application?team_id={team_id}', f'{lg}_app_{team_id}.html')
    name = re.search(r'blk-tteams__promo-name"[^>]*>(.*?)</a>', a, re.S)
    marker = 'js-tteams-pane" id="players-1"'
    if not name or marker not in a: return None
    region = re.search(r'Регион</div><div class="blk-tteams__attributes-value">(.*?)</div>', a)
    logo = re.search(r'https://st\.joinsport\.io/team/%s/logo/[^"\s]+' % team_id, a)
    pane = a.split(marker, 1)[1].split('id="players-2"', 1)[0]
    players = []
    for row in re.findall(r'<tr class="blk-tteams__row">(.*?)</tr>', pane, re.S):
        d = {'stats': []}
        for cls, c in re.findall(r'<td class="blk-tteams__cell([^"]*)"[^>]*>(.*?)</td>', row, re.S):
            if '--number' in cls: d['num'] = txt(c)
            elif '--amplua' in cls: d['amp'] = txt(c)
            elif '--player' in cls:
                d['pid'] = re.search(r'/player/(\d+)', c).group(1)
                d['name'] = txt(re.search(r'player-name">(.*?)</p>', c, re.S).group(1))
            elif '--birth' in cls: d['birth'] = txt(c)
            elif '--var' in cls: d['stats'].append(txt(c))
        if 'pid' in d: players.append(d)
    if not players: return None
    return {'league': lg, 'host': host, 'team_id': team_id, 'name': txt(name.group(1)),
            'region': region and txt(region.group(1)), 'logo': logo and logo.group(0), 'players': players}


out = []
for lg, (host, tid, _) in TOURNAMENTS.items():
    t = get(f'{host}/tournament/{tid}/teams', f'{lg}_teams.html')
    ids = []
    for m in re.finditer(r'teams/application\?team_id=(\d+)', t):
        if m.group(1) not in ids: ids.append(m.group(1))
    for team_id in ids:
        team = application(lg, host, tid, team_id)
        # на странице турнира бывают ссылки на команды из других турниров — у них нет заявки
        if team: out.append(team)
    print(lg, sum(1 for x in out if x['league'] == lg), 'команд', file=sys.stderr)
json.dump(out, open(CACHE + '/teams.json', 'w'), ensure_ascii=False, indent=1)


# карточки игроков: полное имя (у россиян есть отчество) и матчи за всё время на сайте
def card(job):
    lg, host, pid = job
    t = get(f'{host}/player/{pid}', f'pl_{lg}_{pid}.html')
    t = re.sub(r'<script.*?</script>|<style.*?</style>|<svg.*?</svg>', '', t, flags=re.S)
    m = re.search(r'Статистика игрока ([^,<]+),', t)
    g = re.search(r'Игры (\d+) Голы (\d+)', txt(t))
    return f'{lg}_{pid}', {'full': m.group(1).strip() if m else None, 'games': int(g.group(1)) if g else 0, 'goals': int(g.group(2)) if g else 0}


jobs = sorted({(t['league'], t['host'], p['pid']) for t in out if TOURNAMENTS[t['league']][2] for p in t['players']})
with ThreadPoolExecutor(4) as ex: pinfo = dict(ex.map(card, jobs))
json.dump(pinfo, open(CACHE + '/pinfo.json', 'w'), ensure_ascii=False, indent=0)
print('карточек игроков:', len(pinfo), file=sys.stderr)
