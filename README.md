# 🤖 AI-Powered Web Development

> A structured, day-by-day learning journey through modern web development — accelerated and enhanced with Artificial Intelligence tools and techniques.

![GitHub repo size](https://img.shields.io/github/repo-size/puloksingha/AI-Powered-Webdev?color=0ea5e9&style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/puloksingha/AI-Powered-Webdev?color=22c55e&style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/puloksingha/AI-Powered-Webdev?color=f472b6&style=flat-square)
![License](https://img.shields.io/badge/license-MIT-7c3aed?style=flat-square)

---

## 📌 About This Repository

This repository documents a comprehensive, day-by-day learning path for **AI-Powered Web Development**. Each day covers a focused topic — from foundational HTML to advanced AI integrations — combining traditional web development skills with cutting-edge AI assistance.

Whether you're a beginner or an experienced developer looking to leverage AI in your workflow, this series is designed to make you a **faster, smarter, and more efficient** web developer.

---

## 🎯 Goals

- Build a **strong foundation** in HTML, CSS, and JavaScript
- Learn to use **AI tools** (GitHub Copilot, ChatGPT, Gemini) to write and debug code faster
- Develop **real-world projects** enhanced by AI
- Understand how to **integrate AI APIs** (OpenAI, Gemini, etc.) into web applications
- Follow **best practices** in modern, accessible, and semantic web development

---

## 🗂️ Course Roadmap

| # | Topic | Folder | Files | Status |
|---|-------|--------|-------|--------|
| Day 01 | Complete HTML — Zero to Advanced | [`HTML/Day-01/`](HTML/Day-01/) | [`index.html`](HTML/Day-01/index.html) · [`README.md`](HTML/Day-01/README.md) | ✅ Completed |
| Day 02 | CSS Fundamentals | `HTML/Day-02/` | — | ⏳ Upcoming |
| Day 03 | CSS Layouts — Flexbox & Grid | `CSS/Day-03/` | — | ⏳ Upcoming |
| Day 04 | Responsive Web Design | `CSS/Day-04/` | — | ⏳ Upcoming |
| Day 05 | JavaScript Fundamentals | `JavaScript/Day-05/` | — | ⏳ Upcoming |
| Day 06 | DOM Manipulation | `JavaScript/Day-06/` | — | ⏳ Upcoming |
| Day 07 | ES6+ Modern JavaScript | `JavaScript/Day-07/` | — | ⏳ Upcoming |
| Day 08 | AI-Assisted Coding with GitHub Copilot | `Projects/Day-08/` | — | ⏳ Upcoming |
| Day 09 | Integrating OpenAI API | `Projects/Day-09/` | — | ⏳ Upcoming |
| Day 10 | Building a Full AI-Powered Web App | `Projects/Day-10/` | — | ⏳ Upcoming |

---

## 📅 Day 01 — Complete HTML: Zero to Advanced ✅

> **Status:** Completed · **Date:** March 3, 2026

### What was built
A single-file, zero-dependency **complete HTML reference page** covering every major HTML concept with live working examples — styled with a dark theme and no external frameworks.

### Topics Covered

**Foundations**
- ✅ Document structure — `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
- ✅ Head section — SEO meta tags, Open Graph, Twitter Card, viewport, favicons, canonical URLs
- ✅ Headings `<h1>`–`<h6>` and content hierarchy

**Text & Content**
- ✅ 25+ inline text elements — `<strong>`, `<em>`, `<mark>`, `<abbr>`, `<time>`, `<kbd>`, `<code>`, `<bdi>`, `<bdo>` and more
- ✅ Block elements — `<p>`, `<blockquote>`, `<pre>`, `<address>`
- ✅ HTML entities and special characters

**Links, Images & Media**
- ✅ Links — external, internal anchors, `mailto:`, `tel:`, `download`
- ✅ Images — `<img>`, `<figure>`, `<picture>` (responsive), image maps, `srcset`
- ✅ Video & Audio — `<video>`, `<audio>`, `<track>` (subtitles/captions)
- ✅ Embedding — `<iframe>`, `<embed>`, `<object>`

**Structure & Forms**
- ✅ Lists — `<ul>`, `<ol>` (all types), `<dl>`, nested lists
- ✅ Tables — `<thead>`, `<tbody>`, `<tfoot>`, `colspan`, `rowspan`, `<caption>`, `<colgroup>`
- ✅ All 22+ input types, `<select>`, `<datalist>`, `<textarea>`, `<fieldset>`, `<legend>`
- ✅ Form validation attributes — `required`, `pattern`, `min`, `max`, `minlength`
- ✅ `<progress>`, `<meter>`, `<output>`

**Semantic & Advanced**
- ✅ Semantic HTML5 — `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- ✅ `<details>` / `<summary>` accordion, `<dialog>` native modal
- ✅ Canvas 2D API (live drawing demo)
- ✅ Inline SVG — shapes, gradients, text
- ✅ `data-*` attributes, `<template>` element
- ✅ Accessibility & ARIA — roles, labels, `aria-expanded`, `tabindex`
- ✅ Script loading — `defer`, `async`, `type="module"`
- ✅ Global attributes, `contenteditable`, deprecated elements

### Files

| File | Description |
|------|-------------|
| [`HTML/Day-01/index.html`](HTML/Day-01/index.html) | Complete HTML reference — zero to advanced, all live examples |
| [`HTML/Day-01/README.md`](HTML/Day-01/README.md) | Day 01 overview and summary |
| [`HTML/notes.md`](HTML/notes.md) | Full HTML study notes — 17 sections, cheatsheets, best practices |

### Key Code Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Page description for SEO" />
    <title>My Page</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <nav aria-label="Main navigation">...</nav>
    </header>
    <main>
      <section>
        <article>...</article>
      </section>
      <aside>...</aside>
    </main>
    <footer>...</footer>
    <script src="app.js" defer></script>
  </body>
</html>
```

### AI Tip 💡

> Use **GitHub Copilot** in VS Code — type a comment like `<!-- contact form with name, email, message, and submit -->` and press `Tab` to let Copilot scaffold the entire form. Then customize it.

---

## 📁 Current Folder Structure

```
AI-Powered-Webdev/
├── HTML/
│   ├── Day-01/
│   │   ├── index.html        ← Complete HTML reference (zero to advanced)
│   │   └── README.md         ← Day 01 overview
│   └── notes.md              ← Full HTML study notes (17 sections)
└── README.md                 ← This file
```

---

## 🛠️ Tools & Technologies

| Tool | Purpose |
|------|---------|
| VS Code | Primary code editor |
| GitHub Copilot | AI-powered code completion |
| ChatGPT / Gemini | Code explanation, debugging, idea generation |
| Git & GitHub | Version control & repository hosting |
| Live Server (VS Code ext.) | Real-time browser preview on save |
| Chrome DevTools | Inspect, debug, and test |

---

## 🤖 AI Tools Used in This Course

### GitHub Copilot
Real-time code suggestions directly in VS Code. Used daily for auto-completing code, generating boilerplate, suggesting fixes, and offering alternative implementations.

### ChatGPT / Gemini
- Explaining concepts in plain language
- Debugging tricky errors
- Generating project ideas
- Code review and improvements

### AI-Powered Design Tools
- **v0 by Vercel** — Generate UI components from text prompts
- **Figma AI** — Design-to-code workflows
- **Galileo AI** — UI design from natural language

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/puloksingha/AI-Powered-Webdev.git
   cd AI-Powered-Webdev
   ```

2. **Open in VS Code**
   ```bash
   code .
   ```

3. **Install recommended VS Code extensions**
   - [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
   - [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
   - [Prettier — Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   - [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)

4. **Open any day's `index.html`** and click **Go Live** in the VS Code status bar to preview in the browser.

---

## 📚 Resources

| Resource | Link |
|----------|------|
| MDN Web Docs — HTML | [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTML) |
| HTML Living Standard | [html.spec.whatwg.org](https://html.spec.whatwg.org/) |
| W3Schools HTML | [w3schools.com/html](https://www.w3schools.com/html/) |
| GitHub Copilot Docs | [docs.github.com/copilot](https://docs.github.com/en/copilot) |
| OpenAI API Reference | [platform.openai.com/docs](https://platform.openai.com/docs) |
| CSS-Tricks | [css-tricks.com](https://css-tricks.com/) |
| freeCodeCamp | [freecodecamp.org](https://www.freecodecamp.org/) |
| Can I Use | [caniuse.com](https://caniuse.com/) |
| HTML Validator | [validator.w3.org](https://validator.w3.org/) |

---

## 🙌 Contributing

Contributions, suggestions, and improvements are welcome!

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add: your message"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

**Pulok Singha**
- GitHub: [@puloksingha](https://github.com/puloksingha)
- Learning web development — one day at a time
- Powered by curiosity and AI 🤖

---

<p align="center">
  Made with ❤️ and 🤖 AI &mdash; <strong>AI-Powered Web Development</strong><br/>
  <a href="https://github.com/puloksingha/AI-Powered-Webdev">github.com/puloksingha/AI-Powered-Webdev</a>
</p>
