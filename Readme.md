# JG Lightbox JavaScript Integration

Dieses Skript erweitert Bilder in definierten Containern automatisch mit **GLightbox-Funktionalität**. Es wird verwendet im Rahmen eines Joomla-Plugins, das Bilder per CSS-Selektor erkennt und umwandelt.

## 🔧 Funktionsweise

Nach dem Laden des DOM (`DOMContentLoaded`) liest das Skript Konfigurationsoptionen aus den Joomla-Plugin-Einstellungen:

```js
Joomla.getOptions('jglightbox', {
  wrapper: 'lightbox_wrapper',
  exclude: '.slides img,.delete,.edit-icon img,.no-lightbox'
});
```

- **wrapper**: Container, innerhalb derer Bilder gesucht werden (z. B. `.lightbox_wrapper`)
- **exclude**: Selektoren für Bilder, die **nicht** umgewandelt werden sollen

## 🖼️ Bildverarbeitung

Das Skript sucht passende Bilder und ersetzt sie durch einen `<a>`-Tag mit `glightbox`-Klasse:

- Nur Bilder **ohne bestehenden Link (`<a>`)** werden ersetzt.
- Es werden nur bestimmte Attribute vom Originalbild übernommen (z. B. `src`, `alt`, `data-*`, `aria-*`).
- Optional wird `data-gallery` aus dem Bild oder dem Elternelement übernommen.

### Beispiel: Ergebnisstruktur

```html
<a href="bild.jpg" data-gallery="gruppe1" class="glightbox">
  <img src="bild.jpg" alt="..." data-gallery="gruppe1">
</a>
```

## 🚫 Ausschluss

Alle Bilder, die den Selektor in `exclude` erfüllen, werden ignoriert.

## 🪄 Initialisierung

Nach dem Ersetzen aller Bilder wird einmalig `GLightbox()` aufgerufen, um die Lightbox zu starten.

```js
setTimeout(() => {
  GLightbox();
}, 200);
```

## 💡 Hinweise

- Das Skript ist für die Integration mit dem Joomla-Plugin `plg_content_jglightbox` gedacht.
- Es benötigt die Bibliothek **GLightbox**, die separat eingebunden sein muss (`glightbox.min.js` + CSS).

## 📁 Konfiguration im Plugin

Die Konfigurationsparameter können im Joomla-Backend gesetzt werden:

| Parameter           | Beschreibung                                 |
|--------------------|----------------------------------------------|
| `wrapper_classes`   | Komma-getrennte CSS-Selektoren für Container |
| `exclude_selectors` | Selektoren für Bilder, die übersprungen werden |

## ✅ Voraussetzungen

- Joomla 4+
- GLightbox JavaScript-Bibliothek (https://biati-digital.github.io/glightbox/)

## 🔒 Lizenz

MIT License – basiert auf [GLightbox von Biati Digital](https://github.com/biati-digital/glightbox)
