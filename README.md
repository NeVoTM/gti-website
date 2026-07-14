# GTI Website (redesign)

Modern redesign of [gt3i.com](https://gt3i.com/) for **Tal Levin / Green Technology Investments**.

Static HTML/CSS/JS — no build step. Quote & contact forms post to FormSubmit → `sales@gt3i.com`.

## Local preview

Open `index.html` in a browser, or:

```bash
npx --yes serve .
```

## Deploy (Render)

1. Connect this GitHub repo in [Render](https://dashboard.render.com)
2. New → Blueprint (uses `render.yaml`) **or** Static Site:
   - Build: `true` (no-op)
   - Publish directory: `.`
3. After deploy, open the `*.onrender.com` URL

## Pages

- `index.html` — Home
- `about.html`, `solutions.html`, `metrex.html`, `rtex.html`, `etrology.html`
- `quote.html` — Quote request (new)
- `contact.html` — Contact
