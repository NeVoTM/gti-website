# Migrate gti-website from Render to Cloudflare Pages

Static HTML/CSS/JS at repo root. No URL rewrites in `render.yaml` (no `_redirects` required).

## Cloudflare Pages

1. [dash.cloudflare.com](https://dash.cloudflare.com/) → **Workers & Pages** → **Pages** → **Connect to Git** → **`NeVoTM/gti-website`**.
2. Framework: **None** · Build command: *(empty)* · Output: **`/`**.
3. Deploy and verify forms still post to FormSubmit (`sales@gt3i.com`).

## Optional: stop using Render workflow

[`.github/workflows/deploy-render.yml`](../.github/workflows/deploy-render.yml) only triggers Render when `RENDER_API_KEY` is set. After migration you can delete that workflow and GitHub repo secret, or leave it (it no-ops without secrets).

GitHub Pages (`github-pages.yml`) remains an alternate host at `https://nevotm.github.io/gti-website/`; you only need **one** primary custom domain (Pages or Pages + Cloudflare DNS).

## Turn off Render

Delete or suspend **gti-website** on Render once `gt3i.com` (or your domain) points to Pages.
