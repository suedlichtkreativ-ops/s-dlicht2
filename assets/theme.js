/* Köderdepot theme – no dependencies. */
(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const theme = window.theme || { routes: {}, strings: {} };

  /* ---------- Images: fade in once loaded (also covers cached images) ---------- */
  const markLoaded = (root = document) => {
    $$('.media > img', root).forEach((img) => {
      if (img.complete && img.naturalWidth) img.classList.add('is-loaded');
      else img.addEventListener('error', () => img.classList.add('is-loaded'), { once: true });
    });
  };

  /* ---------- Toast ---------- */
  let toastTimer;
  const toast = (msg, action) => {
    const el = $('[data-toast]');
    if (!el) return;
    el.textContent = '';
    const text = document.createElement('span');
    text.textContent = msg;
    el.appendChild(text);
    if (action) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'toast__action';
      btn.textContent = action.label;
      btn.addEventListener('click', () => { el.classList.remove('is-visible'); action.run(); }, { once: true });
      el.appendChild(btn);
    }
    requestAnimationFrame(() => el.classList.add('is-visible'));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-visible'), action ? 6000 : 3500);
  };

  /* ---------- Drawers (menu, cart, filters) with focus trap ---------- */
  const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])';
  let activeDrawer = null;
  let lastTrigger = null;

  const openDrawer = (name, trigger) => {
    const drawer = $(`[data-drawer="${name}"]`);
    if (!drawer) return;
    if (activeDrawer && activeDrawer !== drawer) closeDrawer(false);
    lastTrigger = trigger || document.activeElement;
    activeDrawer = drawer;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
    $$(`[aria-controls="${drawer.id}"]`).forEach((b) => b.setAttribute('aria-expanded', 'true'));
    closeMega();
    const panel = $('.drawer__panel', drawer);
    requestAnimationFrame(() => panel && panel.focus({ preventScroll: true }));
  };

  const closeDrawer = (restoreFocus = true) => {
    if (!activeDrawer) return;
    const drawer = activeDrawer;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    $$(`[aria-controls="${drawer.id}"]`).forEach((b) => b.setAttribute('aria-expanded', 'false'));
    document.body.classList.remove('is-locked');
    activeDrawer = null;
    if (restoreFocus && lastTrigger && document.contains(lastTrigger)) lastTrigger.focus({ preventScroll: true });
  };

  document.addEventListener('click', (e) => {
    const opener = e.target.closest('[data-drawer-open]');
    if (opener) {
      e.preventDefault();
      openDrawer(opener.dataset.drawerOpen, opener);
      return;
    }
    if (e.target.closest('[data-drawer-close]')) closeDrawer();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (activeDrawer) closeDrawer();
      else { closeMega(true); closeSearch(true); }
    }
    if (e.key === 'Tab' && activeDrawer) {
      const items = $$(FOCUSABLE, activeDrawer).filter((el) => el.offsetParent !== null);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement.classList.contains('drawer__panel'))) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    }
  });

  /* ---------- Header: mega menu, search, hide on scroll, logo compact ---------- */
  const headerSection = $('.header-section');
  const header = $('[data-header]');
  const overlay = $('[data-header-overlay]');
  let openMega = null;
  let hoverTimer;

  const setCompact = () => {
    if (!header) return;
    const compact = window.scrollY > 8 || !!openMega || (searchBar && searchBar.classList.contains('is-open'));
    header.classList.toggle('is-compact', compact);
  };

  const showOverlay = (show) => {
    if (!overlay) return;
    overlay.style.setProperty('--overlay-top', `${header.getBoundingClientRect().bottom}px`);
    overlay.classList.toggle('is-visible', show);
  };

  function closeMega(restoreFocus = false) {
    if (!openMega) return;
    const { toggle, panel } = openMega;
    toggle.setAttribute('aria-expanded', 'false');
    panel.classList.remove('is-open');
    if (restoreFocus) toggle.focus();
    openMega = null;
    showOverlay(false);
    setCompact();
  }

  const openMegaFor = (toggle) => {
    const panel = document.getElementById(toggle.getAttribute('aria-controls'));
    if (!panel) return;
    if (openMega && openMega.toggle === toggle) return;
    closeMega();
    closeSearch();
    toggle.setAttribute('aria-expanded', 'true');
    panel.classList.add('is-open');
    openMega = { toggle, panel };
    markLoaded(panel);
    showOverlay(true);
    setCompact();
  };

  $$('[data-mega-toggle]').forEach((toggle) => {
    const item = toggle.closest('.nav__item');
    toggle.addEventListener('click', () => {
      if (openMega && openMega.toggle === toggle) closeMega();
      else openMegaFor(toggle);
    });
    if (window.matchMedia('(hover: hover)').matches) {
      item.addEventListener('mouseenter', () => { clearTimeout(hoverTimer); hoverTimer = setTimeout(() => openMegaFor(toggle), 90); });
      item.addEventListener('mouseleave', () => { clearTimeout(hoverTimer); hoverTimer = setTimeout(() => { if (openMega && openMega.toggle === toggle) closeMega(); }, 160); });
    }
    item.addEventListener('focusout', (e) => {
      if (!item.contains(e.relatedTarget) && openMega && openMega.toggle === toggle) closeMega();
    });
  });
  if (overlay) overlay.addEventListener('click', () => { closeMega(); closeSearch(); });

  const searchBar = $('[data-search-bar]');
  const searchToggle = $('[data-search-toggle]');
  function closeSearch(restoreFocus = false) {
    if (!searchBar || !searchBar.classList.contains('is-open')) return;
    searchBar.classList.remove('is-open');
    searchToggle.setAttribute('aria-expanded', 'false');
    showOverlay(false);
    setCompact();
    if (restoreFocus) searchToggle.focus();
  }
  if (searchToggle) {
    searchToggle.addEventListener('click', () => {
      if (searchBar.classList.contains('is-open')) return closeSearch();
      closeMega();
      searchBar.classList.add('is-open');
      searchToggle.setAttribute('aria-expanded', 'true');
      showOverlay(true);
      setCompact();
      setTimeout(() => $('input[type="search"]', searchBar).focus(), 60);
    });
  }

  /* ---------- Predictive search ---------- */
  const pInput = $('[data-predictive-input]');
  const pTarget = $('[data-predictive-target]');
  const pStatus = $('[data-predictive-status]');
  if (pInput && pTarget && theme.routes.predictiveSearch) {
    let pTimer; let pController; let activeIndex = -1;
    const items = () => $$('[data-predictive-item]', pTarget);
    const setActive = (i) => {
      const list = items();
      list.forEach((el) => el.classList.remove('is-active'));
      activeIndex = list.length ? (i + list.length) % list.length : -1;
      if (activeIndex >= 0) { list[activeIndex].classList.add('is-active'); list[activeIndex].scrollIntoView({ block: 'nearest' }); }
    };
    const clear = () => { pTarget.innerHTML = ''; pInput.setAttribute('aria-expanded', 'false'); activeIndex = -1; };
    const run = async (q) => {
      if (pController) pController.abort();
      pController = new AbortController();
      const url = `${theme.routes.predictiveSearch}?q=${encodeURIComponent(q)}&resources[type]=product,collection,article,page&resources[limit]=6&resources[options][unavailable_products]=last&section_id=predictive-search`;
      try {
        const html = await (await fetch(url, { signal: pController.signal })).text();
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const results = doc.querySelector('[data-predictive-results]');
        if (!results) return clear();
        pTarget.innerHTML = results.outerHTML;
        markLoaded(pTarget);
        pInput.setAttribute('aria-expanded', 'true');
        activeIndex = -1;
        const count = parseInt(results.dataset.count, 10) || 0;
        if (pStatus) pStatus.textContent = (count === 1 ? theme.strings.suggestionOne : theme.strings.suggestionOther).replace('[count]', count);
      } catch (err) { if (err.name !== 'AbortError') clear(); }
    };
    pInput.addEventListener('input', () => {
      clearTimeout(pTimer);
      const q = pInput.value.trim();
      if (q.length < 2) { clear(); return; }
      pTimer = setTimeout(() => run(q), 220);
    });
    pInput.addEventListener('keydown', (e) => {
      if (!items().length) return;
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive(activeIndex + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(activeIndex - 1); }
      else if (e.key === 'Enter' && activeIndex >= 0) { e.preventDefault(); items()[activeIndex].click(); }
    });
  }

  // Scale factor for the overhanging logo when compact: fit into header height.
  const logoImg = $('.header--overhang .header__logo img');
  const fitLogo = () => {
    if (!logoImg || !logoImg.offsetHeight) return;
    const target = header.querySelector('.header__inner').offsetHeight - 14;
    header.style.setProperty('--logo-compact', Math.min(1, target / logoImg.offsetHeight).toFixed(3));
  };
  if (logoImg) {
    if (logoImg.complete) fitLogo(); else logoImg.addEventListener('load', fitLogo, { once: true });
    window.addEventListener('resize', fitLogo, { passive: true });
  }

  let lastY = window.scrollY;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      if (headerSection) {
        const goingDown = y > lastY && y > 240;
        const busy = openMega || activeDrawer || (searchBar && searchBar.classList.contains('is-open'));
        headerSection.classList.toggle('is-hidden', goingDown && !busy);
      }
      setCompact();
      lastY = y;
      ticking = false;
    });
  }, { passive: true });
  setCompact();

  /* ---------- Announcement bar: rotate messages when they don't fit on one line ---------- */
  $$('[data-announcement]').forEach((bar) => {
    const list = $('.announcement__list', bar);
    const items = $$('li', list);
    if (items.length < 2) return;
    const delay = (parseFloat(bar.dataset.interval) || 4) * 1000;
    let index = 0;
    let timer;
    let held = false;
    const show = (next) => {
      if (next === index) return;
      items[index].classList.remove('is-active');
      items[index].classList.add('is-leaving');
      const prev = items[index];
      setTimeout(() => prev.classList.remove('is-leaving'), 560);
      index = next;
      items[index].classList.add('is-active');
    };
    const stop = () => { clearInterval(timer); timer = null; };
    const start = () => {
      stop();
      if (!held && list.classList.contains('is-rotating')) timer = setInterval(() => show((index + 1) % items.length), delay);
    };
    const fits = () => {
      list.classList.remove('is-rotating');
      items.forEach((li) => li.classList.remove('is-active', 'is-leaving'));
      const top = items[0].offsetTop;
      return items.every((li) => li.offsetTop === top);
    };
    const layout = () => {
      if (fits()) { stop(); return; }
      list.classList.add('is-rotating');
      items[index].classList.add('is-active');
      start();
    };
    list.addEventListener('mouseenter', () => { held = true; stop(); });
    list.addEventListener('mouseleave', () => { held = false; start(); });
    list.addEventListener('focusin', (e) => {
      held = true; stop();
      const li = e.target.closest('li');
      if (li && list.classList.contains('is-rotating')) show(items.indexOf(li));
    });
    list.addEventListener('focusout', () => { held = false; start(); });
    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
    let resizeFrame;
    window.addEventListener('resize', () => { cancelAnimationFrame(resizeFrame); resizeFrame = requestAnimationFrame(layout); });
    layout();
  });

  /* ---------- Hero: load sequence, slides, fishing line ---------- */
  $$('[data-hero]').forEach((hero) => {
    const slides = $$('[data-slide]', hero);
    const backdrops = $$('[data-backdrop]', hero);
    const lures = $$('[data-lure]', hero);
    const tabs = $$('[role="tab"]', hero);
    const lineArt = $('[data-hero-line]', hero);
    const rig = $('[data-rig]', hero);
    const tackle = $('[data-tackle]', hero);
    const animate = hero.hasAttribute('data-animate') && !reducedMotion.matches;
    let current = 0;

    const reveal = (slide) => {
      slide.classList.remove('is-in');
      void slide.offsetWidth; // restart the copy animation
      slide.classList.add('is-in');
    };
    const start = () => requestAnimationFrame(() => { hero.classList.add('is-in'); if (slides[0]) reveal(slides[0]); });
    if (animate) {
      // Wait for the display font so lines do not re-wrap mid-animation.
      if (document.fonts && document.fonts.ready) Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 600))]).then(start);
      else start();
    } else {
      hero.classList.add('is-in');
      slides.forEach((sl) => sl.classList.add('is-in'));
    }

    // Swap the lure on the line: reel in, change, let it down again.
    const swapLure = (index) => {
      if (!lures.length) return;
      const next = lures[index] || lures[0];
      const apply = () => lures.forEach((l) => {
        const on = l === next;
        l.classList.toggle('is-active', on);
        l.tabIndex = on ? 0 : -1;
        if (on) l.removeAttribute('aria-hidden'); else l.setAttribute('aria-hidden', 'true');
      });
      if (!lineArt || reducedMotion.matches) { apply(); return; }
      lineArt.classList.add('is-reeling');
      setTimeout(() => {
        apply();
        lineArt.classList.remove('is-reeling');
        if (tackle) { tackle.classList.remove('is-swinging'); void tackle.offsetWidth; tackle.classList.add('is-swinging'); }
      }, 480);
    };

    const go = (index, { focusTab = false } = {}) => {
      if (!slides.length) return;
      const n = (index + slides.length) % slides.length;
      if (n === current) return;
      slides.forEach((sl, i) => {
        const on = i === n;
        sl.classList.toggle('is-active', on);
        if (on) { sl.removeAttribute('aria-hidden'); sl.removeAttribute('inert'); if (animate) reveal(sl); else sl.classList.add('is-in'); }
        else { sl.setAttribute('aria-hidden', 'true'); sl.setAttribute('inert', ''); }
      });
      backdrops.forEach((b, i) => b.classList.toggle('is-active', i === n));
      tabs.forEach((t, i) => {
        t.setAttribute('aria-selected', i === n ? 'true' : 'false');
        t.tabIndex = i === n ? 0 : -1;
      });
      if (focusTab && tabs[n]) tabs[n].focus();
      swapLure(n);
      current = n;
      restartTimer();
    };

    // Autoplay: pauses on hover, keyboard focus, hidden tab, or the pause button.
    const interval = parseInt(hero.dataset.interval || '7000', 10);
    const pauseBtn = $('[data-hero-pause]', hero);
    let timer = null;
    let userPaused = false;
    let held = false;
    const canPlay = () => hero.hasAttribute('data-autoplay') && slides.length > 1 && !reducedMotion.matches && !userPaused;
    function restartTimer() {
      clearTimeout(timer);
      hero.classList.toggle('is-playing', canPlay());
      if (!canPlay()) return;
      // restart the progress bar
      const bar = $('.hero__tab[aria-selected="true"] .hero__tab-bar i', hero);
      if (bar) { bar.style.animation = 'none'; void bar.offsetWidth; bar.style.animation = ''; }
      if (!held) timer = setTimeout(() => go(current + 1), interval);
    }
    const hold = (on) => {
      if (held === on) return;
      held = on;
      hero.classList.toggle('is-held', on);
      if (on) clearTimeout(timer); else restartTimer();
    };
    if (slides.length > 1) {
      tabs.forEach((t, i) => {
        t.addEventListener('click', () => go(i));
        t.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowRight') { e.preventDefault(); go(current + 1, { focusTab: true }); }
          if (e.key === 'ArrowLeft') { e.preventDefault(); go(current - 1, { focusTab: true }); }
        });
      });
      hero.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') hold(true); });
      hero.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') hold(false); });
      hero.addEventListener('focusin', () => hold(true));
      hero.addEventListener('focusout', (e) => { if (!hero.contains(e.relatedTarget)) hold(false); });
      document.addEventListener('visibilitychange', () => hold(document.hidden));
      if (pauseBtn) pauseBtn.addEventListener('click', () => {
        userPaused = !userPaused;
        pauseBtn.setAttribute('aria-pressed', String(userPaused));
        pauseBtn.setAttribute('aria-label', userPaused ? pauseBtn.dataset.labelPlay : pauseBtn.dataset.labelPause);
        restartTimer();
      });
      // Swipe on touch screens
      let sx = null; let sy = null;
      hero.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
      hero.addEventListener('touchend', (e) => {
        if (sx === null) return;
        const dx = e.changedTouches[0].clientX - sx; const dy = e.changedTouches[0].clientY - sy;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) go(current + (dx < 0 ? 1 : -1));
        sx = null;
      }, { passive: true });
      restartTimer();
    }

    // A bite when the line is touched: two tugs, the lure kicks, a ring on the water.
    if (rig) {
      const bite = () => {
        if (reducedMotion.matches || rig.classList.contains('is-biting') || (lineArt && lineArt.classList.contains('is-reeling'))) return;
        rig.classList.add('is-biting');
      };
      rig.addEventListener('animationend', (e) => { if (e.animationName === 'bite') rig.classList.remove('is-biting'); });
      rig.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') bite(); });
      rig.addEventListener('click', (e) => { if (!e.target.closest('[data-lure]')) bite(); });
    }

    // Copy a discount code
  });

  /* ---------- Legal-text seal: fall back to its text when the provider's image can't load ---------- */
  $$('[data-legal-badge-img], #itkanzlei_img_copyright').forEach((img) => {
    const fallback = () => {
      const t = $('.legal-badge__text', img.parentElement);
      if (t) { img.hidden = true; t.hidden = false; return; }
      const span = document.createElement('span');
      span.className = 'legal-badge__text';
      span.textContent = img.alt;
      img.replaceWith(span);
    };
    if (img.complete && !img.naturalWidth) fallback(); else img.addEventListener('error', fallback, { once: true });
  });

  /* ---------- Copy discount codes (hero slide, welcome pop-up) ---------- */
  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-copy]');
    if (!btn) return;
    const hint = $('[data-copy-hint]', btn);
    try { await navigator.clipboard.writeText(btn.dataset.copy); } catch (err) {
      const r = document.createRange(); r.selectNodeContents($('strong', btn)); const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r);
    }
    if (hint) {
      clearTimeout(btn.copyTimer);
      if (!btn.dataset.hint) btn.dataset.hint = hint.textContent;
      hint.textContent = btn.dataset.copied;
      btn.copyTimer = setTimeout(() => { hint.textContent = btn.dataset.hint; }, 2000);
    }
  });

  /* ---------- Welcome pop-up: once per visitor, after a short delay and the cookie banner ---------- */
  const welcome = $('[data-welcome]');
  if (welcome) {
    const KEY = 'kd-welcome';
    const days = parseFloat(welcome.dataset.days) || 30;
    let seen = 0;
    try { seen = parseInt(localStorage.getItem(KEY), 10) || 0; } catch (_) { /* storage blocked */ }
    const remember = (ms = Date.now()) => { try { localStorage.setItem(KEY, String(ms)); } catch (_) { /* storage blocked */ } };
    const show = () => {
      // Never interrupt an open menu, cart or picker; try again shortly.
      if (activeDrawer) { setTimeout(show, 4000); return; }
      openDrawer('welcome', document.activeElement);
      remember();
    };
    // Shopify's cookie banner comes first; the pop-up waits until the visitor has answered it.
    const afterConsent = (cb) => {
      let done = false;
      const go = () => { if (!done) { done = true; cb(); } };
      const check = () => {
        const privacy = window.Shopify && window.Shopify.customerPrivacy;
        if (privacy && typeof privacy.shouldShowBanner === 'function' && privacy.shouldShowBanner()) {
          document.addEventListener('visitorConsentCollected', go, { once: true });
        } else go();
      };
      if (window.Shopify && typeof window.Shopify.loadFeatures === 'function') {
        window.Shopify.loadFeatures([{ name: 'consent-tracking-api', version: '0.1' }], (err) => (err ? go() : check()));
        setTimeout(() => { if (!done && !(window.Shopify.customerPrivacy)) go(); }, 4000);
      } else check();
    };

    const state = $('[data-welcome-state]', welcome);
    if (state) {
      // Back from a sign-up without JavaScript (or after the spam check): show the result right away.
      openDrawer('welcome');
      if (state.dataset.welcomeState === 'success') remember(Date.now() + 3650 * 864e5);
    } else if (Date.now() - seen > days * 864e5 && !document.body.classList.contains('template-cart')) {
      afterConsent(() => setTimeout(show, (parseFloat(welcome.dataset.delay) || 3) * 1000));
    }

    const form = $('[data-welcome-form]', welcome);
    if (form) form.addEventListener('submit', async (e) => {
      const email = $('input[type="email"]', form);
      const error = $('[data-welcome-error]', form);
      const button = $('[type="submit"]', form);
      const fail = (msg) => {
        error.textContent = msg || error.dataset.message;
        error.hidden = false;
        email.setAttribute('aria-invalid', 'true');
        email.setAttribute('aria-describedby', error.id);
        email.focus();
      };
      e.preventDefault();
      if (!email.value.trim() || !email.checkValidity()) { fail(); return; }
      error.hidden = true;
      email.removeAttribute('aria-invalid');
      button.classList.add('is-loading');
      try {
        const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'text/html' } });
        if (res.url.includes('/challenge')) { form.submit(); return; }
        const html = await res.text();
        const ok = res.url.includes('customer_posted=true') || html.includes('data-welcome-state="success"');
        if (!ok) {
          const doc = new DOMParser().parseFromString(html, 'text/html');
          const msg = doc.querySelector('[data-welcome-error]');
          fail(msg && msg.textContent.trim());
          return;
        }
        $('[data-welcome-step="form"]', form).hidden = true;
        const done = $('[data-welcome-step="success"]', form);
        done.hidden = false;
        $('button', done).focus();
        remember(Date.now() + 3650 * 864e5);
      } catch (_) {
        form.submit();
      } finally {
        button.classList.remove('is-loading');
      }
    });

    const apply = $('[data-welcome-apply]', welcome);
    if (apply) apply.addEventListener('click', async (e) => {
      e.preventDefault();
      apply.classList.add('is-loading');
      try {
        await fetch(apply.getAttribute('href').split('?')[0], { credentials: 'same-origin' });
        remember(Date.now() + 3650 * 864e5);
        closeDrawer();
        toast(apply.dataset.applied);
      } catch (_) {
        window.location.href = apply.getAttribute('href');
      } finally {
        apply.classList.remove('is-loading');
      }
    });
  }

  /* ---------- Cart ---------- */
  const sectionsToRender = () => {
    const drawer = document.getElementById('shopify-section-cart-drawer');
    return drawer ? ['cart-drawer'] : [];
  };

  const updateCount = (count) => {
    $$('[data-cart-count-bubble]').forEach((el) => {
      el.textContent = count > 0 ? count : '';
      el.classList.remove('is-bumped');
      void el.offsetWidth;
      if (count > 0) el.classList.add('is-bumped');
    });
    $$('[data-cart-count-label]').forEach((el) => {
      el.textContent = el.textContent.replace(/\d+/, count);
    });
  };

  const renderDrawer = (html) => {
    if (!html) return;
    const wrapper = document.getElementById('shopify-section-cart-drawer');
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const fresh = doc.querySelector('[data-drawer="cart"]');
    const current = $('[data-drawer="cart"]');
    if (!fresh || !current) return;
    // Swap inner panel content so the open/close state (and transition) is preserved.
    const freshPanel = $('.drawer__panel', fresh);
    const currentPanel = $('.drawer__panel', current);
    const oldBar = $('.ship__bar span', currentPanel);
    const oldTransform = oldBar ? oldBar.style.transform : null;
    currentPanel.innerHTML = freshPanel.innerHTML;
    const newBar = $('.ship__bar span', currentPanel);
    if (newBar && oldTransform && !reducedMotion.matches) {
      const target = newBar.style.transform;
      newBar.style.transition = 'none';
      newBar.style.transform = oldTransform;
      requestAnimationFrame(() => requestAnimationFrame(() => { newBar.style.transition = ''; newBar.style.transform = target; }));
    }
    current.dataset.cartCount = fresh.dataset.cartCount;
    markLoaded(currentPanel);
    updateCount(parseInt(fresh.dataset.cartCount, 10) || 0);
    return wrapper;
  };

  const cartChange = async (line, quantity) => {
    const item = $(`[data-drawer="cart"] [data-line="${line}"]`) || $(`[data-line="${line}"]`);
    const removed = quantity === 0 && item ? { id: item.dataset.variantId, quantity: parseInt(item.dataset.quantity, 10) || 1, title: item.dataset.title } : null;
    if (item) item.classList.add('is-removing');
    try {
      const res = await fetch(`${theme.routes.cartChange}.js`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ line, quantity, sections: sectionsToRender(), sections_url: window.location.pathname }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.description || data.message || theme.strings.cartError);
      if ($('[data-cart-page]') || document.body.classList.contains('template-cart')) {
        if (removed) { try { sessionStorage.setItem('kd-undo', JSON.stringify(removed)); } catch (_) {} }
        window.location.reload();
        return;
      }
      renderDrawer(data.sections && data.sections['cart-drawer']);
      updateCount(data.item_count);
      if (removed) offerUndo(removed);
    } catch (err) {
      if (item) item.classList.remove('is-removing');
      toast(err.message || theme.strings.cartError);
    }
  };

  const offerUndo = (removed) => {
    toast(theme.strings.removed.replace('[title]', removed.title || ''), {
      label: theme.strings.undo,
      run: async () => {
        try {
          const body = { items: [{ id: removed.id, quantity: removed.quantity }], sections: sectionsToRender(), sections_url: window.location.pathname };
          const res = await fetch(`${theme.routes.cartAdd}.js`, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(body) });
          const data = await res.json();
          if (!res.ok) throw new Error(data.description || theme.strings.cartError);
          if (document.body.classList.contains('template-cart')) { window.location.reload(); return; }
          renderDrawer(data.sections && data.sections['cart-drawer']);
        } catch (err) { toast(err.message); }
      },
    });
  };

  // Undo offer survives the reload on the cart page.
  try {
    const pending = sessionStorage.getItem('kd-undo');
    if (pending) { sessionStorage.removeItem('kd-undo'); window.addEventListener('load', () => offerUndo(JSON.parse(pending))); }
  } catch (_) { /* storage unavailable */ }

  document.addEventListener('click', (e) => {
    const cartToggle = e.target.closest('[data-cart-toggle]');
    if (cartToggle && theme.cartType === 'drawer' && $('[data-drawer="cart"]') && !document.body.classList.contains('template-cart')) {
      e.preventDefault();
      openDrawer('cart', cartToggle);
      return;
    }
    const remove = e.target.closest('[data-remove-line]');
    if (remove) { cartChange(parseInt(remove.dataset.removeLine, 10), 0); return; }

    const step = e.target.closest('[data-qty-change]');
    if (step) {
      const wrap = step.closest('[data-qty]');
      const input = $('input', wrap);
      const min = parseInt(input.min || '0', 10);
      const next = Math.max(min, (parseInt(input.value, 10) || 0) + parseInt(step.dataset.qtyChange, 10));
      input.value = next;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });

  let qtyTimer;
  document.addEventListener('change', (e) => {
    const input = e.target.closest('[data-line-qty]');
    if (!input) return;
    clearTimeout(qtyTimer);
    qtyTimer = setTimeout(() => cartChange(parseInt(input.dataset.lineQty, 10), Math.max(0, parseInt(input.value, 10) || 0)), 350);
  });

  const addToCart = async (form) => {
    const button = $('[type="submit"]', form);
    const errorBox = $('[data-form-error]', form);
    if (button) { button.classList.add('is-loading'); button.setAttribute('aria-disabled', 'true'); }
    if (errorBox) errorBox.hidden = true;
    const body = new FormData(form);
    sectionsToRender().forEach((s) => body.append('sections', s));
    body.append('sections_url', window.location.pathname);
    try {
      const res = await fetch(`${theme.routes.cartAdd}.js`, { method: 'POST', headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' }, body });
      const data = await res.json();
      if (!res.ok || data.status) throw new Error(data.description || data.message || theme.strings.error);
      if (theme.cartType !== 'drawer' || !$('[data-drawer="cart"]')) {
        window.location.href = theme.routes.cart;
        return;
      }
      renderDrawer(data.sections && data.sections['cart-drawer']);
      openDrawer('cart', button);
    } catch (err) {
      if (errorBox) { errorBox.textContent = err.message; errorBox.hidden = false; }
      else toast(err.message);
    } finally {
      if (button) { button.classList.remove('is-loading'); button.removeAttribute('aria-disabled'); }
    }
  };

  document.addEventListener('submit', (e) => {
    const form = e.target.closest('[data-product-form]');
    if (!form || !window.fetch) return;
    e.preventDefault();
    addToCart(form);
  });

  /* ---------- Product: variants, gallery, sticky buy bar ---------- */
  const initProduct = (root) => {
    const variantsEl = $('[data-variants]', root);
    if (!variantsEl) return;
    const variants = JSON.parse(variantsEl.textContent);
    const form = $('[data-product-form]', root);
    const idInput = $('[data-variant-id]', root);
    const picker = $('[data-variant-picker]', root);
    const sectionId = root.dataset.sectionId;
    let controller;

    const selectedOptions = () => $$('fieldset', picker).map((fs) => {
      const checked = $('input:checked', fs);
      return checked ? checked.value : null;
    });

    // Update price, sale price, add button and SKU right away from the variant data;
    // the section refresh below then brings the server-rendered details (stock, pickup).
    const money = (cents) => new Intl.NumberFormat(theme.locale || 'de', { style: 'currency', currency: theme.currency || 'EUR' }).format(cents / 100);
    const showVariant = (variant) => {
      $$('[data-refresh="price"] .price', root).forEach((box) => {
        const current = $('.price__current', box);
        if (current) current.textContent = money(variant.price);
        const onSale = variant.compare_at_price && variant.compare_at_price > variant.price;
        box.classList.toggle('price--sale', !!onSale);
        let was = $('s', box);
        if (onSale) {
          if (!was) { was = document.createElement('s'); current.after(was); }
          was.textContent = money(variant.compare_at_price);
        } else if (was) was.remove();
      });
      const bar = $('[data-refresh="bar-price"]', root);
      if (bar) bar.textContent = money(variant.price);
      const sku = $('[data-refresh="sku"]', root);
      if (sku && variant.sku) sku.textContent = variant.sku;
      const btn = $('[data-add-button]', root);
      if (btn) {
        btn.disabled = !variant.available;
        $('.btn__label', btn).textContent = variant.available ? theme.strings.addToCart : theme.strings.soldOut;
      }
    };

    const refresh = async (variant) => {
      if (controller) controller.abort();
      controller = new AbortController();
      const url = `${root.dataset.productUrl}?variant=${variant.id}&section_id=${sectionId}`;
      try {
        const html = await (await fetch(url, { signal: controller.signal })).text();
        const doc = new DOMParser().parseFromString(html, 'text/html');
        $$('[data-refresh]', root).forEach((el) => {
          const fresh = doc.querySelector(`[data-refresh="${el.dataset.refresh}"]`);
          if (fresh) el.innerHTML = fresh.innerHTML;
        });
      } catch (err) {
        if (err.name !== 'AbortError') toast(theme.strings.error);
      }
    };

    // Gallery slider: one image at a time, thumbnails, counter; follows the chosen colour.
    const list = $('[data-gallery-list]', root);
    const slides = list ? Array.from(list.children) : [];
    const thumbs = $$('[data-thumb]', root);
    const counter = $('[data-gallery-index]', root);
    const prev = $('[data-gallery-prev]', root);
    const next = $('[data-gallery-next]', root);
    let active = 0;
    const setActive = (i) => {
      active = i;
      thumbs.forEach((t, ti) => t.setAttribute('aria-current', ti === i ? 'true' : 'false'));
      if (counter) counter.textContent = i + 1;
      if (prev) prev.disabled = i === 0;
      if (next) next.disabled = i === slides.length - 1;
      const thumb = thumbs[i];
      if (thumb) {
        const strip = thumb.closest('[data-gallery-thumbs]');
        const li = thumb.parentElement;
        if (li.offsetLeft < strip.scrollLeft || li.offsetLeft + li.offsetWidth > strip.scrollLeft + strip.clientWidth) {
          strip.scrollTo({ left: li.offsetLeft - strip.clientWidth / 2 + li.offsetWidth / 2, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
        }
      }
    };
    const goTo = (i, smooth = true) => {
      if (!list || !slides[i]) return;
      list.scrollTo({ left: slides[i].offsetLeft - list.offsetLeft, behavior: smooth && !reducedMotion.matches ? 'smooth' : 'auto' });
      setActive(i);
    };
    const scrollToMedia = (mediaId) => {
      const i = slides.findIndex((li) => li.dataset.mediaId === String(mediaId));
      if (i >= 0 && i !== active) goTo(i);
    };
    if (list && slides.length > 1) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) setActive(slides.indexOf(entry.target)); });
      }, { root: list, threshold: 0.6 });
      slides.forEach((li) => io.observe(li));
      if (prev) prev.addEventListener('click', () => goTo(Math.max(0, active - 1)));
      if (next) next.addEventListener('click', () => goTo(Math.min(slides.length - 1, active + 1)));
      list.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') { e.preventDefault(); goTo(Math.min(slides.length - 1, active + 1)); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(Math.max(0, active - 1)); }
      });
      thumbs.forEach((t, ti) => t.addEventListener('click', () => {
        goTo(ti);
        // A colour's own picture was chosen: select that colour too.
        const mediaId = slides[ti].dataset.mediaId;
        const match = variants.find((v) => v.featured_media && String(v.featured_media.id) === mediaId);
        if (match && picker) {
          let changed = null;
          $$('fieldset', picker).forEach((fs, oi) => {
            const input = $$('input', fs).find((inp) => inp.value === match.options[oi]);
            if (input && !input.checked) { input.checked = true; changed = input; }
          });
          if (changed) changed.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }));
      const start = parseInt($('[data-gallery]', root).dataset.start, 10) || 0;
      if (start) requestAnimationFrame(() => goTo(start, false)); else setActive(0);
    }

    if (picker) {
      picker.addEventListener('change', () => {
        const opts = selectedOptions();
        const variant = variants.find((v) => v.options.every((o, i) => o === opts[i]));
        if (!variant) {
          const btn = $('[data-add-button]', root);
          if (btn) { btn.disabled = true; $('.btn__label', btn).textContent = theme.strings.soldOut; }
          return;
        }
        idInput.value = variant.id;
        showVariant(variant);
        if (root.hasAttribute('data-product-section')) {
          const url = new URL(window.location.href);
          url.searchParams.set('variant', variant.id);
          window.history.replaceState({}, '', url);
        }
        if (variant.featured_media) scrollToMedia(variant.featured_media.id);
        refresh(variant);
      });
    }

    // Sticky buy bar when the main button leaves the viewport (mobile).
    const bar = $('[data-buy-bar]', root);
    const buyArea = form && $('.buy', form);
    if (bar && buyArea) {
      const io = new IntersectionObserver(([entry]) => {
        const show = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        bar.classList.toggle('is-visible', show);
        bar.setAttribute('aria-hidden', show ? 'false' : 'true');
        $('[data-buy-bar-button]', bar).tabIndex = show ? 0 : -1;
      });
      io.observe(buyArea);
      $('[data-buy-bar-button]', bar).addEventListener('click', () => {
        const btn = $('[data-add-button]', form);
        if (btn && !btn.disabled) form.requestSubmit(); else buyArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    }
  };
  $$('[data-product-section]').forEach(initProduct);

  /* ---------- Quick add: products with options open a picker drawer from the card ---------- */
  const quickBody = $('[data-quick-add-body]');
  let quickController;
  document.addEventListener('click', async (e) => {
    const trigger = e.target.closest('[data-quick-add]');
    if (!trigger || !quickBody) return;
    e.preventDefault();
    if (quickController) quickController.abort();
    quickController = new AbortController();
    trigger.classList.add('is-loading');
    try {
      const url = `${trigger.dataset.quickAdd}${trigger.dataset.quickAdd.includes('?') ? '&' : '?'}section_id=quick-add`;
      const html = await (await fetch(url, { signal: quickController.signal })).text();
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const content = doc.querySelector('[data-quick-product]');
      if (!content) throw new Error(theme.strings.error);
      quickBody.replaceChildren(document.importNode(content, true));
      const root = $('[data-quick-product]', quickBody);
      markLoaded(root);
      initProduct(root);
      openDrawer('quick-add', trigger);
    } catch (err) {
      if (err.name === 'AbortError') return;
      // Fall back to the product page, where the same choice is always possible.
      window.location.href = trigger.dataset.quickAdd;
    } finally {
      trigger.classList.remove('is-loading');
    }
  });

  /* ---------- Köder-Finder: rank lures by tags, explain the match, "Glücksgriff" draws one ---------- */
  $$('[data-finder]').forEach((finder) => {
    const form = $('[data-finder-form]', finder);
    const result = $('[data-finder-result]', finder);
    if (!form || !result) return;
    const steps = $$('[data-step]', form);
    const back = $('[data-finder-back]', form);
    const summary = $('[data-finder-summary]', finder);
    const grid = $('[data-finder-grid]', finder);
    let items = [];
    let loading;
    const loadCards = () => {
      if (!loading) {
        loading = fetch(grid.dataset.src)
          .then((res) => { if (!res.ok) throw new Error(res.status); return res.text(); })
          .then((html) => {
            const doc = new DOMParser().parseFromString(html, 'text/html');
            grid.replaceChildren(...$$('.finder__item', doc).map((li) => document.importNode(li, true)));
            items = $$('.finder__item', grid).map((li) => ({ li, tags: li.dataset.tags.split('|'), index: +li.dataset.index }));
          })
          .catch((err) => { loading = null; throw err; });
      }
      return loading;
    };
    const stage = $('[data-finder-stage]', finder);
    const slot = $('[data-finder-slot]', finder);
    const winnerBox = $('[data-finder-winner]', finder);
    const more = $('[data-finder-more]', finder);
    const max = parseInt(finder.dataset.max, 10) || 6;
    let current = 0;
    let ranked = [];

    const choice = (name) => {
      const input = $(`input[name="${name}"]:checked`, form);
      if (!input || !input.dataset.tags) return null;
      return { tags: input.dataset.tags.split('|'), label: input.dataset.label, url: input.dataset.url };
    };
    const hits = (item, pick) => pick && pick.tags.some((t) => item.tags.includes(t));

    const showStep = (n, focus = true) => {
      current = n;
      steps.forEach((step, i) => { step.hidden = i !== n; step.classList.toggle('is-active', i === n); });
      back.hidden = n === 0;
      form.hidden = false;
      result.hidden = true;
      if (focus) $('legend', steps[n]).focus({ preventScroll: true });
    };
    $$('legend', form).forEach((l) => l.setAttribute('tabindex', '-1'));

    const render = async () => {
      try { await loadCards(); } catch (_) { window.location.href = more.href; return; }
      const fish = choice('fish');
      const zone = choice('zone');
      const style = choice('style');
      const wanted = (zone ? 1 : 0) + (style ? 1 : 0);
      ranked = items
        .filter((it) => !fish || hits(it, fish))
        .map((it) => {
          const matched = [hits(it, zone) && zone.label, hits(it, style) && style.label].filter(Boolean);
          const reasons = matched.length ? matched : [fish && fish.label].filter(Boolean);
          return { ...it, reasons, score: (hits(it, zone) ? 1 : 0) + (hits(it, style) ? 1 : 0) };
        })
        .sort((a, b) => b.score - a.score || a.index - b.index);
      const exact = ranked.filter((it) => it.score === wanted).length;
      items.forEach((it) => { it.li.hidden = true; it.li.style.order = ''; });
      ranked.slice(0, max).forEach((it, i) => {
        it.li.hidden = false;
        it.li.style.order = i;
        $('[data-finder-why]', it.li).textContent = finder.dataset.tWhy.replace('[reasons]', it.reasons.join(' · '));
        markLoaded(it.li);
      });
      summary.textContent = exact === 0 ? finder.dataset.tClose
        : exact === 1 ? finder.dataset.tExactOne : finder.dataset.tExact.replace('[count]', exact);
      if (fish && fish.url) more.href = fish.url;
      stage.hidden = true;
      form.hidden = true;
      result.hidden = false;
      summary.focus({ preventScroll: true });
      finder.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
    };

    form.addEventListener('change', (e) => {
      if (!e.target.matches('input[type="radio"]')) return;
      loadCards().catch(() => {});
      // Short pause so the chosen option visibly locks in before the next question.
      setTimeout(() => (current < steps.length - 1 ? showStep(current + 1) : render()), reducedMotion.matches ? 0 : 220);
    });
    back.addEventListener('click', () => showStep(Math.max(0, current - 1)));
    $('[data-finder-restart]', finder).addEventListener('click', () => { form.reset(); showStep(0); });

    // Glücksgriff: shuffle through the matching lures like a slot reel, slowing down, then land on one.
    $('[data-finder-lucky]', finder).addEventListener('click', () => {
      if (!ranked.length) return;
      const candidates = ranked.filter((it) => it.score === ranked[0].score);
      const winner = candidates[Math.floor(Math.random() * candidates.length)];
      const imgOf = (it) => { const img = $('.card__img-main, .card__media img', it.li); return img ? img.currentSrc || img.src : ''; };
      stage.hidden = false;
      winnerBox.replaceChildren();
      stage.classList.remove('is-landed');
      const land = () => {
        slot.src = imgOf(winner);
        stage.classList.add('is-landed');
        const card = winner.li.cloneNode(true);
        card.hidden = false;
        card.style.order = '';
        $('[data-finder-why]', card).textContent = `${finder.dataset.tLucky} · ${winner.reasons.join(' · ')}`;
        winnerBox.replaceChildren(card);
        markLoaded(card);
      };
      if (reducedMotion.matches || candidates.length < 2) { land(); return; }
      let delay = 60;
      let n = 0;
      const spin = () => {
        slot.src = imgOf(candidates[n++ % candidates.length]);
        delay *= 1.16;
        if (delay < 420) setTimeout(spin, delay); else land();
      };
      spin();
      stage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  /* ---------- Product recommendations ---------- */
  $$('[data-related]').forEach(async (el) => {
    if (el.querySelector('.grid')) return;
    try {
      const html = await (await fetch(el.dataset.url)).text();
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const fresh = doc.querySelector('[data-related]');
      if (fresh && fresh.querySelector('.grid')) { el.innerHTML = fresh.innerHTML; markLoaded(el); }
    } catch (_) { /* recommendations are optional */ }
  });

  /* ---------- Collection filters & sorting (section rendering) ---------- */
  const initFacets = (root) => {
    const sectionId = root.dataset.sectionId;
    const results = $('[data-results]', root);
    let controller;

    const render = async (url, push = true) => {
      if (controller) controller.abort();
      controller = new AbortController();
      if (results) results.classList.add('is-loading');
      const fetchUrl = new URL(url, window.location.origin);
      fetchUrl.searchParams.set('section_id', sectionId);
      try {
        const html = await (await fetch(fetchUrl, { signal: controller.signal })).text();
        const doc = new DOMParser().parseFromString(html, 'text/html');
        $$('[data-refresh]', root).forEach((el) => {
          const fresh = doc.querySelector(`[data-refresh="${el.dataset.refresh}"]`);
          if (!fresh) return;
          // Keep open/closed state of filter groups across renders.
          const openState = $$('details.facet', el).map((d) => d.open);
          el.innerHTML = fresh.innerHTML;
          $$('details.facet', el).forEach((d, i) => { if (openState[i] !== undefined) d.open = openState[i]; });
        });
        markLoaded(root);
        if (push) window.history.pushState({ facets: true }, '', url);
      } catch (err) {
        if (err.name !== 'AbortError') window.location.href = url;
      } finally {
        if (results) results.classList.remove('is-loading');
      }
    };

    const urlFromForm = (form) => {
      const params = new URLSearchParams(new FormData(form));
      const sort = $('[data-sort]', root);
      if (sort) params.set('sort_by', sort.value);
      // Drop empty price inputs.
      Array.from(params.keys()).forEach((k) => { if (params.get(k) === '') params.delete(k); });
      return `${window.location.pathname}?${params.toString()}`;
    };

    let debounce;
    root.addEventListener('change', (e) => {
      const form = e.target.closest('[data-facets-form]');
      if (form) {
        clearTimeout(debounce);
        debounce = setTimeout(() => render(urlFromForm(form)), e.target.type === 'number' ? 600 : 0);
        return;
      }
      if (e.target.matches('[data-sort]')) {
        const params = new URLSearchParams(window.location.search);
        params.set('sort_by', e.target.value);
        params.delete('page');
        render(`${window.location.pathname}?${params.toString()}`);
      }
    });
    root.addEventListener('submit', (e) => {
      const form = e.target.closest('[data-facets-form]');
      if (!form) return;
      e.preventDefault();
      render(urlFromForm(form));
    });
    root.addEventListener('click', (e) => {
      const link = e.target.closest('[data-facet-link]');
      if (!link) return;
      e.preventDefault();
      render(link.href);
      if (link.closest('.pagination')) root.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    });
    window.addEventListener('popstate', () => render(window.location.href, false));
  };
  $$('[data-collection-section]').forEach(initFacets);

  /* ---------- Customer login: toggle password recovery ---------- */
  const recover = $('[data-recover]');
  if (recover) {
    const login = $('[data-login]');
    const show = (r) => { recover.hidden = !r; login.hidden = r; };
    if (window.location.hash === '#recover') show(true);
    document.addEventListener('click', (e) => {
      if (!e.target.closest('[data-recover-toggle]')) return;
      e.preventDefault();
      show(recover.hidden);
    });
  }

  markLoaded();
})();
