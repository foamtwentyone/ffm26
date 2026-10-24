# Составы с сайтов на платформе «Наградион» (sffu.nagradion.ru, ffmo.ru, stat.ffspb.org). Эти сайты не открываются
# из среды сборки, поэтому страницы составов («.../tournamentN/team/M/players») сохраняются в браузере
# (Ctrl+S, только .html) в папку tools/.cache/saved. Пишет .cache/nagradion.json в формате заявок scrape.py.
# В составе на «Наградионе» есть только фамилия, имя, возраст и номер — амплуа неизвестно (все — универсалы,
# недостающих вратарей игра генерирует), даты рождения нет.
# Запуск: python3 tools/nagradion.py
import glob, html, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
CACHE = HERE + '/.cache'


def txt(s): return ' '.join(html.unescape(re.sub(r'<[^>]+>', ' ', s)).split())


teams = []
for f in sorted(glob.glob(CACHE + '/saved/*.html')):
    t = open(f, encoding='utf8', errors='replace').read()
    url = re.search(r'saved from url=\(\d+\)(\S+)', t)
    m = re.search(r'https?://([^/]+)/tournament(\d+)/team/(\d+)/players', url.group(1) if url else '')
    if not m: continue
    host, tour, team = m.groups()
    name = re.search(r'<t[hd][^>]*>\s*Название\s*</t[hd]>\s*<td[^>]*>(.*?)</td>', t, re.S)
    city = re.search(r'<t[hd][^>]*>\s*Город\s*</t[hd]>\s*<td[^>]*>(.*?)</td>', t, re.S)
    players = []
    for row in re.findall(r'<div id="request_view_row_\d+"(.*?)ID РФС', t, re.S):
        last = re.search(r'title="Страница профиля">(.*?)</a>', row, re.S)
        rest = re.search(r'</strong><br>(.*?)<br>(.*?)</div>', row, re.S)
        pid = re.search(r'/player/(\d+)', row)
        if not (last and rest and pid): continue
        age = re.search(r'(\d+)', txt(rest.group(2)))
        num = re.search(r'Номер игрока:\s*(\d+)', row)
        players.append({'pid': f'n{pid.group(1)}', 'name': f'{txt(last.group(1))} {txt(rest.group(1))}', 'amp': 'Ун..',
                        'birth': f'—, {age.group(1)} лет' if age else '', 'num': num and num.group(1), 'stats': ['0', '0']})
    clean = re.sub(r'^(МБУ ДО\s+)?(МФК|ФК|МФС)?\s*', '', txt(name.group(1)).strip('«»" ')) if name else team
    teams.append({'league': 'nagr', 'host': host, 'team_id': f'n{team}', 'tournament': tour, 'name': clean,
                  'region': city and txt(city.group(1)), 'logo': None, 'players': players})
    print(host, tour, clean, city and txt(city.group(1)), len(players), file=sys.stderr)
json.dump(teams, open(CACHE + '/nagradion.json', 'w'), ensure_ascii=False, indent=1)
