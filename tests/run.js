const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const testsDir = __dirname;
const files = fs
  .readdirSync(testsDir)
  .filter((name) => name.endsWith('.test.js'))
  .sort()
  .map((name) => path.join(testsDir, name));

if (files.length === 0) {
  console.error('No test files found in tests/');
  process.exit(1);
}

const result = spawnSync(process.execPath, ['--test', ...files], {
  stdio: 'inherit',
  env: process.env,
});

process.exit(result.status === null ? 1 : result.status);
