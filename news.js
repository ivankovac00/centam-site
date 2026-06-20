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
    id: 'centam-first-quarter-completion',
    category: 'Milestone',
    title: 'CENTAM completes its first quarter as an official company',
    media: 'First Quarter Completion',
    mediaImage: 'https://centam.be/wp-content/uploads/2026/06/Centam_board.png',
    date: '18 June 2026',
    excerpt: 'We are pleased to mark the close of CENTAM\'s first quarter as a formally incorporated company — a milestone that reflects the dedication and expertise our team has invested over many years.',
    body: [
      'We are pleased to mark the close of CENTAM\'s first quarter as a formally incorporated company — a milestone that reflects the dedication and expertise our team has invested over many years.',
      'CENTAM was founded by Berfu Göksel, Margherita Beretta, Mia Kovac, Sebastian Meyers, and Waut Declercq, who together bring deep, combined experience in additive manufacturing, advanced ceramics, and silicon carbide processing. Long before the company existed, the founding team had already collaborated as colleagues, researchers, and engineers. Through sustained engagement with industry, they identified a recurring challenge: demand for complex SiSiC components was growing steadily, while manufacturing options remained limited, costly, and largely constrained by conventional production methods.',
      'That observation became the foundation of CENTAM. What began as discussions between trusted colleagues evolved into a structured business plan, early customer engagements, technical development, and ultimately the establishment of the company.',
      'We are grateful for the support of the programmes and organisations that have accompanied us in this first phase, including VLAIO, Start it KBC, and SOKWADRAAT. Their confidence in our vision has been invaluable in reaching this point.',
      'We look forward to the quarters ahead; continuing to build, to learn, and to deliver on the opportunity we see in this market.',
    ]
  },
];
