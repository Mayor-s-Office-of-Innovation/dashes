# SF Homelessness — Visual Specs

*Text mockups + build notes for a small set of shareable charts. Mirrors the built page in `viz/`. Every number is footnoted to its source. Companion to [sf-key-stats.md](sf-key-stats.md) and [sf-street-population.md](sf-street-population.md). Compiled June 23, 2026.*

> **📐 How to read the counts.** "Experiencing homelessness" = **unsheltered** (street/vehicle/tent — "on the street") + **sheltered** (*temporary* shelter / transitional housing). **Sheltered ≠ housed.** Permanent housing (incl. HUD-VASH) = *exited homelessness*, not in the count.

**Design principle:** these are *overlapping attributes of the same people* (someone is unsheltered **and** using **and** mentally ill at once), so we avoid pie charts (which imply clean slices) in favor of shapes that show overlap and comparison honestly. The headline count leads with the **2026 preliminary** PIT (latest); demographic and behavioral-health breakdowns use **2024**, the latest year with full sub-breakdowns.[^1]

**Tone principle — let the data speak for itself.** Accuracy first, clarity second; never reach for drama. Headlines and copy are **neutral and descriptive**, not advocacy — the numbers carry the weight, so we don't editorialize on top of them. Concretely: prefer plain section titles ("What we are trying to provide") over emotional ones ("how little of it we provide"); state facts ("210 remain on medication at 6 months; an effective course runs ≥12 months") instead of editorial punch-lines ("almost no one gets in"); cut intensifiers ("only," "even," "just," "tiny fraction"). If a figure isn't accurate *and* doesn't contribute to clear messaging, leave it out — we don't add numbers to make a point land harder.

---

## Visual 1 — How many, and where they sleep *(the starting point)*

The **only true partition** in the deck (everything else is overlapping attributes), so it's the foundation: the total, split into people *on the street* vs. those in *temporary shelter*. Lead with the latest (2026 preliminary) headline; show the final 2024 count below.

