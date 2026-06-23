# Built For Them

A free, practical DIY adaptive equipment site. Pure static HTML/CSS — no framework, package manager, or build command required.

## What is public

- Homepage (`/`)
- Projects directory (`/projects/`)
- Adjustable Therapy Bench project page
- Downloadable therapy bench PDF guide

## What is not public-ready

The switch mount and future seating/mobility concepts are not yet published. They have no pages and are not linked from anywhere on the site.

## Adding a new project

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the full step-by-step workflow, including the project template, the shared header/footer markup, and the CSS classes available to reuse.

## Important contact setting

The site currently uses:

`hello@builtforthem.org`

That address is referenced as a root-relative `mailto:` link from every page's header/footer. Update it everywhere if that mailbox changes.

## Path convention

All internal links use root-relative paths (`/assets/...`, `/projects/...`), which Vercel resolves correctly thanks to `cleanUrls`/`trailingSlash` in `vercel.json`. Root-relative paths will **not** resolve if you open an HTML file directly via `file://` — preview locally with `npx serve .` or use a Vercel PR preview deployment instead.

## Site structure

- `index.html`
- `404.html`
- `robots.txt`
- `sitemap.xml`
- `vercel.json`
- `CONTRIBUTING.md`
- `assets/css/styles.css`
- `assets/images/`
- `assets/downloads/adjustable-therapy-bench-build-guide.pdf`
- `projects/index.html` — directory page listing all published projects
- `projects/adjustable-therapy-bench/index.html`
- `projects/_template/index.html` — copy-paste starting point for new projects (excluded from the sitemap and from search indexing)
