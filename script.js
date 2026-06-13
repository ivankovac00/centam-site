'use strict';

/* =============================================================
   CENTAM — Interactions
   ============================================================= */

/* -------------------------------------------------------------
   Transparent navigation while the hero is in view.
   Adds the `nav-transparent` class to <body> when the hero
   occupies enough of the viewport, letting the fixed header
   blend over it; removes it otherwise.
   ------------------------------------------------------------- */
function initNavTransparency() {
  const hero = document.querySelector('.centam-hero');
  if (!hero) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const heroInView = entry.isIntersecting && entry.intersectionRatio > 0.4;
        document.body.classList.toggle('nav-transparent', heroInView);
      });
    },
    { threshold: [0, 0.4, 1] }
  );

  observer.observe(hero);
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

/* -------------------------------------------------------------
   Boot
   ------------------------------------------------------------- */
function init() {
  initNavTransparency();
  initFadeIn();
  initContactForm();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
