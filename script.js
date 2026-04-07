/* ============================================================
   Memorial Trail Ice House — Main JS
   ============================================================ */

(function () {
  'use strict';

  // ─── Navbar scroll behavior ───────────────────────────────
  const navbar = document.getElementById('navbar');

  function handleScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ─── Mobile nav toggle ────────────────────────────────────
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks  = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // ─── Lazy-load images ─────────────────────────────────────
  if ('IntersectionObserver' in window) {
    const lazyImgs = document.querySelectorAll('img[loading="lazy"]');

    const imgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '200px 0px' });

    lazyImgs.forEach(img => imgObserver.observe(img));
  }

  // ─── Scroll-reveal animations ─────────────────────────────
  const revealEls = document.querySelectorAll(
    '.cocktail-card, .event-card, .hh-card, .visit-block, .story-photo-grid img, .gallery-item'
  );

  if ('IntersectionObserver' in window && revealEls.length) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${(i % 6) * 0.07}s`;
          entry.target.classList.add('reveal-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealEls.forEach(el => {
      el.classList.add('reveal');
      revealObserver.observe(el);
    });
  }

  // ─── Gallery lightbox (simple) ────────────────────────────
  const galleryItems = document.querySelectorAll('.gallery-item img');

  if (galleryItems.length) {
    // Create lightbox elements
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
      <div class="lightbox-inner">
        <button class="lightbox-close" aria-label="Close">&times;</button>
        <button class="lightbox-prev" aria-label="Previous">&#8249;</button>
        <img class="lightbox-img" src="" alt="" />
        <button class="lightbox-next" aria-label="Next">&#8250;</button>
      </div>
    `;
    document.body.appendChild(overlay);

    const lbImg   = overlay.querySelector('.lightbox-img');
    const lbClose = overlay.querySelector('.lightbox-close');
    const lbPrev  = overlay.querySelector('.lightbox-prev');
    const lbNext  = overlay.querySelector('.lightbox-next');

    let current = 0;
    const imgs = Array.from(galleryItems);

    function openLightbox(idx) {
      current = idx;
      lbImg.src = imgs[current].src;
      lbImg.alt = imgs[current].alt;
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    function showPrev() {
      current = (current - 1 + imgs.length) % imgs.length;
      lbImg.src = imgs[current].src;
      lbImg.alt = imgs[current].alt;
    }

    function showNext() {
      current = (current + 1) % imgs.length;
      lbImg.src = imgs[current].src;
      lbImg.alt = imgs[current].alt;
    }

    imgs.forEach((img, idx) => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => openLightbox(idx));
    });

    lbClose.addEventListener('click', closeLightbox);
    lbPrev.addEventListener('click', showPrev);
    lbNext.addEventListener('click', showNext);
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeLightbox();
    });

    document.addEventListener('keydown', e => {
      if (!overlay.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    });
  }

})();

/* ─── Inject lightbox + reveal CSS dynamically ─────────── */
const extraStyles = document.createElement('style');
extraStyles.textContent = `
  /* Scroll reveal */
  .reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .reveal-in {
    opacity: 1;
    transform: translateY(0);
  }

  /* Lightbox */
  .lightbox-overlay {
    position: fixed;
    inset: 0;
    background: rgba(10, 10, 10, 0.95);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    backdrop-filter: blur(4px);
  }
  .lightbox-overlay.active {
    opacity: 1;
    pointer-events: all;
  }
  .lightbox-inner {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .lightbox-img {
    max-width: 80vw;
    max-height: 85vh;
    object-fit: contain;
    border-radius: 4px;
    box-shadow: 0 30px 80px rgba(0,0,0,0.6);
  }
  .lightbox-close {
    position: absolute;
    top: -2.5rem;
    right: 0;
    background: none;
    border: none;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    line-height: 1;
    padding: 0.25rem;
    transition: color 0.2s;
  }
  .lightbox-close:hover { color: #D4924A; }
  .lightbox-prev,
  .lightbox-next {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    color: #fff;
    font-size: 2rem;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
    flex-shrink: 0;
  }
  .lightbox-prev:hover,
  .lightbox-next:hover {
    background: rgba(212, 146, 74, 0.4);
  }
`;
document.head.appendChild(extraStyles);
