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
    mediaImage: 'https://centam.be/wp-content/uploads/2026/05/gyroid_no_background.png',
    excerpt: 'Spatially engineered TPMS structure with decreasing cell size and 2 mm wall thickness for optimized thermal and fluid transport behavior.',
    body: [
      'Spatially engineered TPMS structure with decreasing cell size and 2 mm wall thickness for optimized thermal and fluid transport behavior.',

      'A gyroid is a triply periodic minimal surface (TPMS) structure characterized by a continuous, smoothly varying lattice that eliminates sharp corners and enables highly efficient transport phenomena. In this study, a gyroid-based architecture is designed with a spatial gradient in cell size, where the unit cell dimension gradually decreases from left to right. This controlled variation introduces a corresponding gradient in porosity and surface area density, enabling tailored local thermal and fluid flow behavior within a single monolithic structure. The overall geometry is defined with a uniform wall thickness of 2 mm, ensuring structural integrity while maintaining high surface-to-volume ratio, which is essential for heat transfer enhancement.',

      'The graded gyroid is specifically investigated for heat sink applications, where non-uniform thermal loads often require spatially optimized cooling performance. Larger cells on the left side promote reduced flow resistance and enhanced fluid distribution, while progressively smaller cells toward the right increase surface area and local heat exchange capability. This combination allows the structure to balance pressure drop and thermal dissipation efficiency more effectively than uniform lattices.',

      'Such architected materials are particularly promising for advanced thermal management systems in high-power electronics, aerospace components, and energy systems, where conventional fin-based heat sinks are limited by geometric constraints. The combination of gyroid topology, graded porosity, and controlled wall thickness provides a versatile design space for optimizing thermofluid performance in compact, high-efficiency cooling applications.'
    ],
    meta: [
      { label: 'Sector', value: 'Thermal Management' },
      { label: 'Geometry', value: 'Graded gyroid (TPMS)' },
      { label: 'Wall Thickness', value: '2 mm' }
    ]
  }
];
