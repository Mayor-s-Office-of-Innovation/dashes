# SF Street-Population Research — Project Index

*Entry point for the project. Last updated June 24, 2026.*

**Goal:** a careful, fully-cited, persona-lens picture of people on the streets in San Francisco — how many, housing status, addiction, mental health, duration, prior services, demographics — plus a shareable web visualization. **San Francisco is the subject; California/national data is comparison only.** Every figure is sourced; uncertainty is stated, not hidden.

---

## Artifacts (read in this order)

### Plan
- **[sf-street-population-research-plan.md](sf-street-population-research-plan.md)** — the research plan: the 7 questions, source strategy, framing discipline, and (now) links to what was produced.

### Research briefs (`docs/`)
- **[docs/sf-1.md](docs/sf-1.md)** — how municipalities segment & serve SUD personas (Built for Zero, Housing First vs. Recovery First, SB-43 / CARE Court). The policy pillar.
- **[docs/sf-substance-use-data-analysis.md](docs/sf-substance-use-data-analysis.md)** — the SF substance "three-lens" method (prevalence ≠ visibility ≠ lethality). *(`docs/sf-2.md` is an identical duplicate of this.)*
- **Seibel SF Drug Crisis Fact Sheet** (37,500 hard-drug-user estimate, treatment funnel, SB-43/Prop 36 data) — a privately circulated document, *not redistributed in this repo*. Figures are cited from their primary sources (UCSF/SFDPH capture-recapture via SF Chronicle; SFDPH DMC-ODS QIWP Evaluation Report FY2024-25).

### Deliverables
- **[sf-street-population.md](sf-street-population.md)** — the main population profile answering all 7 questions, with confidence tags and a standing limitations section.
- **[sf-veterans.md](sf-veterans.md)** — veterans sub-profile (sizing, sheltered/unsheltered, the funding lens, data-source ranking).
- **[sf-key-stats.md](sf-key-stats.md)** — one-page shareable stats summary.
- **[sf-visual-specs.md](sf-visual-specs.md)** — text mockups + build notes for the four charts, **every number footnoted with full source URLs**. This is the spec the web app implements; keep them in sync.

### Web visualization
- **[viz/](viz/)** — the shareable web app (vanilla JS + Vite + Web Awesome). See **[viz/README.md](viz/README.md)** for how to run and the design decisions.

---

## The 7 research questions (status)

| # | Question | Where answered | Confidence |
|---|----------|----------------|------------|
| 1 | How many on the street? | sf-street-population §1 | 🟡 (2026 prelim) |
| 2 | Housed but still outside? | §2 — built from proxies; **no clean count** | 🔴 |
| 3 | Acute addiction & drug mix | §3 + substance brief (three lenses) | 🟡 |
| 4 | Mental-health issues | §4 — ladder + compellability/"missing middle" | 🟡 / 🔴 |
| 5 | Duration / chronicity | §5 (35% chronic; onset age) | 🟢 |
| 6 | Prior service contact | §6 (near-universal; flow is the failure) | 🟡 |
| 7 | Demographics | §7 (Black ~5×, LGBTQ+ ~2.3× overrep) | 🟢 |

---

## Key decisions & gotchas (so we don't re-litigate)

