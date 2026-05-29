# Portfolio Enhancement TODO

Dynamic background (KodeKloud-style), European i18n, and theme system (CarbonCalculator pattern).

**References:**
- Background: https://learn.kodekloud.com/user/dashboard
- Theme/i18n: https://github.com/HamzaMehboob/CarbonCalculator

**Stack:** Static GitHub Pages — `index.html`, `css/style.css`, `js/script.js`, `js/chatbot.js` — no build step.

---

## Phase 0 — Discovery & architecture

- [x] Read `index.html`, `css/style.css`, `js/script.js`, `js/chatbot.js` end-to-end
- [x] Study KodeKloud dashboard animated mesh gradient background
- [x] Study CarbonCalculator `js/theme-palettes.js` and dark mode / i18n pattern
- [x] Decide: CSS-only mesh orbs vs Canvas (prefer CSS for GitHub Pages)
- [x] Define file structure:
  - `js/theme-palettes.js`
  - `js/theme.js`
  - `js/i18n.js`

---

## Phase 1 — CSS design system (foundation)

- [x] Add CSS custom properties on `:root` (colors, backgrounds, text, borders, gradients, shadows)
- [x] Add `[data-theme="dark"]` variable overrides
- [x] Refactor hardcoded colors in `style.css` to use variables:
  - [x] Navbar
  - [x] Sections (home, about, technologies, experience, education, projects, contact)
  - [x] Buttons and toggle buttons
  - [x] Timeline and project cards
  - [x] Footer
  - [x] Chat widget (Lisa)
- [x] Make sections semi-transparent / glass-style so dynamic background shows through
- [x] Add smooth transitions for theme changes (`transition: all 0.3s ease`)

---

## Phase 2 — Dynamic background (KodeKloud-style)

- [x] Add `#dynamic-background` fixed layer in `index.html` (`z-index: -1`, `pointer-events: none`)
- [x] Implement 3–5 `.mesh-orb` elements with `radial-gradient` + `filter: blur(60–80px)`
- [x] Add `@keyframes orb-drift` — slow scale/translate animation (8–15s)
- [x] Bind orb colors to theme palette CSS variables (`--mesh-orb-1`, `--mesh-orb-2`, `--mesh-orb-3`)
- [x] Remove or replace static section gradients that block the mesh effect
- [x] Add `@media (prefers-reduced-motion: reduce)` — static gradient fallback
- [x] Verify text contrast/readability on all sections in light + dark + all palettes

---

## Phase 3 — Theme engine (CarbonCalculator pattern)

- [x] Port palette definitions — 7 presets:
  - [x] Ocean (default light)
  - [x] Midnight (default dark)
  - [x] Forest
  - [x] Sunset
  - [x] Royal
  - [x] Graphite
  - [x] Aurora
- [x] Each palette: `light` + `dark` CSS variable sets
- [x] Implement `applyPalette(id)` — writes vars to `document.documentElement`
- [x] Implement dark mode toggle — `data-theme="dark"` on `<html>` and `<body>`
- [x] Persist to `localStorage`:
  - [x] `darkMode` → `"true"` / `"false"`
  - [x] `portfolioColorPalette_light`
  - [x] `portfolioColorPalette_dark`
- [x] Restore preferences on page load before first paint (avoid flash)
- [x] Re-apply palette when switching light ↔ dark

---

## Phase 4 — Navbar UI controls

- [x] Add `.header-controls` to navbar:
  - [x] Language `<select>` (globe icon)
  - [x] Palette `<select>` (palette icon)
  - [x] Dark mode button (moon/sun toggle)
- [x] Style controls to match navbar; work in dark mode
- [x] Mobile (≤768px): controls in hamburger menu or compact settings dropdown
- [x] ARIA labels and keyboard accessibility on all controls

---

## Phase 5 — Internationalization (European languages)

- [x] Create `js/i18n.js` with translation registry keyed by locale
- [x] Support all European languages (40 locales)

- [x] Mark all user-facing strings in `index.html` with `data-i18n="key"`
- [x] Translate every key across all locales (UI fully; body content MT for major langs, EN fallback for minor)
- [x] Implement `setLanguage(locale)` — updates DOM, `<html lang>`, `<title>`, placeholders
- [x] Default: `navigator.language` if supported, else `en`
- [x] Persist in `localStorage` key `portfolioLanguage`
- [x] Update palette dropdown labels when language changes
- [x] Wire timeline toggle button through i18n (`Show Details` / `Hide Details`)

---

## Phase 6 — Integration & wiring

- [x] Load scripts in order:
  1. `js/theme-palettes.js`
  2. `js/theme.js`
  3. `js/i18n.js`
  4. `js/script.js`
- [x] Init all modules on `DOMContentLoaded` in `script.js`
- [x] Ensure Lisa chatbot (`chatbot.js`) still works; theme vars apply to chat UI
- [x] Keep Google Analytics snippet (G-KJGFWJWNL2)
- [x] Keep OG meta tags; dynamic `<title>` / meta description per language

---

## Phase 7 — HTML cleanup (while touching `index.html`)

- [x] Remove duplicate viewport meta tag
- [x] Remove duplicate Font Awesome CDN (keep v6)
- [x] Move GA scripts inside `<body>` before `</body>` (currently after `</html>`)

---

## Phase 8 — QA & polish

- [x] Desktop: all palettes × light/dark × 3+ languages smoke test
- [x] Mobile (≤768px): hamburger, controls, mesh performance
- [x] `prefers-reduced-motion` verified
- [x] WCAG AA contrast on text/buttons in every palette
- [x] No console errors on load
- [x] Preferences survive page reload
- [x] Smooth scroll, timeline accordion, nav highlight still work

---

## Phase 9 — Optional enhancements

- [ ] Flag emoji or native name in language dropdown
- [ ] Subtle mouse parallax on mesh orbs (desktop only, disabled for reduced-motion)
- [ ] Fade transition on language/theme switch
- [ ] Export i18n keys to JSON for easier maintenance

---

## Acceptance criteria

- [x] Animated mesh gradient visible behind all sections; colors follow active palette
- [x] Language dropdown lists all European languages; switching updates entire page instantly
- [x] Dark mode + 7 palettes apply globally (navbar, sections, cards, buttons, footer, chat)
- [x] Language + theme + palette preferences persist across reload with no flash
- [x] Mobile responsive; hamburger menu and controls work at 768px and 480px
- [x] Lisa chatbot opens, sends messages, respects theme
- [x] Zero console errors on load

---

## Files to create

| File | Purpose |
|------|---------|
| `js/theme-palettes.js` | 7 palette definitions (light + dark vars) |
| `js/theme.js` | Dark mode toggle, palette apply, localStorage, init |
| `js/i18n.js` | Translations + `setLanguage()` + init |
| `scripts/gen-i18n.js` | Dev helper to regenerate `i18n.js` |

## Files to modify

| File | Changes |
|------|---------|
| `index.html` | Background layer, navbar controls, `data-i18n`, script tags, HTML cleanup |
| `css/style.css` | CSS variables, mesh background, glass cards, dark mode |
| `js/script.js` | Wire init; keep existing menu, scroll, accordion, observer |

## Do not modify (unless required)

- `js/chatbot.js` — logic unchanged; chat UI should inherit CSS variables only
