# SOVEREIGNTY AUDIT — PHASES
## Digital Sovereignty Self-Assessment Tool

*Inherits: BRAIN/CONSTITUTION.md in full. This document adds Sovereignty Audit operational detail — done conditions, built items, open items. It never weakens the global constitution.*

*See `ROADMAP.md` for the improvement queue and user feedback log. See `PLAN/PHASE_QUEUE.md` for scheduling context.*

---

## Phase Map

| # | Name | Status |
|---|---|---|
| 1 | Core quiz engine + 12 questions + results | ✅ Complete |
| 2 | Ecosystem integration (cross-links, llms.txt, Kai) | 🔨 Partial |
| 3 | Enhanced results (PDF export, Copilot Check module) | ⬜ Pending |
| 4 | Aggregate pattern dashboard (20+ org threshold) | ⬜ Pending |

---

## Phase 1: CORE QUIZ ENGINE
**Status:** ✅ Complete
**What:** Free digital sovereignty self-assessment. 12 questions, 4 dimensions, fully client-side, no data collected.

### Built
- React + Tailwind + Vite — deployed to `kamunity-audit.netlify.app` via GitHub CI/CD
- 12 questions across 4 dimensions (data sovereignty, platform sovereignty, identity sovereignty, exit rights)
- Results rendering with dimension scores + recommended next steps
- Honest disclaimer added Feb 19 (no guarantees, not legal advice)
- No user data collected — fully client-side architecture
- Migrated to GitHub CI/CD from drag-and-drop (Feb 19)

### Done Condition (Gate — ✅ all passed)
- [x] 12 questions across 4 dimensions live
- [x] Results render with dimension breakdown
- [x] No data collected — client-side only
- [x] Honest disclaimer present
- [x] Deployed and stable
- [x] Primary demo tool for ALIKE meeting (Feb 24) — used successfully

### Note on Ring Two
The quiz engine was **cannibalised into Ring Two MVP (R2-02)** as an embedded lighter version (diagnostic vs full weighted audit). Standalone site remains live as the full audit. Decision confirmed by Mike Mar 2, 2026: the two versions serve different purposes and should both exist.

---

## Phase 2: ECOSYSTEM INTEGRATION
**Status:** 🔨 Partial
**What:** Cross-link to kamunity.org and sibling sites. Kai describes and recommends the tool. llms.txt for discoverability.

### Open Items
- [ ] `llms.txt` at site root — Constitution Principle 11
- [ ] Cross-link to kamunity.org and Ring Two MVP in results page footer
- [ ] Kai (on Ring Two) describes and recommends this tool conversationally — Ring Two R2-02 handles this partially

### Done Condition (Gate)
- [ ] `llms.txt` exists at site root
- [ ] Results page cross-links to kamunity.org
- [ ] Ring Two Kai recommends standalone audit for users who want full weighted assessment

---

## Phase 3: ENHANCED RESULTS
**Status:** ⬜ Pending
**Gate:** Phase 2 complete + real user feedback on what's missing

### Planned
- Print/export results as PDF — board leave-behind use case (high value, flagged at ALIKE demo)
- "Copilot Check" module — fast Copilot data risk assessment
- Sector-specific framing for disability, mental health results language
- ElevenLabs reads results aloud — accessibility-first

### Done Condition (Gate)
- [ ] PDF export works on mobile and desktop
- [ ] At least 1 real user confirms PDF useful for their board
- [ ] Copilot Check module live

---

## Phase 4: AGGREGATE PATTERN DASHBOARD
**Status:** ⬜ Pending — blocked on 20+ org threshold
**Gate:** 20+ organisations have completed the audit + Supabase opt-in consent mechanism built

### Planned
- Aggregate results → Pattern Dashboard (with org consent)
- WALGA case study from first government engagement
- Referral to Perth Directory services from audit results

### Done Condition (Gate)
- [ ] 20+ organisations completed assessment with consent to aggregate
- [ ] Pattern dashboard shows sector benchmarks (no individual org identified)
- [ ] Privacy review: aggregation rules meet Constitution P5 + P6

---

## R&R Log
*(No R&R triggers yet — tool has been stable since Phase 1.)*
