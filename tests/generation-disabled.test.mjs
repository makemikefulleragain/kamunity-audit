import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import vm from 'node:vm';
import handler from '../netlify/functions/generate-content.mjs';

for (const method of ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']) {
  test(`generation is disabled for ${method}, without consuming the body`, async () => {
    const response = await handler({
      method,
      json() { throw new Error('Disabled endpoint must not read input'); },
    });
    assert.equal(response.status, 410);
    assert.equal(response.headers.get('cache-control'), 'no-store');
    assert.equal(response.headers.get('access-control-allow-origin'), null);
    assert.deepEqual(await response.json(), {
      error: 'Content generation is disabled.', code: 'FEATURE_DISABLED',
    });
  });
}

test('actual endpoint cannot read credentials or call a provider', async () => {
  const source = readFileSync(new URL('../netlify/functions/generate-content.mjs', import.meta.url), 'utf8');
  let forbidden = 0;
  const reject = () => { forbidden++; throw new Error('Unexpected external I/O or credential access'); };
  const isolatedHandler = vm.runInNewContext(source.replace('export default', 'globalThis.handler =') + '\nhandler', {
    Response,
    process: { env: new Proxy({}, {get: reject}) },
    fetch: reject,
  }, {timeout: 1000});
  const response = await isolatedHandler({method:'POST', json:reject});
  assert.equal(response.status, 410);
  assert.equal(forbidden, 0);
});

test('public assessment remains routed and admin no longer mounts the generator', () => {
  const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8');
  assert.match(app, /path="\/audit" element={<Quiz/);
  assert.match(app, /path="\/results" element={<Results/);
  assert.match(app, /path="\/admin" element={<Navigate to="\/audit" replace/);
  assert.doesNotMatch(app, /import .*\b(?:AdminGate|ContentGenerator)\b/);
});
