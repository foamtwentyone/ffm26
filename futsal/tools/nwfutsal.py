# Первая лига, зона «Северо-Запад»: Чемпионат СЗФО по футзалу 2024/25 (nwfootball.ru, турнир 1048422) — последний
# сезон, в котором у матчей есть протоколы (в 2025/26 заявки и протоколы пустые). Состав — все, кто попал в протоколы,
# амплуа (ВР, Зщ, Пз, Нп, Ун.) и голы — из протоколов, полное имя, дата рождения и матчи за всё время — со страницы игрока.
# Пишет .cache/nwfutsal.json в формате заявок scrape.py и добавляет карточки игроков в .cache/pinfo.json.
# Запуск: python3 tools/nwfutsal.py, затем python3 tools/build.py
import datetime, html, json, os, re, subprocess, sys, time
from collections import Counter, defaultdict
from concurrent.futures import ThreadPoolExecutor

CACHE = os.path.dirname(os.path.abspath(__file__)) + '/.cache'
BASE = CACHE + '/raw'
HOST, TOUR = 'https://nwfootball.ru', 1048422
AMP = {'ВР': 'Вр.', 'Зщ': 'Зщ.', 'Пз': 'Ун..', 'Ун.': 'Ун..', 'Нп': 'Нп.'}
MONTHS = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
TODAY = datetime.date(2026, 10, 1)


def get(path, name):
    p = f'{BASE}/nwf_{name}.html'
    if not os.path.exists(p) or os.path.getsize(p) < 1000:
        # сайт часто рвёт соединение — повторяем
        for i in range(6):
            r = subprocess.run(['curl', '-sS', '-m', '40', '-A', 'Mozilla/5.0', HOST + path, '-o', p], capture_output=True)
            if r.returncode == 0 and os.path.exists(p) and os.path.getsize(p) > 1000: break
            time.sleep(2 * (i + 1))
        else:
            print('FAIL', path, file=sys.stderr)
            return ''
    return open(p, encoding='utf8').read()


def txt(s): return ' '.join(html.unescape(re.sub(r'<[^>]+>', ' ', s)).split())


# команды турнира (название и регион — из заявки) и матчи — из календаря
teams = {}
for tid in dict.fromkeys(re.findall(rf'{TOUR}/teams/application\?team_id=(\d+)', get(f'/tournament/{TOUR}/teams', 'teams'))):
    a = get(f'/tournament/{TOUR}/teams/application?team_id={tid}', f'app_{tid}')
    name = re.search(r'blk-tteams__promo-name"[^>]*>(.*?)</a>', a, re.S)
    region = re.search(r'Регион</div><div class="blk-tteams__attributes-value">(.*?)</div>', a)
    logo = re.search(r'https://st\.joinsport\.io/team/%s/logo/[^"\s]+' % tid, a)
    teams[tid] = {'name': txt(name.group(1)), 'region': region and txt(region.group(1)), 'logo': logo and logo.group(0)}
cal = get(f'/tournament/{TOUR}/calendar', 'calendar')
# в календаре есть и виджет футбольного турнира — его матчи отсекаются по отсутствию команд турнира в протоколе
matches = list(dict.fromkeys(re.findall(r'/match/(\d+)', cal)))

stat = defaultdict(lambda: {'games': 0, 'goals': 0, 'amp': Counter(), 'team': Counter(), 'name': ''})
used = 0
for mid in matches:
    g = get(f'/match/{mid}?active=protocol', f'match_{mid}')
    main = g.split('protocol__block--main', 1)
    if len(main) < 2: continue
    # составы обеих команд (без блока сотрудников): список каждой команды начинается со ссылки на её заявку
    units = re.split(r'<a class="protocol__team', main[1].split('protocol__block--staff', 1)[0])[1:]
    found = False
    for u in units:
        tid = re.search(r'team_id=(\d+)', u)
        if not tid or tid.group(1) not in teams: continue
        found = True
        for item in re.split(r'<li class="protocol__item">', u)[1:]:
            pid = re.search(r'/player/(\d+)', item)
            if not pid: continue
            s = stat[pid.group(1)]
            s['name'] = txt(re.search(r'protocol__name">(.*?)</div>', item, re.S).group(1))
            role = re.search(r'protocol__role">(.*?)</div>', item, re.S)
            if role and txt(role.group(1)) in AMP: s['amp'][txt(role.group(1))] += 1
            goals = len(re.findall(r'title="Гол"', item))
            xn = re.search(r'title="Гол".*?protocol__event-number">x(\d+)', item, re.S)
            s['goals'] += int(xn.group(1)) if xn else goals
            s['games'] += 1
            s['team'][tid.group(1)] += 1
    used += found
print('команд', len(teams), 'матчей с протоколами', used, 'игроков', len(stat), file=sys.stderr)


def card(pid):
    t = txt(re.sub(r'<script.*?</script>|<style.*?</style>', '', get(f'/player/{pid}', f'player_{pid}'), flags=re.S))
    full = re.search(r'Статистика игрока ([^,]+),', t)
    b = re.search(r'Дата рождения: (\d+) (\w+) (\d{4})', t)
    g = re.search(r'Игры (\d+) Голы (\d+)', t)
    birth = b and datetime.date(int(b.group(3)), MONTHS.index(b.group(2)) + 1, int(b.group(1)))
    return pid, full and full.group(1).strip(), birth, g and (int(g.group(1)), int(g.group(2)))


with ThreadPoolExecutor(3) as ex: cards = {c[0]: c[1:] for c in ex.map(card, list(stat))}
out = {tid: [] for tid in teams}
pinfo = {}
for pid, s in stat.items():
    full, birth, career = cards[pid]
    if not birth: continue
    age = TODAY.year - birth.year - ((TODAY.month, TODAY.day) < (birth.month, birth.day))
    amp = AMP[s['amp'].most_common(1)[0][0]] if s['amp'] else 'Ун..'
    out[s['team'].most_common(1)[0][0]].append({'pid': pid, 'name': s['name'], 'birth': f'{birth:%d.%m.%Y}, {age} лет', 'amp': amp,
                                                'stats': [str(s['games']), str(s['goals'])]})
    pinfo[f'nwf_{pid}'] = {'full': full, 'games': max(s['games'], career[0] if career else 0), 'goals': max(s['goals'], career[1] if career else 0)}
res = [{'league': 'nwf', 'host': HOST, 'team_id': tid, 'name': t['name'], 'region': t['region'], 'logo': t['logo'], 'players': out[tid]}
       for tid, t in teams.items()]
for t in res: print(t['name'], t['region'], len(t['players']), file=sys.stderr)
json.dump(res, open(CACHE + '/nwfutsal.json', 'w', encoding='utf8'), ensure_ascii=False, indent=1)
all_info = json.load(open(CACHE + '/pinfo.json', encoding='utf8'))
all_info.update(pinfo)
json.dump(all_info, open(CACHE + '/pinfo.json', 'w', encoding='utf8'), ensure_ascii=False, indent=0)
