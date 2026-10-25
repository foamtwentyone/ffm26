// Движок матча: поминутная симуляция. Один и тот же код считает и живой матч с комментарием,
// и фоновые матчи других клубов (там просто не показываются события).

(function () {
  const SHOOT_W = { ST: 6, LW: 3.2, RW: 3.2, AM: 3, CM: 1.4, DM: 0.6, LB: 0.5, RB: 0.5, CB: 0.6, GK: 0 };
  const ASSIST_W = { AM: 5, LW: 4, RW: 4, CM: 3, ST: 2.2, LB: 1.6, RB: 1.6, DM: 1.2, CB: 0.4, GK: 0.05 };
  const MINUTE_TEXTS = [
    (s) => `${s.team.name} спокойно катают мяч в центре поля.`,
    (s) => `${s.team.name} пытаются растянуть оборону соперника по флангам.`,
    (s) => `Борьба в центре поля, мяч переходит из ног в ноги.`,
    (s) => `${s.team.name} прессингуют высоко, соперник выбивает мяч подальше.`,
    (s) => `Длинная передача ${s.team.name} — мимо всех, аут.`,
  ];

  class Side {
    constructor(game, team, xi, bench, isHome) {
      this.game = game;
      this.team = team;
      this.isHome = isHome;
      this.tactics = Object.assign({ ment: 0, press: 1, tempo: 1 }, team.tactics);
      this.onPitch = xi.map(({ pid, slot }) => ({ p: game.players[pid], slot }));
      this.bench = bench.map((pid) => game.players[pid]);
      this.used = new Set(xi.map((x) => x.pid));
      this.subsLeft = 5;
      this.goals = 0;
      this.stats = { shots: 0, sot: 0, xg: 0, corners: 0, fouls: 0, yc: 0, rc: 0, possTicks: 0 };
      this.rating = {};
      this.mins = {};
      this.yellows = {};
      this.fitness = {};
      for (const { p } of this.onPitch) {
        this.rating[p.id] = 6.3;
        this.mins[p.id] = 0;
        this.fitness[p.id] = p.fit;
      }
      for (const p of this.bench) this.fitness[p.id] = p.fit;
      this.recalc();
    }

    eff(o) {
      const fit = this.fitness[o.p.id];
      const morale = 0.97 + (o.p.morale || 50) / 1700;
      return o.p.ovr * FM.pfit(o.p, o.slot) * (0.78 + 0.22 * fit / 100) * morale;
    }

    recalc() {
      const g = { G: [], D: [], M: [], F: [] };
      for (const o of this.onPitch) g[FM.lineOf(o.slot, this.team.formation)].push(this.eff(o));
      const avg = (a, d) => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : d);
      const gk = g.G.length ? g.G[0] : 30;
      const d = avg(g.D, 35), m = avg(g.M, 35), f = avg(g.F, m * 0.9);
      const n = this.onPitch.length;
      const lack = Math.pow(n / 11, 0.9);
      const t = this.tactics;
      this.gk = gk;
      this.def = (0.6 * d + 0.25 * m + 0.15 * gk) * lack * (1 - 0.04 * t.ment);
      this.mid = (0.7 * m + 0.15 * d + 0.15 * f) * lack * (1 + 0.025 * (t.press - 1));
      this.att = (0.6 * f + 0.4 * m) * lack * (1 + 0.05 * t.ment);
    }

    gkPlayer() {
      const o = this.onPitch.find((x) => x.slot === 'GK');
      return o ? o.p : this.onPitch[0].p;
    }
  }

  class Match {
    // opts: { comp, knockout, firstLeg: {homeGoals, awayGoals} (счёт первого матча с точки зрения
    // нынешних хозяев), userTeam, autoSubsUser }
    constructor(game, home, away, opts = {}) {
      this.game = game;
      this.opts = opts;
      const lh = game.matchLineup(home), la = game.matchLineup(away);
      this.home = new Side(game, home, lh.xi, lh.bench, true);
      this.away = new Side(game, away, la.xi, la.bench, false);
      this.minute = 0;
      this.maxMinute = 90;
      this.added = [FM.ri(1, 4), FM.ri(2, 7)];
      this.events = [];
      this.done = false;
      this.phase = 'first';
      this.pens = null;
      this.goalsList = [];
      this.userSide = opts.userTeam === home.id ? this.home : opts.userTeam === away.id ? this.away : null;
    }

    other(s) { return s === this.home ? this.away : this.home; }

    log(type, text, side, extra = {}) {
      const ev = Object.assign({ min: this.minuteLabel(), type, text, side: side ? (side === this.home ? 'h' : 'a') : null }, extra);
      this.events.push(ev);
      return ev;
    }

    minuteLabel() {
      const m = this.minute;
      if (this.phase === 'first' && m > 45) return `45+${m - 45}`;
      if (this.phase === 'second' && m > 90) return `90+${m - 90}`;
      if (this.phase === 'et' && m > 120) return `120+${m - 120}`;
      return String(m);
    }

    // Один шаг — одна минута. Возвращает массив новых событий.
    step() {
      if (this.done) return [];
      const start = this.events.length;
      if (this.minute === 0) {
        this.log('start', `Стартовый свисток! ${this.home.team.name} — ${this.away.team.name}.`);
      }
      this.minute++;
      this.simMinute();
      this.boundaries();
      return this.events.slice(start);
    }

    boundaries() {
      const m = this.minute;
      if (this.phase === 'first' && m === 45 + this.added[0]) {
        this.log('half', `Перерыв. ${this.home.goals}:${this.away.goals}.`);
        this.phase = 'second';
        this.minute = 45;
        for (const s of [this.home, this.away]) for (const pid in s.fitness) s.fitness[pid] = Math.min(100, s.fitness[pid] + 4);
        this.halfTime = true;
        return;
      }
      this.halfTime = false;
      if (this.phase === 'second' && m === 90 + this.added[1]) {
        if (this.opts.knockout && this.needsExtra()) {
          this.log('half', `Основное время завершено — ${this.home.goals}:${this.away.goals}. Будет дополнительное время!`);
          this.phase = 'et';
          this.minute = 90;
          return;
        }
        this.finish();
        return;
      }
      if (this.phase === 'et' && m === 120 + 1) {
        if (this.needsExtra()) this.penalties();
        this.finish();
      }
    }

    needsExtra() {
      if (!this.opts.firstLeg) return this.home.goals === this.away.goals;
      // во втором матче нынешние хозяева в первом были гостями
      const homeAgg = this.home.goals + this.opts.firstLeg.awayGoals;
      const awayAgg = this.away.goals + this.opts.firstLeg.homeGoals;
      return homeAgg === awayAgg;
    }

    simMinute() {
      const H = this.home, A = this.away;
      const mh = H.mid * 1.03, ma = A.mid;
      const possH = Math.pow(mh, 4) / (Math.pow(mh, 4) + Math.pow(ma, 4));
      H.stats.possTicks += possH;
      A.stats.possTicks += 1 - possH;
      let happened = false;
      for (const s of [H, A]) {
        const o = this.other(s);
        const poss = s === H ? possH : 1 - possH;
        const t = s.tactics;
        let rate = 0.088 * Math.pow(2 * poss, 0.5) * Math.pow(s.att / o.def, 2.1);
        rate *= (s.isHome ? 1.06 : 0.95) * (1 + 0.08 * (t.tempo - 1)) * (1 + 0.06 * t.ment) * (1 + 0.03 * o.tactics.ment);
        if (Math.random() < rate) {
          this.chance(s, o);
          happened = true;
        }
        if (Math.random() < 0.0017 * Math.pow(s.att / o.def, 1.5)) {
          this.penalty(s, o);
          happened = true;
        }
        this.discipline(s);
        if (Math.random() < 0.0008) this.injury(s);
        this.tire(s);
      }
      if (!happened && Math.random() < 0.05) {
        const s = Math.random() < possH ? H : A;
        this.log('info', FM.pick(MINUTE_TEXTS)(s));
      }
      this.aiDecisions();
    }

    pickShooter(s) {
      return FM.weighted(s.onPitch, (o) => (SHOOT_W[o.slot] ?? 0.5) * Math.pow(o.p.ovr / 60, 3)).p;
    }

    pickAssist(s, shooter) {
      const pool = s.onPitch.filter((o) => o.p !== shooter);
      if (!pool.length || Math.random() < 0.22) return null;
      return FM.weighted(pool, (o) => (ASSIST_W[o.slot] || 1) * Math.pow(o.p.ovr / 60, 2)).p;
    }

    chance(s, o) {
      const shooter = this.pickShooter(s);
      const t = s.tactics;
      const so = s.onPitch.find((x) => x.p === shooter);
      const shooterEff = so ? s.eff(so) : shooter.ovr;
      let xg = (0.03 + 0.36 * Math.pow(Math.random(), 2.3)) * (1 - 0.05 * (t.tempo - 1));
      xg = FM.clamp(xg * Math.pow(shooterEff / o.def, 0.5), 0.01, 0.85);
      s.stats.shots++;
      s.stats.xg += xg;
      const gk = o.gkPlayer();
      const pGoal = FM.clamp(0.92 * xg * Math.pow(shooterEff / Math.max(o.gk, 20), 0.8), 0.005, 0.9);
      const r = Math.random();
      const name = shooter.name;
      if (r < pGoal) {
        s.stats.sot++;
        this.goal(s, shooter, this.pickAssist(s, shooter), xg);
      } else if (r < pGoal + 0.3) {
        s.stats.sot++;
        o.rating[gk.id] = (o.rating[gk.id] || 6) + 0.18 + xg * 0.8;
        s.rating[shooter.id] += 0.05;
        const big = xg > 0.25;
        this.log('save', big
          ? FM.pick([`Какой момент! ${name} бьёт в упор — ${gk.name} совершает невероятный сейв!`, `${name} выходит один на один, но ${gk.name} выручает свою команду!`])
          : FM.pick([`${name} бьёт из-за штрафной — ${gk.name} забирает мяч.`, `Удар ${name} в створ, ${gk.name} на месте.`, `${name} пробивает, ${gk.name} отбивает на угловой.`]), s, { xg });
        if (Math.random() < 0.35) this.corner(s);
      } else if (r < pGoal + 0.5) {
        this.log('miss', FM.pick([`Удар ${name} блокируют защитники.`, `${name} пытается пробить, но мяч попадает в защитника.`]), s, { xg });
        if (Math.random() < 0.4) this.corner(s);
      } else {
        if (xg > 0.3 && Math.random() < 0.15) this.log('miss', `${name} попадает в штангу! Как близко!`, s, { xg });
        else this.log('miss', xg > 0.25
          ? FM.pick([`${name} не попадает в пустые ворота! Невероятный промах!`, `Отличный момент! ${name} бьёт выше ворот.`])
          : FM.pick([`${name} бьёт мимо ворот.`, `Удар ${name} — выше перекладины.`, `${name} пробивает с острого угла — мимо.`]), s, { xg });
        s.rating[shooter.id] -= 0.05;
      }
    }

    corner(s) {
      s.stats.corners++;
      if (Math.random() < 0.035) {
        const scorer = FM.weighted(s.onPitch, (o) => (o.slot === 'GK' ? 0 : { CB: 4, ST: 3, DM: 1.5 }[o.slot] || 0.6)).p;
        const taker = FM.weighted(s.onPitch.filter((o) => o.p !== scorer), (o) => ({ AM: 3, LW: 3, RW: 3, CM: 2 }[o.slot] || 0.3)).p;
        s.stats.shots++;
        s.stats.sot++;
        s.stats.xg += 0.1;
        this.goal(s, scorer, taker, 0.1, 'после углового');
      }
    }

    penalty(s, o) {
      const taker = s.onPitch.slice().sort((a, b) => (SHOOT_W[b.slot] || 0) * b.p.ovr - (SHOOT_W[a.slot] || 0) * a.p.ovr)[0].p;
      const fouler = FM.weighted(o.onPitch, (x) => ({ CB: 3, LB: 2, RB: 2, DM: 1.5 }[x.slot] || 0.3)).p;
      this.log('pen', `Пенальти! ${fouler.name} фолит в своей штрафной. К мячу подходит ${taker.name}…`, s);
      if (Math.random() < 0.2) this.card(o, fouler, false);
      s.stats.shots++;
      s.stats.xg += 0.76;
      const gk = o.gkPlayer();
      if (Math.random() < FM.clamp(0.76 + (taker.ovr - gk.ovr) / 200, 0.6, 0.9)) {
        s.stats.sot++;
        this.goal(s, taker, null, 0.76, 'с пенальти');
      } else if (Math.random() < 0.6) {
        s.stats.sot++;
        o.rating[gk.id] += 0.8;
        this.log('save', `${gk.name} отражает пенальти! Герой!`, o);
      } else {
        s.rating[taker.id] -= 0.6;
        this.log('miss', `${taker.name} не забивает пенальти — мимо ворот!`, s);
      }
    }

    goal(s, scorer, assist, xg, how) {
      s.goals++;
      s.rating[scorer.id] = (s.rating[scorer.id] || 6) + 1.05;
      if (assist) s.rating[assist.id] = (s.rating[assist.id] || 6) + 0.65;
      const o = this.other(s);
      const gk = o.gkPlayer();
      o.rating[gk.id] -= 0.35;
      for (const x of o.onPitch) if (FM.lineOf(x.slot, o.team.formation) === 'D') o.rating[x.p.id] -= 0.12;
      this.goalsList.push({ side: s === this.home ? 'h' : 'a', min: this.minuteLabel(), scorer: scorer.id, assist: assist ? assist.id : null, pen: how === 'с пенальти' });
      const score = `${this.home.goals}:${this.away.goals}`;
      let text = FM.pick([`ГОЛ! ${scorer.name} забивает`, `ГОООЛ! ${scorer.name} отправляет мяч в сетку`, `ГОЛ! ${scorer.name} не оставляет шансов вратарю`]);
      if (how) text += ' ' + how;
      text += assist ? ` после передачи ${assist.name}.` : '.';
      this.log('goal', `${text} ${score}`, s, { scorer: scorer.id, assist: assist ? assist.id : null, xg });
    }

    discipline(s) {
      const press = s.tactics.press;
      if (Math.random() < 0.13 * (1 + 0.15 * (press - 1))) s.stats.fouls++;
      if (Math.random() < 0.0215 * (1 + 0.2 * (press - 1))) {
        const p = FM.weighted(s.onPitch, (o) => ({ CB: 2, DM: 2.2, CM: 1.4, LB: 1.4, RB: 1.4, GK: 0.15 }[o.slot] || 0.9)).p;
        this.card(s, p, false);
      } else if (Math.random() < 0.00075) {
        const p = FM.weighted(s.onPitch, (o) => ({ CB: 2, DM: 2, GK: 0.3 }[o.slot] || 1)).p;
        this.card(s, p, true);
      }
    }

    card(s, p, red) {
      if (!s.onPitch.find((o) => o.p === p)) return;
      if (!red) {
        s.yellows[p.id] = (s.yellows[p.id] || 0) + 1;
        s.stats.yc++;
        s.rating[p.id] -= 0.3;
        if (s.yellows[p.id] === 2) {
          s.stats.rc++;
          this.log('red', `Вторая жёлтая — ${p.name} («${s.team.name}») удалён с поля!`, s, { pid: p.id, second: true });
          this.sendOff(s, p);
        } else {
          this.log('yellow', `Жёлтая карточка: ${p.name} (${s.team.name}).`, s, { pid: p.id });
        }
      } else {
        s.stats.rc++;
        this.log('red', `Прямая красная! ${p.name} («${s.team.name}») удалён — команда в меньшинстве.`, s, { pid: p.id });
        this.sendOff(s, p);
      }
    }

    sendOff(s, p) {
      s.rating[p.id] -= 1.5;
      s.redCards = s.redCards || [];
      s.redCards.push(p.id);
      const idx = s.onPitch.findIndex((o) => o.p === p);
      const wasGK = s.onPitch[idx].slot === 'GK';
      s.onPitch.splice(idx, 1);
      if (wasGK) {
        // вратаря обязательно заменяем: убираем полевого, выпускаем запасного вратаря
        const gk = s.bench.find((b) => b.pos === 'GK' && !s.used.has(b.id) && this.game.isAvailable(b));
        if (gk && s.subsLeft > 0) {
          const out = s.onPitch.slice().sort((a, b) => ({ ST: 0, LW: 1, RW: 1, AM: 2 }[a.slot] ?? 5) - ({ ST: 0, LW: 1, RW: 1, AM: 2 }[b.slot] ?? 5))[0];
          this.doSub(s, out.p, gk, 'GK');
        } else if (s.onPitch.length) {
          s.onPitch[0].slot = 'GK';
        }
      }
      s.recalc();
    }

    injury(s) {
      const o = FM.pick(s.onPitch);
      if (!o) return;
      const days = FM.weighted([[3, 5], [7, 3], [14, 2], [28, 1], [60, 0.4], [150, 0.15]], (x) => x[1])[0];
      const d = FM.ri(Math.ceil(days * 0.6), days);
      s.injured = s.injured || {};
      s.injured[o.p.id] = d;
      this.log('injury', `${o.p.name} получает травму и не может продолжать игру.`, s, { pid: o.p.id, days: d });
      const isUser = s === this.userSide && !this.opts.autoSubsUser;
      const sub = s.subsLeft > 0 ? this.bestSub(s, o.slot) : null;
      if (sub && isUser) {
        // игрок пользователя доигрывает «на одной ноге», пока менеджер не сделает замену
        s.fitness[o.p.id] = Math.min(s.fitness[o.p.id], 25);
        this.needUserSub = o.p.id;
      } else if (sub) {
        this.doSub(s, o.p, sub, o.slot);
      } else {
        s.onPitch.splice(s.onPitch.indexOf(o), 1);
        this.log('info', `${s.team.name} остаются в меньшинстве — замены исчерпаны.`, s);
      }
      s.recalc();
    }

    tire(s) {
      const k = 0.27 * (1 + 0.22 * (s.tactics.press - 1)) * (1 + 0.1 * (s.tactics.tempo - 1));
      for (const o of s.onPitch) {
        const age = o.p.age;
        const a = age > 31 ? 1.2 : age < 21 ? 0.95 : 1;
        s.fitness[o.p.id] = Math.max(0, s.fitness[o.p.id] - k * a * (o.slot === 'GK' ? 0.25 : 1) * (0.7 + Math.random() * 0.6));
        s.mins[o.p.id] = (s.mins[o.p.id] || 0) + 1;
      }
      if (this.minute % 5 === 0) s.recalc();
    }

    bestSub(s, slot) {
      const avail = s.bench.filter((b) => !s.used.has(b.id) && this.game.isAvailable(b));
      if (!avail.length) return null;
      const cands = slot === 'GK' ? avail.filter((b) => b.pos === 'GK') : avail.filter((b) => b.pos !== 'GK');
      if (!cands.length) return null;
      return cands.sort((a, b) => b.ovr * FM.pfit(b, slot) * (0.78 + 0.22 * s.fitness[b.id] / 100) - a.ovr * FM.pfit(a, slot) * (0.78 + 0.22 * s.fitness[a.id] / 100))[0];
    }

    doSub(s, out, inn, slotOverride) {
      const idx = s.onPitch.findIndex((o) => o.p === out);
      if (idx < 0 || s.subsLeft <= 0 || s.used.has(inn.id)) return false;
      const slot = slotOverride || s.onPitch[idx].slot;
      s.onPitch[idx] = { p: inn, slot };
      s.used.add(inn.id);
      s.subsLeft--;
      s.rating[inn.id] = 6.3;
      s.mins[inn.id] = 0;
      s.subbedOff = s.subbedOff || [];
      s.subbedOff.push(out.id);
      if (this.needUserSub === out.id) this.needUserSub = null;
      this.log('sub', `Замена в ${s.team.name}: ${inn.name} вместо ${out.name}.`, s, { inId: inn.id, outId: out.id });
      s.recalc();
      return true;
    }

    // Для живого матча: замена от пользователя
    userSub(outId, inId) {
      const s = this.userSide;
      if (!s) return false;
      return this.doSub(s, this.game.players[outId], this.game.players[inId]);
    }

    setUserTactics(t) {
      const s = this.userSide;
      if (!s) return;
      Object.assign(s.tactics, t);
      s.recalc();
      this.log('info', `${s.team.name} меняют установку на игру.`, s);
    }

    aiDecisions() {
      for (const s of [this.home, this.away]) {
        if (s === this.userSide && !this.opts.autoSubsUser) continue;
        const m = this.minute;
        const sec = this.phase !== 'first';
        if (sec && (m === 60 || m === 70 || m === 80 || m === 100) && s.subsLeft > 0) {
          const n = m === 60 ? FM.ri(1, 2) : m === 100 ? 1 : FM.ri(0, 2);
          const tired = s.onPitch.filter((o) => o.slot !== 'GK').sort((a, b) => s.fitness[a.p.id] - s.fitness[b.p.id]);
          for (let i = 0; i < n && i < tired.length && s.subsLeft > 0; i++) {
            const o = tired[i];
            if (s.fitness[o.p.id] > 72 && s.rating[o.p.id] > 6.3) continue;
            const sub = this.bestSub(s, o.slot);
            if (sub) this.doSub(s, o.p, sub);
          }
        }
        if (sec && m === 70 && s !== this.userSide) {
          const diff = s.goals - this.other(s).goals;
          if (diff < 0 && s.tactics.ment < 2) { s.tactics.ment++; s.recalc(); }
          if (diff > 0 && s.tactics.ment > -1) { s.tactics.ment--; s.recalc(); }
        }
      }
    }

    penalties() {
      const order = (s) => s.onPitch.slice().sort((a, b) => b.p.ovr * ((SHOOT_W[b.slot] || 0.3) + 1) - a.p.ovr * ((SHOOT_W[a.slot] || 0.3) + 1)).map((o) => o.p);
      const H = order(this.home), A = order(this.away);
      const res = { h: 0, a: 0, kicks: [] };
      const kick = (side, shooters, i, opp) => {
        const p = shooters[i % shooters.length];
        const gk = opp.gkPlayer();
        const ok = Math.random() < FM.clamp(0.75 + (p.ovr - gk.ovr) / 250, 0.6, 0.88);
        res.kicks.push({ side, pid: p.id, ok });
        const s = side === 'h' ? this.home : this.away;
        const sc = { h: res.h + (ok && side === 'h' ? 1 : 0), a: res.a + (ok && side === 'a' ? 1 : 0) };
        // каждый удар — отдельное событие: в живом матче серия показывается по одному удару
        this.log('penkick', ok ? `${p.name} (${s.team.name}) забивает! ${sc.h}:${sc.a}` : `${p.name} (${s.team.name}) не забивает — ${Math.random() < 0.6 ? `${gk.name} отбивает` : 'мимо ворот'}! ${sc.h}:${sc.a}`, s, { pid: p.id, ok, ph: sc.h, pa: sc.a });
        return ok;
      };
      this.log('pens', 'Серия пенальти!');
      for (let i = 0; i < 5; i++) {
        if (kick('h', H, i, this.away)) res.h++;
        if (res.h > res.a + (5 - i) || res.a > res.h + (5 - i)) break;
        if (kick('a', A, i, this.home)) res.a++;
        if (res.h > res.a + (4 - i) || res.a > res.h + (4 - i)) break;
      }
      let i = 5;
      while (res.h === res.a) {
        // счёт обновляется сразу после каждого удара — он же пишется в события серии
        if (kick('h', H, i, this.away)) res.h++;
        if (kick('a', A, i, this.home)) res.a++;
        i++;
      }
      this.pens = res;
      const w = res.h > res.a ? this.home : this.away;
      this.log('pens', `Серия пенальти: ${res.h}:${res.a}. Победа ${w.team.name}!`, w);
    }

    finish() {
      if (this.done) return;
      this.done = true;
      const hg = this.home.goals, ag = this.away.goals;
      this.log('end', `Финальный свисток! ${this.home.team.name} ${hg}:${ag} ${this.away.team.name}${this.pens ? ` (пен. ${this.pens.h}:${this.pens.a})` : ''}.`);
      for (const s of [this.home, this.away]) {
        const o = this.other(s);
        const res = Math.sign(s.goals - o.goals);
        for (const pid in s.rating) {
          const p = this.game.players[pid];
          let r = s.rating[pid] + res * 0.3 + FM.gauss(0, 0.3);
          if (o.goals === 0 && p && (p.pos === 'GK' || FM.GROUP[p.pos] === 'D') && (s.mins[pid] || 0) >= 60) r += 0.5;
          s.rating[pid] = Math.round(FM.clamp(r, 3, 10) * 10) / 10;
        }
      }
      const total = this.home.stats.possTicks + this.away.stats.possTicks || 1;
      this.home.stats.poss = Math.round((this.home.stats.possTicks / total) * 100);
      this.away.stats.poss = 100 - this.home.stats.poss;
    }

    winner() {
      if (!this.done) return null;
      if (this.pens) return this.pens.h > this.pens.a ? this.home.team.id : this.away.team.id;
      if (this.opts.firstLeg) {
        const h = this.home.goals + this.opts.firstLeg.awayGoals, a = this.away.goals + this.opts.firstLeg.homeGoals;
        if (h !== a) return h > a ? this.home.team.id : this.away.team.id;
      }
      if (this.home.goals === this.away.goals) return null;
      return this.home.goals > this.away.goals ? this.home.team.id : this.away.team.id;
    }

    runToEnd() {
      while (!this.done) this.step();
      return this;
    }
  }

  FM.Match = Match;
})();
