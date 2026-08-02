export default class Sitemap {
  data() {
    return {
      permalink: "/sitemap.xml"
    };
  }

  render(data) {
    const urls = data.collections.all
      .filter((item) => item.url && !item.url.endsWith(".txt") && !item.url.endsWith(".xml"))
      .map((item) => `${data.site.url}${item.url}`);

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`;
  }
}
