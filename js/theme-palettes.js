/**
 * Portfolio color palettes — 7 presets with light/dark CSS variable maps.
 */
(function () {
  const STORAGE_KEY_PREFIX = 'portfolioColorPalette';
  const DEFAULT_ID_LIGHT = 'ocean';
  const DEFAULT_ID_DARK = 'midnight';
  const PALETTE_ORDER = ['ocean', 'forest', 'sunset', 'royal', 'graphite', 'midnight', 'aurora'];

  function withPortfolioVars(base, mesh1, mesh2, mesh3, mesh4) {
    return Object.assign({}, base, {
      '--bg-navbar': base['--bg-card'],
      '--bg-section': base['--bg-main'],
      '--accent-gradient': 'linear-gradient(135deg, ' + base['--primary-color'] + ' 0%, ' + (base['--primary-dark'] || base['--primary-color']) + ' 100%)',
      '--shadow-sm': '0 2px 5px rgba(0, 0, 0, 0.1)',
      '--shadow-md': '0 4px 10px rgba(0, 0, 0, 0.15)',
      '--mesh-orb-1': mesh1,
      '--mesh-orb-2': mesh2,
      '--mesh-orb-3': mesh3,
      '--mesh-orb-4': mesh4 || mesh2,
      '--theme-orb-core': 'radial-gradient(circle at 50% 50%, ' + base['--primary-color'] + ' 0%, ' + mesh1 + ' 38%, transparent 72%)',
      '--theme-orb-shell': 'radial-gradient(circle at 50% 50%, ' + mesh2 + ' 0%, ' + mesh3 + ' 48%, transparent 100%)',
      '--theme-orb-accent': 'radial-gradient(circle at 50% 50%, ' + mesh3 + ' 0%, ' + (mesh4 || mesh2) + ' 36%, rgba(255, 255, 255, 0.05) 68%, transparent 100%)',
      '--chat-bg': base['--accent-gradient'] || ('linear-gradient(135deg, ' + mesh1 + ', ' + mesh2 + ')'),
      '--chat-header-bg': 'linear-gradient(135deg, ' + base['--primary-dark'] + ', ' + base['--primary-color'] + ')',
      '--chat-user-bg': base['--primary-color'],
      '--chat-bot-bg': base['--bg-card']
    });
  }

  const PALETTES = {
    ocean: {
      label: {
        en: 'Ocean', de: 'Ozean', fr: 'Océan', es: 'Océano', it: 'Oceano', pt: 'Oceano', nl: 'Oceaan',
        pl: 'Ocean', sv: 'Ocean', da: 'Ocean', fi: 'Meri', no: 'Hav', cs: 'Oceán', sk: 'Oceán',
        hu: 'Óceán', ro: 'Ocean', bg: 'Океан', hr: 'Ocean', sl: 'Ocean', sr: 'Океан', bs: 'Okean',
        mk: 'Океан', sq: 'Oqean', el: 'Ωκεανός', tr: 'Okyanus', ru: 'Океан', uk: 'Океан', be: 'Акіян',
        lt: 'Vandenynas', lv: 'Okeāns', et: 'Ookean', is: 'Haf', ga: 'Aigéan', mt: 'Oċean', ca: 'Oceà',
        eu: 'Ozeanoa', gl: 'Océano', cy: 'Cefnfor', lb: 'Ozean', rm: 'Ocean'
      },
      light: withPortfolioVars({
        '--primary-color': '#0EA5E9',
        '--primary-dark': '#0369A1',
        '--secondary-color': '#64748B',
        '--success-color': '#16A34A',
        '--danger-color': '#DC2626',
        '--warning-color': '#F59E0B',
        '--bg-main': '#F8FAFC',
        '--bg-card': 'rgba(255, 255, 255, 0.75)',
        '--text-primary': '#0F172A',
        '--text-secondary': '#475569',
        '--text-light': '#94A3B8',
        '--border-color': 'rgba(203, 213, 225, 0.6)'
      }, '#0EA5E9', '#38BDF8', '#1D4ED8', '#7DD3FC'),
      dark: withPortfolioVars({
        '--primary-color': '#38BDF8',
        '--primary-dark': '#0EA5E9',
        '--secondary-color': '#94A3B8',
        '--success-color': '#22C55E',
        '--danger-color': '#F87171',
        '--warning-color': '#FBBF24',
        '--bg-main': '#020617',
        '--bg-card': 'rgba(15, 23, 42, 0.75)',
        '--text-primary': '#E2E8F0',
        '--text-secondary': '#94A3B8',
        '--text-light': '#64748B',
        '--border-color': 'rgba(30, 41, 59, 0.8)'
      }, '#0369A1', '#0EA5E9', '#1E3A8A', '#164E63')
    },
    forest: {
      label: {
        en: 'Forest', de: 'Wald', fr: 'Forêt', es: 'Bosque', it: 'Foresta', pt: 'Floresta', nl: 'Bos',
        pl: 'Las', sv: 'Skog', da: 'Skov', fi: 'Metsä', no: 'Skog', cs: 'Les', sk: 'Les', hu: 'Erdő',
        ro: 'Pădure', bg: 'Гора', hr: 'Šuma', sl: 'Gozd', sr: 'Шума', bs: 'Šuma', mk: 'Шума', sq: 'Pyll',
        el: 'Δάσος', tr: 'Orman', ru: 'Лес', uk: 'Ліс', be: 'Лес', lt: 'Miškas', lv: 'Mežs', et: 'Mets',
        is: 'Skógur', ga: 'Foraois', mt: 'Foresta', ca: 'Bosc', eu: 'Basoa', gl: 'Bosque', cy: 'Coedwig',
        lb: 'Bësch', rm: 'Guaud'
      },
      light: withPortfolioVars({
        '--primary-color': '#059669',
        '--primary-dark': '#047857',
        '--secondary-color': '#64748B',
        '--success-color': '#16A34A',
        '--danger-color': '#B91C1C',
        '--warning-color': '#D97706',
        '--bg-main': '#F0FDF4',
        '--bg-card': 'rgba(255, 255, 255, 0.75)',
        '--text-primary': '#14532D',
        '--text-secondary': '#166534',
        '--text-light': '#86EFAC',
        '--border-color': 'rgba(187, 247, 208, 0.6)'
      }, '#059669', '#34D399', '#14532D', '#6EE7B7'),
      dark: withPortfolioVars({
        '--primary-color': '#34D399',
        '--primary-dark': '#10B981',
        '--secondary-color': '#94A3B8',
        '--success-color': '#22C55E',
        '--danger-color': '#F87171',
        '--warning-color': '#FBBF24',
        '--bg-main': '#022C22',
        '--bg-card': 'rgba(6, 95, 70, 0.75)',
        '--text-primary': '#ECFDF5',
        '--text-secondary': '#A7F3D0',
        '--text-light': '#6EE7B7',
        '--border-color': 'rgba(4, 120, 87, 0.8)'
      }, '#047857', '#10B981', '#064E3B', '#065F46')
    },
    sunset: {
      label: {
        en: 'Sunset', de: 'Sonnenuntergang', fr: 'Coucher de soleil', es: 'Atardecer', it: 'Tramonto',
        pt: 'Pôr do sol', nl: 'Zonsondergang', pl: 'Zachód słońca', sv: 'Solnedgång', da: 'Solnedgang',
        fi: 'Auringonlasku', no: 'Solnedgang', cs: 'Západ slunce', sk: 'Západ slnka', hu: 'Naplemente',
        ro: 'Apus', bg: 'Залез', hr: 'Zalazak sunca', sl: 'Sončni zahod', sr: 'Залазак сунца',
        bs: 'Zalazak sunca', mk: 'Зајдисонце', sq: 'Perëndim dielli', el: 'Ηλιοβασίλεμα', tr: 'Gün batımı',
        ru: 'Закат', uk: 'Захід сонця', be: 'Заход', lt: 'Saulėlydis', lv: 'Saulriets', et: 'Päikeseloojang',
        is: 'Sólsetur', ga: 'Luí na gréine', mt: 'Tramuntana', ca: 'Posta de sol', eu: 'Ilunabarra',
        gl: 'Posta do sol', cy: 'Machlud haul', lb: 'Sonnenënnergang', rm: 'Sulegliv'
      },
      light: withPortfolioVars({
        '--primary-color': '#EA580C',
        '--primary-dark': '#C2410C',
        '--secondary-color': '#78716C',
        '--success-color': '#CA8A04',
        '--danger-color': '#DC2626',
        '--warning-color': '#F59E0B',
        '--bg-main': '#FFF7ED',
        '--bg-card': 'rgba(255, 255, 255, 0.75)',
        '--text-primary': '#431407',
        '--text-secondary': '#9A3412',
        '--text-light': '#FB923C',
        '--border-color': 'rgba(254, 215, 170, 0.6)'
      }, '#EA580C', '#FB923C', '#9A3412', '#FDBA74'),
      dark: withPortfolioVars({
        '--primary-color': '#FB923C',
        '--primary-dark': '#EA580C',
        '--secondary-color': '#A8A29E',
        '--success-color': '#EAB308',
        '--danger-color': '#F87171',
        '--warning-color': '#FBBF24',
        '--bg-main': '#1C1917',
        '--bg-card': 'rgba(41, 37, 36, 0.75)',
        '--text-primary': '#FFEDD5',
        '--text-secondary': '#FDBA74',
        '--text-light': '#A8A29E',
        '--border-color': 'rgba(68, 64, 60, 0.8)'
      }, '#C2410C', '#EA580C', '#431407', '#9A3412')
    },
    royal: {
      label: {
        en: 'Royal', de: 'Königlich', fr: 'Royal', es: 'Real', it: 'Reale', pt: 'Real', nl: 'Koninklijk',
        pl: 'Królewski', sv: 'Kunglig', da: 'Kongelig', fi: 'Kuninkaallinen', no: 'Kongelig', cs: 'Královský',
        sk: 'Kráľovský', hu: 'Királyi', ro: 'Regal', bg: 'Царски', hr: 'Kraljevski', sl: 'Kraljevski',
        sr: 'Краљевски', bs: 'Kraljevski', mk: 'Кralски', sq: 'Mbretëror', el: 'Βασιλικός', tr: 'Kraliyet',
        ru: 'Королевский', uk: 'Королівський', be: 'Каралеўскі', lt: 'Karališkas', lv: 'Karalisks',
        et: 'Kuninglik', is: 'Konunglegur', ga: 'Ríoga', mt: 'Reale', ca: 'Reial', eu: 'Erregetza',
        gl: 'Real', cy: 'Brenhinol', lb: 'Kinneklech', rm: 'Regial'
      },
      light: withPortfolioVars({
        '--primary-color': '#6366F1',
        '--primary-dark': '#4F46E5',
        '--secondary-color': '#64748B',
        '--success-color': '#16A34A',
        '--danger-color': '#DC2626',
        '--warning-color': '#F59E0B',
        '--bg-main': '#EEF2FF',
        '--bg-card': 'rgba(255, 255, 255, 0.75)',
        '--text-primary': '#1E1B4B',
        '--text-secondary': '#4338CA',
        '--text-light': '#A5B4FC',
        '--border-color': 'rgba(199, 210, 254, 0.6)'
      }, '#6366F1', '#818CF8', '#4338CA', '#A5B4FC'),
      dark: withPortfolioVars({
        '--primary-color': '#818CF8',
        '--primary-dark': '#6366F1',
        '--secondary-color': '#94A3B8',
        '--success-color': '#22C55E',
        '--danger-color': '#F87171',
        '--warning-color': '#FBBF24',
        '--bg-main': '#0F0F23',
        '--bg-card': 'rgba(30, 27, 75, 0.75)',
        '--text-primary': '#E0E7FF',
        '--text-secondary': '#A5B4FC',
        '--text-light': '#818CF8',
        '--border-color': 'rgba(55, 48, 163, 0.8)'
      }, '#4F46E5', '#6366F1', '#312E81', '#3730A3')
    },
    graphite: {
      label: {
        en: 'Graphite', de: 'Graphit', fr: 'Graphite', es: 'Grafito', it: 'Grafite', pt: 'Grafite',
        nl: 'Grafiet', pl: 'Grafit', sv: 'Grafit', da: 'Grafit', fi: 'Grafiitti', no: 'Grafitt', cs: 'Grafit',
        sk: 'Grafit', hu: 'Grafit', ro: 'Grafit', bg: 'Графит', hr: 'Grafit', sl: 'Grafit', sr: 'Графит',
        bs: 'Grafit', mk: 'Графит', sq: 'Grafit', el: 'Γραφίτης', tr: 'Grafit', ru: 'Графит', uk: 'Графіт',
        be: 'Графіт', lt: 'Grafitas', lv: 'Grafs', et: 'Grafiit', is: 'Grafít', ga: 'Grafaidh', mt: 'Grafite',
        ca: 'Grafit', eu: 'Grafitoa', gl: 'Grafito', cy: 'Graffit', lb: 'Graphit', rm: 'Grafite'
      },
      light: withPortfolioVars({
        '--primary-color': '#475569',
        '--primary-dark': '#334155',
        '--secondary-color': '#64748B',
        '--success-color': '#0D9488',
        '--danger-color': '#B91C1C',
        '--warning-color': '#CA8A04',
        '--bg-main': '#F1F5F9',
        '--bg-card': 'rgba(255, 255, 255, 0.75)',
        '--text-primary': '#0F172A',
        '--text-secondary': '#64748B',
        '--text-light': '#94A3B8',
        '--border-color': 'rgba(203, 213, 225, 0.6)'
      }, '#475569', '#64748B', '#334155', '#94A3B8'),
      dark: withPortfolioVars({
        '--primary-color': '#94A3B8',
        '--primary-dark': '#64748B',
        '--secondary-color': '#94A3B8',
        '--success-color': '#2DD4BF',
        '--danger-color': '#F87171',
        '--warning-color': '#FACC15',
        '--bg-main': '#0F172A',
        '--bg-card': 'rgba(30, 41, 59, 0.75)',
        '--text-primary': '#F1F5F9',
        '--text-secondary': '#CBD5E1',
        '--text-light': '#64748B',
        '--border-color': 'rgba(51, 65, 85, 0.8)'
      }, '#334155', '#475569', '#1E293B', '#64748B')
    },
    midnight: {
      label: {
        en: 'Midnight', de: 'Mitternacht', fr: 'Minuit', es: 'Medianoche', it: 'Mezzanotte', pt: 'Meia-noite',
        nl: 'Middernacht', pl: 'Północ', sv: 'Midnatt', da: 'Midnat', fi: 'Keskiyö', no: 'Midnatt',
        cs: 'Půlnoc', sk: 'Polnoc', hu: 'Éjfél', ro: 'Miezul nopții', bg: 'Полунощ', hr: 'Ponoć',
        sl: 'Polnoč', sr: 'Пonoć', bs: 'Ponoć', mk: 'Полноќ', sq: 'Mesnatë', el: 'Μεσάνυχτα', tr: 'Gece yarısı',
        ru: 'Полночь', uk: 'Північ', be: 'Поўнач', lt: 'Vidurnaktis', lv: 'Pusnakts', et: 'Kesköö',
        is: 'Miðnætti', ga: 'Meán oíche', mt: 'Nofsillejl', ca: 'Mitjanit', eu: 'Gauerdia', gl: 'Medianoite',
        cy: 'Canol nos', lb: 'Mëttnuecht', rm: 'Mesadnotg'
      },
      light: withPortfolioVars({
        '--primary-color': '#0F766E',
        '--primary-dark': '#115E59',
        '--secondary-color': '#64748B',
        '--success-color': '#059669',
        '--danger-color': '#DC2626',
        '--warning-color': '#F59E0B',
        '--bg-main': '#F8FAFC',
        '--bg-card': 'rgba(255, 255, 255, 0.75)',
        '--text-primary': '#0F172A',
        '--text-secondary': '#475569',
        '--text-light': '#94A3B8',
        '--border-color': 'rgba(203, 213, 225, 0.6)'
      }, '#0D9488', '#14B8A6', '#134E4A', '#2DD4BF'),
      dark: withPortfolioVars({
        '--primary-color': '#2DD4BF',
        '--primary-dark': '#14B8A6',
        '--secondary-color': '#94A3B8',
        '--success-color': '#34D399',
        '--danger-color': '#F87171',
        '--warning-color': '#FBBF24',
        '--bg-main': '#020617',
        '--bg-card': 'rgba(15, 23, 42, 0.75)',
        '--text-primary': '#F1F5F9',
        '--text-secondary': '#94A3B8',
        '--text-light': '#64748B',
        '--border-color': 'rgba(30, 41, 59, 0.8)'
      }, '#0F766E', '#2DD4BF', '#134E4A', '#164E63')
    },
    aurora: {
      label: {
        en: 'Aurora', de: 'Aurora', fr: 'Aurore', es: 'Aurora', it: 'Aurora', pt: 'Aurora', nl: 'Aurora',
        pl: 'Zorza', sv: 'Aurora', da: 'Aurora', fi: 'Revontulet', no: 'Aurora', cs: 'Polární záře',
        sk: 'Polárna žiara', hu: 'Sarki fény', ro: 'Auroră', bg: 'Аврора', hr: 'Aurora', sl: 'Aurora',
        sr: 'Аурora', bs: 'Aurora', mk: 'Аurora', sq: 'Aurora', el: 'Αυγή', tr: 'Kuzey ışıkları',
        ru: 'Аврора', uk: 'Аврора', be: 'Аўрора', lt: 'Pašvaistė', lv: 'Aurora', et: 'Virmalised',
        is: 'Norðurljós', ga: 'Aurora', mt: 'Aurora', ca: 'Aurora', eu: 'Aurora', gl: 'Aurora',
        cy: 'Aurora', lb: 'Aurora', rm: 'Aurora'
      },
      light: withPortfolioVars({
        '--primary-color': '#7C3AED',
        '--primary-dark': '#5B21B6',
        '--secondary-color': '#64748B',
        '--success-color': '#10B981',
        '--danger-color': '#E11D48',
        '--warning-color': '#F59E0B',
        '--bg-main': '#FAF5FF',
        '--bg-card': 'rgba(255, 255, 255, 0.75)',
        '--text-primary': '#1E1B4B',
        '--text-secondary': '#5B21B6',
        '--text-light': '#A78BFA',
        '--border-color': 'rgba(221, 214, 254, 0.6)'
      }, '#7C3AED', '#C084FC', '#DB2777', '#A855F7'),
      dark: withPortfolioVars({
        '--primary-color': '#C084FC',
        '--primary-dark': '#A855F7',
        '--secondary-color': '#94A3B8',
        '--success-color': '#34D399',
        '--danger-color': '#FB7185',
        '--warning-color': '#FBBF24',
        '--bg-main': '#0F0720',
        '--bg-card': 'rgba(30, 16, 51, 0.75)',
        '--text-primary': '#F3E8FF',
        '--text-secondary': '#D8B4FE',
        '--text-light': '#A78BFA',
        '--border-color': 'rgba(76, 29, 149, 0.8)'
      }, '#6B21A8', '#C084FC', '#DB2777', '#7C3AED')
    }
  };

  function isDarkMode() {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }

  function getStorageKey() {
    return isDarkMode() ? STORAGE_KEY_PREFIX + '_dark' : STORAGE_KEY_PREFIX + '_light';
  }

  function getDefaultId() {
    return isDarkMode() ? DEFAULT_ID_DARK : DEFAULT_ID_LIGHT;
  }

  function normalizePaletteId(id) {
    const raw = (id || '').trim();
    if (raw && PALETTES[raw]) return raw;
    return getDefaultId();
  }

  function applyPalette(paletteId) {
    const key = getStorageKey();
    const id = normalizePaletteId(paletteId || localStorage.getItem(key));
    const pal = PALETTES[id];
    localStorage.setItem(key, id);

    const vars = isDarkMode() ? pal.dark : pal.light;
    const root = document.documentElement;
    Object.keys(vars).forEach(function (varKey) {
      root.style.setProperty(varKey, vars[varKey]);
    });

    const sel = document.getElementById('paletteSelect');
    if (sel && sel.value !== id) sel.value = id;
  }

  function refreshPaletteLabels(lang) {
    const sel = document.getElementById('paletteSelect');
    if (!sel) return;
    const locale = lang || (typeof getCurrentLocale === 'function' ? getCurrentLocale() : 'en');
    for (let i = 0; i < sel.options.length; i++) {
      const opt = sel.options[i];
      const key = opt.value;
      if (PALETTES[key] && PALETTES[key].label) {
        opt.textContent = PALETTES[key].label[locale] || PALETTES[key].label.en;
      }
    }
  }

  let paletteUiInitialized = false;

  function initPaletteUI() {
    const sel = document.getElementById('paletteSelect');
    if (!sel || paletteUiInitialized) return;
    paletteUiInitialized = true;

    PALETTE_ORDER.forEach(function (key) {
      if (!PALETTES[key]) return;
      const opt = document.createElement('option');
      opt.value = key;
      const lang = typeof getCurrentLocale === 'function' ? getCurrentLocale() : 'en';
      opt.textContent = PALETTES[key].label[lang] || PALETTES[key].label.en;
      sel.appendChild(opt);
    });

    const stored = normalizePaletteId(localStorage.getItem(getStorageKey()));
    localStorage.setItem(getStorageKey(), stored);
    sel.value = stored;
    sel.addEventListener('change', function () {
      applyPalette(sel.value);
    });

    applyPalette(stored);
    refreshPaletteLabels();
  }

  window.PALETTES = PALETTES;
  window.PALETTE_ORDER = PALETTE_ORDER;
  window.applyPalette = applyPalette;
  window.initPaletteUI = initPaletteUI;
  window.refreshPaletteLabels = refreshPaletteLabels;
  window.getDefaultPaletteId = getDefaultId;

  if (typeof document !== 'undefined' && document.documentElement) {
    applyPalette();
  }
})();
