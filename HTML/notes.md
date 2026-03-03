# HTML Notes — Complete Reference
### AI-Powered Web Development | Day 01

---

## Table of Contents

1. [What is HTML?](#1-what-is-html)
2. [Document Structure](#2-document-structure)
3. [Head Section & Metadata](#3-head-section--metadata)
4. [Headings](#4-headings)
5. [Text & Formatting](#5-text--formatting)
6. [Links & Anchors](#6-links--anchors)
7. [Images](#7-images)
8. [Lists](#8-lists)
9. [Tables](#9-tables)
10. [Forms & Inputs](#10-forms--inputs)
11. [Semantic Elements](#11-semantic-elements)
12. [Multimedia (Audio & Video)](#12-multimedia-audio--video)
13. [Advanced HTML](#13-advanced-html)
14. [Accessibility (ARIA)](#14-accessibility-aria)
15. [HTML Best Practices](#15-html-best-practices)
16. [Common Mistakes to Avoid](#16-common-mistakes-to-avoid)
17. [Quick Cheatsheet](#17-quick-cheatsheet)

---

## 1. What is HTML?

- **HTML** = **H**yper**T**ext **M**arkup **L**anguage
- It is the **standard language** for creating web pages
- HTML **describes the structure** of a web page using elements/tags
- HTML is **NOT** a programming language — it is a markup language
- Current version: **HTML5** (living standard maintained by WHATWG)
- File extension: `.html` or `.htm`

### How the Web Works (Simplified)
```
Browser → Request → Web Server → Response (HTML file) → Browser renders it
```

### HTML vs CSS vs JavaScript
| Language | Role | Example |
|----------|------|---------|
| HTML | Structure / Skeleton | `<h1>`, `<p>`, `<form>` |
| CSS | Style / Appearance | `color`, `font-size`, `layout` |
| JavaScript | Behaviour / Interactivity | button clicks, animations, API calls |

---

## 2. Document Structure

Every HTML file must follow this basic structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Title</title>
  </head>
  <body>
    <!-- Visible content goes here -->
  </body>
</html>
```

### Key Parts Explained

| Part | Purpose |
|------|---------|
| `<!DOCTYPE html>` | Declares this as an HTML5 document. Must be the very first line. |
| `<html lang="en">` | Root element. `lang` attribute helps screen readers and SEO. |
| `<head>` | Contains metadata — not visible on the page. |
| `<body>` | Contains all visible content. |

### HTML Element Anatomy

```
<tagname attribute="value"> Content </tagname>
   ↑         ↑        ↑         ↑          ↑
Opening     Attr    Value    Content    Closing
  tag       name            inside       tag
```

**Self-closing (void) elements** have no content and no closing tag:
```html
<img src="photo.jpg" alt="A photo" />
<br />
<input type="text" />
<hr />
```

### Nesting Rules
- Elements must be **properly nested** — close inner tags before outer tags
- ✅ Correct: `<p><strong>Bold text</strong></p>`
- ❌ Wrong:   `<p><strong>Bold text</p></strong>`

---

## 3. Head Section & Metadata

The `<head>` section contains information **about** the page, not content **on** the page.

```html
<head>
  <!-- Character encoding — always first, always UTF-8 -->
  <meta charset="UTF-8" />

  <!-- Responsive design on mobile devices -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Page description for search engines (150–160 chars ideal) -->
  <meta name="description" content="Short description of your page." />

  <!-- Keywords (less important now, but still used) -->
  <meta name="keywords" content="html, css, javascript" />

  <!-- Author -->
  <meta name="author" content="Your Name" />

  <!-- Tell search engines to index this page -->
  <meta name="robots" content="index, follow" />

  <!-- Page title — shown in browser tab and search results -->
  <title>My Page Title</title>

  <!-- Link to external CSS file -->
  <link rel="stylesheet" href="styles.css" />

  <!-- Favicon (icon in browser tab) -->
  <link rel="icon" type="image/png" href="favicon.png" />

  <!-- Canonical URL — prevents duplicate content issues -->
  <link rel="canonical" href="https://example.com/page" />

  <!-- Open Graph — controls how page appears on social media -->
  <meta property="og:title" content="Page Title" />
  <meta property="og:description" content="Page description." />
  <meta property="og:image" content="https://example.com/image.jpg" />
  <meta property="og:url" content="https://example.com/page" />
  <meta property="og:type" content="website" />
</head>
```

> 💡 **Tip:** `<meta charset="UTF-8">` must come before `<title>` to ensure the title renders correctly.

---

## 4. Headings

- **6 levels**: `<h1>` through `<h6>`
- `<h1>` = most important, `<h6>` = least important
- Only **one `<h1>`** per page (for SEO and accessibility)
- Don't skip heading levels (e.g., don't jump from h1 to h4)

```html
<h1>Main Heading (Page Title)</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>
<h4>Sub-subsection</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>
```

---

## 5. Text & Formatting

### Block-Level Text Elements
```html
<p>This is a paragraph.</p>

<blockquote cite="https://source.com">
  A quoted passage from an external source.
</blockquote>

<pre>
  Preformatted text — preserves
  spaces and line breaks exactly.
</pre>

<address>
  123 Main Street, Web City<br />
  contact@example.com
</address>
```

### Inline Text Formatting

| Tag | Output | Meaning |
|-----|--------|---------|
| `<strong>text</strong>` | **text** | Important (semantic) |
| `<b>text</b>` | **text** | Bold (presentational) |
| `<em>text</em>` | *text* | Emphasized (semantic) |
| `<i>text</i>` | *text* | Italic (presentational) |
| `<u>text</u>` | <u>text</u> | Underline |
| `<s>text</s>` | ~~text~~ | Strikethrough (no longer accurate) |
| `<del>text</del>` | ~~text~~ | Deleted (semantic) |
| `<ins>text</ins>` | text | Inserted/added (semantic) |
| `<mark>text</mark>` | ==text== | Highlighted |
| `<small>text</small>` | small | Fine print |
| `<sub>text</sub>` | H₂O | Subscript |
| `<sup>text</sup>` | E=mc² | Superscript |
| `<code>text</code>` | `text` | Inline code |
| `<kbd>Ctrl</kbd>` | Ctrl | Keyboard input |
| `<samp>output</samp>` | output | Program output |
| `<var>x</var>` | *x* | Variable |
| `<abbr title="...">HTML</abbr>` | HTML | Abbreviation with tooltip |
| `<cite>Book Title</cite>` | *Book Title* | Work reference |
| `<q>quote</q>` | "quote" | Inline quotation |
| `<dfn>term</dfn>` | *term* | Definition |
| `<time datetime="2026-03-03">March 3</time>` | March 3 | Machine-readable time |
| `<span>text</span>` | text | Generic inline (no meaning) |
| `<br />` | (line break) | Line break |

### Line Break vs Paragraph
```html
<!-- Use <br> for line breaks within content (address, poem) -->
<address>
  123 Main St<br />
  London, UK
</address>

<!-- Use <p> for separate paragraphs (adds spacing) -->
<p>First paragraph.</p>
<p>Second paragraph.</p>
```

---

## 6. Links & Anchors

The `<a>` (anchor) element creates hyperlinks.

```html
<!-- External link — open in new tab -->
<a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a>

<!-- Internal link — same site page -->
<a href="/about.html">About Us</a>

<!-- Anchor link — jump to section on same page -->
<a href="#section-id">Jump to Section</a>

<!-- Email link -->
<a href="mailto:hello@example.com">Send Email</a>

<!-- Phone link -->
<a href="tel:+1234567890">Call Now</a>

<!-- Download link -->
<a href="file.pdf" download="custom-filename.pdf">Download PDF</a>

<!-- Link with tooltip -->
<a href="https://example.com" title="This tooltip shows on hover">Hover me</a>
```

### Important Attributes

| Attribute | Values | Purpose |
|-----------|--------|---------|
| `href` | URL, `#id`, `mailto:`, `tel:` | Destination |
| `target` | `_blank`, `_self`, `_parent`, `_top` | Where to open |
| `rel` | `noopener noreferrer`, `nofollow` | Link relationship |
| `download` | filename | Force download |
| `title` | text | Tooltip |

> ⚠️ **Security Note:** Always add `rel="noopener noreferrer"` when using `target="_blank"` to prevent tab-napping attacks.

---

## 7. Images

```html
<!-- Basic image — alt is MANDATORY -->
<img src="photo.jpg" alt="Description of image" />

<!-- With dimensions (prevents layout shift) -->
<img src="photo.jpg" alt="Photo" width="800" height="450" />

<!-- Lazy loading (performance) -->
<img src="photo.jpg" alt="Photo" loading="lazy" />

<!-- Eager loading — for above-the-fold images -->
<img src="hero.jpg" alt="Hero" loading="eager" />

<!-- Semantic image with caption -->
<figure>
  <img src="chart.jpg" alt="Sales chart for 2026" />
  <figcaption>Fig. 1 — Sales growth in Q1 2026.</figcaption>
</figure>

<!-- Responsive images with picture element -->
<picture>
  <source media="(max-width: 480px)" srcset="small.jpg" />
  <source media="(max-width: 1024px)" srcset="medium.jpg" />
  <img src="large.jpg" alt="Responsive image" loading="lazy" />
</picture>

<!-- Image with srcset (resolution switching) -->
<img
  src="image-1x.jpg"
  srcset="image-1x.jpg 1x, image-2x.jpg 2x, image-3x.jpg 3x"
  alt="High-DPI responsive image"
/>
```

### Alt Text Rules
| Situation | Alt text |
|-----------|----------|
| Meaningful image | Describe the content: `alt="A graph showing 30% growth"` |
| Decorative image | Empty string: `alt=""` |
| Icon with text label | Empty: `alt=""` |
| Logo | Company name: `alt="Google"` |

---

## 8. Lists

### Unordered List — bullets
```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

### Ordered List — numbered
```html
<ol>
  <li>Plan</li>
  <li>Design</li>
  <li>Build</li>
  <li>Deploy</li>
</ol>

<!-- Custom start number -->
<ol start="5">
  <li>Item five</li>
  <li>Item six</li>
</ol>

<!-- Reversed order -->
<ol reversed>
  <li>Third</li>
  <li>Second</li>
  <li>First</li>
</ol>

<!-- Type: numbers (default), A/a (letters), I/i (Roman) -->
<ol type="A"><li>Alpha</li><li>Beta</li></ol>
<ol type="I"><li>Primary</li><li>Secondary</li></ol>
```

### Description List — terms and definitions
```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language — structures web content.</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets — styles web content.</dd>

  <dt>JavaScript</dt>
  <dd>Scripting language for interactivity.</dd>
</dl>
```

### Nested Lists
```html
<ul>
  <li>Front-End
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Back-End
    <ul>
      <li>Node.js</li>
      <li>Python</li>
    </ul>
  </li>
</ul>
```

---

## 9. Tables

> ✅ Use tables **only for tabular data** — never for page layout.

```html
<table>
  <!-- Optional: caption (title of table) -->
  <caption>Student Grades</caption>

  <!-- Column grouping for styling -->
  <colgroup>
    <col style="background: #f0f0f0;" />
    <col />
    <col />
  </colgroup>

  <!-- Table header -->
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Subject</th>
      <th scope="col">Grade</th>
    </tr>
  </thead>

  <!-- Table body -->
  <tbody>
    <tr>
      <td>Alice</td>
      <td>HTML</td>
      <td>A+</td>
    </tr>
    <tr>
      <td rowspan="2">Bob</td>  <!-- spans 2 rows -->
      <td>CSS</td>
      <td>A</td>
    </tr>
    <tr>
      <td>JavaScript</td>
      <td>B+</td>
    </tr>
    <tr>
      <td colspan="2">Class Average</td>  <!-- spans 2 columns -->
      <td>A-</td>
    </tr>
  </tbody>

  <!-- Table footer (summaries, totals) -->
  <tfoot>
    <tr>
      <td colspan="3">Semester: Spring 2026</td>
    </tr>
  </tfoot>
</table>
```

### Table Elements Reference
| Element | Description |
|---------|-------------|
| `<table>` | Container for the whole table |
| `<caption>` | Title/description of the table |
| `<colgroup>` / `<col>` | Group/style columns |
| `<thead>` | Header row group |
| `<tbody>` | Body row group |
| `<tfoot>` | Footer row group |
| `<tr>` | Table row |
| `<th scope="col/row">` | Header cell |
| `<td>` | Data cell |
| `colspan="n"` | Span n columns |
| `rowspan="n"` | Span n rows |

---

## 10. Forms & Inputs

Forms collect user input and send it to a server (or handle with JavaScript).

```html
<form action="/submit" method="POST" enctype="multipart/form-data">
  ...inputs...
  <button type="submit">Submit</button>
</form>
```

### Form Attributes
| Attribute | Values | Purpose |
|-----------|--------|---------|
| `action` | URL | Where to send data |
| `method` | `GET`, `POST` | How to send data |
| `enctype` | `multipart/form-data` | Required for file uploads |
| `novalidate` | (boolean) | Disable browser validation |
| `autocomplete` | `on`, `off` | Browser autocomplete |

### All Input Types

```html
<!-- Text inputs -->
<input type="text"     placeholder="Name" />
<input type="email"    placeholder="Email" />
<input type="password" placeholder="Password" minlength="8" />
<input type="tel"      placeholder="Phone" />
<input type="url"      placeholder="https://..." />
<input type="search"   placeholder="Search..." />

<!-- Number & Range -->
<input type="number"   min="0" max="100" step="1" />
<input type="range"    min="0" max="100" value="50" />

<!-- Date & Time -->
<input type="date" />
<input type="time" />
<input type="datetime-local" />
<input type="month" />
<input type="week" />

<!-- Choices -->
<input type="checkbox" name="agree" checked />
<input type="radio"    name="gender" value="male" />

<!-- File -->
<input type="file"  accept="image/*" />
<input type="file"  multiple accept=".pdf,.doc" />

<!-- Special -->
<input type="color"  value="#0ea5e9" />
<input type="hidden" name="token" value="abc123" />

<!-- Buttons -->
<input type="submit" value="Submit" />
<input type="reset"  value="Reset" />
<input type="image"  src="btn.png" alt="Submit" />
<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button" onclick="doSomething()">Click</button>

<!-- Multi-line text -->
<textarea rows="4" cols="50" placeholder="Your message..."></textarea>

<!-- Dropdown -->
<select name="country">
  <optgroup label="Popular">
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
  </optgroup>
  <option value="bd">Bangladesh</option>
</select>

<!-- Multi-select -->
<select name="skills" multiple size="4">
  <option>HTML</option>
  <option>CSS</option>
  <option>JavaScript</option>
</select>

<!-- Datalist (type-ahead) -->
<input list="browsers" placeholder="Your browser" />
<datalist id="browsers">
  <option value="Chrome" />
  <option value="Firefox" />
  <option value="Safari" />
  <option value="Edge" />
</datalist>
```

### Form Organization

```html
<!-- Label — always associate with input for accessibility -->
<label for="email">Email Address</label>
<input type="email" id="email" name="email" required />

<!-- Fieldset + Legend — groups related fields -->
<fieldset>
  <legend>Personal Information</legend>
  <label for="name">Name</label>
  <input type="text" id="name" name="name" />
</fieldset>
```

### Input Validation Attributes
| Attribute | Purpose |
|-----------|---------|
| `required` | Field must be filled |
| `minlength="n"` | Minimum character length |
| `maxlength="n"` | Maximum character length |
| `min="n"` | Minimum numeric value |
| `max="n"` | Maximum numeric value |
| `step="n"` | Increment step for numbers |
| `pattern="regex"` | Must match regex pattern |
| `autocomplete` | Browser autofill hint |
| `readonly` | Visible but not editable |
| `disabled` | Not editable, not submitted |
| `placeholder` | Grey hint text |
| `autofocus` | Auto-focuses on page load |

### Progress & Meter
```html
<!-- Progress bar — task completion -->
<progress value="70" max="100">70%</progress>

<!-- Meter — measurement within a range -->
<meter value="0.7" min="0" max="1" low="0.3" high="0.6" optimum="0.1">70%</meter>

<!-- Output — result of a calculation -->
<output name="result" for="a b">30</output>
```

---

## 11. Semantic Elements

Semantic HTML gives meaning to your markup. It tells the browser (and developers) **what** the content is, not just how it looks.

### Page Structure
```html
<body>
  <header>
    <!-- Site header: logo, site name, main nav -->
    <nav aria-label="Main navigation">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <!-- Primary content — ONE per page only -->
    <section>
      <!-- Thematic group of content with a heading -->
      <h2>Latest Articles</h2>
      <article>
        <!-- Self-contained content (blog post, news item) -->
        <header>
          <h3>Article Title</h3>
          <time datetime="2026-03-03">March 3, 2026</time>
        </header>
        <p>Article content...</p>
        <footer>
          <p>Tags: HTML, Web Dev</p>
        </footer>
      </article>
    </section>

    <aside>
      <!-- Related/supplementary content (sidebar) -->
      <h2>Related Links</h2>
    </aside>
  </main>

  <footer>
    <!-- Page footer: copyright, links, contact -->
    <p>&copy; 2026 My Website</p>
  </footer>
</body>
```

### Semantic Elements Reference
| Element | Use Case |
|---------|----------|
| `<header>` | Site/section header (logo, nav) |
| `<nav>` | Navigation links |
| `<main>` | Main page content (one per page) |
| `<section>` | Thematic section with heading |
| `<article>` | Self-contained content (post, news) |
| `<aside>` | Related/supplementary content |
| `<footer>` | Footer for page or section |
| `<figure>` | Media with caption |
| `<figcaption>` | Caption for figure |
| `<details>` | Collapsible section |
| `<summary>` | Visible heading for details |
| `<dialog>` | Modal/dialog box |
| `<mark>` | Highlighted relevant text |
| `<time>` | Date or time |
| `<address>` | Contact information |

### Non-Semantic vs Semantic (Comparison)
```html
<!-- ❌ Non-semantic — no meaning -->
<div class="header">...</div>
<div class="nav">...</div>
<div class="main-content">...</div>
<div class="sidebar">...</div>
<div class="footer">...</div>

<!-- ✅ Semantic — meaningful to browsers, SEO, accessibility -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<aside>...</aside>
<footer>...</footer>
```

### Details & Summary (Native Accordion)
```html
<details>
  <summary>Click to expand</summary>
  <p>This content is hidden until clicked — no JavaScript!</p>
</details>
```

### Dialog (Native Modal)
```html
<dialog id="myModal">
  <h2>Modal Title</h2>
  <p>Modal content here.</p>
  <form method="dialog">
    <button>Close</button>
  </form>
</dialog>

<button onclick="document.getElementById('myModal').showModal()">Open Modal</button>
```

---

## 12. Multimedia (Audio & Video)

### Video
```html
<video
  src="video.mp4"
  controls          <!-- show play/pause controls -->
  autoplay          <!-- play automatically -->
  muted             <!-- mute by default (required for autoplay) -->
  loop              <!-- repeat when finished -->
  poster="thumb.jpg" <!-- thumbnail image before play -->
  preload="metadata" <!-- load just metadata (duration, size) -->
  width="800"
  height="450"
>
  <!-- Multiple formats for browser compatibility -->
  <source src="video.mp4"  type="video/mp4" />
  <source src="video.webm" type="video/webm" />

  <!-- Subtitles / Captions -->
  <track kind="subtitles" src="subs-en.vtt" srclang="en" label="English" default />
  <track kind="captions"  src="caps-en.vtt" srclang="en" label="English Captions" />

  <p>Your browser doesn't support video. <a href="video.mp4">Download</a>.</p>
</video>
```

### Audio
```html
<audio controls preload="metadata">
  <source src="audio.mp3" type="audio/mpeg" />
  <source src="audio.ogg" type="audio/ogg" />
  <source src="audio.wav" type="audio/wav" />
  <p>Browser doesn't support audio. <a href="audio.mp3">Download</a>.</p>
</audio>
```

### iFrame
```html
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube video"
  width="560"
  height="315"
  allowfullscreen
  loading="lazy"
  sandbox="allow-scripts allow-same-origin allow-presentation"
></iframe>
```

### Track kinds
| kind | Purpose |
|------|---------|
| `subtitles` | Translated dialogue (assumes user can see video) |
| `captions` | Dialogue + sound effects (for deaf users) |
| `descriptions` | Audio description of video content |
| `chapters` | Chapter navigation |
| `metadata` | Not shown to user — used by scripts |

---

## 13. Advanced HTML

### Data Attributes (`data-*`)
Store custom data on elements — accessible via JavaScript:
```html
<div
  id="card"
  data-user-id="42"
  data-role="admin"
  data-score="98.5"
>
  User Card
</div>

<script>
  const card = document.getElementById('card');
  console.log(card.dataset.userId);  // "42"
  console.log(card.dataset.role);    // "admin"
  console.log(card.dataset.score);   // "98.5"
</script>
```

### Template Element
HTML not rendered until cloned with JavaScript — perfect for reusable components:
```html
<template id="card-tpl">
  <div class="card">
    <h3 class="title"></h3>
    <p class="body"></p>
  </div>
</template>

<script>
  const tmpl  = document.getElementById('card-tpl');
  const clone = tmpl.content.cloneNode(true);
  clone.querySelector('.title').textContent = 'Hello from Template!';
  document.body.appendChild(clone);
</script>
```

### Canvas (2D Drawing)
```html
<canvas id="myCanvas" width="600" height="300"></canvas>

<script>
  const canvas = document.getElementById('myCanvas');
  const ctx    = canvas.getContext('2d');

  // Rectangle
  ctx.fillStyle = '#0ea5e9';
  ctx.fillRect(10, 10, 150, 80);

  // Circle
  ctx.beginPath();
  ctx.arc(250, 50, 40, 0, Math.PI * 2);
  ctx.fillStyle = '#f472b6';
  ctx.fill();

  // Text
  ctx.fillStyle = '#ffffff';
  ctx.font = '20px Arial';
  ctx.fillText('Canvas!', 320, 60);

  // Line
  ctx.beginPath();
  ctx.moveTo(10, 150);
  ctx.lineTo(590, 150);
  ctx.strokeStyle = '#22c55e';
  ctx.lineWidth = 3;
  ctx.stroke();
</script>
```

### Inline SVG
```html
<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="80" fill="#0ea5e9" />
  <rect x="60" y="60" width="80" height="80" fill="#fff" rx="8" />
  <text x="100" y="108" text-anchor="middle" font-size="18" fill="#0ea5e9">SVG</text>
</svg>
```

### HTML Entities
| Character | Entity code | Name |
|-----------|-------------|------|
| `&` | `&amp;` | Ampersand |
| `<` | `&lt;` | Less-than |
| `>` | `&gt;` | Greater-than |
| `"` | `&quot;` | Double quote |
| `'` | `&apos;` | Apostrophe |
| ` ` | `&nbsp;` | Non-breaking space |
| `©` | `&copy;` | Copyright |
| `®` | `&reg;` | Registered trademark |
| `™` | `&trade;` | Trademark |
| `—` | `&mdash;` | Em dash |
| `–` | `&ndash;` | En dash |
| `€` | `&euro;` | Euro |
| `£` | `&pound;` | Pound |
| `♥` | `&hearts;` | Heart |

### Script Loading Strategies
```html
<!-- ❌ Blocks HTML parsing — avoid in <head> without defer/async -->
<script src="script.js"></script>

<!-- ✅ defer — downloads in parallel, runs after DOM is ready -->
<script src="script.js" defer></script>

<!-- ✅ async — downloads in parallel, runs immediately when ready (no order guarantee) -->
<script src="analytics.js" async></script>

<!-- ✅ type="module" — ES module, deferred by default -->
<script src="app.js" type="module"></script>

<!-- Inline script -->
<script>
  console.log('Runs immediately when parser reaches this line');
</script>
```

### Contenteditable
```html
<!-- Makes any element editable like a text input -->
<div contenteditable="true" spellcheck="true">
  Edit this text directly in the browser!
</div>
```

### Global Attributes (Work on Any Element)
| Attribute | Description |
|-----------|-------------|
| `id` | Unique identifier |
| `class` | CSS class names |
| `style` | Inline CSS |
| `title` | Tooltip |
| `lang` | Language |
| `dir` | Text direction (`ltr`, `rtl`) |
| `hidden` | Hides element |
| `tabindex` | Keyboard focus order |
| `contenteditable` | Makes editable |
| `draggable` | Enable drag |
| `spellcheck` | Browser spellcheck |
| `translate` | Browser translation |
| `data-*` | Custom data |
| `aria-*` | Accessibility |

---

## 14. Accessibility (ARIA)

**ARIA** = Accessible Rich Internet Applications

Helps screen readers and assistive technologies understand your content.

### Core Principle
> Use native semantic HTML first. Only add ARIA when HTML alone is not enough.

```html
<!-- role — describes what the element IS -->
<div role="dialog" aria-modal="true" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Confirm Purchase</h2>
</div>

<!-- aria-label — names an element without visible text -->
<button aria-label="Close dialog">×</button>

<!-- aria-labelledby — points to visible element that names this one -->
<section aria-labelledby="section-heading">
  <h2 id="section-heading">Our Services</h2>
</section>

<!-- aria-describedby — provides additional description -->
<input type="password" aria-describedby="pwd-hint" />
<p id="pwd-hint">Must be 8+ characters with a number and symbol.</p>

<!-- aria-hidden — hide decorative elements from screen readers -->
<span aria-hidden="true">🎉</span>

<!-- aria-live — announce dynamic content changes -->
<div aria-live="polite" id="status"></div>
<!-- When JS puts text in #status, screen reader announces it -->

<!-- aria-expanded — indicates open/closed state -->
<button aria-expanded="false" aria-controls="menu">Menu</button>
<ul id="menu" hidden>...</ul>

<!-- aria-required — indicates required field -->
<input type="email" aria-required="true" />

<!-- aria-invalid — indicates an error state -->
<input type="email" aria-invalid="true" aria-describedby="email-error" />
<p id="email-error" role="alert">Please enter a valid email.</p>

<!-- tabindex -->
<div tabindex="0">Focusable with keyboard Tab key</div>
<div tabindex="-1">Focusable via JS only, not Tab</div>
```

### Common ARIA Roles
| Role | Use case |
|------|----------|
| `banner` | Site header |
| `navigation` | Nav region |
| `main` | Main content |
| `complementary` | Aside/sidebar |
| `contentinfo` | Footer |
| `search` | Search form region |
| `form` | Form region |
| `dialog` | Modal popup |
| `alert` | Important message |
| `status` | Status updates |
| `button` | Clickable control |
| `checkbox` | Checkbox control |
| `tab` | Tab in tablist |
| `tabpanel` | Tab content panel |

---

## 15. HTML Best Practices

### Always Do ✅
- Use `<!DOCTYPE html>` at the very start
- Set `lang` attribute on `<html>`: `<html lang="en">`
- Include `<meta charset="UTF-8">` as first `<meta>`
- Include viewport meta tag for mobile
- Always write `alt` text for images
- Use semantic elements over generic `<div>`/`<span>`
- Associate `<label>` with every form input using `for`/`id`
- Use one `<h1>` per page
- Don't skip heading levels (h1 → h2 → h3)
- Add `loading="lazy"` to off-screen images
- Add `rel="noopener noreferrer"` to `target="_blank"` links
- Validate HTML at [validator.w3.org](https://validator.w3.org/)
- Use `<button type="button">` for JS actions (not submit)
- Quote all attribute values: `class="nav"` not `class=nav`
- Use lowercase tag names and attributes
- Close all non-void elements properly

### Never Do ❌
- Never use tables for layout — use CSS flexbox/grid
- Never use inline styles for everything — use CSS classes
- Never skip `alt` attributes on images
- Never use `<br>` for spacing — use CSS margin/padding
- Never use deprecated elements: `<center>`, `<font>`, `<marquee>`
- Never use `target="_blank"` without `rel="noopener noreferrer"`
- Never use only color to convey meaning (accessibility)
- Never use `<div>` or `<span>` when a semantic element exists

---

## 16. Common Mistakes to Avoid

| Mistake | Problem | Fix |
|---------|---------|-----|
| Missing `alt` on `<img>` | Accessibility failure | Always add `alt="description"` |
| Missing `<label>` on input | Accessibility failure | Use `<label for="id">` |
| Multiple `<h1>` tags | SEO and a11y issue | One `<h1>` per page |
| Skipping heading levels | Screen reader confusion | h1 → h2 → h3 (no skipping) |
| `<br><br>` for spacing | Presentational abuse | Use CSS `margin` |
| Tables for layout | Semantic mess | Use CSS flexbox/grid |
| `target="_blank"` without `rel` | Security vulnerability | Add `rel="noopener noreferrer"` |
| Inline `onclick=` on everything | Hard to maintain | Separate JS files |
| Missing `type` on `<button>` | Accidentally submits forms | Always use `type="button"`, `"submit"`, or `"reset"` |
| Missing `lang` on `<html>` | Screen reader issues | `<html lang="en">` |
| Unclosed tags | Broken layouts | Always close non-void tags |
| Wrong nesting order | Invalid HTML | `<p><strong>OK</strong></p>` |

---

## 17. Quick Cheatsheet

### Block-Level Elements
Start on a new line, take full width:
```
div  p  h1–h6  ul  ol  li  dl  dt  dd
table  form  fieldset  blockquote  pre  hr
header  main  footer  section  article  aside  nav
figure  details  dialog  address
```

### Inline Elements
Flow within text, take only as much width as content:
```
span  a  strong  em  b  i  u  s  del  ins
mark  code  kbd  abbr  cite  q  time
sub  sup  small  img  input  button  label
select  textarea  bdi  bdo  wbr  br
```

### Void Elements (Self-Closing — no closing tag)
```
area  base  br  col  embed  hr  img
input  link  meta  param  source  track  wbr
```

### Deprecated — Never Use
```
<center>   →  CSS text-align: center
<font>     →  CSS font-family, color
<marquee>  →  CSS animation
<blink>    →  CSS animation
<frame>    →  <iframe>
<frameset> →  <iframe>
<big>      →  CSS font-size
<strike>   →  <del> or <s>
```

### HTML5 Input Types Quick List
```
text  email  password  tel  url  search
number  range  date  time  datetime-local  month  week
checkbox  radio  file  color  hidden
submit  reset  button  image
```

### Useful Meta Tags Summary
```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Page description 150–160 chars" />
<meta name="author" content="Name" />
<meta name="robots" content="index, follow" />
<meta property="og:title" content="Title" />
<meta property="og:description" content="Description" />
<meta property="og:image" content="image-url.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="theme-color" content="#0f172a" />
```

---

## Resources

| Resource | URL |
|----------|-----|
| MDN Web Docs — HTML | https://developer.mozilla.org/en-US/docs/Web/HTML |
| HTML Living Standard (WHATWG) | https://html.spec.whatwg.org/ |
| W3Schools HTML | https://www.w3schools.com/html/ |
| Can I Use (browser support) | https://caniuse.com/ |
| HTML Validator | https://validator.w3.org/ |
| WAI-ARIA Spec | https://www.w3.org/TR/wai-aria/ |
| Emmet Cheatsheet (shortcuts) | https://docs.emmet.io/cheat-sheet/ |
| freeCodeCamp | https://www.freecodecamp.org/ |

---

*Notes by Pulok — AI-Powered Web Development | Day 01 | March 2026*
