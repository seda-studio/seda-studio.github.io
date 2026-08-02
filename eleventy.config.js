export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");

  const siteUrl = (process.env.SITE_URL || "https://seda.art").replace(/\/$/, "");
  const environment = process.env.ELEVENTY_ENV || process.env.NODE_ENV || "development";
  const isProduction = environment === "production";

  eleventyConfig.addGlobalData("site", {
    url: siteUrl,
    name: "SEDA",
    title: "SEDA - Software for Evolving Digital Art",
    description:
      "Research and software for preserving network-interactive and evolving digital art.",
    environment,
    isProduction
  });
  eleventyConfig.addGlobalData("currentYear", new Date().getFullYear());

  return {
    templateFormats: ["njk", "md", "html", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
}
