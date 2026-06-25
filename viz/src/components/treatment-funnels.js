import { funnels as d, fmt, linksHTML } from '../data.js';

const head = (f) => `
  <h3 class="f-title">${f.label}</h3>
  ${f.population ? `<div class="pop pop-citywide">${f.population}</div>` : ''}
  <p class="f-scope">${f.scope}</p>`;

// Neutral tail: an "Evidence:" box (only where there's efficacy research) + a muted caveat.
// Shelter has no efficacy box — emergency shelter isn't a clinical intervention with outcome data.
const tail = (f) => `
  ${f.efficacy ? `<div class="evidence"><b>Evidence:</b> ${f.efficacy}</div>` : ''}
  ${f.caveat ? `<p class="f-caveat">${f.caveat}</p>` : ''}`;

// Drug: a clean nested funnel — diagnosed → started → retained, all within one population.
function funnelHTML(f) {
  const max = f.stages[0].n;
  const stages = f.stages.map((s, i) => {
    const wpct = (s.n / max) * 100;
    return `
      <div class="stage" style="--i:${i}">
        <div class="num">${fmt(s.n)}</div>
        <div class="barwrap"><div class="bar" style="width:${wpct}%"></div></div>
        <div class="lbl">${s.label}</div>
      </div>`;
  }).join('<div class="drop" aria-hidden="true">▼</div>');

  const note = f.highlight ? `<p class="stage-note">${f.highlight}</p>` : '';
  return `<div class="col">${head(f)}${stages}${note}${tail(f)}</div>`;
}

// Mental health & shelter: a single stat, NOT a funnel — no clean denominator to nest under.
function statHTML(f) {
  return `
    <div class="col">
      ${head(f)}
      <div class="bigstat">
        <div class="bignum">${fmt(f.stat.n)}</div>
        ${f.stat.unit ? `<div class="bigunit">${f.stat.unit}</div>` : ''}
        <div class="lbl">${f.stat.label}</div>
      </div>
      ${tail(f)}
    </div>`;
}

class TreatmentFunnels extends HTMLElement {
  connectedCallback() {
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `
      <style>
        :host { display: block; }
        .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; align-items: start; }
        @media (max-width: 760px) { .grid { grid-template-columns: 1fr; gap: 2rem; } }
        .col { text-align: center; }
        .f-title { font-size: .95rem; margin: 0 0 .4rem; color: var(--ink); }
        .pop {
          display: inline-block; font-size: .62rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: .05em; border-radius: 999px; padding: .12rem .55rem; margin: 0 0 .8rem;
        }
        .pop-citywide { color: #1d4ed8; background: color-mix(in srgb, #2563eb 12%, transparent); border: 1px solid color-mix(in srgb, #2563eb 32%, transparent); }
        .f-scope { font-size: .72rem; color: var(--muted); text-align: left; line-height: 1.4; margin: 0 0 1rem; }
        .f-caveat { font-size: .72rem; color: var(--muted); text-align: left; line-height: 1.4; margin: .7rem 0 0; }

        /* single stat (mental health, shelter) */
        .bigstat { margin: .6rem 0 .2rem; }
        .bignum { font-weight: 800; font-size: 2.6rem; line-height: 1; color: var(--ink); letter-spacing: -.02em; }
        .bigunit { font-size: .98rem; font-weight: 700; color: var(--ink); line-height: 1.2; margin-top: .2rem; }
        .bigstat .lbl { margin-top: .25rem; }

        /* funnel (drug) */
        .stage .num { font-weight: 800; font-size: 1.05rem; color: var(--ink); line-height: 1.1; }
        .barwrap { display: flex; justify-content: center; margin: .2rem 0 .25rem; }
        .bar {
          height: 24px; min-width: 10px; border-radius: 4px;
          background: linear-gradient(180deg, var(--c-funnel), color-mix(in srgb, var(--c-funnel) 78%, black));
          transition: width .7s ease;
        }
        .lbl { font-size: .72rem; color: var(--muted); line-height: 1.3; max-width: 22rem; margin: 0 auto; }
        .drop { color: var(--wa-color-surface-border, #cbd5e1); font-size: .7rem; margin: .15rem 0; }
        /* highlighted fact pinned under the final funnel stage */
        .stage-note {
          font-size: .76rem; font-weight: 700; color: var(--ink); line-height: 1.35;
          max-width: 20rem; margin: .5rem auto 0; padding: .35rem .55rem; border-radius: 4px;
          background: color-mix(in srgb, var(--c-funnel) 14%, transparent);
        }

        .evidence {
          font-size: .8rem; text-align: left; line-height: 1.4; margin: .7rem 0 0;
          background: color-mix(in srgb, var(--c-good) 8%, transparent);
          border-left: 3px solid var(--c-good); border-radius: 4px; padding: .55rem .7rem;
        }
        .evidence b { color: var(--ink); }
        .src { font-size: .75rem; color: var(--muted); margin: .5rem 0 0; }
        .src a { color: var(--link, #0e7490); }
      </style>
      <div class="grid">
        ${funnelHTML(d.drug)}
        ${statHTML(d.mentalHealth)}
        ${statHTML(d.shelter)}
      </div>
      <p class="src">${linksHTML(d.links)}</p>
    `;
  }
}
customElements.define('treatment-funnels', TreatmentFunnels);
