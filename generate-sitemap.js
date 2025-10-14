const fs = require("fs");
const path = require("path");

const DOMAIN = "https://shipx.asia";
const SPA_ROUTES = ["/", "/book-a-demo", "/privacy-policy", "/terms-and-conditions", "/not-found"];

function generateSitemap() {
  const urls = SPA_ROUTES.map((route) => ({
    loc: `${DOMAIN}${route}`,
    lastmod: new Date().toISOString(),
    priority: 0.9,
  }));

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  urls.forEach((url) => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${url.loc}</loc>\n`;
    sitemap += `    <lastmod>${url.lastmod}</lastmod>\n`;
    sitemap += `    <priority>${url.priority}</priority>\n`;
    sitemap += `  </url>\n`;
  });

  sitemap += `</urlset>`;

  fs.writeFileSync(path.join(__dirname, "sitemap.xml"), sitemap);
  console.log("✅ Sitemap generated successfully!");
}

generateSitemap();