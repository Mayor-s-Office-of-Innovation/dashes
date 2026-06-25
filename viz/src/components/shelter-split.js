import { shelter as s, fmt, pct, linksHTML } from '../data.js';

class ShelterSplit extends HTMLElement {
  connectedCallback() {
    const h = s.headline, f = s.final;
    const uPct = pct(h.unsheltered, h.total);
    const sPct = pct(h.sheltered, h.total);
    const fU = pct(f.unsheltered, f.total);
    const fS = pct(f.sheltered, f.total);

    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `
      <style>
        :host { display: block; }
        .total { font-size: .9rem; color: var(--muted); margin-bottom: .6rem; }
        .total b { color: var(--ink); font-size: 1.05rem; }
        .prelim { display: inline-block; white-space: nowrap; font-size: .62rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em;
          color: #b45309; background: color-mix(in srgb, #d97706 15%, transparent); border: 1px solid color-mix(in srgb, #d97706 35%, transparent);
          border-radius: 999px; padding: .08rem .45rem; vertical-align: 2px; margin-left: .35rem; }
        .bar {
          display: flex; width: 100%; height: 84px; border-radius: 10px;
          overflow: hidden; box-shadow: var(--wa-shadow-s, 0 1px 3px rgba(0,0,0,.18));
        }
        .seg { display: flex; align-items: flex-start; padding: .6rem .75rem; color: #fff; min-width: 0; }
        .unsheltered { background: var(--c-street); flex-basis: ${uPct}%; }
        .sheltered { background: var(--c-shelter); flex-basis: ${sPct}%; }
        .seg-label { font-size: .85rem; line-height: 1.25; text-shadow: 0 1px 2px rgba(0,0,0,.25); }
        .seg-label b { font-size: 1rem; }
        .note-line { font-size: .8rem; color: var(--muted); font-style: italic; margin: .65rem 0 0; }
        .final {
          font-size: .82rem; color: var(--muted); margin: .85rem 0 0; padding-top: .7rem;
          border-top: 1px solid var(--wa-color-surface-border, #e2e8f0);
        }
        .final b { color: var(--ink); }
        .src { font-size: .75rem; color: var(--muted); margin: .5rem 0 0; }
        .sources { font-size: .75rem; color: var(--muted); margin: .35rem 0 0; }
        .sources a { color: var(--link, #0e7490); }
        @media (max-width: 460px) { .seg-label { font-size: .74rem; } }
      </style>
      <div class="total"><b>${fmt(h.total)}</b> people experiencing homelessness on a <b>single night</b><span class="prelim">Preliminary ${h.year} PIT count</span></div>
      <div class="bar" role="img"
        aria-label="Of ${fmt(h.total)} homeless people in ${h.year} (preliminary), ${fmt(h.unsheltered)} (${uPct}%) unsheltered and ${fmt(h.sheltered)} (${sPct}%) in temporary shelter.">
        <div class="seg unsheltered">
          <span class="seg-label"><b>Unsheltered</b> — on the street<br>${fmt(h.unsheltered)} · ${uPct}%</span>
        </div>
        <div class="seg sheltered">
          <span class="seg-label"><b>Sheltered</b> — temporary<br>${fmt(h.sheltered)} · ${sPct}%</span>
        </div>
      </div>
      <p class="note-line">“On the street” = unsheltered · sheltered ≠ housed.</p>
      <p class="final"><b>Final ${f.year} count:</b> ${fmt(f.total)} total — ${fmt(f.unsheltered)} unsheltered (${fU}%) / ${fmt(f.sheltered)} sheltered (${fS}%; ${fmt(f.es)} emergency shelter + ${fmt(f.th)} transitional housing).</p>
      <p class="src">${s.source}</p>
      <p class="sources">${linksHTML(s.links)}</p>
    `;
  }
}
customElements.define('shelter-split', ShelterSplit);
