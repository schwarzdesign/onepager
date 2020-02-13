// module.exports = function(eleventyConfig) {
//   // Pass through static assets
//   eleventyConfig.addPassthroughCopy('src/assets');
//   eleventyConfig.setTemplateFormats([
//     "css",
//     "js",
//     "njk"
//   ]);
//   return {
//       // Input directory
//       dir: {
//           data: '_data',
//           input: 'src',
//           output: '_site'
//       },
//       passthroughFileCopy: true
//   };
// };
module.exports = eleventyConfig => {
  // copy js uncompiled
  eleventyConfig.addPassthroughCopy({'src/_js': 'js'});
  // copy js uncompiled
  eleventyConfig.addPassthroughCopy({'src/_css': 'css'});
  // copy js uncompiled
  eleventyConfig.addPassthroughCopy({'src/_assets': 'assets'});


  return {
    templateFormats: ['html', 'njk'],
    markdownTemplateEngine: 'njk',
    pathPrefix: '/',
    dir: {
        input: "src",
        output: "_site",
        includes: "_includes",
        data: "_data",
    }
}
}