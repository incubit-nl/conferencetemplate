/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ade2025.nl',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/_next/*', '/static/*'],
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL}/sitemap.xml`,
      `${process.env.SITE_URL}/server-sitemap.xml`,
    ],
  },
  exclude: ['/api/*', '/server-sitemap.xml'],
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.7,
};