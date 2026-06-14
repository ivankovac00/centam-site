'use strict';

/* =============================================================
   CENTAM — News data (single source of truth)
   -------------------------------------------------------------
   This array powers the homepage news preview (#news on
   index.html), the full listing (news.html) and the article
   detail page (news-article.html). To add an article, append one
   object below — a card and a working detail page are generated
   automatically. No other file needs to change.

   Fields:
     id       — URL slug, must be unique → news-article.html?id=<id>
     category — short tag shown on the card / as the detail eyebrow
     title    — article headline (card + detail)
     media    — placeholder label shown in the image block
     date     — human-readable date string (shown as-is)
     excerpt  — one-line summary shown on the card
     body     — array of paragraphs for the detail page (optional;
                falls back to `excerpt` when omitted)

   Articles render in array order, so keep the newest first.
   ============================================================= */
const newsArticles = [
  {
    id: 'centam-officially-launches',
    category: 'Announcements',
    title: 'CENTAM Officially Launches',
    media: 'Launch',
    date: 'May 2025',
    excerpt: 'A new materials science and engineering company opens its doors to industrial partners across Europe.',
    body: [
      'A new materials science and engineering company opens its doors to industrial partners across Europe.',
      'Founded by a team of PhD researchers in advanced ceramics, CENTAM brings deep expertise in Si-SiC systems — spanning material characterization, additive manufacturing, post-processing and quality analysis — to manufacturers, research institutions and technology companies.',
      'The launch marks the start of CENTAM’s mission to translate cutting-edge materials science into practical industrial value, bridging the gap between academic research and scalable production.'
    ]
  },
  {
    id: 'understanding-ceramic-sintering',
    category: 'Research Updates',
    title: 'Understanding Ceramic Sintering',
    media: 'Sintering kiln',
    date: 'May 2025',
    excerpt: 'The single most important step in ceramic manufacturing happens in the furnace. Here’s what it actually does.',
    body: [
      'The single most important step in ceramic manufacturing happens in the furnace. Here’s what it actually does.',
      'During sintering, a shaped “green” part is heated below its melting point so that its particles bond and densify, turning a fragile compact into a hard, durable component. The temperature profile, atmosphere and hold time all shape the final microstructure.',
      'For Si-SiC systems in particular, careful control of this step governs density, phase composition and mechanical performance — which is why CENTAM treats process control in the furnace as central to reliable, repeatable results.'
    ]
  },
  {
    id: 'advanced-materials-summit-takeaways',
    category: 'Industry News',
    title: 'Key Takeaways from the Advanced Materials Summit',
    media: 'Conference',
    date: 'May 2025',
    excerpt: 'Notes from the show floor, three trends worth watching, and the conversations that mattered most.',
    body: [
      'Notes from the show floor, three trends worth watching, and the conversations that mattered most.',
      'Additive manufacturing of technical ceramics continued to dominate the agenda, with growing interest in post-processing as the decisive factor in part quality. Sustainability and energy efficiency in high-temperature processing were recurring themes across the sessions.',
      'Most valuable, as ever, were the conversations between sessions — comparing notes with peers on what works in real production environments and where the field is heading next.'
    ]
  }
];
