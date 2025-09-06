// scripts/generate-sitemap.js
import { writeFileSync } from "fs";

const baseUrl = "https://yourdomain.com";

// Your app routes (can come from config, JSON, DB, etc.)
const routes = [
  "/en",
  "/uk",
  "/en/privacy-policy",
  "/uk/privacy-policy",
  "/en/terms-of-service",
  "/uk/terms-of-service"
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

writeFileSync("dist/sitemap.xml", sitemap, "utf-8");
console.log("✅ sitemap.xml generated in dist/");
