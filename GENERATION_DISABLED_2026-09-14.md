# AI content generation disabled — 14 September 2026

Owner approved disabling the separate generator while retaining the public assessment.

- `/.netlify/functions/generate-content` now returns HTTP 410 with a fixed `FEATURE_DISABLED` response for every method, including OPTIONS. It does not read credentials, consume request bodies or call a provider. No permissive CORS response is supplied.
- `/admin` redirects to `/audit`; AdminGate and ContentGenerator are no longer imported into the application. Their unused source remains preserved, and the original endpoint is recoverable from Git commit `18138cb` and the verified pre-change backup. No other assessment, toolkit, feedback or contact behavior was changed.
- Tests: 26 pass (19 scoring plus seven disablement regressions). The actual endpoint is executed in a sandbox whose credential access and fetch throw; neither is reached. Lint and production build pass.
- Browser: direct `/admin` navigation lands at `/audit`; a complete ten-question fictional assessment reaches results, with no generator requests or page exceptions. Vite preview does not emulate Netlify functions; endpoint behavior is verified by executing the actual handler, not by claiming a hosted HTTP test.
- Recovery: workspace `portfolio-audit/local-recovery/2026-09-14/sovereignty-before-generator-disable`, verified original HEAD `18138cbc92ecdd91ed96c3591ec129d8e4bd251f`.

This is a local change only. A deployed earlier function may remain callable until an approved deployment replaces it. No remote settings or keys were changed. Remove unused provider credentials from the relevant hosting scope only through a separately approved configuration change after confirming no other feature depends on them. Re-enabling the generator requires a new owner decision and real server-side access controls; restoring the old endpoint alone is unsafe.

Benchmark/claim provenance remains a separate unresolved release gate. Disabling generation does not validate the assessment's comparative claims.