- **Denominator discipline is everything.** Four different "how many" universes recur and must never be conflated: **one-night PIT** (8,323 / 7,973), **annual served** (~26,600), **diagnosed cohort** (DPH 16,671, year-long), and **citywide** (e.g., 37,500 hard drug users, 13,866 in MH care). Each figure is labeled with which one it is.
- **"Sheltered ≠ housed."** "Experiencing homelessness" = unsheltered + sheltered (temporary shelter). "On the street" = **unsheltered only**. Permanent housing (incl. HUD-VASH) = exited the count. Each count-doc opens with a "How to read the counts" box.
- **SF-first.** CASPEH/California is benchmark/comparison only, never an SF headline figure.
- **Mental health = two axes.** Clinical *severity* (reactive distress → diagnosed SMI) **and** legal *compellability* (5150/conservatorship vs. the unregistered **"missing middle"**). Never one "% mentally ill" number. The disabling SMI floor ≈ 8,300 (DPH).
- **The treatment section is CITYWIDE, not unhoused-specific** (most SF drug users ~90% and most people with SMI are housed). The only homeless-specific number there is the ~8,300 SMI. The viz labels this explicitly.
- **MH treatment is a *comparison*, not a funnel** — its numbers are different populations (8,300 homeless SMI vs. 481 citywide FSP), so forcing a funnel would mislead. The drug side *is* a clean nested funnel.
- **2026 PIT changed methodology** (morning, ask-don't-assume) → 2024→2026 trends are confounded. Lead with 2026 preliminary for size, 2024 for the detailed breakdowns.
- **Chronically homeless are NOT all unsheltered** — 56% are sheltered (2024).
- **Viz chart choices:** segmented bar for behavioral-health overlap (rejected Venn — fiddly/inexact; rejected Sankey — overlapping sets double-count). Demographics as disparity bars. 2026-led shelter bar.

---

## Open follow-ups / known gaps

- **Q2 (housed but outside):** needs a returns-to-homelessness / PSH-exit analysis from HSH's ONE System for a real number.
- **Missing middle (Q4):** pull SF **5150-hold and conservatorship** counts to bound the compellable end.
- **2026 full PIT report** (demographics / MH / SUD / duration) is due "later summer 2026" — will refresh the 2024-based detail.
- **SF-specific MH treatment penetration:** the SFDPH "Mental Health Treatment" dashboard is an interactive widget; the 13,866 (Feb 2026) was read manually — pull a fuller series via its data endpoint if needed.
- **Non-resident / arrest-origin data** (Seibel): deliberately **held out** (different population, partly unreleased, politically loaded). Revisit only as a clearly-labeled separate population.
- **Veteran demographic breakdown** (age/race/gender within veterans): no clean SF source found.
- **Deploy:** not done by choice — presenting from localhost. `viz/` is set up for a Vite build → GitHub Pages if wanted later.

---

## Primary data sources (consolidated)

- **SF PIT Count** 2024 (final) & 2026 (preliminary) — HSH / ASR.
- **SF Controller — 2025 Homelessness Needs Assessment** (Dec 2025; synthesizes HSH + DPH + MOHCD + PIT). The richest single SF source.
- **SFDPH** — substance-use services, Mental Health SF (MHSF) data, MH-treatment dashboard.
- **SF HSH** — Homelessness Response System monthly report & **Scorecard** (served, exits, days-to-housing, returns, occupancy).
- **Seibel SF Drug Crisis Fact Sheet** — 37,500 (UCSF/SFDPH capture-recapture, Wesson), treatment funnel, SB-43/Prop 36.
- **California HDIS** — veteran-status & demographic CSVs by CoC (SF = CA-501).
- **HUD CoC PopSub (CA-501)** — veteran sheltered/unsheltered tables.
- **CASPEH (UCSF BHHI)** — statewide comparison only.
- Full URLs are in each doc's Sources section and in `sf-visual-specs.md` footnotes.

*(Note: temporary PDF/CSV text extractions made during research lived in the session scratchpad and do **not** persist. The source PDFs are in `docs/`; re-extract with `pypdf` as needed.)*

---

## Tooling notes

- Web work follows the user-level **`/web-dev`** skill (`~/.claude/skills/web-dev/`): lightweight, web components, **Web Awesome** (`@awesome.me/webawesome`), modern CSS, **no React/Tailwind**, Vite or http-server. The user runs `npm install` commands themselves — print them.
- Web Awesome ships its own agent skill + `llms.txt` inside `node_modules/@awesome.me/webawesome/dist/skills/` — use those for component APIs.
