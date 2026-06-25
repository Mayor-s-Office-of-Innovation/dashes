# SF Homelessness — Web Visualization

A small, shareable web page presenting the four key visuals from [`../sf-visual-specs.md`](../sf-visual-specs.md). Part of the [SF street-population project](../README.md).

## Run it

```sh
cd viz
npm install      # user runs install commands themselves
npm run dev      # → http://localhost:5173/
```

`npm run build` produces static files in `dist/` (only needed for deploy, e.g. GitHub Pages — not currently deployed; we present from localhost).

> **No build step is required to view it** — `npm run dev` serves the ES modules directly. Vite is here only to resolve the bare `@awesome.me/webawesome` import; there is **no TypeScript / no transpile**.

## Stack (per the `/web-dev` skill)

- **Vanilla JS + native Web Components** (no framework — no React).
- **[Web Awesome](https://webawesome.com)** (`@awesome.me/webawesome`) for page chrome (`wa-card`, `wa-callout`, `wa-badge`). Its agent skill / `llms.txt` live in `node_modules/@awesome.me/webawesome/dist/skills/`.
- **Modern CSS** (custom properties, `color-mix`, nesting); **no Tailwind**. Charts are hand-built CSS/SVG — **zero charting dependencies**.
- **Vite** dev server only.

## Structure

```
index.html                     page shell: header, "how to read" callout, 5 wa-cards
src/main.js                    imports Web Awesome + styles + the five components
src/styles.css                 global layout + the data color palette (:root custom props)
src/data.js                    ★ SINGLE SOURCE OF TRUTH for every number (traces to sf-visual-specs.md)
src/components/
  annual-count.js              Card 1 — annual unique count (26,634 over the year, ~3× the one-night)
  shelter-split.js             Card 2 — single-night stacked bar (2026 prelim headline + 2024 final)
  disparity-bars.js            Card 3 — homeless-vs-city diverging bars w/ overrep multipliers
  cooccurrence-bar.js          Card 4 — behavioral-health segmented bar (50/34/16) + 84%/50% brackets
  treatment-funnels.js         Card 5 — drug FUNNEL + mental-health COMPARISON (see below)
```

Each component is a Custom Element with Shadow DOM; data colors are `:root` custom properties (inherited through the shadow boundary). **All figures come from `src/data.js`** — edit numbers there, not in the components.

## Design decisions baked in (don't undo without reason)

- **Section order:** annual unique (over a year) → single-night snapshot (where they sleep) → who they are → what they struggle with → why it persists. **Cards 1 & 2 are the two "how many" numbers**, deliberately separated: annual unique **~26,634** vs. one-night **~7,973** (~3×).
- **Card 1 (annual):** the total unique people homeless across the year (26,634, HSH admin 2024) — the headline "how big is this really" number.
- **Card 2 (shelter, single night):** leads with **2026 preliminary** (7,973 / 3,400 unsheltered / 4,573 sheltered) + a "preliminary 2026 PIT count" pill; **final 2024** beneath (it has the ES/TH split 2026 lacks). Framed explicitly as a *single-night* snapshot to contrast with Card 1.
- **Card 4 (behavioral health):** a **segmented bar**, not a Venn or Sankey (Venn = fiddly/inexact; Sankey = overlapping sets double-count). Two-step framing: prevalence (51%/51%, all homeless, self-report) → then the 50/34/16 split **of the ~16,671 diagnosed cohort** (a *year-long* DPH count, which is why it exceeds the one-night ~8,000). The percentages are of that cohort, stated explicitly. Demographics card carries a note that HSH admin data shows Black even higher (33%/40%) than the PIT 24% shown.
- **Card 5 (treatment):** **CITYWIDE, not unhoused-specific** — most SF drug users (~90%) and people with SMI are housed; labeled as such in the lede. The **drug side is a true nested funnel** (37,500 → 3,455 → 2,497 → 210, all subsets). The **mental-health side is a COMPARISON, not a funnel** (8,300 homeless SMI vs. 481 citywide FSP) because those are different populations; 13,866 is demoted to a citywide aside (it's "people who get a service," a bad funnel-top). Efficacy lines are honest: medication/FSP work; abstinence-first is not claimed.

## Keep in sync

`src/data.js` and the components mirror [`../sf-visual-specs.md`](../sf-visual-specs.md). If you change a number or framing in one, update the other.
