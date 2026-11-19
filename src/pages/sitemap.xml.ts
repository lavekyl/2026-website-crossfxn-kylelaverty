// Sitemap for search engines. Add a path here when you add a page.
import type { APIRoute } from "astro";

const PAGES = ["/", "/resume"];

export const GET: APIRoute = ({ site }) => {
  const urls = PAGES.map((p) => `  <url><loc>${new URL(p, site).href}</loc></url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
