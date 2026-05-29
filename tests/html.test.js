const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFile, fileExists } = require('./helpers');

const SECTION_IDS = [
  'home',
  'about',
  'technologies',
  'experience',
  'education',
  'projects',
  'contact',
];

const LOCAL_SCRIPTS = [
  'js/theme-palettes.js',
  'js/theme.js',
  'js/i18n.js',
  'js/script.js',
  'js/chatbot.js',
];

test('index.html has expected page metadata', () => {
  const html = readFile('index.html');

  assert.match(html, /<title>Hamza's Portfolio<\/title>/);
  assert.match(html, /AI-Powered Senior Embedded Software Engineer/i);
  assert.match(html, /property="og:title"/);
  assert.match(html, /property="og:image"/);
});

test('index.html includes all main sections', () => {
  const html = readFile('index.html');

  for (const id of SECTION_IDS) {
    assert.match(html, new RegExp(`id="${id}"`), `Missing section: #${id}`);
  }
});

test('index.html references existing local assets', () => {
  const html = readFile('index.html');

  assert.match(html, /href="css\/style\.css"/);
  assert.match(html, /src="assets\/img\/profile\.jpg"/);

  for (const script of LOCAL_SCRIPTS) {
    assert.match(html, new RegExp(`src="${script.replace('.', '\\.')}"`));
    assert.equal(fileExists(script), true, `Script file missing: ${script}`);
  }
});

test('index.html includes navigation and theme controls', () => {
  const html = readFile('index.html');

  assert.match(html, /id="languageSelect"/);
  assert.match(html, /id="paletteSelect"/);
  assert.match(html, /id="darkModeToggle"/);
  assert.match(html, /id="chat-toggle"/);
  assert.match(html, /id="chat-widget-container"/);
});

test('contact section includes expected links', () => {
  const html = readFile('index.html');

  assert.match(html, /mailto:hamzamehboob103@gmail\.com/);
  assert.match(html, /linkedin\.com\/in\/hamzamehboob103/);
  assert.match(html, /github\.com\/HamzaMehboob/);
});

test('experience timeline entries are present', () => {
  const html = readFile('index.html');

  assert.match(html, /class="timeline-item"/g);
  const timelineCount = (html.match(/class="timeline-item"/g) || []).length;
  assert.equal(timelineCount, 5);
});

test('projects section includes six project cards', () => {
  const html = readFile('index.html');
  const projectCount = (html.match(/class="project-card"/g) || []).length;
  assert.equal(projectCount, 6);
});
