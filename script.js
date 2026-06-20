'use strict';

/* =============================================================
   CENTAM — Interactions
   ============================================================= */

/* -------------------------------------------------------------
   Projects — rendered from the shared `projects` array (projects.js),
   which is the single source of truth for both the homepage card
   grid and the project.html detail page.
   ------------------------------------------------------------- */

/* Build the detail-page URL for a given project id. */
function projectUrl(id) {
  return `project.html?id=${encodeURIComponent(id)}`;
}

/* Homepage: render one card per project into #projects-grid.
   Markup mirrors the original static card exactly, with a working
   "Read More" link. textContent is used so titles/descriptions
   containing characters like & are escaped automatically. */
function renderProjectCards() {
  const grid = document.getElementById('projects-grid');
  if (!grid || typeof projects === 'undefined') return;

  grid.innerHTML = '';

  projects.forEach((project) => {
    const card = document.createElement('div');
    card.className = 'centam-card';

    const media = document.createElement('div');
    media.className = 'img-placeholder card-media card-media--project';
    if (project.mediaImage) {
      const image = document.createElement('img');
      image.src = project.mediaImage;
      image.alt = project.title;
      media.appendChild(image);
    } else {
      media.textContent = project.media || '';
    }

    const tag = document.createElement('span');
    tag.className = 'category-tag';
    tag.textContent = project.category || '';

    const title = document.createElement('h3');
    title.textContent = project.title;

    const excerpt = document.createElement('p');
    excerpt.textContent = project.excerpt || '';

    const linkWrap = document.createElement('p');
    const link = document.createElement('a');
    link.href = projectUrl(project.id);
    link.textContent = 'Read More →';
    linkWrap.appendChild(link);

    card.append(media, tag, title, excerpt, linkWrap);
    grid.appendChild(card);
  });
}

/* Detail page: populate #project-detail from the ?id= query param. */
function renderProjectDetail() {
  const root = document.getElementById('project-detail');
  if (!root || typeof projects === 'undefined') return;

  const requestedId = new URLSearchParams(window.location.search).get('id');
  const project = projects.find((item) => item.id === requestedId);

  const categoryEl = document.getElementById('project-category');
  const titleEl = document.getElementById('project-title');
  const mediaEl = document.getElementById('project-media');
  const bodyEl = document.getElementById('project-body');
  const metaEl = document.getElementById('project-meta');

  // Unknown or missing id — show a friendly fallback, never a blank page.
  if (!project) {
    document.title = 'Project not found | CENTAM';
    if (categoryEl) categoryEl.remove();
    if (mediaEl) mediaEl.remove();
    if (metaEl) metaEl.remove();
    titleEl.textContent = 'Project not found';
    bodyEl.innerHTML = '';
    const message = document.createElement('p');
    message.textContent = 'Sorry, we could not find that project. Use the link above to return to the projects overview.';
    bodyEl.appendChild(message);
    return;
  }

  document.title = `${project.title} | CENTAM`;
  if (categoryEl) categoryEl.textContent = project.category || '';
  titleEl.textContent = project.title;
  if (mediaEl) {
    if (project.mediaImage) {
      mediaEl.innerHTML = `<img src="${project.mediaImage}" alt="${project.title}">`;
    } else {
      mediaEl.textContent = project.media || '';
    }
  }

  // Body copy — fall back to the card excerpt when no long-form body exists.
  const paragraphs = project.body && project.body.length ? project.body : [project.excerpt];
  bodyEl.innerHTML = '';
  paragraphs.forEach((text) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    bodyEl.appendChild(paragraph);
  });

  // Optional meta facts — reuse the existing values-grid / value-item styles.
  if (metaEl) {
    if (project.meta && project.meta.length) {
      metaEl.innerHTML = '';
      project.meta.forEach((fact) => {
        const item = document.createElement('div');
        item.className = 'value-item';
        const label = document.createElement('h4');
        label.textContent = fact.label;
        const value = document.createElement('p');
        value.textContent = fact.value;
        item.append(label, value);
        metaEl.appendChild(item);
      });
    } else {
      metaEl.remove();
    }
  }
}

/* -------------------------------------------------------------
   News — rendered from the shared `newsArticles` array (news.js),
   the single source of truth for the homepage news preview, the
   full listing (news.html) and the article page (news-article.html).
   ------------------------------------------------------------- */

/* Build the article-page URL for a given article id. */
function newsUrl(id) {
  return `news-article.html?id=${encodeURIComponent(id)}`;
}

/* Render news cards into #news-grid. Markup mirrors the original
   static card exactly (media, tag, title, excerpt, date · Read More).
   An optional `data-limit` on the grid caps how many cards show — the
   homepage uses it to keep its 3-card preview, while news.html omits
   it to list everything. The whole card is clickable; the inner
   "Read More" <a> stays as the keyboard-accessible link. */
