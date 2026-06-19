# Built For Them - complete replacement repository

This folder is ready to replace the entire contents of the current GitHub repository.

## What is public

- Homepage
- Adjustable Therapy Bench project page
- Downloadable therapy bench PDF guide

## What is not public-ready

The switch mount and future seating/mobility concepts are labeled **Work in progress** or **Concept only**. They do not link to plans and are not presented as usable equipment.

## Replace the GitHub repository

1. Download and unzip `built-for-them-complete-site.zip`.
2. Open the existing GitHub repository.
3. Delete the current repository files and folders.
4. Upload everything inside the unzipped `built-for-them-complete-site` folder.
5. Commit directly to the branch connected to Vercel, usually `main`.
6. Wait for the Vercel deployment to complete.
7. Open the live site and test:
   - Homepage
   - Therapy bench project page
   - PDF download
   - Mobile menu

## Important contact setting

The site currently uses:

`hello@builtforthem.org`

Change that address in `index.html` and `projects/adjustable-therapy-bench/index.html` if that mailbox does not exist.

## Site structure

- `index.html`
- `styles.css`
- `404.html`
- `robots.txt`
- `sitemap.xml`
- `vercel.json`
- `assets/`
- `projects/adjustable-therapy-bench/index.html`

No framework, package manager, or build command is required.
