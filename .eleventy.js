module.exports = function(eleventyConfig) {

  const markdownIt = require("markdown-it");
  const markdownItNamedHeadings = require("markdown-it-named-headings");
  const markdownOptions = {
      html: true,
      breaks: true,
      linkify: true
  };
  const markdownRenderer = markdownIt(markdownOptions).use(markdownItNamedHeadings);
  eleventyConfig.setLibrary("md", markdownRenderer);

  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("assets");
};
