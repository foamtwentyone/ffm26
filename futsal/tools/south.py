# Первая лига, зона «Юг и Северный Кавказ»: участники Чемпионата ЮФО и СКФО. Единого сайта с заявками нет, поэтому
# составы собраны со страниц, сохранённых вручную в .cache/saved/south/<id клуба>.html:
#   join.sport (krasnodarlfl.ru, fmfabinsk.ru, nml.su) — текущий состав (дата рождения, амплуа, игры, голы) или заявка;
#   ingame-sports.ru — состав в Чемпионате ЮФО и СКФО (возраст, амплуа, голы; матчей нет);
#   ВКонтакте — состав «Спортинга» на 2025 год (только фамилии и вратари).
# Где возраст не указан, ставится 26 лет; у составов без матчей рейтинг считается со средней ролью (как у «Наградиона»).
# Пишет .cache/south.json в формате заявок scrape.py. Запуск: python3 tools/south.py, затем python3 tools/build.py
import glob, html, json, os, re

CACHE = os.path.dirname(os.path.abspath(__file__)) + '/.cache'
DEFAULT_AGE = 26
AMP = {'Вратарь': 'Вр.', 'Защитник': 'Зщ.', 'Полузащитник': 'Ун..', 'Универсал': 'Ун..', 'Нападающий': 'Нп.',
       'Вр.': 'Вр.', 'Зщ.': 'Зщ.', 'Пз.': 'Ун..', 'Ун.': 'Ун..', 'Нп.': 'Нп.',
       'ВРТ': 'Вр.', 'ЗАЩ': 'Зщ.', 'ПЗЩ': 'Ун..', 'УНИ': 'Ун..', 'НАП': 'Нп.'}
MONTHS = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']


def txt(s): return ' '.join(html.unescape(re.sub(r'<[^>]+>', ' ', s)).split())


def player(name, amp, age, games, goals, birth=None):
    return {'pid': '', 'name': name, 'amp': AMP.get(amp, 'Ун..'), 'birth': f"{birth or '—'}, {age or DEFAULT_AGE} лет",
            'stats': [str(games), str(goals)]}


def roster(a):
    """Текущий состав на join.sport: карточки blk-teamroster (амплуа бывает не у всех)."""
    cur = a[a.find('data-troster-pane="0"'):a.find('data-troster-pane="1"')]
    out = []
    for c in cur.split('<li class="blk-teamroster__item')[1:]:
        first, last = (txt(re.search(rf'blk-teamroster__{k}">(.*?)</span>', c, re.S).group(1)) for k in ('first-name', 'last-name'))
        amp = re.search(r'blk-teamroster__amplua[^>]*>(.*?)<', c)
        bd = re.search(r'birth-date">\s*(\d+) (\w+) (\d{4})', c)
        age = re.search(r'blk-teamroster__age">(\d+)', c)
        st = [int(x) for x in re.findall(r'stat-number">(\d+)<', c)]
        birth = bd and f'{int(bd.group(1)):02d}.{MONTHS.index(bd.group(2)) + 1:02d}.{bd.group(3)}'
        out.append(player(f'{last} {first}', amp and txt(amp.group(1)), age and int(age.group(1)), *(st + [0, 0])[:2], birth))
    return out


def application(a):
    """Заявка на турнир join.sport: таблица blk-tteams (амплуа, дата рождения, игры, голы)."""
    pane = a.split('js-tteams-pane" id="players-1"', 1)[1].split('id="players-2"', 1)[0]
    out = []
    for row in re.findall(r'<tr class="blk-tteams__row">(.*?)</tr>', pane, re.S):
        d = {cls: txt(c) for cls, c in re.findall(r'<td class="blk-tteams__cell blk-tteams__cell--(\w+)[^"]*"[^>]*>(.*?)</td>', row, re.S) if cls != 'var'}
        var = [txt(c) for c in re.findall(r'blk-tteams__cell--var[^"]*"[^>]*>(.*?)</td>', row, re.S)]
        name = re.search(r'player-name">(.*?)</p>', row, re.S)
        if not name: continue
        birth, _, age = d.get('birth', '').partition(',')
        num = lambda x: int(x) if x.isdigit() else 0
        out.append(player(txt(name.group(1)), d.get('amplua'), num(age.split()[0]) if age.strip() else None,
                          num(var[0]) if var else 0, num(var[1]) if len(var) > 1 else 0, birth.strip() or None))
    return out


def ingame(a):
    """Состав на ingame-sports.ru: Игрок, Возраст, Позиция, Голы."""
    out = []
    for row in re.split(r'TeamSquads_teamRow__', a)[1:]:
        cells = [txt(c) for c in re.findall(r'TeamSquads_teamRowText__\w+">(.*?)</span>', row, re.S)]
        if len(cells) < 5 or cells[3] not in AMP: continue
        out.append(player(cells[1], cells[3], int(cells[2]) if cells[2].isdigit() else None, 0, int(cells[4]) if cells[4].isdigit() else 0))
    return out


def vk(a):
    """Пост ВКонтакте: «№ 27 - Устименко Евгений (Врт)»."""
    b = txt(re.sub(r'<script.*?</script>|<style.*?</style>', '', a, flags=re.S))
    b = b[b.rfind('Состав команды'):]
    return [player(n.strip(), 'ВРТ' if gk else None, None, 0, 0) for n, gk in re.findall(r'№\s*\d+\s*-\s*([А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+)\s*(\(Врт\))?', b)]


out = []
for f in sorted(glob.glob(CACHE + '/saved/south/*.html')):
    a = open(f, encoding='utf8', errors='replace').read()
    tid = os.path.basename(f)[:-5]
    if 'TeamSquads_' in a: players, nostats = ingame(a), True
    elif re.search(r'saved from url=\(\d+\)https://vk\.(ru|com)/', a): players, nostats = vk(a), True
    elif 'data-troster-pane="0"' in a: players, nostats = roster(a), False
    else: players, nostats = application(a), False
    # у ingame-sports в «играх» нули — роль игрока в команде неизвестна
    out.append({'league': 'south', 'team_id': tid, 'nostats': nostats, 'players': players})
    print(tid, len(players), 'без статистики' if nostats else '')
json.dump(out, open(CACHE + '/south.json', 'w', encoding='utf8'), ensure_ascii=False, indent=1)
