const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const postcssFontMagician = require('postcss-font-magician');
const postcssUrl = require('postcss-url');
const postcssNesting = require('postcss-nesting');
const postcssCustomProperties = require('postcss-custom-properties');
const cssnano = require('cssnano');

module.exports = (ctx) => ({
  plugins: [
    postcssImport,
    tailwindcss,
    postcssNesting,
    postcssCustomProperties,
    postcssUrl({
      url: 'copy',
      assetsPath: 'public/assets/images',
      useHash: true,
    }),
    autoprefixer,
    ctx.env === 'production' ? cssnano : false,
  ],
});
