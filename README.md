# Kyle Laverty: Personal Site

The source for [kylelaverty.com](https://kylelaverty.com). A portfolio and résumé built with [Astro](https://astro.build), laid out with [SmidgenCSS](https://smidgencss.com), and themed around a hand-drawn rocket launch. No Tailwind, no UI framework, no animation library.

## Run it

Astro 7 needs Node 22.23.4 or newer (`.nvmrc` pins it).

```
npm install
npm run dev       # http://localhost:4321
npm run build     # writes the static site to dist/
npm run preview   # serves dist/ locally
```

## Where things live

```
src/
  content.config.ts         project schema + filter categories
  content/projects/*.md     one file per project card
  data/resume.ts            résumé content for /resume
  layouts/Base.astro        head, SEO, JSON-LD, analytics, skip link, header/footer
  components/
    Starfield.astro         canvas starfield: 3 depth layers, twinkles, shooting stars
    Rocket.astro            inked SVG rocket: draw-on, flame, scroll-linked launch
    MotionToggle.astro      "Pause animations" button
    ProjectCard.astro       one card in the work grid
    ProjectFilter.astro     filter buttons for the work grid
    Doodle.astro            small SVG doodles for section heads
    Header.astro, Footer.astro
  pages/index.astro, resume.astro, 404.astro
  scripts/motion.ts         shared motion state (OS setting + pause toggle)
  styles/
    smidgen.min.css         SmidgenCSS, vendored, do not edit
    tokens.css              colors, fonts, spacing
    base.css, site.css      global styles
    print.css               print layout for /resume
public/
  fonts/                    self-hosted woff2 files
  pdf/                      downloadable résumé
  og-image.png              social share image (1200×630)
```

## Add a project

Add a Markdown file to `src/content/projects/`. Only the frontmatter is used:

```yaml
---
name: Project Name
url: https://example.com
description: "One line. What it is and who it's for."
categories: [civic]            # civic, products, brands, open-source, client, publishing
status: live                   # live, beta, in-development, or leave it out for no badge
tags: [Astro, Cloudflare Pages]
order: 170                     # lower shows first
---
```

The build fails if a field is missing or a category is misspelled.

## Update the résumé

Edit `src/data/resume.ts`, then replace the PDF in `public/pdf/`. If the PDF filename changes, update `pdf` in `resume.ts`. Print `/resume` to check it still fits on two pages.

## Motion and accessibility

- Everything that moves is gated on `<html data-motion="on">`. An inline script in `Base.astro` sets it before first paint from the OS reduced-motion setting and the saved pause choice.
- With reduced motion, nothing moves: a still starfield and a fully drawn rocket. The pause toggle hides itself because there is nothing to pause.
- The launch uses CSS scroll-driven animations where supported. Browsers without them (Firefox today) get a small IntersectionObserver + scroll fallback in `Rocket.astro`.
- The scroll-driven rules use longhand `animation-*` properties on purpose. The build's CSS minifier drops the `animation` shorthand when `animation-timeline` follows it.

## Deploy

Netlify builds from `netlify.toml`: `npm run build`, publish `dist/`. Any static host works with the same settings.

## License

MIT. If you build on it, swap in your own content, analytics ID and structured data first.
