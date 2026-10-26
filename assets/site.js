/* Optional enhancements; all guide content and navigation work without JavaScript. */
(() => {
  const languageLinks = document.querySelectorAll('.language a');
  function keepSection() {
    languageLinks.forEach(link => {
      const target = new URL(link.href);
      target.hash = window.location.hash;
      link.href = target.href;
    });
  }
  keepSection();
  window.addEventListener('hashchange', keepSection);
  const nav = [...document.querySelectorAll('.sidebar nav a')];
  const sections = [...document.querySelectorAll('main section[id]')];
  let scheduled = false;
  function updateCurrent() {
    const threshold = 180;
    let active = null;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= threshold) active = section.id;
    }
    nav.forEach(link => {
      if (link.hash === '#' + active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scheduled = false;
  }
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; window.requestAnimationFrame(updateCurrent); }
  }, { passive: true });
  updateCurrent();
  window.addEventListener('beforeprint', () => {
    document.querySelectorAll('details').forEach(detail => {
      detail.dataset.printWasOpen = String(detail.open);
      detail.open = true;
    });
  });
  window.addEventListener('afterprint', () => {
    document.querySelectorAll('details[data-print-was-open]').forEach(detail => {
      detail.open = detail.dataset.printWasOpen === 'true';
      delete detail.dataset.printWasOpen;
    });
  });
  // Recovery checklist: progress count and ticks kept in this browser only (shared by both languages).
  const list = document.querySelector('.followlist');
  if (list) {
    const boxes = [...list.querySelectorAll('input[type=checkbox]')];
    const progress = list.querySelector('.followlist-progress');
    const reset = list.querySelector('.followlist-reset');
    const key = 'recovery-checklist';
    const label = document.documentElement.lang === 'ko'
      ? n => `${n} / ${boxes.length} 완료`
      : n => `${n} of ${boxes.length} done`;
    function save() {
      try { localStorage.setItem(key, JSON.stringify(boxes.map(box => box.checked))); } catch (e) {}
    }
    function update() { progress.textContent = label(boxes.filter(box => box.checked).length); }
    try {
      const saved = JSON.parse(localStorage.getItem(key) || '[]');
      boxes.forEach((box, i) => { box.checked = saved[i] === true; });
    } catch (e) {}
    boxes.forEach(box => box.addEventListener('change', () => { save(); update(); }));
    reset.addEventListener('click', () => {
      boxes.forEach(box => { box.checked = false; });
      save();
      update();
    });
    progress.hidden = false;
    reset.hidden = false;
    update();
  }
})();
