# Лиги СНГ: Казахстан и Беларусь.
#   Беларусь — участники сезона 2026/27 с аренами (Википедия), составы — заявки на чемпионат с mini-football.by
#     (tools/abff.py, .cache/abff.json); без них — составы «Столицы» и «Витэна» из Википедии.
#   Казахстан — участники и составы с матч-центра www.sports.kz (tools/sportskz.py, .cache/sportskz.json); без них —
#     составы «Кайрата» и «Атырау» из Википедии.
# Недостающих игроков игра создаёт сама (с местными именами) по репутации клуба.
# Пишет js/data/kaz.js и blr.js. Запуск: python3 tools/cis.py
import json, math, os, zlib

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = HERE + '/../js/data'
CACHE = HERE + '/.cache'
YEAR = 2026

# состав: «Имя|Поз|год рождения[|гражданство][|+бонус]»
KAIRAT = '''Нарун Сериков|GK|2001|KAZ
Жоао Пауло|GK|1995|BRA|+3
Ромуло|UN|1986|RUS|+4
Эдсон|UN|1992|KAZ|+4
Жахангир Рашит|UN|2000|KAZ
Дамир Каирбай|UN|2004|KAZ|+2
Кевин Аррьета|UN|1997|ARG|+3
Жулио Занотто|UN|1996|ARM|+2
Даурен Турсагулов|UN|1995|KAZ|+4
Кайо Руис|UN|1997|BRA|+3
Атирсон|UN|2003|BRA|+3
Рафаэл|UN|2002|BRA|+2'''
ATYRAU = '''Нияз Алпысбай|GK|2008
Талгат Утепбергенов|GK|2003
Али Асылбеков|UN|2005
Расул Ерболулы|UN|2008
Алиссон Тайлан Сантос|UN|1997|BRA|+4
Рамазан Бисембайулы|UN|1999
Талап Есениязов|UN|1990|KAZ|+2
Наурызбек Амандыков|UN|2005
Жанмурат Амандос|UN|2008
Олжас Мейрамулы|UN|2008
Дулат Айтжанов|UN|2010
Данияр Салимжанов|UN|2005
Аят Мусабаев|UN|2007
Нурболат Батырханов|UN|1998
Азат Кайржанов|UN|2004
Нурали Келбатыр|UN|2010'''
STOLITSA = '''Максим Трофимович|GK|1999
Алексей Лукша|GK|1992
Олег Горбенко|UN|1987
Владимир Жигалко|UN|1990
Ильнур Исламов|UN|1990|RUS|+2
Павел Книга|UN|1993
Артём Козел|UN|1994
Саркис Маргарян|UN|1993|BLR|+2
Владимир Пискун|UN|1993
Александр Умпирович|UN|1996
Игорь Щербич|UN|1992
Дмитрий Шведко|UN|2000
Сергей Лавор|UN|1993'''
# состав 2023/24 (Саргис Маргарян с тех пор играет за «Столицу»)
VITEN = '''Мирослав Эльяшевич|GK|2001
Евгений Змысля|GK|1993
Максим Батурин|DF|1993
Павел Раговик|DF|1991
Сергей Остертах|DF|1994
Евгений Балдин|UN|1995
Сергей Синицкий|UN|1994
Арчил Себисквирадзе|UN|1989|GEO|+2
Юрий Рабыко|UN|1987
Владислав Бреднев|UN|2000
Артём Зуёнок|FW|1990
Владимир Разуванов|FW|1992'''

