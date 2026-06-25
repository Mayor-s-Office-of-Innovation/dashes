# SF Homelessness Dashboard — Accuracy & Clarity Review

*Fresh critical pass over `viz/` before sharing. Priority order: **accuracy first, clarity second.** Principle: if a number isn't accurate and doesn't contribute to clear messaging, it doesn't go in — we don't reach for drama. Reviewed June 25, 2026. Companion to [sf-visual-specs.md](sf-visual-specs.md).*

Findings are ranked by severity. Each lists the problem, where it lives, and the agreed change.

---

## 1. Drug funnel — the top stage is a denominator switch *(highest severity; agreed to fix)*

**Where:** [viz/src/data.js](viz/src/data.js) `funnels.drug.stages`; rendered in [viz/src/components/treatment-funnels.js](viz/src/components/treatment-funnels.js).

**Problem.** The funnel reads as one nested population, but stage 1 and stage 2 are different universes:

| Stage | What it actually counts |
|---|---|
| 37,500 | *All* hard drug users — *all substances* (heavily meth), *all payers*, citywide |
| 3,455 | *Opioid* use disorder only · *Medi-Cal* only · *diagnosed* |
| 2,497 | …of those, started on medication |
| 210 | …still on it at 6 months |

The 37,500 → 3,455 collapse is **not attrition** ("only 9% got diagnosed"). Most of it is **definitional** — pure-meth users were never candidates for opioid medication, and non–Medi-Cal users aren't in the dataset at all. The bar encodes a population mismatch as if it were treatment failure.

The kicker **"Fewer than 1 in 100 users retained"** computes 210 / 37,500 = 0.56% — an opioid-specific, Medi-Cal-specific numerator over an all-substance, all-payer denominator. The honest within-population figure is 210 / 3,455 = **6%**. Crossing populations is what produces the more dramatic ratio (0.56% vs 6%) — exactly the move we're avoiding.

