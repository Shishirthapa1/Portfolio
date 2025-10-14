/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://shishirthapa.vercel.app", // your live site URL
  generateRobotsTxt: true, // generates robots.txt as well
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  // ✅ for large sites
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://shishirthapa.vercel.app/sitemap.xml"],
  },
};
