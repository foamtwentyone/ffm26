# Иностранные лиги: из .cache/onefutsal.json (tools/onefutsal.py) пишет js/data/<лига>.js.
# Рейтинг игрока — по рыночной стоимости на той же шкале, что у российских игроков (подогнано по игрокам Суперлиги,
# у которых есть и стоимость на onefutsal, и рейтинг в игре): 71 + 14·log10(стоимость / 60 тыс. €) с поправкой
# на возраст; репутация клуба — 72 + 18·log10(стоимость состава / 1 млн €). Цвета клуба — по эмблеме.
# Запуск после onefutsal.py: python3 tools/foreign.py, затем python3 tools/logos.py
import io, json, math, os, re, subprocess, sys
from collections import Counter
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
CACHE = HERE + '/.cache'
OUT = HERE + '/../js/data'
LEAGUES = {
    'esp': {'name': 'Примера LNFS', 'short': 'Испания', 'country': 'ESP', 'weekday': 6, 'ticket': 4},
    'por': {'name': 'Лига Плакард', 'short': 'Португалия', 'country': 'POR', 'weekday': 6, 'ticket': 3},
    'ita': {'name': 'Серия А', 'short': 'Италия', 'country': 'ITA', 'weekday': 6, 'ticket': 2},
    'bra': {'name': 'Лига Насьонал (LNF)', 'short': 'Бразилия', 'country': 'BRA', 'weekday': 5, 'ticket': 2},
}
POS = {'Вратарь': 'GK', 'Защитник': 'DF', 'Универсал': 'UN', 'Нападающий': 'FW'}
# гражданство: русское название страны → код (из FM.NAT в js/core.js) и несколько вариантов написания
core = open(HERE + '/../js/core.js', encoding='utf8').read()
NAT = {v: k for k, v in re.findall(r"(\w{3}): '([^']+)'", core[core.index('FM.NAT = {'):core.index('};', core.index('FM.NAT = {'))])}
NAT.update({'Россия': 'RUS', 'Казахстан': 'KAZ', 'Беларусь': 'BLR', 'Белоруссия': 'BLR', 'Кыргызстан': 'KGZ', 'Киргизия': 'KGZ',
            'Великобритания': 'ENG', 'Англия': 'ENG', 'США': 'USA', 'Кот-д’Ивуар': 'CIV', 'Кот-д\'Ивуар': 'CIV'})
unknown = Counter()


def code(nat, default):
    if not nat: return default
    for part in re.split(r'[,/;]| и ', nat):
        part = part.strip()
        if part in NAT: return NAT[part]
    unknown[nat] += 1
    return default


def ovr_of(vk, age):
    o = 71 + 14 * math.log10(max(vk, 2) / 60)
    if age < 21: o -= (21 - age) * 1.2
    if age > 32: o -= (age - 32) * 0.6
    return round(max(40, min(90, o)))


def colors(tid, url):
    """Два основных цвета эмблемы (без белого фона и прозрачности); без эмблемы — нейтральные."""
    if not url: return ['#1d3f8f', '#ffffff']
    p = f'{CACHE}/logos/{tid}{os.path.splitext(url.split("?")[0])[1] or ".png"}'
    if not os.path.exists(p) or not os.path.getsize(p):
        subprocess.run(['curl', '-sS', '-m', '40', '-A', 'Mozilla/5.0', url, '-o', p], capture_output=True)
    try:
        im = Image.open(p).convert('RGBA').resize((64, 64))
    except Exception:
        return ['#1d3f8f', '#ffffff']
    px = [c[:3] for c in im.getdata() if c[3] > 200 and not min(c[:3]) > 225]
    if not px: return ['#1d3f8f', '#ffffff']
    q = Counter(tuple(v // 32 * 32 + 16 for v in c) for c in px).most_common()
    main = q[0][0]
    second = next((c for c, _ in q[1:] if sum(abs(a - b) for a, b in zip(c, main)) > 120), (255, 255, 255))
    return ['#%02x%02x%02x' % main, '#%02x%02x%02x' % second]


def slug(url): return re.sub(r'[^a-z0-9]+', '_', url.rstrip('/').rsplit('/', 1)[1].lower()).strip('_')[:24]


clubs = json.load(open(CACHE + '/onefutsal.json', encoding='utf8'))
os.makedirs(CACHE + '/logos', exist_ok=True)
for lg, L in LEAGUES.items():
    items = []
    for c in sorted((c for c in clubs if c['league'] == lg), key=lambda c: -sum(p['value'] for p in c['players'])):
        tid = f'{lg}_{slug(c["url"])}'
        rows = []
        for p in c['players']:
            pos = POS.get(p['pos'])
            if not pos or not p['age']: continue
            vk = max(5, round(p['value'] / 1000))
            rows.append((['GK', 'DF', 'UN', 'FW'].index(pos), -vk, f"{p['name']}|{pos}|{p['age']}|{vk}|{code(p['nat'], L['country'])}|{ovr_of(vk, p['age'])}"))
        if len(rows) < 8: continue
        rows.sort()
        sv = sum(-r[1] for r in rows)
        arena, _, city = (c['arena'] or '—').rpartition(',')
        arena, city = (arena or city).strip() or '—', city.strip() if arena else '—'
        rep = round(max(45, min(90, 72 + 18 * math.log10(max(sv, 50) / 1000))))
        col = colors(tid, c['logo'])
        name = re.sub(r'\s*\(.*?\)$', '', c['name']).replace("'", '’')
        items.append(f"    {{ id: '{tid}', name: '{name}', city: '{city.replace(chr(39), '’')}', stadium: '{arena.replace(chr(39), '’')}', cap: {1000 + 100 * max(0, rep - 60)}, "
                     f"colors: ['{col[0]}', '{col[1]}'], rep: {rep}, money: {round(sv * 0.4 / 10) * 10}, players: `\n" + '\n'.join(r[2] for r in rows) + '` },\n')
        print(lg, tid, name, len(rows), sv, rep, file=sys.stderr)
    n = len(items)
    rounds = 2 * (n - 1 + n % 2)
    head = (f"// {L['name']} ({L['short']}), сезон 2026/27. Составы и рыночная стоимость — onefutsal.com; рейтинг рассчитан по стоимости\n"
            "// на шкале российских лиг. Строка игрока: Имя|Позиция|Возраст|Стоимость, тыс. €|Гражданство|Рейтинг. Два круга, без плей-офф.\n"
            f"FM.addLeague({{\n  id: '{lg}', name: '{L['name']}', short: '{L['short']}', country: '{L['country']}', tier: 1, weekday: {L['weekday']},\n"
            f"  autumn: {{ from: '09-12', rounds: {round(rounds * 0.55)} }}, spring: {{ from: '01-16', rounds: {rounds - round(rounds * 0.55)} }},\n"
            f"  ticket: {L['ticket']}, prize: [400, 280, 200, 150, 120, 100, 80, 70, 60, 50, 40, 35, 30, 25, 20, 20],\n  teams: [\n")
    open(f'{OUT}/{lg}.js', 'w', encoding='utf8').write(head + '\n'.join(items) + '  ],\n});\n')
if unknown: print('гражданство не распознано:', dict(unknown), file=sys.stderr)
