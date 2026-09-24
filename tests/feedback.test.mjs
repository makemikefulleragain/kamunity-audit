import assert from 'node:assert/strict';
import { test } from 'node:test';
import { submitFeedback } from '../src/utils/submitFeedback.js';

test('optional feedback sends only named form fields, with safely encoded text', async () => {
  const calls = [];
  await submitFeedback({page:'/results',reaction:'idea',message:' A & B = useful '}, async (...args) => {
    calls.push(args); return {ok:true};
  });
  assert.equal(calls.length, 1);
  const [url, options] = calls[0];
  assert.equal(url, '/');
  assert.equal(options.method, 'POST');
  assert.deepEqual(Object.fromEntries(new URLSearchParams(options.body)), {
    'form-name':'feedback',page:'/results',reaction:'idea',message:'A & B = useful',
  });
});

for (const status of [400, 403, 429, 500, 503]) {
  test(`HTTP ${status} is failure, not a false success`, async () => {
    await assert.rejects(submitFeedback({page:'/',message:'Fixture'}, async () => ({ok:false,status})), /could not be confirmed/);
  });
}
test('network failure propagates to the form error path', async () => {
  await assert.rejects(submitFeedback({page:'/',message:'Fixture'}, async () => { throw Error('offline fixture'); }), /offline fixture/);
});
