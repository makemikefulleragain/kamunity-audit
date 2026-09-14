import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { generatePDFReport } from '../src/utils/pdfReport.js';
import { calculateScores } from '../src/utils/scoring.js';

test('printable report keeps personal scores and guidance without peer statistics', () => {
  let html = '';
  const oldWindow = globalThis.window;
  const oldTimeout = globalThis.setTimeout;
  globalThis.window = {open: () => ({document:{write: s => {html = s;},close() {}},focus() {},print() {}})};
  globalThis.setTimeout = () => 0;
  try {
    generatePDFReport(calculateScores({}), {name:'Fixture stage',summary:'Fixture summary',nextStep:'Review your data access.',color:'red'});
    assert.match(html, /Dimension Breakdown/);
    assert.match(html, /Recommended Next Steps/);
    assert.match(html, /Review your data access/);
    assert.match(html, /not a comparison with other organisations/);
    assert.doesNotMatch(html, /How You Compare|percentile|vs Peers|<th[^>]*>Avg|aggregated patterns|Top 25%/i);
  } finally {
    if (oldWindow === undefined) delete globalThis.window; else globalThis.window = oldWindow;
    globalThis.setTimeout = oldTimeout;
  }
});

test('results retain personal progress, not industry comparisons', () => {
  const source = readFileSync(new URL('../src/components/Results.jsx', import.meta.url), 'utf8');
  assert.match(source, /<AuditHistory/);
  assert.match(source, /not a comparison with other organisations/);
  assert.doesNotMatch(source, /BenchmarkComparison|industryBenchmarks|getPercentile/);
});
