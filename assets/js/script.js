'use strict';

/**
 * Yogesh Rathod — Portfolio
 * Nav toggle · sticky header · scroll spy · reveal on scroll · back to top
 */

(function () {

  /* ---------- helpers ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------- mobile navigation ---------- */
  const nav = $('[data-nav]');
  const navToggle = $('[data-nav-toggle]');
  const navLinks = $$('[data-nav-link]');

  const closeNav = () => {
    if (!nav) return;
    nav.classList.remove('open');
    document.body.classList.remove('nav-open');
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  };

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      document.body.classList.toggle('nav-open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });
  }

  navLinks.forEach(link => link.addEventListener('click', closeNav));

  // close menu on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeNav();
  });

  // close menu if resized to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) closeNav();
  });

  /* ---------- sticky header + back to top ---------- */
  const header = $('[data-header]');
  const toTop = $('[data-to-top]');

  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle('scrolled', y > 60);
    if (toTop) toTop.classList.toggle('show', y > 500);
    spy();
  };

  /* ---------- scroll spy ---------- */
  const sections = $$('section[id], main > section[id]');

  const spy = () => {
    const pos = window.scrollY + 140;
    let currentId = 'top';

    sections.forEach(sec => {
      if (sec.offsetTop <= pos) currentId = sec.id;
    });

    // at the very top, highlight Home
    if (window.scrollY < 220) currentId = 'top';

    navLinks.forEach(link => {
      const target = (link.getAttribute('href') || '').replace('#', '');
      link.classList.toggle('active', target === currentId);
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- reveal on scroll ---------- */
  const revealEls = $$('.reveal');

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ---------- current year ---------- */
  const yearEl = $('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
