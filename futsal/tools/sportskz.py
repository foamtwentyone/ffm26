# Казахстан: клубы чемпионата 2026/27 с матч-центра www.sports.kz — таблица (id клуба, эмблема) и состав со страницы
# клуба (гражданство, амплуа, возраст). Статистики игроков там нет. Пишет .cache/sportskz.json.
# Запуск: python3 tools/sportskz.py, затем cis.py и logos.py
import html, json, os, re, subprocess, sys, time

CACHE = os.path.dirname(os.path.abspath(__file__)) + '/.cache'
BASE = CACHE + '/raw'
SITE = 'https://www.sports.kz'
TOURNAMENT, TABLE = 10586, 947262  # чемпионат Казахстана по футзалу, группа сезона 2026/27


def fetch(args, p, minsize):
    if not os.path.exists(p) or os.path.getsize(p) < minsize:
        for i in range(5):
            r = subprocess.run(['curl', '-sS', '-m', '40', '-A', 'Mozilla/5.0', *args, '-o', p], capture_output=True)
            if r.returncode == 0 and os.path.exists(p) and os.path.getsize(p) >= minsize: break
            time.sleep(2 * (i + 1))
        else:
            sys.exit(f'FAIL {args}')
    return open(p, encoding='utf8').read()


def txt(s): return ' '.join(html.unescape(re.sub(r'<[^>]+>', ' ', s)).split())


table = json.loads(fetch(['-X', 'POST', '-H', 'X-Requested-With: XMLHttpRequest', '-d',
                          f'action=table&tournament_id={TOURNAMENT}&value={TABLE}&sport=78', SITE + '/live/ajax'],
                         f'{BASE}/kz_table_{TABLE}.json', 100))
out = []
for c in table['list']:
    page = fetch([f"{SITE}/live/team/{c['command_id']}"], f"{BASE}/kz_team_{c['command_id']}.html", 50000)
    squad = page.split('id="squad"', 1)[1].split('</table>', 1)[0] if 'id="squad"' in page else ''
    players = []
    for row in re.findall(r'<tr>(.*?)</tr>', squad, re.S):
        td = re.findall(r'<td>(.*?)</td>', row, re.S)
        nat = re.search(r'alt="([^"]*)"', row)
        if len(td) < 4: continue
        age = txt(td[3])
        players.append({'name': txt(td[1]), 'nat': nat and nat.group(1), 'pos': txt(td[2]), 'age': int(age) if age.isdigit() else None})
    out.append({'id': c['command_id'], 'name': c['name'], 'logo': f"{SITE}/upload/live/{c['logo']}", 'played': int(c['props']['played']), 'players': players})
    print(c['name'], len(players), file=sys.stderr)
json.dump(out, open(CACHE + '/sportskz.json', 'w', encoding='utf8'), ensure_ascii=False, indent=1)
