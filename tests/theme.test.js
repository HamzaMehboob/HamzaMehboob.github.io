const { test } = require('node:test');
const assert = require('node:assert/strict');
const { createBrowserSandbox, loadScript } = require('./helpers');

test('theme palettes define seven presets with light and dark modes', () => {
  const sandbox = createBrowserSandbox();
  loadScript('js/theme-palettes.js', sandbox);

  assert.equal(sandbox.PALETTE_ORDER.length, 7);
  assert.deepEqual([...sandbox.PALETTE_ORDER], [
    'ocean',
    'forest',
    'sunset',
    'royal',
    'graphite',
    'midnight',
    'aurora',
  ]);

  for (const id of sandbox.PALETTE_ORDER) {
    const palette = sandbox.PALETTES[id];
    assert.ok(palette, `Missing palette: ${id}`);
    assert.ok(palette.light, `${id} missing light theme`);
    assert.ok(palette.dark, `${id} missing dark theme`);
    assert.ok(palette.label.en, `${id} missing English label`);
    assert.ok(palette.light['--primary-color'], `${id} light missing primary color`);
    assert.ok(palette.dark['--primary-color'], `${id} dark missing primary color`);
  }
});

test('default palette ids differ for light and dark mode', () => {
  const sandbox = createBrowserSandbox();
  loadScript('js/theme-palettes.js', sandbox);

  sandbox.document.documentElement.setAttribute('data-theme', 'light');
  assert.equal(sandbox.getDefaultPaletteId(), 'ocean');

  sandbox.document.documentElement.setAttribute('data-theme', 'dark');
  assert.equal(sandbox.getDefaultPaletteId(), 'midnight');
});
