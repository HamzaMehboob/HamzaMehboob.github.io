const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');

function readFile(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
}

function fileExists(relativePath) {
  return fs.existsSync(path.join(ROOT, relativePath));
}

function extractI18nKeys(html) {
  const keys = new Set();
  const patterns = [
    /data-i18n="([^"]+)"/g,
    /data-i18n-html="([^"]+)"/g,
    /data-i18n-placeholder="([^"]+)"/g,
  ];

  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(html)) !== null) {
      keys.add(match[1]);
    }
  }

  return [...keys].sort();
}

function extractSupportedLocales(i18nSource) {
  const match = i18nSource.match(/const SUPPORTED_LOCALES = (\[[^\]]+\]);/);
  if (!match) {
    throw new Error('Could not parse SUPPORTED_LOCALES from js/i18n.js');
  }
  return JSON.parse(match[1].replace(/'/g, '"'));
}

function createBrowserSandbox() {
  const elements = new Map();

  function makeElement(tag) {
    const attrs = {};
    const children = [];
    return {
      tagName: tag.toUpperCase(),
      attributes: attrs,
      options: [],
      textContent: '',
      innerHTML: '',
      setAttribute(name, value) {
        attrs[name] = value;
      },
      getAttribute(name) {
        return attrs[name] ?? null;
      },
      appendChild(child) {
        children.push(child);
        if (tag === 'select') {
          this.options.push(child);
        }
      },
      addEventListener() {},
      querySelector() {
        return null;
      },
      querySelectorAll() {
        return [];
      },
    };
  }

  const documentElement = {
    lang: 'en',
    attributes: {},
    style: { setProperty() {} },
    setAttribute(name, value) {
      this.attributes[name] = value;
    },
    getAttribute(name) {
      return this.attributes[name] ?? null;
    },
  };

  const document = {
    documentElement,
    title: '',
    body: makeElement('body'),
    createElement(tag) {
      return makeElement(tag);
    },
    getElementById(id) {
      if (!elements.has(id)) {
        elements.set(id, makeElement('div'));
        elements.get(id).id = id;
      }
      return elements.get(id);
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
  };

  const localStorageStore = {};
  const sandbox = {
    window: {},
    document,
    localStorage: {
      getItem(key) {
        return localStorageStore[key] ?? null;
      },
      setItem(key, value) {
        localStorageStore[key] = String(value);
      },
    },
    navigator: { language: 'en-US' },
    console,
  };
  sandbox.window = sandbox;

  return sandbox;
}

function loadScript(relativePath, sandbox) {
  const source = readFile(relativePath);
  vm.runInNewContext(source, sandbox, { filename: relativePath });
  return sandbox;
}

module.exports = {
  ROOT,
  readFile,
  fileExists,
  extractI18nKeys,
  extractSupportedLocales,
  createBrowserSandbox,
  loadScript,
};