function renderNewsCards() {
  const grid = document.getElementById('news-grid');
  if (!grid || typeof newsArticles === 'undefined') return;

  const limit = parseInt(grid.dataset.limit, 10);
  const articles = Number.isInteger(limit) ? newsArticles.slice(0, limit) : newsArticles;

  grid.innerHTML = '';

  articles.forEach((article) => {
    const url = newsUrl(article.id);

    const card = document.createElement('div');
    card.className = 'centam-card';

    const media = document.createElement('div');
    media.className = 'img-placeholder card-media card-media--news';
    if (article.mediaImage) {
      const image = document.createElement('img');
      image.src = article.mediaImage;
      image.alt = article.title;
      media.appendChild(image);
    } else {
      media.textContent = article.media || '';
    }

    const tag = document.createElement('span');
    tag.className = 'category-tag';
    tag.textContent = article.category || '';

    const title = document.createElement('h3');
    title.textContent = article.title;

    const excerpt = document.createElement('p');
    excerpt.textContent = article.excerpt || '';

    const footer = document.createElement('p');
    const date = document.createElement('small');
    date.textContent = article.date || '';
    const link = document.createElement('a');
    link.href = url;
    link.textContent = 'Read More →';
    footer.append(date, document.createTextNode(' · '), link);

    card.append(media, tag, title, excerpt, footer);

    // Whole-card click opens the article; clicks on real links (the
    // "Read More" anchor) are left to navigate on their own.
    card.style.cursor = 'pointer';
    card.addEventListener('click', (event) => {
      if (event.target.closest('a')) return;
      window.location.href = url;
    });

    grid.appendChild(card);
  });
}

/* Article page: populate #news-detail from the ?id= query param. */
function renderNewsDetail() {
  const root = document.getElementById('news-detail');
  if (!root || typeof newsArticles === 'undefined') return;

  const requestedId = new URLSearchParams(window.location.search).get('id');
  const article = newsArticles.find((item) => item.id === requestedId);

  const categoryEl = document.getElementById('news-category');
  const dateEl = document.getElementById('news-date');
  const titleEl = document.getElementById('news-title');
  const mediaEl = document.getElementById('news-media');
  const bodyEl = document.getElementById('news-body');

  // Unknown or missing id — show a friendly fallback, never a blank page.
  if (!article) {
    document.title = 'Article not found | CENTAM';
    if (categoryEl) categoryEl.remove();
    if (dateEl) dateEl.remove();
    if (mediaEl) mediaEl.remove();
    titleEl.textContent = 'Article not found';
    bodyEl.innerHTML = '';
    const message = document.createElement('p');
    message.textContent = 'Sorry, we could not find that article. Use the link above to return to the news overview.';
    bodyEl.appendChild(message);
    return;
  }

  document.title = `${article.title} | CENTAM`;
  if (categoryEl) categoryEl.textContent = article.category || '';
  if (dateEl) dateEl.textContent = article.date || '';
  titleEl.textContent = article.title;
  if (mediaEl) {
    if (article.mediaImage) {
      mediaEl.innerHTML = `<img src="${article.mediaImage}" alt="${article.title}">`;
    } else {
      mediaEl.textContent = article.media || '';
    }
  }

  // Body copy — fall back to the card excerpt when no long-form body exists.
  const paragraphs = article.body && article.body.length ? article.body : [article.excerpt];
  bodyEl.innerHTML = '';
  paragraphs.forEach((text) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    bodyEl.appendChild(paragraph);
  });
}

/* -------------------------------------------------------------
   Fade-in on scroll.
   Reveals any `.centam-fade-in` element once it enters the
   viewport, then stops observing it.
   ------------------------------------------------------------- */
function initFadeIn() {
  const elements = document.querySelectorAll('.centam-fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((element) => observer.observe(element));
}

/* -------------------------------------------------------------
   Contact form.
   Prevents submission in this static preview — replaces the
   original inline `onsubmit="return false;"` attribute.
   ------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (event) => event.preventDefault());
}

/* Ensure mailto: links open the user's mail client immediately on click.
   Some browsers or setups may require explicit navigation; this helper
   forces navigation while preserving modifier-clicks (open in new tab).
 */
function initMailtoLinks() {
  const mailtoLinks = document.querySelectorAll('a[href^="mailto:"]');
  if (!mailtoLinks.length) return;
  mailtoLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      // Respect modifier-clicks (open in new tab/window)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      // Try opening in a new window first — some embedded previews
      // require an explicit external navigation to trigger the mail client.
      const opened = window.open(link.href, '_blank');
      if (!opened) {
        // Fallback to location change if popup is blocked.
        window.location.href = link.href;
      }
    });
  });
}

/* -------------------------------------------------------------
   Mobile navigation.
   Drives the hamburger toggle (.nav-toggle) that collapses the
   header link row (#primary-nav) into a slide-down panel below
   980px. Pure show/hide — all positioning lives in the CSS.
   ------------------------------------------------------------- */
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('primary-nav');
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    toggle.classList.toggle('is-open', open);
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => {
    setOpen(!menu.classList.contains('is-open'));
  });

  // Tapping a link navigates and closes the panel.
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });

  // Escape closes it.
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });

  // Returning to the desktop layout resets state so the panel can't
  // stay "open" once the links are inline again.
  const desktop = window.matchMedia('(min-width: 981px)');
  desktop.addEventListener('change', (event) => {
    if (event.matches) setOpen(false);
  });
}

/* -------------------------------------------------------------
   Boot
   ------------------------------------------------------------- */
function init() {
  renderProjectCards();
  renderProjectDetail();
  renderNewsCards();
  renderNewsDetail();
  initFadeIn();
  initContactForm();
  initMailtoLinks();
  initMobileNav();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
