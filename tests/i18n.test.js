const { test } = require('node:test');
const assert = require('node:assert/strict');
const {
  readFile,
  extractI18nKeys,
  extractSupportedLocales,
  createBrowserSandbox,
  loadScript,
} = require('./helpers');

const html = readFile('index.html');
const i18nSource = readFile('js/i18n.js');
const htmlKeys = extractI18nKeys(html);
const locales = extractSupportedLocales(i18nSource);

test('index.html defines i18n keys', () => {
  assert.ok(htmlKeys.length > 0);
  assert.ok(htmlKeys.includes('hero_title'));
  assert.ok(htmlKeys.includes('nav_home'));
});

test('supported locales list is populated', () => {
  assert.ok(locales.includes('en'));
  assert.ok(locales.length >= 10);
});

test('every HTML i18n key resolves in English', () => {
  const sandbox = createBrowserSandbox();
  loadScript('js/i18n.js', sandbox);

  sandbox.setLanguage('en');

  for (const key of htmlKeys) {
    const value = sandbox.t(key);
    assert.notEqual(value, key, `Missing English translation for "${key}"`);
    assert.ok(value.trim().length > 0, `Empty English translation for "${key}"`);
  }
});

test('every HTML i18n key resolves in all supported locales', () => {
  const sandbox = createBrowserSandbox();
  loadScript('js/i18n.js', sandbox);

  for (const locale of locales) {
    sandbox.setLanguage(locale);

    for (const key of htmlKeys) {
      const value = sandbox.t(key);
      assert.notEqual(
        value,
        key,
        `Missing ${locale} translation for "${key}"`
      );
      assert.ok(
        value.trim().length > 0,
        `Empty ${locale} translation for "${key}"`
      );
    }
  }
});

test('sample locale strings match expected translations', () => {
  const sandbox = createBrowserSandbox();
  loadScript('js/i18n.js', sandbox);

  sandbox.setLanguage('de');
  assert.equal(sandbox.t('hero_title'), 'Hallo, ich bin Hamza Mehboob');

  sandbox.setLanguage('fr');
  assert.equal(sandbox.t('hero_title'), 'Bonjour, je suis Hamza Mehboob');
});
