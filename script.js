// script.js — plain ES2020, no build step
(function () {
  'use strict';

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function get(obj, path) {
    return path.split('.').reduce((a, k) => (a == null ? a : a[k]), obj);
  }

  function boot() {
    if (typeof SITE_CONFIG === 'undefined') {
      console.error('[script.js] SITE_CONFIG is undefined — config.js did not load.');
      return;
    }
    if (typeof SITE_DETAIL === 'undefined') {
      console.warn('[script.js] SITE_DETAIL is undefined — config-detail.js did not load.');
    }

    // -------- text bindings --------
    $$('[data-config]').forEach(el => {
      const path = el.getAttribute('data-config');
      let v = get(SITE_CONFIG, path);
      if (v == null && typeof SITE_DETAIL !== 'undefined') v = get(SITE_DETAIL, path);
      if (v != null) el.textContent = v;
    });

    // -------- href bindings --------
    $$('[data-config-href]').forEach(el => {
      const path = el.getAttribute('data-config-href');
      let v = get(SITE_CONFIG, path);
      if (v == null && typeof SITE_DETAIL !== 'undefined') v = get(SITE_DETAIL, path);
      if (v) el.setAttribute('href', v);
    });

    // -------- image src bindings --------
    $$('[data-config-src]').forEach(el => {
      const path = el.getAttribute('data-config-src');
      let v = get(SITE_CONFIG, path);
      if (v == null && typeof SITE_DETAIL !== 'undefined') v = get(SITE_DETAIL, path);
      if (v) el.setAttribute('src', v);
    });

    // -------- nav --------
    const navUl = $('[data-nav]');
    if (navUl) {
      navUl.innerHTML = '';
      SITE_CONFIG.nav.forEach(item => {
        const li = document.createElement('li');
        const a  = document.createElement('a');
        a.href = item.href;
        a.textContent = item.label;
        li.appendChild(a);
        navUl.appendChild(li);
      });
    }

    // -------- about body --------
    const aboutBody = $('[data-about-body]');
    if (aboutBody) {
      aboutBody.innerHTML = '';
      SITE_CONFIG.about.body.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        aboutBody.appendChild(p);
      });
    }

    // -------- strengths --------
    const strengthsWrap = $('[data-strengths]');
    if (strengthsWrap) {
      strengthsWrap.innerHTML = '';
      SITE_CONFIG.strengths.forEach(s => {
        const el = document.createElement('article');
        el.className = 'card';
        el.innerHTML = '<div class="card-icon"></div><h3></h3><p></p>';
        el.querySelector('.card-icon').textContent = s.icon || '';
        el.querySelector('h3').textContent = s.title;
        el.querySelector('p').textContent  = s.body;
        strengthsWrap.appendChild(el);
      });
    }

    // -------- stages (with images) --------
    const stagesWrap = $('[data-stages]');
    if (stagesWrap) {
      stagesWrap.innerHTML = '';
      SITE_CONFIG.stages.forEach(s => {
        const el = document.createElement('article');
        el.className = 'stage-card';

        const imgSrc = s.imageKey && SITE_CONFIG.images ? SITE_CONFIG.images[s.imageKey] : null;
        if (imgSrc) {
          el.classList.add('stage-card--image');
          el.style.backgroundImage =
            "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%), url('" + imgSrc + "')";
          el.style.backgroundSize = 'cover';
          el.style.backgroundPosition = 'center';
        } else {
          el.style.background = s.color || 'var(--card-blue)';
        }

        el.innerHTML = '<h3></h3><div class="sub"></div><p></p>';
        el.querySelector('h3').textContent   = s.title;
        el.querySelector('.sub').textContent = s.subtitle;
        el.querySelector('p').textContent    = s.body;
        stagesWrap.appendChild(el);
      });
    }

    // -------- awards --------
    const awardsWrap = $('[data-awards]');
    if (awardsWrap) {
      awardsWrap.innerHTML = '';
      SITE_CONFIG.awards.forEach(a => {
        const el = document.createElement('article');
        el.className = 'card';
        el.innerHTML = '<div class="card-icon">✓</div><h3></h3><p></p>';
        el.querySelector('h3').textContent = a.title;
        el.querySelector('p').textContent  = a.body;
        awardsWrap.appendChild(el);
      });
    }

    // -------- terms --------
    const termsWrap = $('[data-terms]');
    if (termsWrap) {
      termsWrap.innerHTML = '';
      SITE_CONFIG.terms.forEach(t => {
        const el = document.createElement('article');
        el.className = 'term-card';
        el.innerHTML = '<h3></h3><div class="dates"></div><p class="note"></p>';
        el.querySelector('h3').textContent     = t.name;
        el.querySelector('.dates').textContent = t.dates;
        el.querySelector('.note').textContent  = t.note;
        termsWrap.appendChild(el);
      });
    }

    // -------- testimonials --------
    const testWrap = $('[data-testimonials]');
    if (testWrap) {
      testWrap.innerHTML = '';
      SITE_CONFIG.testimonials.forEach(t => {
        const el = document.createElement('div');
        el.className = 'testimonial';
        el.innerHTML = '<blockquote></blockquote><div class="author"></div><div class="role"></div>';
        el.querySelector('blockquote').textContent = '\u201C' + t.quote + '\u201D';
        el.querySelector('.author').textContent    = t.author;
        el.querySelector('.role').textContent      = t.role;
        testWrap.appendChild(el);
      });
    }

    // -------- gallery --------
    const galleryWrap = $('[data-gallery]');
    if (galleryWrap) {
      galleryWrap.innerHTML = '';
      (SITE_CONFIG.gallery || []).forEach(key => {
        const src = SITE_CONFIG.images && SITE_CONFIG.images[key];
        if (!src) return;
        const img = document.createElement('img');
        img.src = src;
        img.alt = '';
        img.loading = 'lazy';
        galleryWrap.appendChild(img);
      });
    }

    // -------- footer columns --------
    const footerWrap = $('[data-footer-cols]');
    if (footerWrap) {
      footerWrap.innerHTML = '';
      SITE_CONFIG.footer.columns.forEach(col => {
        const div = document.createElement('div');
        const h4 = document.createElement('h4');
        h4.textContent = col.heading;
        const ul = document.createElement('ul');
        col.links.forEach(name => {
          const li = document.createElement('li');
          const a  = document.createElement('a');
          a.href = '#';
          a.textContent = name;
          li.appendChild(a);
          ul.appendChild(li);
        });
        div.append(h4, ul);
        footerWrap.appendChild(div);
      });
    }

    // -------- WhatsApp + email links --------
    const wa = SITE_CONFIG.contact.whatsapp;
    const defaultMsg = (typeof SITE_DETAIL !== 'undefined' && SITE_DETAIL.whatsapp)
      ? SITE_DETAIL.whatsapp.defaultMessage
      : 'Hello, I would like to enquire about a place.';
    const msg = encodeURIComponent(defaultMsg);

    $$('[data-whatsapp-link]').forEach(a => {
      a.href = 'https://wa.me/' + wa + '?text=' + msg;
    });
    $$('[data-email-link]').forEach(a => {
      a.href = 'mailto:' + SITE_CONFIG.contact.email;
    });

    // -------- map --------
    const mapFrame = $('[data-map-embed]');
    if (mapFrame && typeof SITE_DETAIL !== 'undefined' && SITE_DETAIL.map) {
      mapFrame.src = SITE_DETAIL.map.embedUrl;
    }

    // -------- mobile nav --------
    const toggle = $('.nav-toggle');
    const nav    = $('#site-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
      });
      nav.addEventListener('click', ev => {
        if (ev.target.tagName === 'A') {
          nav.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // -------- form --------
    const form = $('[data-form]');
    if (form) {
      const status = $('.form-status', form);
      form.addEventListener('submit', async ev => {
        ev.preventDefault();
        status.className = 'form-status';
        status.textContent = 'Sending…';

        const data = new FormData(form);
        const endpoint = (typeof SITE_DETAIL !== 'undefined' && SITE_DETAIL.form)
          ? SITE_DETAIL.form.endpoint
          : '';

        if (!endpoint || endpoint.includes('YOUR_FORM_ID')) {
          const subject = encodeURIComponent('Enquiry from ' + (data.get('parentName') || 'website'));
          const body = encodeURIComponent(
            Object.entries(Object.fromEntries(data)).map(([k, v]) => k + ': ' + v).join('\n')
          );
          window.location.href =
            'mailto:' + SITE_CONFIG.contact.email +
            '?subject=' + subject +
            '&body=' + body;
          status.classList.add('success');
          status.textContent = SITE_DETAIL.form.successMessage;
          return;
        }

        try {
          const res = await fetch(endpoint, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
          });
          if (!res.ok) throw new Error('Network error');
          form.reset();
          status.classList.add('success');
          status.textContent = SITE_DETAIL.form.successMessage;
        } catch (err) {
          status.classList.add('error');
          status.textContent = SITE_DETAIL.form.errorMessage;
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();