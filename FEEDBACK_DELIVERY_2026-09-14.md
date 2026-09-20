# Feedback delivery integrity — 14 September 2026

**Privacy closure — 20 September 2026:** The owner chose to retain optional feedback with accurate disclosure. Privacy Policy v2.1, the feedback panel, landing page, footer, FAQ, terms, contact explanation, structured FAQ data and `llms.txt` now distinguish local audit/toolkit data from the optional transmission. Before submission, the user is told that the current page, selected reaction and message are sent through Netlify Forms and is warned not to include personal or sensitive information. A new regression suite prevents the former blanket claims from returning. Verification: 38 tests, lint, production build and dependency audit pass; desktop/mobile browser checks show the disclosure and policy link with zero console errors and no feedback submission.

Release inspection found the optional feedback widget treated HTTP errors and network failures as success. It now checks the response, preserves the user's text/reaction on failure and displays an accessible error with a retry option. No new destination or collected field was added. Only page path, reaction and message are posted when the user chooses to submit; audit answers/scores are not included by the helper.

Verification: 35 tests pass, including seven new feedback transport checks; lint/build pass. Browser simulation intercepted both submissions: a 503 produced an error with the fictional message retained and no thank-you; a 200 retry produced the thank-you. One expected browser resource error reflects the simulated 503, not an unexpected application exception. No real feedback was submitted.

The former privacy-copy blocker is closed locally. Live Netlify form handling and the provider's effective retention/configuration remain deployment-environment checks; no real feedback was submitted during verification.

Verified pre-change snapshot: workspace `portfolio-audit/local-recovery/2026-09-14/sovereignty-before-feedback-failure-fix`, HEAD `c786fa318799fb5cb71e3fa8f638d951f3a4e058`.
