# Local hardening and verification — 13 September 2026

Verified backup: enclosing workspace `portfolio-audit/local-recovery/2026-09-13/sovereignty-before-dependency-hardening`, HEAD `94c46b43bfb0a73f450c7199d5f2aea41ecbe7b9`.

Named affected dependencies were refreshed within existing manifest ranges in an isolated tracked-source copy excluding `.env*`. Its audit reports zero findings, down from 17. Nineteen executable tests verify the existing questionnaire's totals, threshold boundaries and deterministic scoring. Four baseline lint errors were corrected: unused parameters were removed and the browser-only admin session flag now initializes state directly. This does not turn that flag into secure authentication. Scoring import uses an explicit `.js` extension so Node can run the real source tests without extra tooling.

Tests, lint and build pass in the isolated copy. The browser walkthrough completed all ten questions with the strongest options and produced 100 points / four 25-point dimensions. Back navigation retained a selection; reload retained results; retake returned to the audit. Widths 375/768/1360 had no horizontal overflow, mobile results were visually inspected, and the browser reported no errors or warnings. No external contact, feedback or AI request was submitted.

## Release blockers, not resolved by dependency checks

- `netlify/functions/generate-content.mjs` does not authenticate callers before invoking the AI provider when a key is configured. The client-side admin gate is not server security. Do not enable/publish this paid function until it is removed, disabled or protected by real server-verified owner access plus bounded inputs/rate limits. No live invocation or remote change was made.
- `src/data/benchmarks.js` contains numerical industry comparisons but the inspected file provides no dataset, sample size or methodology. Their provenance is unverified; owner evidence or explicit illustrative labelling is needed before presenting them as industry measurements.
- Passing arithmetic tests does not validate the assessment scientifically or establish legal, financial or professional advice quality.
- Verify actual deployment parity, privacy/content claims and hosting runtime before release. This local work is not a push/deployment approval.
