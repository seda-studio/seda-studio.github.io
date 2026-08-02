export default class Robots {
  data() {
    return {
      permalink: "/robots.txt"
    };
  }

  render(data) {
    if (!data.site.isProduction) {
      return "User-agent: *\nDisallow: /\n";
    }

    return `User-agent: *
Allow: /

Sitemap: ${data.site.url}/sitemap.xml
`;
  }
}
