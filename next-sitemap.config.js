/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://shishirthapa.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
