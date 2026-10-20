// Regenerates sitemap.xml from assets/js/data.js. Run: node build-sitemap.js
const fs = require("fs");
globalThis.window = globalThis; require("./assets/js/data.js");
const base = "https://vicecitydaily.github.io/";
const urls = [[base, VCD.UPDATED, "daily", "1.0"], [base + "reels.html", VCD.UPDATED, "daily", "0.9"]]
  .concat(VCD.ARTICLES.map((a) => [`${base}article.html?id=${a.id}`, a.date, "monthly", "0.7"]));
fs.writeFileSync("sitemap.xml", '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(([u, m, c, p]) => `  <url><loc>${u.replace(/&/g, "&amp;")}</loc><lastmod>${m}</lastmod><changefreq>${c}</changefreq><priority>${p}</priority></url>`).join("\n") + "\n</urlset>\n");
console.log("sitemap.xml:", urls.length, "urls");
