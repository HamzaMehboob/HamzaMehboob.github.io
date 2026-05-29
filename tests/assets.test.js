const { test } = require('node:test');
const assert = require('node:assert/strict');
const { fileExists } = require('./helpers');

const REQUIRED_FILES = [
  'index.html',
  'css/style.css',
  'js/script.js',
  'js/theme.js',
  'js/theme-palettes.js',
  'js/i18n.js',
  'js/chatbot.js',
  'assets/img/profile.jpg',
  'assets/img/profileog.jpg',
];

test('required project files exist', () => {
  for (const file of REQUIRED_FILES) {
    assert.equal(fileExists(file), true, `Missing file: ${file}`);
  }
});
