const test = require('node:test');
const assert = require('node:assert');

const install = require('../scripts/install');
const runConfig = require('../scripts/run');
const update = require('../scripts/update');
const reset = require('../scripts/reset');

test('install returns run array', async () => 
{
	const cfg = await install({ platform: 'linux', gpu: 'nvidia' });

	assert.ok(Array.isArray(cfg.run));
});

test('run returns daemon config', () => 
{
	const cfg = runConfig();

	assert.strictEqual(cfg.daemon, true);
});

test('update includes checkout step', () => 
{
	const cfg = update();

	assert.ok(cfg.run.some(r => r.params.message.startsWith('git checkout')));
});

test('reset removes env', () => 
{
	const cfg = reset();

	assert.ok(cfg.run.find(r => r.params.path));
});
