<p align="center">
  <img src="https://github.com/Jumbo125/Jglightbox_plugin_joomla/blob/main/icon.png" alt="Jglightbox" width="300">
</p>

# 🖼️ JG Lightbox JavaScript Integration

**DE | EN below**

## 📌 Beschreibung (DE)

Dieses Plugin integriert die beliebte [Glightbox](https://biati-digital.github.io/glightbox/) automatisch in Joomla-Artikel.  
Alle Bilder innerhalb eines definierten Wrappers werden automatisch als Lightbox dargestellt – ganz ohne manuelles JavaScript.

### 🔧 Funktionen

- Automatische Erkennung von Bildern im Wrapper
- Unterstützung mehrerer Galerien pro Seite
- Gruppierung von Galerien mit `data-gallery`
- Ausschluss einzelner Bilder über CSS-Klassen
- Konfiguration von Wrapper- und Ausschlussklassen im Backend

### 🛠️ Verwendung

#### Wrapper definieren

```html
<div class="lightbox-wrapper">
  <a href="images/img1.jpg"><img src="images/thumb1.jpg" /></a>
</div>
```

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
- Es werden nur bestimmte Attribute vom Originalbild übernommen (z. B. `src`, `alt`, `data-*`, `aria-*`)
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

| Parameter           | Beschreibung                                 |
|--------------------|----------------------------------------------|
| `wrapper_classes`   | Komma-getrennte CSS-Selektoren für Container |
| `exclude_selectors` | Selektoren für Bilder, die übersprungen werden |

## ✅ Voraussetzungen

- Joomla 4+
- GLightbox JavaScript-Bibliothek (https://biati-digital.github.io/glightbox/)

## Support

Donate with PayPal ☕ 
If this project helps you, feel free to buy me a coffee:

[![Donate with PayPal ☕](https://img.shields.io/badge/Donate-PayPal-00457C?logo=paypal&logoColor=white)](https://www.paypal.me/andreasrottmann92)

## 🔒 Lizenz

Dieses Plugin steht unter der **GPL-Lizenz**.  
Es nutzt die Bibliothek [Glightbox](https://github.com/biati-digital/glightbox), die unter der **MIT License** lizenziert ist.

---

## 📌 Description (EN)

This plugin seamlessly integrates the popular [Glightbox](https://biati-digital.github.io/glightbox/) into Joomla articles.  
All images within a defined wrapper are automatically displayed as a lightbox – no manual JavaScript required.

### 🔧 Features

- Automatic detection of images inside a wrapper
- Support for multiple galleries per page
- Grouping of galleries via `data-gallery`
- Exclusion of specific images via CSS classes
- Configurable wrapper and exclusion classes via backend

### 🛠️ Usage

#### Define a wrapper

```html
<div class="lightbox-wrapper">
  <a href="images/img1.jpg"><img src="images/thumb1.jpg" /></a>
</div>
```

## 🔧 How it works

Once the DOM is fully loaded (`DOMContentLoaded`), the script reads configuration options from the Joomla plugin settings:

```js
Joomla.getOptions('jglightbox', {
  wrapper: 'lightbox_wrapper',
  exclude: '.slides img,.delete,.edit-icon img,.no-lightbox'
});
```

- **wrapper**: Container in which images will be searched (e.g. `.lightbox_wrapper`)
- **exclude**: Selectors for images that **should not** be converted

## 🖼️ Image Processing

The script scans for matching images and wraps them in an `<a>` tag with the `glightbox` class:

- Only images **without an existing `<a>` tag** will be wrapped.
- Certain attributes from the original `<img>` are preserved (e.g. `src`, `alt`, `data-*`, `aria-*`)
- The `data-gallery` attribute is optionally taken from the image or its parent container.

### Example output structure

```html
<a href="image.jpg" data-gallery="group1" class="glightbox">
  <img src="image.jpg" alt="..." data-gallery="group1">
</a>
```

## 🚫 Exclusion

All images that match the `exclude` selector(s) will be ignored and not included in the lightbox.

## 🪄 Initialization

After all matching images are processed, `GLightbox()` is called once to activate the lightbox:

```js
setTimeout(() => {
  GLightbox();
}, 200);
```

## 💡 Notes

- This script is designed for use with the Joomla plugin `plg_content_jglightbox`.
- It requires the **Glightbox** library to be loaded separately (`glightbox.min.js` and CSS).

## 📁 Plugin Configuration

| Parameter           | Description                                       |
|--------------------|---------------------------------------------------|
| `wrapper_classes`  | Comma-separated CSS selectors for container(s)    |
| `exclude_selectors`| Selectors for images that should be excluded      |

## ✅ Requirements

- Joomla 4+
- GLightbox JavaScript library (https://biati-digital.github.io/glightbox/)

## Support

Donate with PayPal ☕
Wenn dir das Projekt hilft und du mir einen Kaffee ausgeben willst:

[![Donate with PayPal ☕](https://img.shields.io/badge/Donate-PayPal-00457C?logo=paypal&logoColor=white)](https://www.paypal.me/andreasrottmann92)

## 🔒 License

This plugin is licensed under the **GPL License**.  
It uses the [Glightbox](https://github.com/biati-digital/glightbox) library, which is licensed under the **MIT License**.
