# TRADIE GHOUL — Deployment Guide

**Domain:** `https://www.tradieghoul.com`  
**Description:** Industrial & trade cleaning products

---

## Build

```bash
npm install
npm run build
```

Output: `dist/` (Vite static build)

## Deploy

### Cloudflare Pages (Recommended)

```bash
npx wrangler pages deploy dist --project-name=tradieghoul-com --branch=main
```

### GitHub Actions

Pushes to `main` auto-deploy via `.github/workflows/deploy.yml`.

### DNS

- `www.tradieghoul.com` → CNAME → `tradieghoul-com.pages.dev`
- `tradieghoul.com` → CNAME → `tradieghoul-com.pages.dev`

Managed in Cloudflare DNS.

---

*Part of the GHOULVERSE ecosystem. See root `DEPLOY.md` for ecosystem-wide deployment.*
