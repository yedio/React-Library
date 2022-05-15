const fs = require('fs');
const prettier = require('prettier');

const SitemapGeneratedDate = new Date().toISOString().slice(0, 10);
const DOMAIN = 'https://test.co.kr';

const formatting = target => prettier.format(target, { parser: 'html' });

let pages = ['/', '/apple', '/banana', '/carrot'];
pages = pages.map(page => DOMAIN + page);

const pageSitemap = pages
  .map(
    page => `
      <url>
        <loc>${page}</loc>
        <lastmod>${SitemapGeneratedDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${page === 'https://test.co.kr/' ? 1 : 0.8}</priority>
      </url>
    `
  )
  .join('');

const geneateSitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
        <urlset
          xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
          ${pageSitemap}
        </urlset>`;

const formattedSitemap = formatting(geneateSitemap);

fs.writeFileSync('./public/sitemap.xml', formattedSitemap, 'utf8');
