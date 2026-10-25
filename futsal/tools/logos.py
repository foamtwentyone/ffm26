# Эмблемы клубов: скачивает картинки из заявок РФС (st.joinsport.io, ссылки собирает scrape.py) и mosff.ru (mosff.py)
# и упаковывает их в js/data/logos.js — WebP 96px в base64, чтобы страница грузилась одним файлом.
# Запуск после scrape.py и build.py: python3 tools/logos.py
import base64, glob, io, json, os, re, subprocess, sys, time
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
CACHE = HERE + '/.cache'
OUT = HERE + '/../js/data/logos.js'
os.makedirs(CACHE + '/logos', exist_ok=True)

# id клубов в игре — из файлов лиг: название → id
ids = {}
for f in ('sl', 'vlw', 'vle', 'pl1', 'pl2', 'pl3', 'pl4', 'pl5', 'pl6', 'pl7', 'pl8', 'pl9', 'pl10', 'pl11'):
    for m in re.finditer(r"\{ id: '([^']+)', name: '([^']+)'", open(f'{HERE}/../js/data/{f}.js', encoding='utf8').read()):
        ids[m.group(2)] = m.group(1)

def pack(raw):
    im = Image.open(raw).convert('RGBA')
    # эмблемы часто приходят на белом фоне — делаем его прозрачным, если он сплошной по углам
    if True:
        px = im.load()
        w, h = im.size
        corners = [px[0, 0], px[w - 1, 0], px[0, h - 1], px[w - 1, h - 1]]
        if all(min(c[:3]) > 240 for c in corners):
            for y in range(h):
                for x in range(w):
                    r, g, b, a = px[x, y]
                    if min(r, g, b) > 245: px[x, y] = (r, g, b, 0)
    bbox = im.getbbox()
    if bbox: im = im.crop(bbox)
    side = max(im.size)
    sq = Image.new('RGBA', (side, side), (0, 0, 0, 0))
    sq.paste(im, ((side - im.size[0]) // 2, (side - im.size[1]) // 2))
    sq = sq.resize((96, 96), Image.LANCZOS)
    buf = io.BytesIO()
    sq.save(buf, 'WEBP', quality=88, method=6)
    return 'data:image/webp;base64,' + base64.b64encode(buf.getvalue()).decode()


teams = json.load(open(CACHE + '/teams.json', encoding='utf8'))
# московская зона Первой лиги — эмблемы с mosff.ru (hb.bizmrg.com)
if os.path.exists(CACHE + '/mosff.json'): teams += json.load(open(CACHE + '/mosff.json', encoding='utf8'))
# клубы с «Наградиона» — эмблемы из сохранённых страниц (.cache/saved/shields)
if os.path.exists(CACHE + '/nagradion.json'):
    for t in json.load(open(CACHE + '/nagradion.json', encoding='utf8')):
        if t['name'] == 'Кристалл' and t['host'] == 'stat.ffspb.org': t['name'] = 'Кристалл-М'
        if t['name'] == 'Конфеста_2': t['name'] = 'Конфеста-2'
        if t.get('logo') and os.path.exists(f"{CACHE}/saved/{t['logo']}"): teams.append(dict(t, logo='file:' + t['logo']))
# зоны «Золотое кольцо» (goldfootball.ru) и «Северо-Запад» (st.joinsport.io) — ссылки собирают goldring.py и nwfutsal.py
for f in ('goldring.json', 'nwfutsal.json', 'south.json'):
    if os.path.exists(f'{CACHE}/{f}'): teams += json.load(open(f'{CACHE}/{f}', encoding='utf8'))
img = {}
for t in teams:
    tid, url = ids.get(t['name']) if 'name' in t else t['team_id'], t.get('logo')  # в south.json вместо названия — id клуба
    if t['league'] in ('u19', 'u17') or tid in img: continue  # молодёжные команды и повторы из заявок Кубка
    if not tid or not url:
        print('нет эмблемы:', t.get('name', t['team_id']), file=sys.stderr)
        continue
    raw = f"{CACHE}/saved/{url[5:]}" if url.startswith('file:') else f'{CACHE}/logos/{tid}{os.path.splitext(url)[1]}'
    if not os.path.exists(raw) or not os.path.getsize(raw):
        for i in range(5):
            r = subprocess.run(['curl', '-sS', '-m', '40', '-A', 'Mozilla/5.0', url, '-o', raw], capture_output=True)
            if r.returncode == 0 and os.path.getsize(raw): break
            time.sleep(2 * (i + 1))
        else:
            print('не скачалась:', t['name'], url, file=sys.stderr)
            continue
    img[tid] = pack(raw)


# эмблемы, присланные вручную: .cache/saved/shields/manual/<id клуба>.png (заменяют скачанные)
MANUAL = CACHE + '/saved/shields/manual'
for path in sorted(glob.glob(MANUAL + '/*.png') + glob.glob(MANUAL + '/*.jpg')):
    tid = os.path.splitext(os.path.basename(path))[0]
    if tid not in ids.values(): continue
    img[tid] = pack(path)

with open(OUT, 'w', encoding='utf8') as f:
    f.write('// Эмблемы клубов (WebP, 96px) — из заявок на сайтах РФС (st.joinsport.io). Собирается tools/logos.py.\n')
    f.write('FM.LOGO_IMG = ' + json.dumps(img, ensure_ascii=False, sort_keys=True) + ';\n')
    f.write('FM.LOGOS = new Set(Object.keys(FM.LOGO_IMG));\n')
print('эмблем:', len(img), 'из', len(ids), file=sys.stderr)
