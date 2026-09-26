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
  const toast = (msg) => {
    const el = $('[data-toast]');
    if (!el) return;
    el.textContent = msg;
    requestAnimationFrame(() => el.classList.add('is-visible'));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-visible'), 3500);
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

  /* ---------- Hero load sequence ---------- */
  const hero = $('[data-hero][data-animate]');
  if (hero && !reducedMotion.matches) {
    const start = () => requestAnimationFrame(() => hero.classList.add('is-in'));
    // Wait for the display font so lines do not re-wrap mid-animation.
    if (document.fonts && document.fonts.ready) {
      Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 600))]).then(start);
    } else start();
  } else if (hero) {
    hero.classList.add('is-in');
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
    currentPanel.innerHTML = freshPanel.innerHTML;
    current.dataset.cartCount = fresh.dataset.cartCount;
    markLoaded(currentPanel);
    updateCount(parseInt(fresh.dataset.cartCount, 10) || 0);
    return wrapper;
  };

  const cartChange = async (line, quantity) => {
    const item = $(`[data-drawer="cart"] [data-line="${line}"]`) || $(`[data-line="${line}"]`);
    if (item) item.classList.add('is-removing');
    try {
      const res = await fetch(`${theme.routes.cartChange}.js`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ line, quantity, sections: sectionsToRender(), sections_url: window.location.pathname }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.description || data.message);
      if ($('[data-cart-page]') || document.body.classList.contains('template-cart')) {
        window.location.reload();
        return;
      }
      renderDrawer(data.sections && data.sections['cart-drawer']);
      updateCount(data.item_count);
    } catch (err) {
      if (item) item.classList.remove('is-removing');
      toast(err.message || theme.strings.error);
    }
  };

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

    const scrollToMedia = (mediaId) => {
      const item = $(`[data-media-id="${mediaId}"]`, root);
      const list = $('[data-gallery-list]', root);
      if (!item || !list) return;
      if (list.scrollWidth > list.clientWidth) {
        list.scrollTo({ left: item.offsetLeft - list.offsetLeft, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
      } else if (item !== list.firstElementChild) {
        list.prepend(item);
        markLoaded(item);
      }
    };

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
        const url = new URL(window.location.href);
        url.searchParams.set('variant', variant.id);
        window.history.replaceState({}, '', url);
        if (variant.featured_media) scrollToMedia(variant.featured_media.id);
        refresh(variant);
      });
    }

    // Gallery dots follow horizontal scroll on mobile.
    const list = $('[data-gallery-list]', root);
    const dots = $$('[data-gallery-dots] button', root);
    if (list && dots.length) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Array.from(list.children).indexOf(entry.target);
          dots.forEach((d, i) => d.setAttribute('aria-current', i === index ? 'true' : 'false'));
        });
      }, { root: list, threshold: 0.6 });
      Array.from(list.children).forEach((c) => io.observe(c));
      dots.forEach((dot, i) => dot.addEventListener('click', () => {
        const target = list.children[i];
        list.scrollTo({ left: target.offsetLeft - list.offsetLeft, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
      }));
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
