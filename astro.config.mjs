import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://kylelaverty.com",
  build: { inlineStylesheets: "always" },
  compressHTML: true,
});
