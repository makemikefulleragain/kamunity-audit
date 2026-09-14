# Approved personal-results presentation

Owner approved removing unverified industry comparisons on 14 September 2026. Results and browser-print report no longer show peer averages, quartiles, percentile estimates or relative rankings. Personal scores, dimension breakdown, guidance and comparison with the user's own saved prior assessment remain. Scoring questions and arithmetic are unchanged.

Historical sample values remain unused in source, explicitly labelled unverified; prior presentation is preserved in Git and a verified backup at `portfolio-audit/local-recovery/2026-09-14/sovereignty-before-content-approval` (HEAD `37f2056`).

Verification: 28 tests pass, including actual printable-report HTML with a fake print window; lint/build pass. Rebuilt browser results have no comparison section or percentile claims, retain the personal-results clarification, and show no horizontal overflow at 375 pixels. Actual OS print/PDF layout was not verified in this change. No live services, deployment or credential changes were made. The generator remains disabled locally.
