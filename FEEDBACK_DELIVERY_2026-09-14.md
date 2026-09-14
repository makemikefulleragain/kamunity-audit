# Feedback delivery integrity — 14 September 2026

Release inspection found the optional feedback widget treated HTTP errors and network failures as success. It now checks the response, preserves the user's text/reaction on failure and displays an accessible error with a retry option. No new destination or collected field was added. Only page path, reaction and message are posted when the user chooses to submit; audit answers/scores are not included by the helper.

Verification: 35 tests pass, including seven new feedback transport checks; lint/build pass. Browser simulation intercepted both submissions: a 503 produced an error with the fictional message retained and no thank-you; a 200 retry produced the thank-you. One expected browser resource error reflects the simulated 503, not an unexpected application exception. No real feedback was submitted.

**Separate release blocker remains:** existing blanket privacy/no-data claims do not accurately cover voluntary feedback submission. Owner choice requested: retain feedback with an accurate disclosure, or disable it. This delivery fix does not imply approval of the existing claims, establish server-side retention policy, or verify live Netlify form handling.

Verified pre-change snapshot: workspace `portfolio-audit/local-recovery/2026-09-14/sovereignty-before-feedback-failure-fix`, HEAD `c786fa318799fb5cb71e3fa8f638d951f3a4e058`.
