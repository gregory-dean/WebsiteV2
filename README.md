# gregory-dean.com

Personal portfolio for Gregory Dean — cybersecurity practitioner.

## Stack

- Next.js (static export)
- Tailwind CSS
- GSAP
- Three.js / React Three Fiber
- MDX content for work and writing

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

Static output lands in `out/`.

## Content

| Path | Purpose |
|------|---------|
| `content/work/*.mdx` | Projects and articles (`kind: project` or `kind: article`) |
| `src/data/experience.ts` | Homepage Experience tree |

Edit note frontmatter (`title`, `summary`, `date`, `kind`, `tags`, etc.) and the MDX body. Site links and contact details live in `src/lib/site.ts`.

## Deploy (GitHub Pages + custom domain)

1. Create a GitHub repository and push this folder to `main`.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes `out/`.
4. In **Settings → Pages → Custom domain**, set `gregory-dean.com` (and optionally `www.gregory-dean.com`).
5. At your DNS registrar, point the domain at GitHub Pages:

   **Apex (`gregory-dean.com`)** — A records:

   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

   Optional AAAA records (IPv6) per [GitHub Pages custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

   **`www`** — CNAME to `<your-username>.github.io`.

6. Wait for DNS, then enable **Enforce HTTPS** in the Pages settings.

`public/CNAME` already contains `gregory-dean.com` so the custom domain survives deploys.
