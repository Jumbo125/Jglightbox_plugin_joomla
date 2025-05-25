// Lightboxdocument.addEventListener("DOMContentLoaded", () => {
  const options = Joomla.getOptions('jglightbox', {
    wrapper: 'lightbox_wrapper',
    exclude: '.slides img,.delete,.edit-icon img,.no-lightbox'
  });

  // Klassen in Arrays umwandeln
  const wrappers = options.wrapper.split(',').map(cls => cls.trim());
  const exclude = options.exclude;

  wrappers.forEach(wrapper => {
    const selector = `${wrapper} img:not(${exclude})`;

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
        .filter(attr => attr.name !== 'data-gallery') // behandeln wir separat
        .map(attr => ` ${attr.name}="${attr.value}"`)
        .join('');

      // data-gallery pr�fen (img zuerst, dann parent)
      let glightbox_data = img.getAttribute('data-gallery');
      if (!glightbox_data) {
        glightbox_data = wrapperDiv?.getAttribute('data-gallery');
      }

      const dataGlightboxAttr = glightbox_data && glightbox_data !== 'false'
        ? ` data-gallery="${glightbox_data}"`
        : ' data-gallery="undefined"';

      // Optional: data-lightbox �bernehmen oder Default setzen
      const dataLightbox = img.getAttribute('data-lightbox') || 'default';

      // Neues Link-Element mit dem Bild erzeugen
      const wrapper = document.createElement('a');
      wrapper.href = src;
      wrapper.setAttribute('data-gallery', glightbox_data);
      wrapper.classList.add('glightbox');
      wrapper.innerHTML = `<img${attributeString}${dataGlightboxAttr}>`;

      img.replaceWith(wrapper);
    }
  });
});

  // Nur 1x nach der Schleife initialisieren!
  setTimeout(() => {
    GLightbox();
  }, 200);

