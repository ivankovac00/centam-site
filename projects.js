'use strict';

/* =============================================================
   CENTAM — Projects data (single source of truth)
   -------------------------------------------------------------
   This array powers BOTH the homepage project cards (#projects)
   and the project detail page (project.html). To add a project,
   append one object below — the card and a working detail page
   are generated automatically. No other file needs to change.

   Fields:
     id       — URL slug, must be unique  →  project.html?id=<id>
     category — short tag / eyebrow label
     title    — project name (card heading + detail headline)
     media    — placeholder label shown in the image block
     excerpt  — one-line summary shown on the card
     body     — array of paragraphs for the detail page (optional;
                falls back to `excerpt` when omitted)
     meta     — array of { label, value } facts (optional)
   ============================================================= */
const projects = [
  {
    id: 'graded-gyroid-heat-sink',
    category: 'Thermal Management',
    title: 'Graded Gyroid Architectures for Enhanced Heat Sink Performance',
    media: 'Industrial kiln',
    excerpt: 'Spatially engineered TPMS structure with decreasing cell size and 2 mm wall thickness for optimized thermal and fluid transport behavior.',
    body: [
      'Spatially engineered TPMS structure with decreasing cell size and 2 mm wall thickness for optimized thermal and fluid transport behavior.',
      'By grading the unit-cell size across the component, the design balances heat-exchange surface area against the pressure drop through the internal channels — concentrating fine, high-surface-area structure where thermal transfer matters most and opening the geometry where the fluid needs to move freely.',
      'The part is produced in Si-SiC through additive manufacturing and post-processing, the same process chain CENTAM applies across its advanced-ceramics work.'
    ],
    meta: [
      { label: 'Sector', value: 'Thermal Management' },
      { label: 'Geometry', value: 'Graded gyroid (TPMS)' },
      { label: 'Wall Thickness', value: '2 mm' }
    ]
  }
];
