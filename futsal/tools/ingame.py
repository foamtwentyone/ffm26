# Зона «Юг и Северный Кавказ»: заявки клубов на Чемпионат ЮФО и СКФО с ingame-sports.ru (данные — api.ingame-server.ru).
# Берётся самая свежая заявка на чемпионат («2026» новее «2025/26»); у игрока — дата рождения, амплуа, матчи и голы
# за этот клуб и матчи за всё время на сайте. Пишет .cache/ingame.json (south.py берёт эти составы вместо сохранённых
# страниц) и добавляет карточки игроков в .cache/pinfo.json. Запуск: python3 tools/ingame.py, затем south.py и build.py
import datetime, json, os, re, subprocess, sys, time
from concurrent.futures import ThreadPoolExecutor

CACHE = os.path.dirname(os.path.abspath(__file__)) + '/.cache'
BASE = CACHE + '/raw'
API = 'https://api.ingame-server.ru'
TEAMS = {'gvardeets': 3465, 'alfa': 3453, 'kapitan': 3460, 'sporting': 889, 'rsh': 13702, 'shakhter': 9911, 'aviator': 9950}
AMP = {'ВРТ': 'Вр.', 'ЗАЩ': 'Зщ.', 'ПЗЩ': 'Ун..', 'УНИ': 'Ун..', 'НАП': 'Нп.'}
TODAY = datetime.date(2026, 10, 1)


def get(path, name):
    p = f'{BASE}/ig_{name}.json'
    if not os.path.exists(p) or os.path.getsize(p) < 50:
        for i in range(5):
            r = subprocess.run(['curl', '-sS', '-m', '40', API + path, '-o', p], capture_output=True)
            if r.returncode == 0 and os.path.exists(p) and os.path.getsize(p) > 50: break
            time.sleep(2 * (i + 1))
        else:
            print('FAIL', path, file=sys.stderr)
            return {}
    return json.load(open(p, encoding='utf8'))


def season(label):
    # «Чемпионат ЮФО и СКФО 2025/26» → 2025.5, «… 2026» → 2026
    m = re.search(r'(\d{4})(/\d\d)?\s*$', label.strip())
    return int(m.group(1)) + (0.5 if m.group(2) else 1) if m else 0


out, pinfo = {}, {}
for tid, iid in TEAMS.items():
    team = get(f'/teams/{iid}/all', f'team_{iid}')
    rosters = [r for r in team['applications']['rosters'] if 'ЮФО' in r['label']]
    roster = max(rosters, key=lambda r: season(r['label']))

    def player(p):
        d = get(f"/players/{p['id']}/all", f"player_{p['id']}")
        stats = (d.get('stats') or {}).get('stats', [])
        club = next((s for s in stats if s['team_id'] == iid), {'games': 0, 'goals': 0})
        total = next((s for s in stats if s['team_id'] == 0), club)
        return p, club, total
    with ThreadPoolExecutor(4) as ex: rows = list(ex.map(player, roster['data']))
    players = []
    for p, club, total in rows:
        b = p.get('birthday')
        birth = b and datetime.date.fromisoformat(b[:10])
        age = birth and TODAY.year - birth.year - ((TODAY.month, TODAY.day) < (birth.month, birth.day)) or p.get('age')
        players.append({'pid': str(p['id']), 'name': f"{p['family'].strip()} {p['name'].strip()}",
                        'birth': f"{birth:%d.%m.%Y}, {age or 26} лет" if birth else f"—, {age or 26} лет",
                        'amp': AMP.get(p.get('short_position'), 'Ун..'), 'stats': [str(club['games'] or 0), str(club['goals'] or 0)]})
        pinfo[f"south_{p['id']}"] = {'full': ' '.join(x.strip() for x in (p['family'], p['name'], p.get('father_name') or '') if x and x.strip()),
                                     'games': total['games'] or 0, 'goals': total['goals'] or 0}
    out[tid] = {'source': roster['label'], 'logo': API + team['image'] if team.get('image') else None, 'players': players}
    print(tid, team['name'], roster['label'], len(players), file=sys.stderr)
json.dump(out, open(CACHE + '/ingame.json', 'w', encoding='utf8'), ensure_ascii=False, indent=1)
all_info = json.load(open(CACHE + '/pinfo.json', encoding='utf8'))
all_info.update(pinfo)
json.dump(all_info, open(CACHE + '/pinfo.json', 'w', encoding='utf8'), ensure_ascii=False, indent=0)