This was already flagged internally: *"the drug funnel mixes denominators (all users → opioid-specific diagnoses)"* ([sf-visual-specs.md:109](sf-visual-specs.md#L109)).

**Agreed change.** Drop 37,500 as funnel rung one. Start the funnel at the clean nested population:

```
3,455   diagnosed w/ opioid use disorder (Medi-Cal)
  └─▼ 2,497   started on medication            (72% of diagnosed)
       └─▼ 210   still on it at 6 months        (6% of diagnosed; 8% of those who started)
```

Keep 37,500 only as a standalone **context** stat above the funnel ("SF has ~37,500 hard drug users"), clearly outside the funnel math. Revise or drop the "1 in 100" kicker so any retention ratio is computed within the opioid population (e.g. ~6% of diagnosed retained at 6 months). Nothing true is lost; the story stays striking and stops conflating.

---

## 2. Mental-health panel — homeless *need* vs. citywide *capacity* *(high severity)*

**Where:** [viz/src/data.js](viz/src/data.js) `funnels.mentalHealth`; `comparisonHTML` in [treatment-funnels.js](viz/src/components/treatment-funnels.js).

**Problem.** The panel sets **8,300 homeless adults with diagnosed SMI** against **488 in citywide FSP**. The 488 is *citywide, housed + unhoused* — it does not serve "the 8,300." The visual ("…yet the model proven to work reaches just **488**") implies 488-of-8,300, i.e. a funnel, even though the prose says it isn't one. This is the same disease as #1 in a quieter, more-caveated form — but the picture overrides the footnote, and a reader leaves with "8,300 need it, 488 get it."

**Agreed change.** Revert to the spec's original single-population framing — 13,886 in any MH care → 488 in the intensive FSP tier ([sf-visual-specs.md:96-101](sf-visual-specs.md#L96-L101)). This keeps *one* population and shows an **intensity gap** (broad light-touch care, but the model that works reaches ~3.5%) rather than juxtaposing two mismatched populations. The ~8,300 homeless-SMI figure moves to population *context*, not a funnel rung. This also restores symmetry with the fixed drug funnel: both become clean nested funnels within one population.

---

## 3. Card 4 promises "how common" but only shows overlap *(clarity / consistency)*

**Where:** header in [viz/index.html:32](viz/index.html#L32); [cooccurrence-bar.js](viz/src/components/cooccurrence-bar.js); footer cite [index.html:48](viz/index.html#L48).

**Problem.** The card title is *"Behavioral health — how common, how much they overlap,"* but the component only renders the overlap of the **diagnosed cohort** (16,671). The **51% / 51% prevalence** figures — the "how common" half — are cited in the footer and described as a lead-in in the spec ([sf-visual-specs.md:58](sf-visual-specs.md#L58)) but never appear on the card. (There's even an unused `.prev` style, suggesting they were dropped.) So the footer cites a number the card doesn't show, and the title's first clause is unaddressed.

**Agreed change.** Trim, don't restore. Remove the 51% / 51% reference from the footer ([index.html:48](viz/index.html#L48)) and drop the "how common" clause from the card title (it no longer fits — the card shows overlap *within* the diagnosed cohort, not prevalence across all homeless people). Retitle around the overlap/co-occurrence story.

After trimming, **every figure shown on the card** (16,671 cohort, 50/34/16 split, derived 84% / 50% brackets) traces to the single footnote already rendered beneath it — [^4], SFDPH 2024 diagnosed cohort via the 2025 Needs Assessment p.14 ([data.js:31-33](viz/src/data.js#L31-L33)). The card becomes fully self-consistent: one source, one denominator.

---

## 4. LGBTQ+ baseline disagrees with itself *(accuracy)*

**Where:** [data.js:41](viz/src/data.js#L41), [data.js:51](viz/src/data.js#L51); [sf-visual-specs.md:43](sf-visual-specs.md#L43), [sf-visual-specs.md:136](sf-visual-specs.md#L136).

**Problem.** The built dashboard uses citywide **16% → ~1.8×**. The spec mockup and footnote [^7] use **~12% → ~2.3×**. The link label cites "16% (2023 City Survey)" while the footnote cites "~12% (2019 City Survey)." Two baselines, two multipliers, both in the repo.

**Resolved (verified June 25, 2026).** The **2023 SF City Survey, p.19** states verbatim: *"Sixteen percent of respondents are LGBTQIA+."* So the dashboard's **16% → ~1.8×** is the correctly-sourced, current figure. The spec's **~12% / ~2.3×** is stale — it comes from the 2019 City Survey cited inside the PIT report.

**Decision:** keep the dashboard at **16% → ~1.8×** (2023 SF City Survey, p.19). Fix the spec to match: update the [sf-visual-specs.md:43](sf-visual-specs.md#L43) mockup (12% → 16%, 2.3× → 1.8×) and footnote [^7] ([sf-visual-specs.md:136](sf-visual-specs.md#L136)) to cite the 2023 survey. No change needed to the built dashboard for this item.

---

## 5. Mixed-year "current" numbers *(low severity)*

**Where:** [annual-count.js:5](viz/src/components/annual-count.js#L5) (`oneNight = 8,323`, 2024) vs. card 2 headline 7,973 (2026 prelim).

**Problem.** Card 1 computes "~3× the single night" against 8,323 (2024); the next card headlines 7,973 (2026). The math survives (~3.2× vs ~3.3×) and the year mixing is disclosed, but the explicit basis shifts between adjacent cards.

**Agreed direction.** Low priority — align the comparison basis or note it, for consistency.

---

## Open items — resolved

- **"~90% are housed / ~10% unsheltered"** for drug users ([data.js:69](viz/src/data.js#L69)) — **resolved.** It traces to the Seibel fact sheet's modeled split (**59% private / 30% city-funded / 10% unsheltered**, Fact 1), and is corroborated directionally by the UCSF capture-recapture study ("most users live in permanent housing"). Our own research already adjudicated it ([sf-street-population.md:77](sf-street-population.md#L77), [sf-street-population.md:213](sf-street-population.md#L213)): the precise 59/30/10 split is a modeled estimate with an internally inconsistent footnote (sub-categories sum >100%), so **use only the directional finding** — most users are housed; ~1 in 10 is on the street. **Decision:** keep the claim, directional only ("most are housed; only ~1 in 10 is unsheltered"); never present the 59/30/10 split as precise. Source already in the drug panel's links (Seibel).

- **Drug-funnel figures spot-checked against the primary source (Seibel PDF, June 25, 2026):** 37,500 (Fact 1) ✓ · 3,455 Medi-Cal OUD ✓ (Seibel itself frames this as "roughly 9% of the total user population" — the same denominator-mix we're removing) · 2,497 on medication ✓ · 210 at 6 months ✓. All confirmed.

---

## Summary

| # | Finding | Severity | Status |
|---|---|---|---|
| 1 | Drug funnel top stage = denominator switch | Highest | ✅ **Done** — 37,500 moved to context; funnel starts at 3,455; kicker now "~6% of diagnosed still on medication at 6 months" |
| 2 | MH panel: homeless need vs. citywide capacity | High | ✅ **Done** — reverted to single-population funnel 13,886 → 488; 8,300 moved to context |
| 3 | Card 4 shows overlap but not prevalence | Clarity | ✅ **Done** — 51%/51% removed from footer; title retitled to "how substance use and mental illness overlap"; dead `.prev` CSS removed |
| 4 | LGBTQ+ baseline inconsistent (12% vs 16%) | Accuracy | ✅ **Done** — verified 16%/1.8× (2023 City Survey p19); spec mockup + footnote [^7] updated; dashboard unchanged (already correct) |
| 5 | Mixed-year "current" basis across cards | Low | ⏳ Deferred to the copy-simplification pass |

Findings #1 and #2 are the core accuracy story: a funnel implying a path the populations don't actually share. #3–#5 are consistency fixes.

---

## Copy-simplification pass *(June 25, 2026 — applied)*

A read-through of every subheader, description, and caveat after the structural changes. Surfaced one accuracy bug and several redundancy/complexity cuts.

| # | Item | Type | Change |
|---|---|---|---|
| A | Footer cited "Gilmer et al., *Psychiatric Services*" for the 191→62 FSP figure | **Accuracy** | ✅ Corrected to "Gilmer et al. 2010, *Archives of General Psychiatry*, & RAND 2024." The *Psychiatric Services* (2014) paper is the one the spec explicitly warns *not* to cite for this figure. |
| B | Footer's "mostly self-reported" blanket | **Accuracy** | ✅ Removed — stale after the 51%/51% prevalence came out; shown figures are now counts, clinical diagnoses, and administrative totals, not self-report. |
| C | Card 4 explained the 16,671 year-long count twice | Redundancy | ✅ Consolidated into the intro; closing caption slimmed to the 34%-both point. |
| D | Cross-card one-night multiplier ("~3× the single night (next card)") | Clarity | ✅ Removed the multiplier framing entirely (per direction) — card 1 now describes the annual lens on its own terms; card 4 drops the "~7,973" and duplicated "~26,600." |
| E | Card 3 caveat carried a second dataset (Black 33%/40% admin shares) | Complexity | ✅ Trimmed to directional ("administrative data puts the Black share higher still"); the 33%/40% source link is retained. |
| F | Subtitle jargon "persona-lens snapshot" | Clarity | ✅ Changed to "data snapshot" (page subtitle + `<meta description>`). |

---

## Second simplification round *(June 25, 2026 — applied)*

| Item | Change | Rationale |
|---|---|---|
| Subtitle | Cut the list of contents → just "A data snapshot. San Francisco · compiled June 2026 (…)." | The card titles already name the contents; the list was redundant. |
| Drug funnel — drop 37,500 context | Removed entirely (not even kept as context). | Once it's not a funnel rung it adds no weight, and it re-invites the all-substances/all-payers vs. opioid-Medi-Cal confusion. The funnel stands clean at 3,455 → 2,497 → 210. |
| Drug kicker → 12-month point | Was "only ~6% still on at 6 months"; now "an effective course runs ≥12 months — only 210 are still on medication even at 6 (NIDA)." Redundant caveat folded in and removed. | Makes the substantive clinical point (6 months is mid-course, not a finish line) instead of a bare percentage. |
| **MH panel — drop the 13,886→488 funnel** | Reverted from a funnel to a **single stat (488)**. 13,886 removed. | **Same denominator-mix as the old 37,500:** everyone getting *any* MH service is far broader than those who need FSP, so the "3.5%" drop is mostly definitional, not a service gap. No clean denominator exists, so 488 stands on its own: "the one intensive model proven to work reaches almost no one citywide." SMI scale already established in card 4. |

This leaves card 5 as **two deliberately different shapes** — a clean within-population funnel (drug) and a single stat (mental health) — matching what each dataset can honestly support, rather than forcing visual symmetry. Source links pruned to only what's still shown (dropped 37,500/Fact 1, 13,886 caseload, 8,300 SMI-need links). `npm run build` passes.

---

---

## Card 5 reframe — "What we are trying to provide" *(June 25, 2026 — applied)*

Reframed the closing card from treatment-only ("Treatment works — but almost no one gets in") to the **three things the city aims to provide**: addiction treatment, mental-health care, and shelter. Three columns, three deliberately different shapes (one funnel, two stats).

- **Added shelter panel:** **437 adults on the HSH adult-shelter waitlist**, verified against DataSF dataset `w4sk-nq57` via `SELECT count(*)` (as of 2026-06-24). Framed as a *floor on unmet demand, not total need* — most of the ~3,400 unsheltered aren't on the queue. No "Evidence:" box (emergency shelter isn't a clinical intervention with outcome data).
- **Data-source note:** the waitlist dataset does **not** surface in Socrata's catalog/discovery search (both the MCP `search_datasets` and the raw catalog API return 0). Find DataSF datasets by web-searching the id, then query directly — the `query_dataset` path works fine.

### Tone principle (now also in [sf-visual-specs.md](sf-visual-specs.md) up top)

The user asked to **let the data speak for itself** — neutral, descriptive copy, never reaching for drama. Applied across card 5:
- Header: "What we are trying to provide" (not "…how little of it we provide").
- Lede: plain framing of the three panels; dropped "the proven treatment works — yet reaches only a fraction."
- Removed the punchy "◄" kicker lines; folded essential facts into neutral scope/caveat text.
- "✔ It works:" → plain **"Evidence:"**.
- Cut intensifiers ("only," "even," "just," "almost no one," "tiny fraction").

**Rule of thumb going forward:** prefer plain section titles over emotional ones; state the fact and let the number land; if a figure isn't accurate *and* clarifying, leave it out — don't add numbers to make a point hit harder.

---

**Implemented June 25, 2026.** Files touched: [viz/src/data.js](viz/src/data.js) (funnels restructured), [viz/src/components/treatment-funnels.js](viz/src/components/treatment-funnels.js) (both panels now render as funnels with a context stat; dead comparison code removed), [viz/index.html](viz/index.html) (card 4 title + footer), [viz/src/components/cooccurrence-bar.js](viz/src/components/cooccurrence-bar.js) (dead CSS), and [sf-visual-specs.md](sf-visual-specs.md) (LGBTQ+ figures + Visual 4 synced to the new funnels). `npm run build` passes clean.
