#!/usr/bin/env python3
"""Текущие составы с sefl.ru (платформа join.sport), сохранённые вручную в .cache/saved/sefl_<id команды>.html.
Пишет .cache/sefl.json: [{team_id, players: [{name, amp, age, games, goals}]}]. Ушедшие игроки не берутся."""
import glob, html, json, os, re

D = os.path.dirname(os.path.abspath(__file__)) + '/.cache'
TEAMS = {'1328008': 'kapkan'}  # id команды на sefl.ru → id клуба в игре
AMP = {'Вратарь': 'GK', 'Защитник': 'DF', 'Полузащитник': 'UN', 'Универсал': 'UN', 'Нападающий': 'FW'}

def field(card, cls):
    m = re.search(rf'blk-teamroster__{cls}[^"]*">(.*?)</', card, re.S)
    return html.unescape(re.sub(r'<[^>]+>', '', m.group(1))).strip() if m else ''

out = []
for f in sorted(glob.glob(D + '/saved/sefl_*.html')):
    sid = re.search(r'sefl_(\d+)', f).group(1)
    t = open(f, encoding='utf8', errors='replace').read()
    cur = t[t.find('data-troster-pane="0"'):t.find('data-troster-pane="1"')]
    players = []
    for card in cur.split('<li class="blk-teamroster__item')[1:]:
        card = card[card.find('>') + 1:]  # остаток открывающего тега <li>
        txt = [s.strip() for s in re.sub(r'<[^>]+>', '|', html.unescape(card)).split('|') if s.strip()]
        first, last, amp, age = txt[:4]
        nums = [int(x) for x in txt[4:8] if x.isdigit()]
        players.append({'name': f'{first} {last}', 'amp': AMP[amp], 'age': int(age.split()[0]),
                        'games': nums[0] if nums else 0, 'goals': nums[1] if len(nums) > 1 else 0})
    out.append({'team_id': TEAMS[sid], 'players': players})
    print(TEAMS[sid], len(players))
json.dump(out, open(D + '/sefl.json', 'w', encoding='utf8'), ensure_ascii=False, indent=1)
