# HUMAN ACTION — Sovereignty Audit
## Actions Required from Mike

*Last updated: 20 September 2026*

---

## Immediate release decision

### 1. Approve or defer the controlled Netlify release

The local release candidate disables the unsafe content generator, removes unsupported peer comparisons, reports feedback delivery failures honestly, and discloses optional feedback accurately. Local tests, lint, build, dependency audit and browser checks pass. The current Netlify deployment predates these fixes.

Before publication, review the exact release commit and clean manifest, confirm the existing deployment as the rollback candidate, then explicitly approve or defer the production deployment. Deployment is not implied by approval of the content changes.

## Completed

- `public/llms.txt` exists and accurately distinguishes local audit/toolkit data from optional feedback.
- The public assessment remains available; `/admin` and paid generation are disabled locally.
- Unsupported peer comparisons have been removed locally.
- Optional feedback is retained with accurate pre-submit and policy disclosure.

---

## When Ready

### 2. Decide: standalone vs redirect after MPA launch
**What:** After the MPA replaces the existing `kamunity.org` site, decide whether the standalone audit at `kamunity-audit.netlify.app` should:
- Remain as full weighted audit (different from lighter Ring Two embedded version) — **recommended**
- Redirect to Ring Two embedded version
**Why:** Both currently exist. The two-version strategy (standalone = full, Ring Two = diagnostic) is confirmed correct but needs a clear user journey between them.
**Effort:** 30 mins decision + 1 Cascade session to add cross-links.

### 3. PDF export for results
**What:** Enable "Export to PDF" on the results page.
**Why:** ALIKE CEO flagged this as high-value for board leave-behinds.
**Effort:** 1 Cascade session (Phase 3 gate opener).

### 4. Confirm current live URL
**What:** Verify `kamunity-audit.netlify.app` is still the correct live URL.
**Why:** The Netlify project may have been renamed.
