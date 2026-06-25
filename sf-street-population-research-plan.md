# Research Plan — A Persona Lens on the Population of People on SF Streets

*Plan drafted June 23, 2026. Companion to [sf-1.md](docs/sf-1.md) (how cities segment & serve SUD personas) and [sf-substance-use-data-analysis.md](docs/sf-substance-use-data-analysis.md) (the three-lens SF substance-use breakdown).*

> **✅ Status (June 24, 2026): this plan has been executed.** See **[README.md](README.md)** for the project index. Produced:
> - [sf-street-population.md](sf-street-population.md) — main population profile (answers all 7 questions)
> - [sf-veterans.md](sf-veterans.md) — veterans sub-profile
> - [sf-key-stats.md](sf-key-stats.md) — one-page shareable stats
> - [sf-visual-specs.md](sf-visual-specs.md) — chart specs (fully footnoted)
> - [viz/](viz/) — shareable web visualization ([viz/README.md](viz/README.md))
>
> Open follow-ups and key decisions are tracked in [README.md](README.md). The matrix below is the original plan; figures and confidence are now resolved in the deliverables.

---

> **📐 How to read the counts.** *"Experiencing homelessness"* is an umbrella covering two groups:
> - **Unsheltered** — sleeping on the street, in a vehicle, or a tent. **This is what we mean by "on the street."**
> - **Sheltered** — staying in *temporary* emergency shelter or transitional housing on the night of the count. **Sheltered does not mean housed** — these people still have no home of their own; they are just indoors that night.
>
> So a headline total (e.g., **8,323** in 2024) = **unsheltered + sheltered**. People in **permanent** housing — including **HUD-VASH** — have *exited homelessness* and are **not** in the total.
>
> | Housed — **not** in the count | Experiencing homelessness — **in** the count |
> |---|---|
> | Stably housed · Permanent supportive housing / HUD-VASH | **Sheltered** (temporary) · **Unsheltered** ("on the street") |

## 1. Purpose & scope

