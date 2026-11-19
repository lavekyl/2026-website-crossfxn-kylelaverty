import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://kylelaverty.com",
  // Build /resume as resume.html so Netlify serves it at /resume with no
  // redirect to /resume/. That keeps every URL equal to its canonical tag.
  trailingSlash: "never",
  build: { format: "file", inlineStylesheets: "always" },
  compressHTML: true,
});