# (id, название, город, арена, вместимость, цвета, репутация, состав)
LEAGUES = {
    'kaz': {'name': 'Чемпионат Казахстана', 'short': 'Казахстан', 'country': 'KAZ', 'weekday': 6, 'ticket': 2, 'teams': [
        ('kz_kairat', 'Кайрат', 'Алматы', 'СК «Балуан Шолак»', 5000, ['#d71920', '#f2c200'], 80, KAIRAT),
        ('kz_semey', 'Семей', 'Семей', '«Абай Арена»', 2500, ['#5fa8d3', '#1a3d6b'], 77, ''),
        ('kz_aktobe', 'Актобе', 'Актобе', '—', 1500, ['#c8102e', '#1d3f8f'], 70, ''),
        ('kz_atyrau', 'Атырау', 'Атырау', '—', 1500, ['#1b1b1b', '#ffffff'], 68, ATYRAU),
        ('kz_ayat', 'Аят', 'Рудный', '—', 1200, ['#d71920', '#1b1b1b'], 69, ''),
        ('kz_tulpar', 'Тулпар', 'Караганда', '—', 1200, ['#c8102e', '#f2c200'], 57, ''),
        ('kz_kaspiy', 'Каспий', 'Актау', '—', 1000, ['#1b1b1b', '#ffffff'], 62, ''),
        ('kz_elorda', 'Елорда', 'Астана', '—', 1000, ['#e3a72f', '#1a3d8f'], 57, ''),
        ('kz_bayterek', 'Байтерек', 'Уральск', '—', 1000, ['#1e7b34', '#ffffff'], 59, ''),
        ('kz_shymkent', 'Шымкент', 'Шымкент', '—', 1000, ['#d71920', '#1b1b1b'], 54, ''),
        ('kz_okzhetpes', 'Окжетпес', 'Кокшетау', '«Кокше Арена»', 2000, ['#5fa8d3', '#12355b'], 54, ''),
    ]},
    'blr': {'name': 'Чемпионат Беларуси', 'short': 'Беларусь', 'country': 'BLR', 'weekday': 6, 'ticket': 1, 'teams': [
        ('by_stolitsa', 'Столица', 'Минск', 'Дворец спорта «Уручье»', 3000, ['#1e8f3a', '#ffffff'], 70, STOLITSA),
        ('by_viten', 'Витэн', 'Орша', 'СК «Олимпиец»', 250, ['#c8102e', '#ffffff'], 66, VITEN),
        ('by_vrz', 'ВРЗ', 'Гомель', 'Универсальный зал игровых видов спорта', 750, ['#1b1b1b', '#c8102e'], 64, ''),
        ('by_minsk', 'Минск', 'Минск', 'Спорткомплекс МАПИД', 500, ['#1b2f8f', '#e30613'], 62, ''),
        ('by_borisov', 'Борисов-900', 'Борисов', 'Физкультурно-оздоровительный центр', 400, ['#1e6b34', '#ffffff'], 58, ''),
        ('by_bch', 'БЧ', 'Гомель', 'СК «Локомотив»', 750, ['#1f4fa3', '#f07010'], 56, ''),
        ('by_dorozhnik', 'Дорожник', 'Минск', 'Спорткомплекс МАПИД', 500, ['#1e8f3a', '#e83a1a'], 56, ''),
        ('by_merkury', 'Меркурий-ГТК', 'Брест', 'СК «Виктория»', 3740, ['#3f9c9c', '#ffffff'], 55, ''),
        ('by_okhrana', 'Охрана-Динамо', 'Минск', 'Спорткомплекс МАПИД', 500, ['#1f4fa3', '#ffffff'], 54, ''),
        ('by_uvd', 'УВД-Динамо', 'Гродно', 'Спорткомплекс «Виктория»', 300, ['#1f5fbf', '#ffffff'], 52, ''),
        ('by_lida', 'Лида-БутикАвто', 'Лида', 'СОК «Олимпия»', 680, ['#1b1b1b', '#c8102e'], 52, ''),
        ('by_ckk', 'ЦКК', 'Светлогорск', 'СК «Олимп»', 500, ['#f2d21b', '#1e8f4e'], 50, ''),
    ]},
}


