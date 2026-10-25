# Беларусь: заявки клубов на XXXVIII чемпионат (2026/27) с mini-football.by (сайт БАМФ на join.sport) — амплуа (отмечены
# только вратари), дата рождения, матчи и голы сезона; со страницы игрока — матчи за карьеру на сайте и место рождения
# (код страны в скобках — гражданство легионеров). Пишет .cache/abff.json. Запуск: python3 tools/abff.py, затем cis.py
import html, json, os, re, subprocess, sys, time
from concurrent.futures import ThreadPoolExecutor

CACHE = os.path.dirname(os.path.abspath(__file__)) + '/.cache'
BASE = CACHE + '/raw'
SITE = 'https://mini-football.by'
TOURNAMENT = 1066387


def get(path, name):
    p = f'{BASE}/by_{name}.html'
    if not os.path.exists(p) or os.path.getsize(p) < 5000:
        for i in range(5):
            r = subprocess.run(['curl', '-sS', '-m', '40', '-A', 'Mozilla/5.0', SITE + path, '-o', p], capture_output=True)
            if r.returncode == 0 and os.path.exists(p) and os.path.getsize(p) > 5000: break
            time.sleep(2 * (i + 1))
        else:
            print('FAIL', path, file=sys.stderr)
            return ''
    return open(p, encoding='utf8', errors='replace').read()


def txt(s): return ' '.join(html.unescape(re.sub(r'<[^>]+>', ' ', s)).split())


def team(team_id):
    a = get(f'/tournament/{TOURNAMENT}/teams/application?team_id={team_id}', f'app_{team_id}')
    name = txt(re.search(r'blk-tteams__promo-name"[^>]*>(.*?)</a>', a, re.S).group(1))
    logo = re.search(r'https://st\.joinsport\.io/team/%s/logo/[^"\s]+' % team_id, a)
    pane = a.split('js-tteams-pane" id="players-1"', 1)[1].split('id="players-2"', 1)[0]
    players = []
    for row in re.findall(r'<tr class="blk-tteams__row">(.*?)</tr>', pane, re.S):
        cells = dict((k, v) for k, v in re.findall(r'blk-tteams__cell--(number|amplua|player|birth)[^"]*">(.*?)</td>', row, re.S))
        var = [txt(v) for v in re.findall(r'blk-tteams__cell--var[^"]*">(.*?)</td>', row, re.S)]
        pid = re.search(r'/player/(\d+)', cells.get('player', ''))
        if not pid: continue
        birth = txt(cells.get('birth', ''))
        age = re.search(r',\s*(\d+)', birth)
        num = lambda x: int(x) if x.isdigit() else 0
        players.append({'pid': pid.group(1), 'name': txt(re.search(r'player-name">(.*?)</p>', cells['player'], re.S).group(1)),
                        'gk': txt(cells.get('amplua', '')).startswith('Вр'), 'age': age and int(age.group(1)),
                        'games': num(var[0]) if var else 0, 'goals': num(var[1].split()[0]) if len(var) > 1 and var[1] else 0})
    return {'team_id': team_id, 'name': name, 'logo': logo and logo.group(0), 'players': players}


def card(pid):
    a = get(f'/player/{pid}', f'player_{pid}')
    s = txt(re.sub(r'<script.*?</script>|<style.*?</style>', '', a, flags=re.S))
    games = re.search(r'Игры (\d+) Голы (\d+)', s)
    place = re.search(r'Место рождения: [^()]*?\((\w{3})\)', s)
    full = re.search(r'Статистика игрока (.+?), БЕЛОРУССКАЯ', s)
    return pid, {'career': int(games.group(1)) if games else 0, 'born': place and place.group(1), 'full': full and full.group(1)}


home = get('/', 'home')
ids = list(dict.fromkeys(re.findall(rf'/tournament/{TOURNAMENT}/teams/application\?team_id=(\d+)', home)))
with ThreadPoolExecutor(3) as ex: teams = list(ex.map(team, ids))
pids = sorted({p['pid'] for t in teams for p in t['players']})
with ThreadPoolExecutor(4) as ex: cards = dict(ex.map(card, pids))
for t in teams:
    for p in t['players']: p.update(cards.get(p['pid'], {}))
    print(t['name'], len(t['players']), file=sys.stderr)
json.dump(teams, open(CACHE + '/abff.json', 'w', encoding='utf8'), ensure_ascii=False, indent=1)
