import { annual as a, fmt, linksHTML } from '../data.js';

class AnnualCount extends HTMLElement {
  connectedCallback() {
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `
      <style>
        :host { display: block; }
        .big { font-size: clamp(2.6rem, 9vw, 3.6rem); font-weight: 800; line-height: 1; color: var(--ink); letter-spacing: -.02em; }
        .lbl { font-size: 1.02rem; color: var(--ink); margin: .45rem 0 0; max-width: 34rem; }
        .ctx { font-size: .85rem; color: var(--muted); margin: .8rem 0 0; max-width: 38rem; line-height: 1.45; }
        .ctx b { color: var(--ink); }
        .src { font-size: .75rem; color: var(--muted); margin: .8rem 0 0; }
        .src a { color: var(--link, #0e7490); }
      </style>
      <div class="big" role="img" aria-label="${fmt(a.individuals)} unique individuals experienced homelessness in San Francisco over ${a.year}.">${fmt(a.individuals)}</div>
      <div class="lbl">unique individuals experienced homelessness in San Francisco over the year (${a.year})</div>
      <div class="ctx">Counted across the whole year, not a single day — this includes everyone who passed through homelessness at some point in ${a.year}, including those housed again by year's end. ${fmt(a.households)} households.</div>
      <p class="src">${linksHTML(a.links)}</p>
    `;
  }
}
customElements.define('annual-count', AnnualCount);
