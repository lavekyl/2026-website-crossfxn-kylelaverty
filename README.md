# Kyle Laverty — Personal Site

The source for [kylelaverty.com](https://kylelaverty.com): a fast, accessible, hand-coded single-page personal site. Plain HTML, CSS, and a little JavaScript, with layout handled by [SmidgenCSS](https://smidgencss.com). There is no build step.

You are welcome to use this as a starting point for your own site. If you do, please make it genuinely yours by swapping in your own content and replacing the personal pieces listed below.

## Files

```
index.html            the page itself: structure and content
favicon.svg           the browser tab icon
css/
  smidgen.min.css     SmidgenCSS, the layout framework (vendored, do not edit)
  style.css           all custom styling and the design tokens
js/
  main.js             the mobile navigation menu behavior
og-image.png          the social share image (export from og-image.svg)
README.md
```

## Run it locally

No tooling required. You can open `index.html` directly in a browser, or serve the folder so paths resolve exactly as they will in production:

```
python3 -m http.server
```

Then visit `http://localhost:8000`. The Live Server extension for VS Code works just as well.

## Make it yours

There are three places to edit, in plain terms.

**1. Content and meta, in `index.html`.**

- Replace the text in each section: hero, work, skills, about, and contact.
- Update the `<title>` and the `<meta name="description">`.
- Update the Open Graph and Twitter tags, the `<link rel="canonical">`, and the URLs inside them.
- Replace the Google Analytics ID (`G-BHJXKZHLZX`) with your own, or remove the Google tag block entirely if you do not want analytics. Do not publish with my ID, or your visits will be counted in my account.
- Update the structured data (the JSON-LD block) with your own name, role, and links, or remove it. As written it describes me, so it must be changed or deleted.

**2. Colors and type, in `css/style.css`.**

- The palette and a few sizing values live as CSS variables at the very top, in `:root`. Change `--red`, `--ink`, `--paper`, and the others in one place and the whole site follows.
- The typefaces are set on the `body` rule and the `h1, h2, h3` rule.

**3. The share image.**

- Replace `og-image.png` with your own 1200×630 image, and update the `og:image` and `twitter:image` paths if you rename it.

## SmidgenCSS

Layout, meaning the grid, the centered containers, and the vertical rhythm, is handled by [SmidgenCSS](https://smidgencss.com). The copy in `css/smidgen.min.css` is vendored, so there is nothing to install or fetch. Leave it as is and do your own styling in `style.css`.

## A note on fonts

For simplicity this page loads its fonts, Bricolage Grotesque and Hanken Grotesk, from Google Fonts. For a production site I prefer self-hosting them: download the woff2 files, place them in a `fonts/` folder, declare them with `@font-face` in `style.css`, and remove the Google Fonts `<link>` from `index.html`. That drops a third-party request and is both faster and more private.

## Deploy

The site is static, so any static host works. You can drag the folder onto Netlify, or connect this repository to Netlify for automatic deploys on every push. No build command is needed; publish the repository root.

## License

MIT. If you build on it, a link back is appreciated but not required.

Built by hand by Kyle Laverty.
