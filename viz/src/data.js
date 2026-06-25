// Single source of truth for every figure shown. Numbers trace to sf-visual-specs.md.
// PDF #page anchors jump to the page the stat is on (works in browser PDF viewers).
const PIT2024 = 'https://media.api.sf.gov/documents/2024_San_Francisco_Point-in-Time_Count_Report_8_13_24.pdf';
const NEEDS_ASSESSMENT = 'https://media.api.sf.gov/documents/2025_Homelessness_Needs_Assessment.pdf';
// Treatment-funnel figures originate in the SFDPH DMC-ODS QIWP Evaluation Report (FY2024-25),
// hosted on SF's public drug overdose & treatment data page. (They were compiled in the Seibel
// SF Drug Crisis Fact Sheet, a privately circulated document we cite but do not host.)
const SFDPH_DMC_ODS = 'https://www.sf.gov/resource--2023--drug-overdose-and-treatment-data-and-reports';

export const shelter = {
  headline: { year: 2026, preliminary: true, total: 7973, unsheltered: 3400, sheltered: 4573 },
  final: { year: 2024, total: 8323, unsheltered: 4354, sheltered: 3969, es: 3644, th: 325 },
  source: 'SF Point-in-Time Count (HSH). 2026 figures preliminary. The 2026 count changed methodology — conducted in the morning (prior counts were overnight) and asked people their housing status rather than judging it visually — so it is not directly comparable to prior years.',
  links: [
    { label: 'PIT 2024 report (p.18)', url: `${PIT2024}#page=18` },
    { label: '2026 preliminary results', url: 'https://www.sf.gov/2026-point-in-time-count-preliminary-results' },
  ],
};

export const annual = {
  year: 2024,
  individuals: 26634,
  households: 20236,
  links: [
    { label: '2025 Needs Assessment (p.7)', url: `${NEEDS_ASSESSMENT}#page=7` },
  ],
};

export const behavioral = {
  cohort: 16671,
  venn: { sudOnly: 50, both: 34, smiOnly: 16 },
  source: 'SFDPH 2024 diagnosed cohort (substance-use and/or serious-mental-illness), via SF Controller 2025 Needs Assessment.',
  links: [
    { label: '2025 Needs Assessment (p.14, diagnosed cohort)', url: `${NEEDS_ASSESSMENT}#page=14` },
  ],
};

export const disparity = {
  scaleMax: 40,
  rows: [
    { group: 'Black', homeless: 24, city: 5, mult: '~5×', over: true },
    { group: 'Latino', homeless: 34, city: 16, mult: '~2×', over: true },
    { group: 'LGBTQ+', homeless: 28, city: 16, mult: '~1.8×', over: true },
    { group: 'White', homeless: 29, city: 39, mult: 'under', over: false },
    { group: 'Asian', homeless: 4, city: 34, mult: 'under', over: false },
  ],
  extra: 'Men 59% · Women 32% · Trans / non-binary ~6%   ·   47% are aged 25–44',
  note: 'These are PIT one-night counts of <em>all persons</em> (Hispanic/Latino counted as its own category). SF administrative data (HSH heads of household) puts the Black share higher still, so this likely <em>understates</em> the over-representation. The LGBTQ+ comparator is the citywide share of adults (2023 SF City Survey); the race comparators are 2020 Census.',
  source: 'Homeless shares: SF Point-in-Time Count 2024. City comparators: SF 2020 Census (race) and 2023 SF City Survey (LGBTQ+). HSH heads-of-household shares: 2025 Homelessness Needs Assessment.',
  links: [
    { label: 'PIT 2024 report (p.19, race & age)', url: `${PIT2024}#page=19` },
    { label: 'SF 2020 Census (QuickFacts)', url: 'https://www.census.gov/quickfacts/sanfranciscocountycalifornia' },
    { label: 'LGBTQ+ 16% citywide (2023 SF City Survey, p.19)', url: 'https://sf.gov/sites/default/files/2023-04/City%20Survey%202023%20Summary%20Report.pdf' },
    { label: 'Black 33%/40% heads-of-household (2025 Needs Assessment, p.12)', url: `${NEEDS_ASSESSMENT}#page=12` },
  ],
};

