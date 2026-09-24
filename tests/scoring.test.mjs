import test from 'node:test';
import assert from 'node:assert/strict';
import { questions, DIMENSIONS } from '../src/data/questions.js';
import { calculateScores, getStatusLabel, getColorClasses } from '../src/utils/scoring.js';

function answersFor(pick) {
  return Object.fromEntries(questions.map(question => [question.id, {
    questionId: question.id,
    dimension: question.dimension,
    score: pick(question.options.map(option => option.score)),
  }]));
}

test('question identifiers are unique and each dimension reaches its declared maximum', () => {
  assert.equal(new Set(questions.map(q => q.id)).size, questions.length);
  for (const [id, dimension] of Object.entries(DIMENSIONS)) {
    const maximum = questions.filter(q => q.dimension === id)
      .reduce((sum, q) => sum + Math.max(...q.options.map(o => o.score)), 0);
    assert.equal(maximum, dimension.maxScore);
  }
});
test('all strongest options yield 100 and four strong dimensions', () => {
  const result = calculateScores(answersFor(scores => Math.max(...scores)));
  assert.equal(result.totalScore, 100);
  assert.equal(result.overallStage, 'sovereign');
  assert.ok(Object.values(result.dimensions).every(d => d.score === 25 && d.status === 'strong'));
});
test('lowest offered options yield two points and exposed stage', () => {
  const result = calculateScores(answersFor(scores => Math.min(...scores)));
  assert.equal(result.totalScore, 2);
  assert.equal(result.overallStage, 'exposed');
});
test('scoring is deterministic and does not mutate answers', () => {
  const answers = answersFor(scores => scores[0]);
  const before = structuredClone(answers);
  assert.deepEqual(calculateScores(answers), calculateScores(answers));
  assert.deepEqual(answers, before);
});
for (const [score, expected] of [[0,'atRisk'],[6,'atRisk'],[7,'developing'],[13,'developing'],[14,'good'],[19,'good'],[20,'strong'],[25,'strong']]) {
  test(`dimension threshold ${score} is ${expected}`, () => {
    assert.equal(calculateScores({q:{dimension:'dataOwnership',score}}).dimensions.dataOwnership.status, expected);
  });
}
for (const [total, expected] of [[25,'exposed'],[26,'aware'],[50,'aware'],[51,'progressing'],[75,'progressing'],[76,'sovereign']]) {
  test(`overall threshold ${total} is ${expected}`, () => {
    let remaining = total;
    const answers = Object.fromEntries(Object.keys(DIMENSIONS).map(dimension => {
      const score = Math.min(25, remaining);
      remaining -= score;
      return [dimension, {dimension,score}];
    }));
    assert.equal(calculateScores(answers).overallStage, expected);
  });
}
test('empty answers and label/color fallbacks remain predictable', () => {
  assert.equal(calculateScores({}).totalScore, 0);
  assert.equal(getStatusLabel('atRisk'), 'At Risk');
  assert.equal(getStatusLabel('unknown'), 'unknown');
  assert.deepEqual(getColorClasses('unknown'), getColorClasses('red'));
});