def players(text, rep, country):
    rows = []
    for line in text.strip().split('\n') if text else []:
        f = line.split('|')
        name, pos, born = f[0], f[1], int(f[2])
        nat = next((x for x in f[3:] if x.isalpha()), country)
        bonus = next((int(x) for x in f[3:] if x.startswith('+')), 0)
        age = YEAR - born
        # уровень клуба (как у сгенерированных игроков: 30 + репутация / 2), разброс — детерминированный по имени
        o = 30 + rep * 0.5 + bonus + (zlib.crc32(name.encode()) % 7 - 3)
        if age < 21: o -= (21 - age) * 1.5
        if age > 32: o -= (age - 32) * 0.8
        rows.append((['GK', 'DF', 'UN', 'FW'].index(pos), f'{name}|{pos}|{age}|0|{nat}|{round(max(40, min(88, o)))}'))
    return '\n'.join(r[1] for r in sorted(rows, key=lambda r: r[0]))


def from_abff(t, rep):
    """Заявка с mini-football.by (tools/abff.py): рейтинг — как у российских игроков в build.py, от уровня клуба,
    доли сыгранных матчей сезона, опыта (матчи за карьеру на сайте) и результативности."""
    level = rep - 6
    gm = max([p['games'] for p in t['players']] + [1])
    rows = []
    for p in t['players']:
        if not p['age']: continue
        pos = 'GK' if p['gk'] else 'UN'
        share = min(1, p['games'] / gm)
        exp = min(1, math.log10(1 + max(p['career'], p['games'])) / math.log10(250))
        if pos == 'GK': adj = -10 + 9 * share + 7 * exp
        else: adj = -10 + 7 * share + 6 * exp + 3 * min(1, (p['goals'] / max(p['games'], 1)) / 0.7) * min(1, p['games'] / 4)
        if p['age'] < 20: adj -= (20 - p['age']) * 1.2
        if p['age'] > 33: adj -= (p['age'] - 33) * 0.8
        last, first = p['name'].split(' ', 1)
        ovr = max(35, min(90, round(level + adj)))
        rows.append((pos != 'GK', -ovr, f"{first} {last}|{pos}|{p['age']}|0|{p.get('born') or 'BLR'}|{ovr}"))
    return '\n'.join(r[2] for r in sorted(rows))


SRC = {'kaz': 'Клубы и составы — матч-центр sports.kz (без статистики игроков, рейтинг по уровню клуба и роли)' if os.path.exists(CACHE + '/sportskz.json') else 'Участники — таблица чемпионата, составы «Кайрата» и «Атырау» — Википедия',
       'blr': 'Составы — заявки на mini-football.by (амплуа указано только у вратарей), рейтинг — по роли в команде' if os.path.exists(CACHE + '/abff.json') else 'Клубы и составы — Википедия'}
# составы Беларуси с сайта БАМФ, если они скачаны, заменяют составы из Википедии
abff = {t['name'].lower(): t for t in json.load(open(CACHE + '/abff.json', encoding='utf8'))} if os.path.exists(CACHE + '/abff.json') else {}

# Казахстан: составы с матч-центра www.sports.kz (tools/sportskz.py). Состав клуба там копится годами, поэтому берутся
# игроки с указанным возрастом (или известным годом рождения из Википедии), в приоритете — с указанным амплуа и игроки
# сборной (матч Казахстан — Беларусь, 20.10.2026, kff.kz); не больше 18 на клуб. Статистики нет — рейтинг по уровню
# клуба, возрасту, статусу легионера и сборной.
NATIONAL = {'Игита', 'Турсагулов', 'Оразов', 'Турегазин', 'Пиялы', 'Сериков', 'Кнауб', 'Рашит', 'Дуглас', 'Эдсон', 'Карменов',
            'Бактияров', 'Валиулин', 'Валиуллин', 'Акбаликов'}
KZ_POS = {'Вратарь': 'GK', 'Защитник': 'DF', 'Универсал': 'UN', 'Нападающий': 'FW', 'Пивот': 'FW'}
core = open(HERE + '/../js/core.js', encoding='utf8').read()
NATS = {v: k for k, v in __import__('re').findall(r"(\w{3}): '([^']+)'", core[core.index('FM.NAT = {'):core.index('};', core.index('FM.NAT = {'))])}
NATS.update({'Россия': 'RUS', 'Киргизия': 'KGZ', 'Беларусь': 'BLR'})
WIKI_BORN = {f.split('|')[0]: int(f.split('|')[2]) for f in (KAIRAT + '\n' + ATYRAU).split('\n')}


