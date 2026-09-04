---
name: paldb-deploy-github-pages
description: paldb wiki deploys on GitHub Pages via GitHub Actions (mkdocs build on push to main)
metadata: 
  node_type: memory
  type: project
---

paldb (Palworld MkDocs wiki) is **deployed on GitHub Pages** — project site at
`https://vukyn.github.io/paldb/` (subpath `/paldb/`, EN at root, VI at `/vi/`).

- CI: `.github/workflows/deploy.yml` — `pip install -r requirements.txt` →
  `mkdocs build` (plain, NOT `--strict`) → `actions/upload-pages-artifact` →
  `actions/deploy-pages`, on push to `main` (+ manual dispatch).
- `site_url: https://vukyn.github.io/paldb/` set in mkdocs.yml (needed for i18n
  switcher / sitemap / canonical). Change it if a custom domain is added.
- One-time manual step the user must do: repo Settings → Pages → Source =
  "GitHub Actions".
- No custom domain yet. No backend (static). See also [[paldb-onboarded]],
  [[paldb-nested-by-category]].
