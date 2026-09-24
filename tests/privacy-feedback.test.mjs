import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

function source(path) {
  return readFileSync(new URL(path, import.meta.url), 'utf8');
}

test('privacy policy distinguishes local assessment data from optional feedback', () => {
  const privacy = source('../src/components/Privacy.jsx');
  assert.match(privacy, /Optional Feedback/);
  assert.match(privacy, /current page path, your selected reaction.*message/s);
  assert.match(privacy, /Netlify Forms/);
  assert.match(privacy, /does not contain your audit answers, scores, toolkit entries/s);
  assert.match(privacy, /Do not include\s+personal, confidential, client, or other sensitive information/s);
});

test('the feedback control explains its transmission before submission', () => {
  const widget = source('../src/components/FeedbackWidget.jsx');
  assert.match(widget, /Submitting sends this page, your reaction, and your message/);
  assert.match(widget, /via Netlify Forms/);
  assert.match(widget, /Don&apos;t include personal or sensitive information/);
  assert.match(widget, /to="\/privacy"/);
});

test('global public copy no longer makes blanket zero-collection claims', () => {
  const publicCopy = [
    '../src/components/Landing.jsx',
    '../src/components/Layout.jsx',
    '../src/components/Toolkit.jsx',
    '../public/llms.txt',
    '../public/.well-known/llms.txt',
  ].map(source).join('\n');

  assert.doesNotMatch(publicCopy, /No data collected\. No tracking\. Everything stays on your device\./);
  assert.doesNotMatch(publicCopy, /All client-side, zero data collection/);
  assert.match(publicCopy, /Optional feedback is sent only/);
});
