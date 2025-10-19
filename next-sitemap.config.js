/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://shishirthapa.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  generateIndexSitemap: false, // ❌ key change: generate only one sitemap
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
    ],
    additionalSitemaps: [], // no need to add sitemap.xml itself here
  },
};
