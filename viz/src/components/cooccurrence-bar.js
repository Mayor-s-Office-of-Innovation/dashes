import { behavioral as d, fmt, linksHTML } from '../data.js';

class CooccurrenceBar extends HTMLElement {
  connectedCallback() {
    const v = d.venn; // sudOnly, both, smiOnly (mutually exclusive, sum 100)
    const anySUD = v.sudOnly + v.both;   // 84
    const anySMI = v.both + v.smiOnly;    // 50

    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `
      <style>
        :host { display: block; }
        .cohort-intro { font-size: .92rem; margin: 0 0 1rem; }
        .cohort-intro b { color: var(--ink); }
        .pill { display:inline-block; background: var(--wa-color-surface-lower,#f1f5f9); border:1px solid var(--wa-color-surface-border,#e2e8f0);
                border-radius:999px; padding:.12rem .55rem; font-size:.82rem; margin:0 .15rem; white-space:nowrap; }

        .bar { display:flex; width:100%; height:78px; border-radius:10px; overflow:hidden;
               box-shadow: var(--wa-shadow-s, 0 1px 3px rgba(0,0,0,.18)); }
        .seg { display:flex; align-items:center; justify-content:center; text-align:center; color:#fff;
               padding:.3rem; min-width:0; }
        .seg span { font-size:.82rem; line-height:1.2; text-shadow:0 1px 2px rgba(0,0,0,.28); }
        .seg b { display:block; font-size:1.05rem; }
        .seg.sud { background: var(--c-sud); flex-basis:${v.sudOnly}%; }
        .seg.both { background:#5b6fc7; flex-basis:${v.both}%; }
        .seg.smi { background: var(--c-smi); flex-basis:${v.smiOnly}%; }
        @media (max-width:460px){ .seg span{font-size:.7rem;} .seg b{font-size:.9rem;} }

        .totals { position:relative; height:46px; margin-top:10px; font-size:.74rem; }
        .tline { position:absolute; height:6px; border-radius:3px; }
        .tline::before, .tline::after { content:""; position:absolute; top:-3px; width:2px; height:12px; background:currentColor; opacity:.55; }
        .tline::before { left:0; } .tline::after { right:0; }
        .tline .t { position:absolute; top:9px; white-space:nowrap; color:var(--ink); font-weight:600; }
        .sudtot { top:4px; left:0; width:${anySUD}%; color:var(--c-sud); background:color-mix(in srgb, var(--c-sud) 30%, transparent); }
        .sudtot .t { left:0; }
        .smitot { top:26px; left:${v.sudOnly}%; width:${anySMI}%; color:var(--c-smi); background:color-mix(in srgb, var(--c-smi) 30%, transparent); }
        .smitot .t { right:0; }

        .cap { font-size:.85rem; color:var(--muted); margin:1.1rem 0 0; }
        .cap b { color:var(--ink); }
        .src { font-size:.75rem; color:var(--muted); margin:.5rem 0 0; }
        .src a { color: var(--link, #0e7490); }
      </style>
      <p class="cohort-intro">SF's <b>Department of Public Health</b> identified <b>~${fmt(d.cohort)}</b> homeless people (2024) carrying a diagnosed substance-use and/or serious-mental-illness condition — a <em>year-long</em> count (anyone homeless at some point in 2024, with a City-service contact and a diagnosis), not a single-day snapshot. <b>The shares below are of <em>that</em> ${fmt(d.cohort)}</b> — not of all homeless people:</p>

      <div class="bar" role="img"
        aria-label="Of homeless people with a diagnosed behavioral-health condition: ${v.sudOnly}% substance-use disorder only, ${v.both}% both, ${v.smiOnly}% serious mental illness only. ${anySUD}% have any substance diagnosis; ${anySMI}% have any mental-illness diagnosis.">
        <div class="seg sud"><span>SUD only<b>${v.sudOnly}%</b></span></div>
        <div class="seg both"><span>Both<b>${v.both}%</b></span></div>
        <div class="seg smi"><span>SMI<b>${v.smiOnly}%</b></span></div>
      </div>

      <div class="totals" aria-hidden="true">
        <div class="tline sudtot"><span class="t">${anySUD}% any substance-use dx</span></div>
        <div class="tline smitot"><span class="t">${anySMI}% any mental-illness dx</span></div>
      </div>

      <p class="cap"><b>A third (34%) carry both</b> a substance-use and a serious-mental-illness diagnosis at once — co-occurring conditions are common. These are confirmed clinical diagnoses.</p>
      <p class="src">${linksHTML(d.links)}</p>
    `;
  }
}
customElements.define('cooccurrence-bar', CooccurrenceBar);
