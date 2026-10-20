/* Japanese Club – renders the site from /data/*.json (edited via /admin) */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const load = (f) => fetch(`data/${f}?v=${Date.now()}`).then(r => { if (!r.ok) throw new Error(f); return r.json(); });
  const esc = (t = '') => String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  // text is stored as plain text; **bold** and line breaks are the only formatting
  const fmt = (t = '') => esc(t).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  const fail = (el, m) => { if (el) el.innerHTML = `<p class="muted">${m}</p>`; };
  const offline = 'Content could not be loaded. If you opened this file directly, view it through the website (or a local web server) instead.';

  /* ---------- Our Years: menu, home-page cards, and the year.html page ---------- */
  const yearUrl = y => `year.html?y=${encodeURIComponent(y)}`;
  function renderYear(y, all) {
    const stats = (y.stats || []).length ? `<div class="stats-container">${y.stats.map(s => `
      <div class="stat-card"><div class="stat-icon">${esc(s.icon)}</div>
      <div class="stat-number" data-target="${+s.value || 0}">0</div>
      <div class="stat-label">${esc(s.label)}</div></div>`).join('')}</div>` : '';
    const entries = (y.entries || []).map(e => `
      <div class="month-section${e.highlight ? ' highlight-section' : ''}">
        <div class="month-header"><h3>${esc(e.title)}</h3>${e.tag ? `<span class="month-tag${e.highlight ? ' highlight' : ''}">${esc(e.tag)}</span>` : ''}</div>
        <div class="month-content">
          ${e.image ? `<img src="${esc(e.image)}" alt="${esc(e.title)}" class="month-image" loading="lazy">` : ''}
          <p>${fmt(e.text)}</p>
        </div>
      </div><hr class="month-divider">`).join('');
    $('#year-view').innerHTML = `<h2>${esc(y.year)}${y.title ? ' – ' + esc(y.title) : ''}</h2>
      ${y.intro ? `<p class="section-intro">${fmt(y.intro)}</p>` : ''}${stats}${entries || '<p class="muted">Nothing here yet.</p>'}`;
    document.title = `${y.year} | Japanese Club at Strathmore University`;
    const i = all.indexOf(y), newer = all[i - 1], older = all[i + 1];
    $('#year-pager').innerHTML = `${older ? `<a class="pager-btn" href="${yearUrl(older.year)}">← ${esc(older.year)}</a>` : '<span></span>'}
      ${newer ? `<a class="pager-btn" href="${yearUrl(newer.year)}">${esc(newer.year)} →</a>` : '<span></span>'}`;
    animateStats();
  }
  function animateStats() {
    const els = document.querySelectorAll('#year-view .stat-number');
    const run = el => { const t = +el.dataset.target || 0, t0 = performance.now();
      const step = n => { const p = Math.min(1, (n - t0) / 1500); el.textContent = Math.round(t * p); if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step); };
    if (!('IntersectionObserver' in window)) { els.forEach(el => el.textContent = el.dataset.target); return; }
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } }), { threshold: .4 });
    els.forEach(el => io.observe(el));
  }
  function setupYears(list) {
    const all = list.slice().sort((a, b) => String(b.year).localeCompare(String(a.year), undefined, { numeric: true }));
    const current = new URLSearchParams(location.search).get('y');
    $('#years-dropdown').innerHTML = all.map(y => `<li><a href="${yearUrl(y.year)}"${y.year === current ? ' class="active"' : ''}>${esc(y.year)}</a></li>`).join('');
    const cards = $('#years-cards');
    if (cards) cards.innerHTML = all.map(y => `<a class="year-card" href="${yearUrl(y.year)}"><span class="year-card-num">${esc(y.year)}</span><span class="year-card-title">${esc(y.title || 'Our year')}</span><span class="year-card-meta">${(y.entries || []).length} highlights →</span></a>`).join('') || '<p class="muted">Coming soon.</p>';
    if ($('#year-view')) {
      const y = all.find(v => v.year === current) || all[0];
      if (y) renderYear(y, all); else fail($('#year-view'), 'No years yet.');
    }
  }
  const menu = $('#years-menu');
  $('.dropdown-toggle').addEventListener('click', e => {
    e.preventDefault(); e.stopPropagation();
    const open = menu.classList.toggle('open');
    e.currentTarget.setAttribute('aria-expanded', open);
  });
  document.addEventListener('click', e => { if (!menu.contains(e.target)) menu.classList.remove('open'); });
  // old bookmarks like /#year-2024 -> the new year page
  const legacy = location.hash.match(/^#year-(.+)$/); if (legacy && !$('#year-view')) location.replace(yearUrl(decodeURIComponent(legacy[1])));
  // smooth scroll for in-page nav items (home page)
  document.querySelectorAll('.nav__links a[href^="#"]:not(.dropdown-toggle)').forEach(a => a.addEventListener('click', e => {
    const t = $(a.getAttribute('href')); if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  }));

  /* ---------- Upcoming events ---------- */
  const pad = n => String(n).padStart(2, '0');
  const today = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
  function calLink(e) {
    const d = e.date.replace(/-/g, '');
    let dates;
    if (e.time) { const [h, m] = e.time.split(':').map(Number); dates = `${d}T${pad(h)}${pad(m)}00/${d}T${pad((h + 2) % 24)}${pad(m)}00`; }
    else { const n = new Date(e.date + 'T00:00:00'); n.setDate(n.getDate() + 1); dates = `${d}/${n.getFullYear()}${pad(n.getMonth() + 1)}${pad(n.getDate())}`; }
    return 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + encodeURIComponent(e.title) + '&dates=' + dates +
      '&details=' + encodeURIComponent(e.description || '') + '&location=' + encodeURIComponent(e.location || '');
  }
  function renderEvents(list) {
    const box = $('#events-list'); if (!box) return;
    const up = list.filter(e => e.date >= today()).sort((a, b) => (a.date + (a.time || '')).localeCompare(b.date + (b.time || '')));
    if (!up.length) { box.innerHTML = '<p class="muted">No upcoming events right now – check back soon, or email <a href="mailto:japaneseclub@strathmore.edu">japaneseclub@strathmore.edu</a> to ask what we have planned!</p>'; return; }
    box.innerHTML = up.map(e => {
      const d = new Date(e.date + 'T00:00:00');
      return `<article class="event-card">
        <div class="event-date"><span class="event-day">${d.getDate()}</span><span class="event-month">${d.toLocaleString('en', { month: 'short' })}</span><span class="event-year">${d.getFullYear()}</span></div>
        <div class="event-body"><h3>${esc(e.title)}</h3>
          <p class="event-meta">${e.time ? '🕒 ' + esc(e.time) + ' &nbsp; ' : ''}${e.location ? '📍 ' + esc(e.location) : ''}</p>
          ${e.description ? `<p>${fmt(e.description)}</p>` : ''}
          <p class="event-links"><a href="${calLink(e)}" target="_blank" rel="noopener">＋ Add to Google Calendar</a>${/^https?:\/\//.test(e.link || '') ? ` · <a href="${esc(e.link)}" target="_blank" rel="noopener">More info</a>` : ''}</p></div>
      </article>`;
    }).join('');
  }

  /* ---------- Gallery & Learn ---------- */
  function renderGallery(images) {
    const gal = images.filter(i => (i.section || 'gallery') === 'gallery');
    const ys = [...new Set(gal.map(i => i.year).filter(Boolean))].sort().reverse();
    const bar = $('#gallery-filters'), grid = $('#gallery-grid'); if (!grid) return;
    const draw = (y) => {
      grid.innerHTML = gal.filter(i => !y || i.year === y).map(i => `<div class="gallery-item"><img src="${esc(i.src)}" alt="${esc(i.caption || 'Club photo')}" class="gallery-image" loading="lazy" data-full="${esc(i.src)}"></div>`).join('') || '<p class="muted">No photos yet.</p>';
      bar.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.y === (y || '')));
    };
    bar.innerHTML = ys.length ? ['', ...ys].map(y => `<button data-y="${esc(y)}">${y || 'All'}</button>`).join('') : '';
    bar.onclick = e => { const b = e.target.closest('button'); if (b) draw(b.dataset.y); };
    grid.onclick = e => { const i = e.target.closest('img'); if (i) openLightbox(i.dataset.full); };
    draw('');
    const learn = images.filter(i => i.section === 'learn');
    $('#learn-grid').innerHTML = learn.length ? learn.map(i => `<figure class="learn-card"><img src="${esc(i.src)}" alt="${esc(i.caption || 'Study material')}" loading="lazy" data-full="${esc(i.src)}"><figcaption>${esc(i.caption)}</figcaption></figure>`).join('') : '<p class="muted">Study material is coming soon!</p>';
    $('#learn-grid').onclick = e => { const i = e.target.closest('img'); if (i) openLightbox(i.dataset.full); };
  }

  load('years.json').then(d => setupYears(d.years || [])).catch(() => { fail($('#year-view'), offline); fail($('#years-cards'), offline); });
  if ($('#events-list')) load('events.json').then(d => renderEvents(d.events || [])).catch(() => fail($('#events-list'), offline));
  if ($('#gallery-grid')) load('gallery.json').then(d => renderGallery(d.images || [])).catch(() => { fail($('#gallery-grid'), offline); });
  const cy = $('#copy-year'); if (cy) cy.textContent = new Date().getFullYear();
})();
