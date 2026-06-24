# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A free, practical DIY adaptive equipment site for "Built For Them." Pure static HTML/CSS — no framework, no package manager, no build command. There is nothing to install and nothing to compile.

## Commands

- **Preview locally:** `npx serve .` from the repo root, then open the printed URL. Do not open HTML files directly via `file://` — every internal link is root-relative (`/assets/...`, `/projects/...`) and will 404 without a local server.
- **No build, lint, or test commands exist.** There is no `package.json`. Verification is: serve locally and click through, or push a branch and check the Vercel PR preview deployment.

## Public vs. internal content

- Public, user-facing pages: `index.html`, `404.html`, everything under `/projects/`, and the PDF in `/assets/downloads/`.
- `README.md` explicitly calls out which concepts are "not public-ready" (e.g. switch mount, future seating/mobility ideas) — those must have no pages and no links from anywhere on the site until they're ready.
- `ORIGINALS.md`, `DECISIONS.md`, `TRACKER.md` are internal project-tracking docs (active project queue, design decisions, idea backlog). They are not linked from the site and must not contain the internal tracker's live spreadsheet URL/ID — that link is intentionally kept out of this public repo. At the start of a session, check these three files for current project status before starting work.

## Architecture

Every page is a self-contained `index.html` with no templating — shared structure is copy-pasted, not included. This means the header/footer markup, nav script tag, and root-relative path convention must match exactly across every page, or pages will silently drift apart. See `CONTRIBUTING.md` for the exact markup to paste.

- **Adding a new project page:** copy `/projects/_template/` to `/projects/<slug>/`, fill in placeholders, delete unused `OPTIONAL` sections. Then: add a `.card` to `/projects/index.html`, add the page to `/sitemap.xml`, and add photos/PDF to `/assets/images/` and `/assets/downloads/` (flat, no subfolders, named `<slug>-*`). Never add a card for a project that isn't actually built and published.
- **Path convention:** every internal link/asset uses a root-relative path (`/assets/...`, never `assets/...` or `../assets/...`), so a copy-pasted page works regardless of folder depth. `vercel.json` (`cleanUrls`, `trailingSlash`) makes these resolve once deployed. The one exception: Open Graph/Twitter meta tags must be absolute URLs (`https://built-for-them.vercel.app/...`).
- **Shared chrome:** header/footer markup and the `/assets/js/nav.js` mobile-hamburger script must be pasted verbatim into every page (see `CONTRIBUTING.md` for the exact snippets) — don't improvise variations. Page-local anchor nav (e.g. `#build-plan`) goes in a secondary row under the page's `<h1>`, not inside `.site-header`.
- **CSS:** one shared stylesheet, `/assets/css/styles.css`. Reuse existing classes (`.hero`, `.panel`, `.card`, `.table-wrap`, `.gallery`, `.steps`, `.callout`, `.badges`, etc. — see the full reference table in `CONTRIBUTING.md`) instead of inventing new ones.
- **Logos:** `logo-horizontal.png` (header nav), `logo-icon.png` (favicon), `logo-badge.png` (apple touch icon / trust-seal graphic on project pages), `logo-stacked.png` (footer).
- **Contact address** (`builtforthemdiy@gmail.com`) is hardcoded as a `mailto:` link in every page's header/footer — update it everywhere at once if it ever changes.

## Git workflow

Never commit straight to `main`. Push a branch and open a PR — Vercel generates a preview deployment automatically for review before merge.
