/**
 * Theme engine — dark mode toggle and palette persistence.
 */
(function () {
  const DARK_MODE_KEY = 'darkMode';

  function isDarkMode() {
    const stored = localStorage.getItem(DARK_MODE_KEY);
    if (stored === null) return true;
    return stored === 'true';
  }

  function setDarkModeAttr(dark) {
    const theme = dark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
  }

  function updateDarkModeIcon(dark) {
    const btn = document.getElementById('darkModeToggle');
    if (!btn) return;
    const icon = btn.querySelector('i');
    if (icon) {
      icon.className = dark ? 'fas fa-sun' : 'fas fa-moon';
    }
    btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  function applyPaletteForCurrentMode() {
    if (typeof applyPalette === 'function') {
      applyPalette();
    }
  }

  function toggleDarkMode() {
    const next = !isDarkMode();
    localStorage.setItem(DARK_MODE_KEY, next ? 'true' : 'false');
    setDarkModeAttr(next);
    updateDarkModeIcon(next);
    applyPaletteForCurrentMode();
  }

  function initTheme() {
    const dark = isDarkMode();
    setDarkModeAttr(dark);
    updateDarkModeIcon(dark);
    applyPaletteForCurrentMode();
  }

  function initThemeUI() {
    const btn = document.getElementById('darkModeToggle');
    if (btn) {
      btn.addEventListener('click', toggleDarkMode);
    }
    if (typeof initPaletteUI === 'function') {
      initPaletteUI();
    }
  }

  window.toggleDarkMode = toggleDarkMode;
  window.initTheme = initTheme;
  window.initThemeUI = initThemeUI;

  if (document.documentElement) {
    setDarkModeAttr(isDarkMode());
  }
})();