```
ONE NIGHT — 7,973 people  ·  2026 (PRELIMINARY PIT COUNT)[^1]

  UNSHELTERED — "on the street"      │   SHELTERED — temporary
  3,400  ·  43%                      │   4,573  ·  57%
  ████████████████████              │   ██████████████████████████

  Final 2024 count: 8,323 total — 4,354 unsheltered (52%) /
  3,969 sheltered (48%; 3,644 emergency shelter + 325 transitional).
```
*The 2026 count changed methodology (morning, ask-don't-assume), so it isn't directly comparable to prior years.[^1]*

- **Numbers:** 2026 prelim (headline) — 7,973 total / 3,400 unsheltered (43%) / 4,573 sheltered (57%). Final 2024 — 8,323 total; 4,354 unsheltered (52%); 3,969 sheltered (48% = 3,644 emergency shelter + 325 transitional housing).[^1]
- **Build:** single 100%-width stacked bar — unsheltered vs. sheltered. Lead with the **2026 preliminary** figures (no emergency/transitional sub-split is published for 2026); show the **final 2024** count beneath, where that ES/TH detail exists. Reinforce **sheltered ≠ housed**. Show it first.

---

## Visual 2 — Demographics as disparity: homeless vs. the city (2024)

```
                       share of HOMELESS  ▮     vs. share of SF  ▯

RACE / ETHNICITY
  Black      ▮▮▮▮▮ 24%        ▯ 5%            →  ~5× overrepresented
  Latino     ▮▮▮▮▮▮▮ 34%      ▯▯▯ 16%          →  ~2× overrepresented
  White      ▮▮▮▮▮▮ 29%       ▯▯▯▯▯▯▯▯ 39%      →  underrepresented
  Asian      ▮ 4%             ▯▯▯▯▯▯▯ ~34%      →  sharply underrepresented

LGBTQ+       ▮▮▮▮▮▮ 28%       ▯▯▯▯ 16%          →  ~1.8× overrepresented

GENDER       men 59%   ·   women 32%   ·   transgender / non-binary ~6%
AGE          47% are 25–44 (working-age core)   ·   15% are 55+
```
- **Numbers (homeless, 2024 PIT):** Black 24%, Latino 34%, White 29%, Asian 4%;[^7] LGBTQ+ 28%;[^7] men 59% / women 32% / trans-NB ~6%;[^7] 47% aged 25–44, 15% 55+.[^7]
- **City baseline:** White 39%, Latino 16%, Black 5%;[^8] Asian ~34%;[^8] LGBTQ+ 16%.[^7]
- **Build:** diverging/paired bars (homeless vs. city), sorted by the over-representation multiplier. **The multipliers — ~5× Black, ~2× Latino — are the headline; print them on the bars.** Not a single-population pie.

---

## Visual 3 — Behavioral health: how common, and how much they overlap

**Two layers, two denominators — keep them labeled.** Prevalence is self-reported among *all* homeless people; the overlap is measured cleanly only among those with a *clinical diagnosis*.

Prevalence (2024 PIT survey, all homeless): **~51% report drug/alcohol use**[^2] · **~51% report a mental-health issue**[^3] — and among those *diagnosed*, the two overlap heavily:

```
Of SF homeless people with a DIAGNOSED behavioral-health condition (~16,671):

┌──────────────────────┬───────────────┬─────────┐
│   SUD only — 50%      │  both — 34%   │ SMI 16% │
└──────────────────────┴───────────────┴─────────┘
└──── 84% any substance-use dx ────┘
            └──── 50% any mental-illness dx ────┘
→ a third (34%) carry BOTH a substance-use AND a serious-mental-illness diagnosis[^4]
```
- **Numbers:** prevalence 51% drug / 51% mental health (self-report, all homeless);[^2][^3] co-occurrence 50% SUD-only / 34% both / 16% SMI-only; cumulative totals 84% any substance-use dx, 50% any mental-illness dx (diagnosed cohort, n≈16,671).[^4]
- **Caveat (print it):** the 51%s are self-reported among *all* homeless people; the bar is *clinical diagnoses* among the subset who have one. **Do not read the bar shares as fractions of the 51%.** "Serious mental illness" = psychotic, bipolar, PTSD, or depression w/ a psychiatric inpatient episode.[^4]
- **Explain the 16,671 (it confuses readers):** it's a **year-long** count — people homeless *at some point during 2024* who have a diagnosis — so it exceeds the ~8,000 one-night total (≈26,600 people experience homelessness over a full year). It is *not* bigger than the real homeless population; it's drawn from the annual, not one-night, denominator.[^4]
- **Build:** single 100%-width **segmented bar** (SUD-only / both / SMI-only), with two thin brackets beneath showing the cumulative totals (84% / 50%) — their overlap band *is* the "both" group. Place the two 51% prevalence figures as a lead-in stat above (different denominator). Rhymes visually with Visual 1's bar.

---

## Visual 4 — What we are trying to provide

**The throughline (stated neutrally):** the three things the city aims to provide for people on the street — addiction treatment, mental-health care, and shelter — and how many people each currently reaches. No editorializing; the numbers carry it (see the Tone principle above).

**Three different shapes, because the data genuinely differs — don't force symmetry.** Drug = a clean nested funnel within ONE population. Mental health and shelter = single stats (no clean denominator to nest under). Three columns, stacking to one on narrow screens.

### 4a — Addiction treatment *(funnel)*

```
 3,455   diagnosed w/ opioid use disorder (Medi-Cal)[^6]
   └─▼ 2,497   started on medication[^6]
        └─▼ 210   still on it at 6 months[^6]
            ▌ A clinically effective course runs at least 12 months (NIDA).[^9]   ← highlighted, pinned under the 210
   Evidence: medication (methadone/buprenorphine) cuts overdose death
     38–59%, and abstinence rises the longer people stay on it.[^9]
```

### 4b — Mental-health treatment *(single stat — not a funnel)*

```
 488   people in the entire city are enrolled in a Full Service
        Partnership — the intensive "whatever it takes" model with the
        strongest evidence for serious mental illness[^10]
   Evidence: FSP adds ~128 days of stable housing a year and reduces
     psychiatric hospitalizations, ER visits, and arrests
     (RAND 2024, across California counties).[^10]
```

### 4c — Shelter *(single stat — not a funnel)*

```
 437   adults are on the shelter waitlist, waiting for a bed[^12]
   (Emergency shelter is a temporary bed, not housing — sheltered ≠ housed.
    Adults apply to one citywide waitlist; a bed must be claimed within 3 days.)
   Caveat: point-in-time count (June 2026); many unsheltered people are not
     on it, so it is a floor on unmet demand, not the full gap.[^12]
```

- **Numbers:** drugs — funnel 3,455 → 2,497 → 210 (an effective MOUD course is ≥12 months);[^6][^9] MH — 488 in FSP citywide;[^10] shelter — 437 on the HSH adult shelter waitlist, as of June 24 2026.[^12]
- **Build:** drug = funnel (stage width ∝ count, normalized to its own top). MH & shelter = one large number + label. Treatments get an "Evidence:" box (efficacy research); shelter does **not** — emergency shelter isn't a clinical intervention with outcome data, so forcing an "it works" line there would be hand-wavy.
- **Honesty notes:** **do not** start the drug funnel at 37,500 — that figure is all substances/all payers, while 3,455 is opioid-specific Medi-Cal, so the drop is mostly definitional, not attrition. (Dropped entirely — not even kept as context; it doesn't help the point.) For MH, **do not** build a 13,886→488 funnel: 13,886 (everyone in any MH service) is far broader than those who need FSP, so the drop conflates "got any service" with "needs the intensive tier" — the same denominator-mix as the 37,500. For shelter, **437 is not total need** — it's the active reservation queue; most of the ~3,400 unsheltered aren't on it, so present it as a floor, not the gap.

---

## Suggested sequence (four-beat story)

1. **How many & where they sleep** → Visual 1 (shelter-status split — the foundation)
2. **Who they are** → Visual 2 (disparity)
3. **What they struggle with** → Visual 3 (behavioral-health prevalence + overlap)
4. **What we are trying to provide** → Visual 4 (addiction treatment, mental-health care, shelter — and how many each reaches; this is the close)

---

## Footnotes — source traces

[^1]: **Totals & shelter status.** SF 2024 Point-in-Time Count: 8,323 total; 4,354 unsheltered (52%), 3,969 sheltered (48%). Latest one-night total 7,973 / 3,400 unsheltered is 2026 preliminary (methodology changed — counted in the morning vs. overnight, and asked people their housing status rather than judging it visually — not directly comparable). 2024 report: https://media.api.sf.gov/documents/2024_San_Francisco_Point-in-Time_Count_Report_8_13_24.pdf · 2026 preliminary: https://www.sf.gov/2026-point-in-time-count-preliminary-results

[^2]: **Drug/alcohol use 51%.** SF 2024 PIT *survey*, self-reported health-conditions question, "drug or alcohol abuse" (n≈813–845 of 956 surveys). Self-report; all homeless, not split by shelter status. Source: https://media.api.sf.gov/documents/2024_San_Francisco_Point-in-Time_Count_Report_8_13_24.pdf

[^3]: **Psychiatric/emotional 51%.** SF 2024 PIT survey, same health-conditions question, "psychiatric or emotional conditions." Self-report; all homeless. Source: https://media.api.sf.gov/documents/2024_San_Francisco_Point-in-Time_Count_Report_8_13_24.pdf

[^4]: **SUD ∩ SMI co-occurrence.** SFDPH 2024 Mental Health SF (MHSF) data, via SF Controller, *2025 Homelessness Needs Assessment* (Dec 2025): of 16,671 homeless individuals with a diagnosed SUD and/or serious mental illness — 50% SUD-only, 34% both, 16% SMI-only. The 16,671 are people who were **homeless within the past year and used City services in the past two years** — a year-long population (hence larger than the one-night PIT count; the annual SF homeless count is ≈26,600). SMI defined as psychotic, bipolar, PTSD, or depressive disorder w/ a psychiatric inpatient episode. ~8,300 = the ~50% with an SMI diagnosis. https://media.api.sf.gov/documents/2025_Homelessness_Needs_Assessment.pdf

[^5]: **37,500 hard drug users.** Primary source: UCSF/SFDPH capture-recapture analysis (Dr. Paul Wesson, via SF Chronicle, May 16, 2025), as compiled in the Seibel *San Francisco Drug Crisis: Fact Sheet* (2025–26), Fact 1. The fact sheet is privately circulated and not redistributed in this repo.

[^6]: **Drug treatment funnel.** Primary source: **SFDPH DMC-ODS QIWP Evaluation Report, FY2024-25** — 3,455 Medi-Cal patients diagnosed w/ opioid use disorder; 2,497 received opioid medication; 210 remained on it at 6 months. Hosted on SF's public drug overdose & treatment data page: https://www.sf.gov/resource--2023--drug-overdose-and-treatment-data-and-reports . (These figures were compiled in the Seibel fact sheet, Fact 11, which we cite but do not redistribute.)

[^7]: **Homeless demographics & LGBTQ+ baseline.** SF 2024 PIT count/survey: age (Fig 05), gender (Fig 07, men 59% / women 32% / trans 2% / non-binary 2% / more-than-one 2%), race/ethnicity (Fig 06: White 29%, Black 24%, Latino 34%, Asian 4%), sexual orientation (28% LGBTQ+, p23). Citywide LGBTQ+ baseline **16%** of adults (2023 SF City Survey, p19: "Sixteen percent of respondents are LGBTQIA+"; https://sf.gov/sites/default/files/2023-04/City%20Survey%202023%20Summary%20Report.pdf). PIT source: https://media.api.sf.gov/documents/2024_San_Francisco_Point-in-Time_Count_Report_8_13_24.pdf

[^8]: **City race baseline.** SF 2020 Census, as cited in the 2025 Homelessness Needs Assessment (https://media.api.sf.gov/documents/2025_Homelessness_Needs_Assessment.pdf): White 39%, Hispanic/Latino 16%, Black 5%. Asian ~34% from the 2020 Census directly (U.S. Census Bureau QuickFacts, San Francisco: https://www.census.gov/quickfacts/sanfranciscocountycalifornia).

[^9]: **MOUD efficacy.** Medication for opioid use disorder (methadone/buprenorphine) reduces overdose death — methadone ~59%, buprenorphine ~38% over 12 months; ~59–76% reduction in overdose risk in a 40,000+ person cohort. NIH: https://www.nih.gov/news-events/news-releases/methadone-buprenorphine-reduce-risk-death-after-opioid-overdose

[^10]: **FSP outcomes & SF enrollment.** Full Service Partnership outcomes (San Diego County, quasi-experimental, N=209 FSP vs. 154 matched controls): mean days homeless/yr 191→62; inpatient/ER/justice-use probability −14/−32/−17 pts; 82% of cost offset by savings — Gilmer et al. 2010, *Archives of General Psychiatry* 67(6): https://jamanetwork.com/journals/jamapsychiatry/fullarticle/210805 . Corroborated statewide by a 2024 RAND multi-county evaluation (+128 days stable housing, 2.5 fewer psychiatric admissions, fewer arrests): https://www.rand.org/pubs/research_reports/RRA3105-1.html . *(The 2014 statewide follow-up, Gilmer et al., Psychiatric Services 65(9), found net cost increases — do not cite it for the 191→62 figure.)* SF FSP enrollment **488** (citywide, all SMI; self-reported, point-in-time), per California Accountability dashboard (updated Feb 26 2026): https://www.accountability.ca.gov/county/san-francisco/behavioral-health/

[^11]: **MH treatment reach (context, not shown on the card).** SF Health Network behavioral-health caseload: **13,886 unique individuals with a mental-health diagnosis received at least one service in February 2026** (each person counted once; across SFHN/BHS treatment settings) — SFDPH "Mental Health Treatment" dashboard: https://www.sf.gov/data--mental-health-treatment . FSP is one intensive track within this system. *Deliberately not shown as a 13,886→488 funnel:* the 13,886 is far broader than those who need FSP, so the drop would conflate "got any service" with "needs the intensive tier." Context: CASPEH (statewide) found ~18% of people with SMI received any treatment in the prior 30 days. CASPEH: https://homelessness.ucsf.edu/our-impact/studies/california-statewide-study-people-experiencing-homelessness

[^12]: **Shelter waitlist 437.** HSH 90-day emergency shelter waitlist (adult shelter reservation seniority list), **count of people currently on the list = 437 as of 2026-06-24** (daily snapshot; verified via SoQL `SELECT count(*)` on DataSF dataset `w4sk-nq57`). Dataset: https://data.sfgov.org/Health-and-Social-Services/HSH-90-day-emergency-shelter-waitlist/w4sk-nq57 · lookup tool: https://www.sf.gov/data--check-your-position-adult-shelter-waitlist . **Not total shelter need** — it is the active reservation queue (adults only); many of the ~3,400 unsheltered are not on it, so treat 437 as a floor on unmet demand. *Note: this dataset does not appear in Socrata's catalog/discovery search — find it by web search for the dataset id, then query directly.*
