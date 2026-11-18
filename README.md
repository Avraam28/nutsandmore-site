# Κούννες τζαι τα λοιπά · nutsandmore. — website

Static one-page site (HTML/CSS/JS, Greek + English toggle). No build step.

## Deploy on Render (free static site)

Render deploys from a Git repository, so the files go to GitHub first.

1. **GitHub** — sign in at github.com → **New repository** → name it `nutsandmore-site` → Public → Create.
   On the new repo page click **uploading an existing file**, drag in *everything inside this folder*
   (`index.html`, `styles.css`, `script.js`, `render.yaml`, `README.md` and the `images` folder) → **Commit changes**.
2. **Render** — sign in at dashboard.render.com (you can sign in with GitHub) →
   **New +** → **Static Site** → connect the `nutsandmore-site` repo.
3. Settings:
   - Build Command: *(leave empty)*
   - Publish Directory: `.`
4. Click **Create Static Site**. After ~1 minute it's live at `https://nutsandmore.onrender.com`
   (or similar). Every new commit to GitHub redeploys automatically.

Optional: in Render → Settings → **Custom Domains** you can attach your own domain (e.g. `nutsandmore.cy`).

## Editing

- Text (Greek) is in `index.html`; English translations are in `script.js`.
- Opening hours are in the `hours` table in `index.html`.
- Photos are in `images/` — replace a file with the same name to swap a photo.
