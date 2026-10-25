# Первая лига, зона «Золотое кольцо»: Межрегиональная мини-футбольная лига 2025/26 Ассоциации мини-футбола
# «Золотое кольцо» (mini-football76.ru, турнир 657). Состав команды — со страницы команды, возраст — со страницы игрока,
# амплуа (В — вратарь, З — защитник, Н — нападающий), матчи и голы — из протоколов матчей турнира.
# Пишет .cache/goldring.json в формате заявок scrape.py и добавляет карточки игроков в .cache/pinfo.json.
# Запуск: python3 tools/goldring.py, затем python3 tools/build.py
import html, json, os, re, subprocess, sys, time
from collections import Counter, defaultdict
from concurrent.futures import ThreadPoolExecutor

CACHE = os.path.dirname(os.path.abspath(__file__)) + '/.cache'
BASE = CACHE + '/raw'
HOST = 'https://mini-football76.ru'
TOUR, SEASON = 657, '2025-2026'
AMP = {'В': 'Вр.', 'З': 'Зщ.', 'Н': 'Нп.'}


def get(path, name):
    p = f'{BASE}/zk_{name}.html'
    if not os.path.exists(p) or os.path.getsize(p) < 1000:
        for i in range(5):
            r = subprocess.run(['curl', '-sS', '-m', '40', '-A', 'Mozilla/5.0', HOST + path, '-o', p], capture_output=True)
            if r.returncode == 0 and os.path.exists(p) and os.path.getsize(p) > 1000: break
            time.sleep(2 * (i + 1))
        else:
            print('FAIL', path, file=sys.stderr)
            return ''
    return open(p, 'rb').read().decode('cp1251', errors='replace')


def txt(s): return ' '.join(html.unescape(re.sub(r'<[^>]+>', ' ', s)).split())


# команды турнира и их города — из турнирной таблицы
main = get(f'/?sezon={SEASON}&tour={TOUR}', f'tour_{TOUR}')
teams = {}
for tid, name, city in re.findall(r'<a href="/team/(\d+)" title="([^"(]+?)\s*\(([^)]+)\)">', main):
    teams.setdefault(tid, {'name': html.unescape(name).strip(), 'city': html.unescape(city).strip()})
games = sorted(set(re.findall(r'href="/game/(\d+)"', main)), key=int)
print('команд', len(teams), 'матчей', len(games), file=sys.stderr)

# протоколы: игрок → команда, амплуа, матчи, голы
stat = defaultdict(lambda: {'games': 0, 'goals': 0, 'amp': Counter()})
by_name = {t['name']: tid for tid, t in teams.items()}
played = defaultdict(set)  # команда → игроки, выходившие на поле (на странице команды бывают не все)
for gid in games:
    g = get(f'/game/{gid}', f'game_{gid}')
    names = [txt(re.sub(r'<span>.*?</span>', '', x)) for x in re.findall(r'class="(?:first|second)nm">(.*?)</td>', g, re.S)]
    # левый блок «состав» — хозяева, правый — гости
    for side, blk in zip(names, re.split(r'class="kom_bgr_(?:lft|rgh)"', g)[1:3]):
        # строка протокола: <span title="Защитник">З</span> 01. <a href="/player/ID">…</a> … голы, передачи
        for amp, pid, row in re.findall(r'<td class="fn"><span title="[^"]*">(\w)</span>[^<]*<a href="/player/(\d+)">.*?</a>(.*?)</tr>', blk, re.S):
            nums = [int(c) for c in (txt(c) for c in re.findall(r'<td[^>]*>(.*?)</td>', row, re.S)) if c.isdigit()]
            s = stat[pid]
            s['games'] += 1
            if amp in AMP: s['amp'][amp] += 1
            if nums: s['goals'] += nums[0]
            if side in by_name: played[by_name[side]].add(pid)

# составы команд и возраст игроков
out, pinfo = [], {}
for tid, t in teams.items():
    page = get(f'/team/{tid}', f'team_{tid}')
    if SEASON not in page: print('нет состава', SEASON, t['name'], file=sys.stderr)
    pids = list(dict.fromkeys(re.findall(r'<b><a href="/player/(\d+)">', page) + sorted(played[tid], key=int)))

    def player(pid):
        p = get(f'/player/{pid}', f'player_{pid}')
        b = re.search(r'Дата рождения:\s*(\d\d\.\d\d\.\d{4})', txt(p))
        a = re.search(r'Возраст:\s*(\d+)', txt(p))
        n = re.search(r'<title>([^.<]+)', p)
        return pid, n and ' '.join(html.unescape(n.group(1)).split()), b and b.group(1), a and int(a.group(1))
    with ThreadPoolExecutor(4) as ex: info = list(ex.map(player, pids))
    players = []
    for pid, name, birth, age in info:
        if not name or not birth or not age: continue
        s = stat.get(pid, {'games': 0, 'goals': 0, 'amp': Counter()})
        amp = AMP[s['amp'].most_common(1)[0][0]] if s['amp'] else 'Ун..'
        players.append({'pid': pid, 'name': name, 'birth': f'{birth}, {age} лет', 'amp': amp,
                        'stats': [str(s['games']), str(s['goals'])]})
        pinfo[f'zk_{pid}'] = {'full': None, 'games': s['games'], 'goals': s['goals']}
    out.append({'league': 'zk', 'host': HOST, 'team_id': tid, 'name': t['name'], 'region': t['city'], 'logo': None, 'players': players})
    print(t['name'], t['city'], len(players), file=sys.stderr)
json.dump(out, open(CACHE + '/goldring.json', 'w', encoding='utf8'), ensure_ascii=False, indent=1)
all_info = json.load(open(CACHE + '/pinfo.json', encoding='utf8'))
all_info.update(pinfo)
json.dump(all_info, open(CACHE + '/pinfo.json', 'w', encoding='utf8'), ensure_ascii=False, indent=0)
