# Contributing a new project

This site is plain static HTML/CSS — no build step, no framework, no package manager. Every page is a self-contained `index.html` that links to the shared stylesheet at `/assets/css/styles.css`. Follow this workflow to add a new build guide.

## 1. Copy the template

Copy the whole `/projects/_template/` folder and rename the copy to your project's slug, e.g.:

```
projects/_template/  ->  projects/switch-mount/
```

Open the new `projects/switch-mount/index.html` and fill in every `[PLACEHOLDER]`. The template's top comment repeats these instructions inline — delete that comment once you're done.

Delete any section marked `OPTIONAL` in an HTML comment that doesn't apply to your project (e.g. the safety callout, the gallery, or the extra detail panel). Don't add new sections or invent new CSS classes — see the class reference below.

## 2. Add your assets

- Photos go in `/assets/images/` (flat, no subfolders — match the existing `bench-*.jpg` naming style, e.g. `switch-mount-hero.jpg`).
- The build guide PDF goes in `/assets/downloads/`, named `<slug>-build-guide.pdf`.
- Reference both with root-relative paths (see below) — never relative paths like `../assets/...`.

## 3. List it on the projects directory

Add a `.card` to the `.grid.three` in `/projects/index.html`, matching the existing Adjustable Therapy Bench card:

```html
<div class="card">
  <img src="/assets/images/<slug>-hero.jpg" alt="...">
  <h3>Project Name</h3>
  <p>One-line description.</p>
  <a class="button ghost" href="/projects/<slug>/">View project</a>
</div>
```

Do **not** add a card for a project that isn't actually built and published yet — no "coming soon" placeholders.

## 4. Add it to the sitemap

Add `https://built-for-them.vercel.app/projects/<slug>/` as a new `<url><loc>...</loc></url>` entry in `/sitemap.xml`.

## 5. Open a PR

Never commit straight to `main`. Push your branch and open a PR — Vercel will generate a preview deployment automatically so changes can be reviewed live before merging.

## Root-relative path convention

Every internal link/asset reference on this site uses a root-relative path: `/assets/...`, `/projects/...`, never bare-relative (`assets/...`) or parent-relative (`../../assets/...`). This means a copy-pasted page works identically no matter how deep its folder is.

`vercel.json` sets `cleanUrls` and `trailingSlash`, so these resolve correctly once deployed. The one trade-off: root-relative paths do **not** resolve if you double-click an HTML file and open it via `file://` in a browser. To preview locally, run a local static server from the repo root (e.g. `npx serve .`) — or just rely on the Vercel PR preview deployment.

The one exception is Open Graph / Twitter Card meta tags (`og:image`, `og:url`, etc.), which must be absolute URLs per spec, e.g. `https://built-for-them.vercel.app/assets/images/<slug>-hero.jpg`.

## Shared header and footer

Paste this exact header into every new page, right after `<body>`:

```html
<header class="site-header">
  <nav class="nav" aria-label="Main navigation">
    <a class="logo" href="/"><img src="/assets/images/logo-horizontal.png" alt="Built For Them logo"></a>
    <div class="nav-links"><a href="/about/">About</a><a href="/projects/">Projects</a><a href="/resources/">Resources</a><a href="/get-involved/">Get Involved</a></div>
    <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">&#9776;</button>
  </nav>
</header>
```

And this exact footer right before `</body>`:

```html
<footer class="footer"><div class="footer-inner"><div><strong>Built For Them</strong><p>Build with care. Share with love.</p></div><div class="nav-links"><a href="/about/">About</a><a href="/projects/">Projects</a><a href="/resources/">Resources</a><a href="/get-involved/">Get Involved</a><a href="mailto:builtforthemdiy@gmail.com">builtforthemdiy@gmail.com</a></div><img src="/assets/images/logo-stacked.png" alt="Built For Them logo"></div></footer>
```

The `.nav-toggle` button is the mobile hamburger menu — it's hidden on desktop and only shown below 850px, where it reveals `.nav-links` as a dropdown. It's powered by the shared script `/assets/js/nav.js`, which must also be added right before `</body>` (after the footer) on every new page:

```html
<script src="/assets/js/nav.js" defer></script>
```

Don't improvise variations on this markup — page-local anchor links (like `#build-plan` or `#materials`) belong as a secondary row under that page's `<h1>`, not inside `.site-header`.

## Logo usage

| File | Use |
|---|---|
| `logo-horizontal.png` | Header nav lockup on every page |
| `logo-icon.png` | Favicon (`<link rel="icon">`) on every page |
| `logo-badge.png` | Apple touch icon, and the small trust-seal graphic near the closing cards/PDF download on project pages |
| `logo-stacked.png` | Footer brand mark on every page |

## Reusable CSS classes

Don't invent new classes before checking if one of these already does the job:

- `.site-header`, `.nav`, `.logo`, `.nav-links`, `.nav-toggle` — header/nav, including the mobile hamburger toggle
- `.button`, `.button.secondary`, `.button.ghost` — buttons/links styled as buttons
- `.hero`, `.hero-actions`, `.hero-card`, `.stats`, `.stat` — page-top hero layout
- `.eyebrow`, `.script`, `.lede` — small label, handwritten-style accent line, intro paragraph
- `.section`, `.section.narrow` — page section wrapper (narrow = capped width for text-heavy content)
- `.grid.two`, `.grid.three` — two- or three-column responsive grids
- `.panel` — white bordered content box
- `.card`, `.card.accent`, `.card.warn` — content cards with optional colored top accent
- `.table-wrap` + `<table>` — styled materials/cut-list tables
- `.gallery` — photo grid (first image spans two rows)
- `.steps`, `.step` — numbered assembly-step list
- `.callout` — dark navy highlighted box (used for safety notices)
- `.badges`, `.badge`, `.badge.orange`, `.badge.navy` — small pill labels
- `.footer`, `.footer-inner` — site footer
