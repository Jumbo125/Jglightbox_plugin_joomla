document.addEventListener("DOMContentLoaded", () => {
  const options = Joomla.getOptions('jglightbox');

  // Falls Optionen fehlen, abbrechen
  if (!options || !options.wrapper || !options.exclude) {
    console.warn('jglightbox: Optionen nicht gesetzt oder unvollständig.');
    return;
  }

  const selector = options.wrapper
    .split(',')
    .map(w => `${w.trim()} img:not(${options.exclude})`)
    .join(', ');

  document.querySelectorAll(selector).forEach((img) => {
    if (!img.closest('a')) {
      const wrapperDiv = img.parentElement;
      const src = img.getAttribute('src');

      const allowedAttributes = [
        'src', 'alt', 'title', 'width', 'height', 'class',
        'loading', 'decoding', 'role',
      ];

      const attributeString = Array.from(img.attributes)
        .filter(attr =>
          allowedAttributes.includes(attr.name)
          || attr.name.startsWith('data-')
          || attr.name.startsWith('aria-')
        )
        .filter(attr => attr.name !== 'data-gallery')
        .map(attr => ` ${attr.name}="${attr.value}"`)
        .join('');

      let glightbox_data = img.getAttribute('data-gallery') || img.closest('[data-gallery]')?.getAttribute('data-gallery');
      const dataGlightboxAttr = glightbox_data && glightbox_data !== 'false'
        ? ` data-gallery="${glightbox_data}"`
        : ' data-gallery="undefined"';

      const a = document.createElement('a');
      a.href = src;
      a.setAttribute('data-gallery', glightbox_data);
      a.classList.add('glightbox');
      a.innerHTML = `<img${attributeString}${dataGlightboxAttr}>`;

      img.replaceWith(a);
    }
  });

  // Initialisiere GLightbox, falls vorhanden
  setTimeout(() => {
    if (typeof GLightbox === 'function') {
      GLightbox();
    } else {
      console.warn('GLightbox nicht gefunden.');
    }
  }, 200);
});