def national(name): return any(w in NATIONAL for w in name.split())


def from_sportskz(t, rep):
    level = rep - 6
    cand, seen = [], set()
    for p in t['players']:
        age = p['age'] or (YEAR - WIKI_BORN[p['name']] if p['name'] in WIKI_BORN else None)
        if not age or age > 42: continue
        nat = NATS.get(p['nat'], 'KAZ')
        if KZ_OWNER.get(p['name'], t['name']) != t['name'] or p['name'] in seen: continue
        seen.add(p['name'])
        nt = national(p['name']) and (nat == 'KAZ' or p['name'] in ('Эдсон Сантос', 'Дуглас'))
        cand.append((-(2 * bool(p['pos']) + 3 * nt + bool(p['age'])), p['name'], KZ_POS.get(p['pos'], 'UN'), age, nat, nt))
    cand.sort()
    rows = []
    for _, name, pos, age, nat, nt in cand[:18]:
        adj = -3 + 5 * nt + 3 * (nat != 'KAZ') + (zlib.crc32(name.encode()) % 5 - 2)
        if age < 20: adj -= (20 - age) * 1.2
        if age > 33: adj -= (age - 33) * 0.8
        ovr = max(40, min(88, round(level + adj)))
        rows.append((['GK', 'DF', 'UN', 'FW'].index(pos), -ovr, f'{name}|{pos}|{age}|0|{nat}|{ovr}'))
    return '\n'.join(r[2] for r in sorted(rows))


sportskz = {t['name'].lower(): t for t in json.load(open(CACHE + '/sportskz.json', encoding='utf8')) if t['players'] and t['name'] != 'Астана'} if os.path.exists(CACHE + '/sportskz.json') else {}
# игрок, записанный в составы нескольких клубов, остаётся в клубе с самым коротким списком (длинные копят ушедших)
KZ_OWNER = {}
for t in sorted(sportskz.values(), key=lambda t: -len(t['players'])):
    for p in t['players']: KZ_OWNER[p['name']] = t['name']

for lid, L in LEAGUES.items():
    n = len(L['teams'])
    rounds = 2 * (n - 1 + n % 2)
    items = []
    for tid, name, city, arena, cap, col, rep, squad in L['teams']:
        real = abff.get(name.lower()) if lid == 'blr' else None
        kz = sportskz.get(name.lower()) if lid == 'kaz' else None
        p = from_abff(real, rep) if real else from_sportskz(kz, rep) if kz else players(squad, rep, L['country'])
        if lid == 'blr' and not real: print('нет заявки на mini-football.by:', name)
        items.append(f"    {{ id: '{tid}', name: '{name}', city: '{city}', stadium: '{arena}', cap: {cap}, colors: ['{col[0]}', '{col[1]}'], "
                     f"rep: {rep}, money: {max(80, (rep - 40) * 12)}, players: `" + (f'\n{p}' if p else '') + '` },')
    head = (f"// {L['name']}, сезон 2026/27. {SRC[lid]}; у клубов без состава\n"
            "// игроков создаёт игра. Строка игрока: Имя|Позиция|Возраст|0|Гражданство|Рейтинг. Без плей-офф.\n"
            f"FM.addLeague({{\n  id: '{lid}', name: '{L['name']}', short: '{L['short']}', country: '{L['country']}', tier: 1, weekday: {L['weekday']},\n"
            f"  autumn: {{ from: '09-12', rounds: {round(rounds * 0.55)} }}, spring: {{ from: '01-16', rounds: {rounds - round(rounds * 0.55)} }},\n"
            f"  ticket: {L['ticket']}, prize: [200, 140, 100, 80, 60, 50, 40, 35, 30, 25, 20, 20],\n  teams: [\n")
    open(f'{OUT}/{lid}.js', 'w', encoding='utf8').write(head + '\n'.join(items) + '\n  ],\n});\n')
    print(lid, n, 'клубов', rounds, 'туров')