The two existing briefs cover **policy/intervention** (how municipalities build a differentiated response per persona) and **substance use** (why SF's street picture, prevalence surveys, and overdose deaths diverge). This plan adds the missing third pillar: **sizing and characterizing the actual population** of people living/sleeping on San Francisco's streets, sliced into personas.

The output of *executing* this plan will be a single team-facing document (`sf-street-population.md`) with cited statistics and a small set of charts. **This file is the plan for getting there**, not the deliverable itself.

### The questions we are answering (verbatim from the ask)
1. **How many** people are on the streets in SF?
2. How many **have access to housing but are still found sleeping outside often**?
3. How many have **acute addiction** — and broken down **by drug type**?
4. How many have **mental health issues**?
5. **How long** have people been out there (duration / chronicity)?
6. How **likely** is it that they've **received services in the past**?
7. **Demographic makeup**: age, race/ethnicity, sex/gender, sexual orientation.

---

## 2. Framing discipline (read before researching)

These questions **cannot be answered authoritatively**, and the deliverable must say so on its face. Three rules carry over and extend the methodology already established in the substance brief:

- **Three different quantities, never conflated.** The substance brief established that *prevalence ≠ visibility ≠ lethality*. The same discipline applies to population sizing: a **point-in-time count** (one night), an **annual served count** (everyone touched in a year), and a **prevalence estimate** (a modeled or surveyed share) are three different numbers that are all "correct." Every figure in the deliverable gets labeled with **(a) what it measures, (b) the year, (c) the source, (d) the population denominator** (all homeless? unsheltered only? SF county? a survey subsample?).

- **Personas overlap — count indicators, not people.** As in the 32% meth / 11% opioid case, "48% mental illness + 32% meth + X% chronic" describes overlapping flags on the same individuals, not additive sub-populations. The deliverable must never let percentages be silently summed.

- **Distress is not disabling illness, and cause is not consequence.** Mental-health symptom screens (the source of the "~48% complex behavioral-health need" / anxiety-interfering-with-functioning figures) measure a *state* that is partly **reactive to being unsheltered** — and post-housing evidence shows such distress declines once people are housed. They overstate the population whose mental illness is a *disabling, causal* condition (psychosis, bipolar, the "stopped taking meds" group — i.e. serious mental illness / "gravely disabled," the SB-43 / CARE Court target in [sf-1.md](docs/sf-1.md)). The deliverable reports a **ladder** of mental-health constructs (broad distress → diagnosis → SMI → treatment-disengaged SMI), leads with the disabling end, and never presents a single "% mentally ill" number.

- **Clinical severity ≠ legal compellability — and the gap is the "missing middle."** A second axis runs orthogonal to the severity ladder: whether the system has any lever to act without consent. **5150 is a *legal* threshold, not a severity one** — it requires *imminent* danger to self/others or grave disability (can't obtain own food/clothing/shelter), and only for 72 hours. This produces three operational groups: (a) **5150 / conservatorship-eligible** — small, and "tractable" only in that a legal door to care exists; (b) the **missing middle** — visibly symptomatic, disorganized, disruptive (yelling, erratic) but *not imminently dangerous and managing to subsist*, so fully entitled to refuse all services with no compulsion lever — operationally the hardest group and likely what the public means by "mentally ill on the street"; (c) lower / reactive distress. The missing middle is exactly what **SB-43 (lowered grave-disability bar) and CARE Court (court-ordered plans without a dangerousness finding)** were built to reach, so sizing it doubles as sizing those programs' target. It has **no registry** — proxy only (911/311 behavioral calls, police CIT/crisis contacts, street-medicine/HOT-team logs, repeat encounters), **Low** confidence. Note the fusion with #3: **meth-induced agitation/psychosis presents here** and observers file it as mental illness — name the overlap, don't double-count.

- **Sheltered vs. unsheltered is the master split.** The ask centers on people *"on the streets"* and *"sleeping outside"* — i.e. the **unsheltered** subset, which is more drug-, mental-health-, and chronicity-loaded than the all-homeless denominator most headline stats use. Each stat must declare which denominator it's drawn from, and the deliverable should foreground the **unsheltered** number wherever the source allows.

- **Every figure cited inline.** No number appears without a source link and year immediately attached. Uncertain or modeled figures are flagged as such with the reason (lag, self-report, survivorship, small subsample). This is non-negotiable per the ask.

- **SF is the subject; California is comparison only.** Every headline figure must be a **San Francisco** measurement (PIT Count, SFDPH, OCME, HSH/HMIS, DataSF). Statewide CASPEH numbers are *context and benchmark*, never the lead figure — and where they appear, they're labeled "statewide, for comparison." Two SF-specific levers on CASPEH: (1) check whether the published data offers an **SF-county subsample** (SF was one of the eight study counties) and prefer it; (2) the substance brief already demonstrated *why* the statewide CASPEH split (32% meth / 11% opioid) **does not** describe SF — apply that same skepticism to any statewide figure before importing it.

---

## 3. Source inventory (tiered by authority)

### Tier 1 — Primary SF counts & representative surveys
- **SF HSH Point-in-Time (PIT) Count & Survey** — the HUD-mandated biennial census + survey, run for SF by Applied Survey Research (ASR). Headline total, **sheltered vs. unsheltered split**, and the survey supplement carries self-reported demographics, duration, disability, substance use, mental health, and service history. This is the spine of the entire deliverable.
  - **2026 (most recent) — PRELIMINARY only, released May 2026:** total **7,973** (−4% vs. 2024's 8,323); **unsheltered 3,400** (−22% vs. 4,354, "lowest since 2011"); **57% sheltered** (highest recorded). Subpopulation shifts: **veterans 327, −44%** (unsheltered vets −55%); **youth/TAY −54%**; **people in families 1,474, +34%**. **The full report with demographics, chronicity, mental health, substance use, and duration is not out yet — "later this summer 2026."** Preliminary results: https://www.sf.gov/2026-point-in-time-count-preliminary-results
  - **⚠️ Methodology break / contested trend:** the 2026 count moved to a **morning count that asked people about housing status rather than visually assuming it**. The official preliminary page omits this; press (SF Standard, Davis Vanguard, SFist) flags it as plausibly driving the unsheltered "drop." **Treat 2024→2026 as a confounded comparison** and label it so — a live application of the "what does this measure" rule (§2).
  - **2024 comprehensive report** — the **most recent source with full demographic / duration / behavioral-health detail** until the 2026 full report lands; use as the demographic spine for now and refresh on release. **2022 / 2019** for longer trend (pre-methodology-break).
  - SF HSH reports hub: https://hsh.sfgov.org/about/research-and-reports/point-in-time-count/

### Tier 1b — Higher-frequency SF sources (fill the gaps between biennial PITs)
*The ask flags that PIT counts are infrequent. These refresh monthly/quarterly/annually and are SF-specific.*
- **HSH Homelessness Response System — Monthly Report** (outreach encounters, coordinated-entry assessments, problem-solving resolutions, housing placements): https://www.sf.gov/data/homelessness-response-system-monthly-report
- **HSH dashboards** — Homelessness Trends (flows in/out of the system over time), Coordinated Entry, and Housing Demographics dashboards: https://hsh.sfgov.org/about/research-and-reports/hrs-data/
- **SF Controller — 2025 Homelessness Needs Assessment** (Dec 10, 2025) — **★ now extracted; the single most useful SF-specific source.** Legally mandated (Our City Our Home ordinance) to break down sub-populations by race, family composition, sexual orientation, age, and gender; **synthesizes HSH + DPH + MOHCD + PIT** into one persona-shaped picture. Underlying figures are mostly **2024 data**. PDF: https://media.api.sf.gov/documents/2025_Homelessness_Needs_Assessment.pdf — full text extracted to `scratchpad/needs-assessment-2025.txt`. Source appendices (HSH / PIT 2024 / DPH / MOHCD) are the next drill-down. *Caveats: HSH demographic splits are **heads-of-household, not individuals**; a 2024 vehicular-homelessness methodology change inflated family counts.*
  - Companion: **2025 Assessment of the SF Shelter System** (March 2025, Controller) — shelter flow/exits: https://media.api.sf.gov/documents/CON_Shelter_Assessment_Report.pdf
- **Quarterly encampment / RV counts** (HSOC operational counts; cited in 2026 press as dropping for a 4th straight quarter) — higher-frequency proxy for *unsheltered* trend.
- **California HDIS** (statewide HMIS; SF-specific annual *served* counts and demographics via data.ca.gov "Homelessness Demographics"): https://bcsh.ca.gov/calich/hdis.html — gives the **annual-served** denominator that complements PIT's one-night snapshot. *Caveat: excludes providers not on HMIS.*
- **Tipping Point SF Homelessness Dashboard** (aggregator, context): https://tippingpoint.org/strategy/investigate-and-change/san-francisco-homelessness/
- **UCSF BHHI — CASPEH** (already in our docs): largest representative CA homelessness study since the 1990s; SF is one of eight counties. Use for behavioral-health prevalence, duration, pathways, and service history **only as a comparison benchmark or where an SF-county subsample exists** — not as an SF headline number (see the SF-primacy rule in §2). Rigorous sampling. *Data: Oct 2021–Nov 2022 (now ~4 yrs old).* https://homelessness.ucsf.edu/our-impact/studies/california-statewide-study-people-experiencing-homelessness
- **SF HSH ONE System / HMIS** — the by-name administrative system. Best source for *annual* served counts, returns-to-homelessness, and service-receipt history (vs. PIT's one-night snapshot). Some aggregates published on DataSF.

### Tier 2 — SF administrative / health data
- **SFDPH** — SUD treatment entry, primary-substance-at-admission, co-occurring mental-health service use (already mined in the substance brief). https://www.sf.gov/data/substance-use-services
- **SF OCME** — unintentional overdose deaths, fentanyl/meth/cocaine co-factors (already in substance brief). https://www.sf.gov/data--preliminary-unintentional-drug-overdose-deaths
- **DataSF / Socrata** (`data.sfgov.org`) — machine-queryable aggregates (overdose deaths, some HSH/311/shelter datasets). Queryable in this environment via the `socrata-open-data` MCP tools. *Note: the headline PIT figures are published as PDF reports, not on Socrata; use DataSF for the datasets that are there and cite PDFs directly otherwise.*
- **SF Controller / Budget & Legislative Analyst** — audits and cost/utilization analyses that sometimes recompute population figures independently.

### Tier 3 — National context & methodology
- **HUD AHAR** (Annual Homeless Assessment Report) — national/CoC-level definitions, chronic-homelessness definition, methodology for the PIT.
- Peer-reviewed work already in our source list (PSH premature-exit disparities, harm-reduction RCTs) for the "housed but still outside" and services threads.

### Tier 4 — Journalism / advocacy (context & recency only, never a primary statistic)
- Coverage already collected in [sf-1.md](docs/sf-1.md) (The Frisc, SF Examiner, City Journal) — used to date policy shifts and surface the "partly-housed, service-resistant" persona, not to source counts.

---

## 4. Question-by-question research matrix

For each question: the **best source**, the **denominator caveat**, and the **known starting figure or gap** to confirm/refresh during execution. Figures below are anchors to verify, not final numbers.

| # | Question | Primary source(s) | Denominator / caveat | Status to resolve |
|---|----------|-------------------|----------------------|-------------------|
| 1 | How many on the streets? | **PIT 2026 preliminary** (total 7,973 / **unsheltered 3,400** / 57% sheltered); HSH monthly report + HDIS annual-served for the larger "touched in a year" number | One-night vs. annual; SF county only; "street" = unsheltered subset; **2026 methodology break confounds the trend** | Lead with 2026 unsheltered, flagged preliminary + methodology-confounded; show 2019→2022→2024→2026 trend *with the break marked*; state annual-served (HDIS) alongside |
| 2 | Have housing but still sleep outside? | CASPEH (returns/instability); HSH PSH exit & returns-to-homelessness; PSH premature-exit literature; substance brief's "partly-housed meth" persona | No clean single metric exists — this is the hardest question; assemble from proxies | Define the persona precisely; present 2–3 proxy figures with explicit "no authoritative count" caveat |
| 3 | Acute addiction, by drug type | PIT survey (self-report SUD); CASPEH (32% meth / 11% opioid statewide); SFDPH treatment entry (opioid+meth+alcohol); OCME mortality | "Acute" undefined in sources — operationalize as regular-use / SUD-diagnosis; **reuse the three-lens framing** | Restate the three-lens breakdown; reconcile street vs. survey vs. mortality per existing brief |
| 4 | Mental health issues | **Two axes, never one number** — *severity ladder*: PIT/CASPEH symptom screens (broad) → SF psychiatric-hospitalization, SFDPH BH caseload, SSI-psychiatric (narrow); *compellability axis*: 5150-hold & conservatorship counts (LPS data) vs. the unregistered **missing middle** (proxy: 911/311 behavioral calls, CIT contacts, street-medicine/HOT logs) | "48%" is *any complex behavioral-health need* (folds in SUD); symptom screens are partly **reactive to being unsheltered** (would fall with housing). 5150 is a *legal*, not severity, threshold. Missing middle has no registry → Low confidence. Meth-psychosis fuses with #3 here | Build the severity ladder *and* the 3-group compellability split (5150/conservatorship-eligible → missing middle → reactive); size the missing middle as the SB-43/CARE Court target; flag the meth-psychosis overlap rather than double-count |
| 5 | How long out there | PIT chronic-homelessness %; CASPEH duration distribution (median months/years) | HUD "chronic" = 12mo+ or 4 episodes + disabling condition — define it | Report chronic share + median duration; distinguish first-time vs. long-term |
| 6 | Received services before | CASPEH service-history items; HMIS prior-enrollment; SFDPH "diagnosed but not in treatment" (42% enrolled) | "Services" is broad (shelter? clinical? benefits?) — specify which | Give service-contact rate + the treatment-gap figure from substance brief |
| 7 | Demographics | PIT demographic tables (age, race/ethnicity, gender, sexual orientation/LGBTQ+); CASPEH; compare to SF census | PIT survey subsample for orientation; small cells; over-representation of Black residents is the key finding | Build full demographic profile vs. citywide baseline; call out disparities |

---

## 4a. Anchor figures already in hand

Pre-loaded from the 2025 Needs Assessment (Controller, Dec 2025 — citing **PIT 2024 / HSH admin 2024 / DPH MHSF 2024**), the 2026 PIT preliminary, and our existing substance briefs. These are starting anchors to confirm against source appendices, each with its denominator and confidence; **none are final**.

| # | Anchor figure(s) | Source / year | Conf. | Denominator caveat |
|---|---|---|---|---|
| 1 | **One night:** 8,323 individuals / 7,111 households (2024); **3,400 unsheltered** (2026 prelim, was 4,354 in 2024). **Whole year:** **26,634 individuals / 20,236 households served (2024)** | Needs Assmt → PIT 2024 + HSH admin; PIT 2026 prelim | Med–High | One-night ≠ annual; 2026 prelim + methodology break |
| 2 | **16,514 individuals / 12,458 households in HSH housing programs (2024)**; PSH review flags rising acuity / "new and stronger substances" / provider capacity gaps; SUD a top driver of premature PSH exits | Needs Assmt → HSH admin 2024; PSH qual review 2023; sf-1.md | Low | No clean "housed but sleeps outside" count — built from proxies |
| 3 | **DPH cohort 16,671** homeless w/ SUD and/or SMI dx → **50% SUD-only, 34% co-occurring, 16% SMI-only** (⇒ ~84% any SUD dx). Drug-type split: see three-lens brief (SFDPH treatment entry opioid+meth+alcohol; OCME fentanyl-dominant mortality). PIT SUD reports **+16%** 2022→2024 | Needs Assmt → DPH MHSF 2024; [sf-substance-use-data-analysis.md](docs/sf-substance-use-data-analysis.md) | Med | DPH cohort = service-touching + homeless-in-past-year, not all unsheltered |
| 4 | **~50% of the 16,671 carry a serious-MI dx** (34% co-occurring + 16% SMI-only). **DPH SMI = the narrow disabling definition** (psychotic, bipolar, PTSD, or depression w/ a psychiatric inpatient episode). PIT serious-mental-illness reports **+25%** 2022→2024 | Needs Assmt → DPH MHSF 2024 | Med | Diagnosis in a service-touching cohort; missing middle still unmeasured |
| 5 | Single adults far more chronic than families; PIT chronic-homelessness reports **+11%** 2022→2024; **inflow ≈ 3 become homeless per 1 who exits** | Needs Assmt → PIT 2024 / HSH admin | Med | "Chronic" = HUD definition; confirm exact % from appendix |
| 6 | Annual-served (26,634) vastly exceeds one-night (8,323) ⇒ most have system contact; DPH cohort "used City housing/health services in past 2 yrs"; **51% of shelter-leavers have no recorded destination** | Needs Assmt → HSH admin / DPH 2024 | Med | "Services" spans outreach→clinical; data-completeness gaps |
| 7 | **Unhoused single adults (2024, heads-of-hh):** ~half 25–44; **33% Black / 35% White / 14% Latino** (city: 5% / 39% / 16%); **65% men / 29% women / 4% trans-nonbinary**; **78% straight / 12% LGB**. **Unhoused families:** 53% aged 18–34; 40% Black / 28% Latino; 86% women; 84% straight. Black & Latino and LGB overrepresented | Needs Assmt → HSH admin 2024; PIT 2024; 2020 Census baseline | Med–High | **Heads-of-household, not individuals**; orientation from survey subsample |

## 4b. The segmentation framework — and SF's own 2026 evidence for it

The persona lens isn't just an analytic convenience; it's how the field actually operates. [sf-1.md](docs/sf-1.md) documents the **Built for Zero / "functional zero"** methodology (100+ communities): build a real-time **by-name list**, then work **one sub-population at a time**, starting with the group that has a **clean, fundable definition** — usually **veterans**, because of the dedicated federal stream (VA / **HUD-VASH**, **SSVF**). Houston is the canonical case; Rockford segments into five populations; Portland prioritized "Population A" (chronic). The logic: pick a population you can actually fund and finish, bank the win, reuse the template.

**SF's 2026 count looks like that thesis playing out in its own numbers.** The two populations that fell most steeply are exactly the two with dedicated, segregated funding and **targeted "100-Day Challenges"** (SF is in a state cohort for veterans/youth):
- **Veterans −44%** (327; unsheltered vets −55%) — the HUD-VASH/SSVF-funded, cleanest-to-fund population.
- **Youth / TAY −54%** — the other federally/state-targeted segment.
- Meanwhile **families +34%** and the harder-to-fund single-adult chronic/behavioral-health core moved far less — the populations *without* a clean dedicated stream.

**Implication for the deliverable:** present the population not as one blob but segmented the way the system funds and acts on it (veterans / youth / families / chronic single adults / behavioral-health-complex), and note that *measured progress concentrates where targeted funding exists* — a direct, data-backed echo of the Houston/Built-for-Zero pattern. (Verify the −44%/−54% against the full 2026 report and against the methodology-break caveat before leaning on them.)

## 5. Methodology & citation standards (for the deliverable)

1. **Inline citation on every number** — `[figure] (Source, year)` with a footnote/link. Mirror the dense source sections already in our two briefs.
2. **A confidence tag per figure** — High (representative survey / full count), Medium (administrative proxy), Low (modeled, small subsample, or assembled from indicators). Question #2 will be mostly Low and must say so.
3. **One "what this measures" line per stat** — denominator + reference period.
4. **A standing limitations box** — PIT undercount of unsheltered, self-report bias, temporal lag (CASPEH is 2021–22), survivorship in mortality data, persona overlap / non-additivity, and **cause-vs-consequence**: cross-sectional data can't separate conditions that *drove* homelessness from distress *produced by* it (most acute for mental health — see §2); only longitudinal / post-housing evidence can.
5. **Reconcile, don't average** — where SF data and statewide CASPEH disagree (esp. meth vs. opioid), present both with the reason for divergence, as the substance brief does. Never silently blend.

---

## 6. Deliverable structure (`sf-street-population.md`)

1. **TL;DR persona snapshot** — a one-page table: estimated unsheltered population, with each persona dimension (housing-status, addiction, mental health, chronicity, prior-services, demographics) as a row showing best-estimate + confidence + denominator.
2. **How many** (sizing: PIT total, unsheltered split, annual-served, trend).
3. **The "housed but still outside" puzzle** — the honest, proxy-based section.
4. **Addiction by drug type** — condensed three-lens restatement (link out to the full substance brief).
5. **Mental health** (any-need vs. severe; co-occurrence).
6. **Duration & chronicity.**
7. **Service history.**
8. **Demographic profile** (vs. SF baseline; disparities).
9. **Limitations & methodology** (the standing box, expanded).
10. **Sources** (tiered, mirroring our existing briefs).

### Proposed charts — PROVISIONAL, revisit after numbers are nailed down
*Deferred by decision: we lock figures (and their confidence levels) first, then decide which charts are honest to draw. Charts resting on Low-confidence figures (Q2, the missing middle) may become annotated tables instead of graphics. The list below is a candidate menu, not a commitment.* Each chart, if drawn, is labeled with source + year + denominator.
- **C1 — Population funnel:** total homeless → sheltered vs. unsheltered → chronic subset (stacked bar). *Source: PIT 2024.*
- **C2 — Trend line:** SF homeless count 2019 / 2022 / 2024, sheltered vs. unsheltered. *Source: PIT.*
- **C3 — Three-lens substance bars (side by side, NOT merged):** regular-use prevalence vs. treatment-entry vs. overdose-mortality shares. *Sources: CASPEH / SFDPH / OCME — reuse substance brief.*
- **C4 — Mental-health, two axes:** (i) a descending severity ladder (broad distress → diagnosis → SMI → treatment-disengaged SMI) with partly-reactive rungs visually flagged; (ii) a compellability band splitting the SMI population into **5150/conservatorship-eligible** vs. the unregistered **missing middle** (the SB-43/CARE Court target), the latter shown as an estimate range, not a point. Plus a separate SUD/MH/co-occurring overlap marking where meth-psychosis lands in both. *Sources: PIT/CASPEH for broad rungs; SF psychiatric-hospitalization / 5150 / SFDPH BH / conservatorship counts for narrow rungs; 911/311/CIT/HOT proxies for the middle.*
- **C5 — Duration distribution:** share by length of homelessness. *Source: CASPEH / PIT.*
- **C6 — Demographics vs. SF baseline:** grouped bars for race/ethnicity, age band, gender, LGBTQ+ — homeless population vs. citywide census. *Sources: PIT / CASPEH vs. ACS.*

*Chart toolchain to decide at execution: static Markdown tables as a floor, with Mermaid or a small Vega-Lite/`matplotlib` export for C1–C6 if the team wants graphics. Flag any chart resting on a Low-confidence figure.*

---

## 7. Execution workflow & next steps

1. **Lock the sizing spine first** — PIT **2026 preliminary** for headline total / unsheltered / sheltered (flag preliminary + methodology break), **PIT 2024 comprehensive** for demographics / chronicity / behavioral health until the 2026 full report lands "later summer 2026," and **HDIS / HSH monthly** for the annual-served denominator. Watch for the 2026 full report dropping during this work.
2. **Pull CASPEH SF-relevant figures** for behavioral health, duration, pathways, service history — the representative-survey layer.
3. **Reuse, don't re-derive,** the substance-use figures already validated in our briefs (cite internally + to original sources).
4. **Query DataSF/Socrata** (`socrata-open-data` MCP) for any machine-readable aggregates (overdose, shelter, HMIS) to refresh or corroborate; cite PDFs where Socrata lacks the data.
5. **Tackle Q2 ("housed but still outside") last** — it's the synthesis question with no clean source; build it from the proxies identified above and label confidence honestly.
6. **Draft `sf-street-population.md`** per §6, generate charts, and run a citation pass to confirm every figure has source + year + denominator + confidence.

### Open questions for the team (resolve before/early in execution)
- ~~**Geography:** SF county/CoC only, or broader Bay Area?~~ **Resolved: San Francisco only.** California used strictly as a comparison benchmark, never as a headline figure.
- **Denominator priority:** lead with the one-night PIT number, or the larger annual-served number? *(Plan recommends leading with unsheltered PIT, footnoting annual-served.)*
- **"Acute addiction" definition:** operationalize as regular use, an SUD diagnosis, or treatment need? *(Plan assumes regular-use / SUD-diagnosis, stated explicitly.)*
- **Chart fidelity:** Markdown tables only, or rendered graphics (Mermaid/Vega/matplotlib)?
