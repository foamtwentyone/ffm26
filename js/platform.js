// Площадки: Яндекс Игры, Игры ВКонтакте, Одноклассники — или обычный сайт (web).
// Площадку задаёт сборка (tools/build-platforms.py): window.FM_PLATFORM = 'yandex' | 'vk' | 'ok'. На сайте — 'web', реклама не показывается.
// Единый интерфейс для игры: init(), ready(), interstitial(), rewarded(), gameplay(on).
(function () {
  const name = window.FM_PLATFORM || 'web';
  let sdk = null, readySent = false, lastAd = 0, adBusy = false;
  const t0 = Date.now();
  const log = (...a) => { try { console.info('[platform]', ...a); } catch (e) { /* */ } };
  const loadScript = (src) => new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); });
  // на время рекламы — пауза игры (звука в игре нет, просто сообщаем площадке)
  const P = {
    name,
    ads: name !== 'web',
    // межстраничная реклама — не чаще раза в 3 минуты и не в первые 2 минуты сессии
    INTERSTITIAL_GAP: 180000,
    async init() {
      try {
        if (name === 'yandex') {
          if (!window.YaGames) await loadScript('/sdk.js');
          sdk = await window.YaGames.init();
        } else if (name === 'vk') {
          sdk = window.vkBridge;
          if (sdk) await sdk.send('VKWebAppInit');
        } else if (name === 'ok') {
          if (!window.FAPI) await loadScript('https://api.ok.ru/js/fapi5.js');
          const rp = window.FAPI.Util.getRequestParameters();
          await new Promise((res, rej) => window.FAPI.init(rp.api_server, rp.apiconnection, res, rej));
          sdk = window.FAPI;
        }
      } catch (e) { log('init failed', e); sdk = null; }
      return P;
    },
    // игра загрузилась и готова к игре (Яндекс: LoadingAPI.ready — обязательно для модерации)
    ready() {
      if (readySent) return; readySent = true;
      try { if (name === 'yandex' && sdk && sdk.features && sdk.features.LoadingAPI) sdk.features.LoadingAPI.ready(); } catch (e) { log(e); }
    },
    // идёт ли игровой процесс (Яндекс: GameplayAPI — между экранами меню и рекламой)
    gameplay(on) {
      try { if (name === 'yandex' && sdk && sdk.features && sdk.features.GameplayAPI) sdk.features.GameplayAPI[on ? 'start' : 'stop'](); } catch (e) { log(e); }
    },
    canInterstitial() { return !!sdk && !adBusy && Date.now() - t0 > 120000 && Date.now() - lastAd > P.INTERSTITIAL_GAP; },
    // межстраничная реклама; промис выполняется, когда реклама закрыта (или не показана)
    async interstitial() {
      if (!P.canInterstitial()) return false;
      adBusy = true; lastAd = Date.now(); P.gameplay(false);
      try {
        if (name === 'yandex') return await new Promise((res) => sdk.adv.showFullscreenAdv({ callbacks: { onClose: (shown) => res(!!shown), onError: () => res(false), onOffline: () => res(false) } }));
        if (name === 'vk') { const r = await sdk.send('VKWebAppShowNativeAds', { ad_format: 'interstitial' }); return !!(r && r.result); }
        if (name === 'ok') return await okCall('showAd', () => sdk.UI.showAd());
      } catch (e) { log('interstitial', e); } finally { adBusy = false; P.gameplay(true); }
      return false;
    },
    // реклама за награду: true — досмотрел, награду можно выдавать
    async rewarded() {
      if (!sdk || adBusy) return false;
      adBusy = true; P.gameplay(false);
      try {
        if (name === 'yandex') {
          return await new Promise((res) => { let ok = false; sdk.adv.showRewardedVideo({ callbacks: { onRewarded: () => { ok = true; }, onClose: () => res(ok), onError: () => res(false) } }); });
        }
        if (name === 'vk') { const r = await sdk.send('VKWebAppShowNativeAds', { ad_format: 'reward' }); return !!(r && r.result); }
        if (name === 'ok') { const loaded = await okCall('loadAd', () => sdk.UI.loadAd()); return loaded && await okCall('showLoadedAd', () => sdk.UI.showLoadedAd()); }
      } catch (e) { log('rewarded', e); } finally { adBusy = false; lastAd = Date.now(); P.gameplay(true); }
      return false;
    },
  };
  // Одноклассники отвечают через глобальную функцию API_callback(method, result, data)
  const okWait = {};
  function okCall(method, fn) {
    return new Promise((res) => { okWait[method] = res; try { fn(); } catch (e) { delete okWait[method]; res(false); } setTimeout(() => { if (okWait[method]) { delete okWait[method]; res(false); } }, 60000); });
  }
  if (name === 'ok') window.API_callback = (method, result) => { const f = okWait[method]; if (f) { delete okWait[method]; f(result === 'ok'); } };
  window.FM = window.FM || {};
  window.FM.Platform = P;
})();