// Three panels = the three things the city aims to provide: addiction treatment, mental-health
// treatment, shelter. THREE DIFFERENT SHAPES, because the data genuinely differs — don't force
// symmetry, and let the numbers speak (neutral copy, no editorializing).
// - Drug = a clean nested funnel within ONE population (Medi-Cal patients diagnosed w/ opioid
//   use disorder → started on medication → retained at 6 months). All rungs are the same people.
// - Mental health = a single stat (488 in FSP). No clean denominator to nest it under (everyone
//   in MH care is far broader than those who need FSP), so 488 stands on its own.
// - Shelter = a single stat (437 on the waitlist). A point-in-time queue, not total need —
//   most unsheltered people aren't on it (see the caveat), so it's a floor, not the gap.
export const funnels = {
  drug: {
    label: 'Addiction treatment',
    population: 'Citywide · housed + unhoused',
    scope: 'The opioid-medication path — the main medication-based treatment that exists — among the Medi-Cal patients diagnosed with opioid use disorder. (Methamphetamine, also widely used here, has no approved medication.)',
    stages: [
      { n: 3455, label: 'diagnosed w/ opioid use disorder (Medi-Cal)' },
      { n: 2497, label: 'started on medication' },
      { n: 210, label: 'still on it at 6 months' },
    ],
    highlight: 'A clinically effective course runs at least 12 months (NIDA).',
    efficacy: 'medication cuts overdose deaths 38–59%, reduces illicit use, and abstinence rises the longer people stay in treatment (NIDA).',
  },
  mentalHealth: {
    label: 'Mental-health treatment',
    population: 'Citywide · housed + unhoused',
    scope: 'Full Service Partnerships are the intensive "whatever it takes" tier of SF\'s public mental-health system — the model with the strongest evidence for serious mental illness.',
    stat: { n: 488, unit: 'in Full Service Partnerships', label: 'enrolled across the entire city' },
    efficacy: 'FSP adds about 128 days of stable housing a year and reduces psychiatric hospitalizations, ER visits, and arrests (RAND 2024, evaluation across California counties).',
  },
  shelter: {
    label: 'Shelter',
    population: 'Citywide · adults',
    scope: 'Emergency shelter is a temporary bed, not housing (sheltered ≠ housed). Adults apply to one citywide waitlist; when a bed opens, it must be claimed within 3 days.',
    stat: { n: 437, unit: 'on the shelter waitlist', label: 'adults waiting for an emergency-shelter bed' },
    caveat: 'Point-in-time count of the reservation waitlist (June 2026). Many unsheltered people are not on it, so this is a floor on unmet demand, not the full gap.',
  },
  source: 'SFDPH DMC-ODS QIWP Evaluation Report (FY2024-25) for the treatment funnel; NIH (MOUD) & NIDA (12-mo. course); CA Accountability dashboard (Feb 2026) for FSP enrollment; RAND 2024 (multi-county California) for FSP efficacy, with Gilmer 2010 (Arch Gen Psychiatry) as the earlier county study; HSH 90-day emergency shelter waitlist (DataSF).',
  links: [
    { label: 'treatment funnel 3,455→2,497→210 (SFDPH DMC-ODS report, FY2024-25)', url: SFDPH_DMC_ODS },
    { label: 'MOUD efficacy (NIH)', url: 'https://www.nih.gov/news-events/news-releases/methadone-buprenorphine-reduce-risk-death-after-opioid-overdose' },
    { label: 'Methadone 12-mo. minimum (NIDA)', url: 'https://nida.nih.gov/sites/default/files/podat-3rdEd-508.pdf' },
    { label: 'FSP efficacy, multi-county California (RAND 2024)', url: 'https://www.rand.org/pubs/research_reports/RRA3105-1.html' },
    { label: 'FSP outcomes, earlier county study (Gilmer 2010, Arch Gen Psychiatry)', url: 'https://jamanetwork.com/journals/jamapsychiatry/fullarticle/210805' },
    { label: 'FSP enrollment 488 (CA Accountability)', url: 'https://www.accountability.ca.gov/county/san-francisco/behavioral-health/' },
    { label: 'shelter waitlist 437 (HSH, DataSF w4sk-nq57; as of Jun 24 2026)', url: 'https://data.sfgov.org/Health-and-Social-Services/HSH-90-day-emergency-shelter-waitlist/w4sk-nq57' },
  ],
};

export const fmt = (n) => n.toLocaleString('en-US');
export const pct = (a, b) => Math.round((a / b) * 100);

// Renders a "Sources: a · b · c" line of links from a section's `links` array.
export const linksHTML = (links) =>
  'Sources: ' +
  links
    .map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`)
    .join(' · ');
