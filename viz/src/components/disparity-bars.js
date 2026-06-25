import { disparity as d, linksHTML } from '../data.js';

class DisparityBars extends HTMLElement {
  connectedCallback() {
    const w = (v) => (v / d.scaleMax) * 100;
    const rows = d.rows.map((r) => `
      <div class="row">
        <div class="grp">${r.group}</div>
        <div class="track">
          <div class="bar homeless" style="width:${w(r.homeless)}%"><span>${r.homeless}%</span></div>
          <div class="bar city" style="width:${w(r.city)}%"><span>${r.city}%</span></div>
        </div>
        <div class="mult ${r.over ? 'over' : 'under'}">${r.mult}${r.over ? '' : ''}</div>
      </div>
    `).join('');

    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `
      <style>
        :host { display: block; }
        .key { display: flex; gap: 1.1rem; font-size: .8rem; color: var(--muted); margin-bottom: .8rem; flex-wrap: wrap; }
        .key i { display: inline-block; width: .85rem; height: .85rem; border-radius: 2px; vertical-align: -1px; margin-right: .3rem; }
        .key .h { background: var(--c-bar-homeless); }
        .key .c { background: var(--c-bar-city); }
        .row { display: grid; grid-template-columns: 4.5rem 1fr 3.2rem; align-items: center; gap: .6rem; margin: .5rem 0; }
        .grp { font-weight: 600; font-size: .9rem; }
        .track { display: flex; flex-direction: column; gap: 3px; }
        .bar { height: 15px; border-radius: 3px; display: flex; align-items: center; min-width: 1.6rem; transition: width .6s ease; }
        .bar span { font-size: .68rem; color: #fff; margin-left: .35rem; text-shadow: 0 1px 1px rgba(0,0,0,.3); }
        .bar.homeless { background: var(--c-bar-homeless); }
        .bar.city { background: var(--c-bar-city); }
        .bar.city span { color: #334155; text-shadow: none; }
        .mult { font-size: .8rem; font-weight: 700; text-align: right; }
        .mult.over { color: var(--c-street); }
        .mult.under { color: var(--muted); font-weight: 500; }
        .extra { font-size: .82rem; color: var(--muted); margin: .9rem 0 0; padding-top: .7rem; border-top: 1px solid var(--wa-color-surface-border, #e2e8f0); }
        .note { font-size: .78rem; color: var(--muted); margin: .6rem 0 0; line-height: 1.4; }
        .note b { color: var(--ink); }
        .src { font-size: .75rem; color: var(--muted); margin: .5rem 0 0; }
        .src a { color: var(--link, #0e7490); }
      </style>
      <div class="key">
        <span><i class="h"></i>Share of homeless</span>
        <span><i class="c"></i>Share of San Francisco</span>
      </div>
      <div role="img" aria-label="Race, ethnicity and LGBTQ+ shares among homeless people vs the San Francisco population, 2024. Black 24% vs 5% (about 5 times). LGBTQ+ 28% vs 12%.">
        ${rows}
      </div>
      <p class="extra">${d.extra}</p>
      <p class="note">${d.note}</p>
      <p class="src">${linksHTML(d.links)}</p>
    `;
  }
}
customElements.define('disparity-bars', DisparityBars);
