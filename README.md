# Built For Them — Launch-Ready V1

A lightweight static website for sharing adaptive-equipment ideas and documenting projects as they move from concept to tested plan.

## What is included

- Responsive home page
- Filterable project library
- Three starter project pages
- How It Works, Resources, About, Contact, Safety, and Accessibility pages
- Mobile navigation
- Custom SVG logo and illustration
- Vercel configuration
- Sitemap, robots file, and custom 404 page
- No framework, database, build process, login, or paid service

## Before publishing

There are only two required edits:

1. Open `contact.html` and replace both uses of `hello@example.com` with the real project email.
2. After Vercel gives you the final web address, replace `YOUR-PROJECT.vercel.app` in `robots.txt` and `sitemap.xml`.

The site will still work if you publish before making the sitemap update. The contact email should be changed before sharing the site publicly.

---

# Easiest iPhone launch instructions

## Part 1 — Download and unzip

1. Download `built-for-them-v1.zip` from ChatGPT.
2. Open the **Files** app on your iPhone.
3. Go to **Downloads**.
4. Tap the ZIP file once. Your iPhone creates a folder named `built-for-them-v1`.
5. Open the folder and confirm you see `index.html`, `projects.html`, `README.md`, and the `assets` folder.

## Part 2 — Create the GitHub repository

Use Safari rather than the GitHub app for the initial upload.

1. Open Safari and go to GitHub.
2. Sign in.
3. Tap the **+** button near the top-right.
4. Tap **New repository**.
5. Repository name: `built-for-them`
6. Description: `Open adaptive equipment ideas and build plans`
7. Choose **Public**. Private also works with Vercel, but public fits an open-plan project.
8. Do **not** add a README, `.gitignore`, or license. They are already included.
9. Tap **Create repository**.

## Part 3 — Upload the website files

1. On the empty repository screen, tap **uploading an existing file**.
2. Tap **choose your files**.
3. In the iPhone file picker, open the unzipped `built-for-them-v1` folder.
4. Select every file and folder inside it. Upload the contents—not the outer folder itself.
5. Wait until the files appear in GitHub's upload list.
6. In the commit message box, enter: `Launch Built For Them V1`
7. Tap **Commit changes**.

### Important check

The main GitHub repository page should show `index.html` immediately in the top-level file list.

Correct:

```text
built-for-them repository
├── index.html
├── projects.html
├── assets/
└── projects/
```

Incorrect:

```text
built-for-them repository
└── built-for-them-v1/
    └── index.html
```

If you see the incorrect version, Vercel will not find the home page automatically. Delete the upload and upload the contents of the folder instead.

## Part 4 — Publish with Vercel

1. Open a new Safari tab and go to Vercel.
2. Sign in using the same account you already use.
3. Tap **Add New** and then **Project**.
4. Find the `built-for-them` GitHub repository.
5. Tap **Import**.
6. On the configuration screen:
   - Framework Preset: **Other**
   - Root Directory: leave blank
   - Build Command: leave blank
   - Output Directory: leave blank
7. Tap **Deploy**.
8. When deployment finishes, tap the preview image or **Visit**.

The site is now live at an address similar to:

```text
https://built-for-them.vercel.app
```

Vercel may add extra words or numbers if that name is already taken.

## Part 5 — Make the two final edits

### Update the email

1. In Safari, return to the GitHub repository.
2. Tap `contact.html`.
3. Tap the pencil icon to edit.
4. Use Safari's **Find on Page** command and search for `hello@example.com`.
5. Replace both occurrences with the real project email.
6. Tap **Commit changes**.
7. Vercel republishes the site automatically.

### Update the Vercel address

1. In GitHub, edit `robots.txt`.
2. Replace `YOUR-PROJECT.vercel.app` with the real Vercel address, without `https://`.
3. Commit the change.
4. Repeat the same replacement in `sitemap.xml`.

## How future updates work

Every time files are changed in GitHub, Vercel automatically updates the live website.

For small changes:

1. Open the file in GitHub.
2. Tap the pencil icon.
3. Edit the text.
4. Commit changes.

For larger updates from ChatGPT:

1. Download the updated file or package.
2. Open the repository in GitHub using Safari.
3. Tap **Add file** → **Upload files**.
4. Upload the replacement files.
5. Commit changes.

## How to undo a bad change

1. Open the repository in GitHub.
2. Tap **Commits**.
3. Open the last known good commit.
4. Use GitHub's revert option when available, or ask ChatGPT to recreate the prior files.

Vercel also keeps earlier deployments. In the Vercel project, open **Deployments**, select a good deployment, and use **Promote to Production** if available.

---

# Recommended next updates

1. Choose the permanent project email.
2. Review all safety language with an appropriate legal or clinical advisor before broad promotion.
3. Replace starter illustrations with real prototype photography as projects are built.
4. Publish the first downloadable plan only after prototype review and testing.
5. Add request and volunteer forms after the basic content and workflow are proven.

## Technical notes

- All pages are plain HTML.
- Styling is in `assets/css/styles.css`.
- Mobile navigation and project filters are in `assets/js/site.js`.
- The site uses no external fonts, trackers, cookies, or third-party scripts.
- The project can be hosted by GitHub Pages, Netlify, Cloudflare Pages, or nearly any static host if you later leave Vercel.
