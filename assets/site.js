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
})();
