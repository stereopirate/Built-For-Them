# Built For Them

A free, practical DIY adaptive equipment site. Pure static HTML/CSS — no framework, package manager, or build command required.

## What is public

- Homepage (`/`)
- Projects directory (`/projects/`)
- Adjustable Therapy Bench project page (routed slot version)
- Adjustable Therapy Bench — V1 Basic project page (drill-hole version)
- Downloadable therapy bench PDF guides
- Resources directory (`/resources/`) — curated links to outside organizations' free plans (3D-printed assistive tech, switch access, etc.) that BFT doesn't build itself

## What is not public-ready

The switch mount and future seating/mobility concepts are not yet published. They have no pages and are not linked from anywhere on the site.

## Adding a new project

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the full step-by-step workflow, including the project template, the shared header/footer markup, and the CSS classes available to reuse.

## Important contact setting

The site currently uses:

`builtforthemdiy@gmail.com`

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
- `assets/downloads/adjustable-therapy-bench-v1-basic-build-guide.pdf`, `-printable-plan.pdf`, `-cut-diagram.pdf`
- `projects/index.html` — directory page listing all published projects
- `projects/adjustable-therapy-bench/index.html`
- `projects/adjustable-therapy-bench-v1-basic/index.html`
- `projects/_template/index.html` — copy-paste starting point for new projects (excluded from the sitemap and from search indexing)
- `resources/index.html` — curated outside links for resources BFT doesn't build itself
