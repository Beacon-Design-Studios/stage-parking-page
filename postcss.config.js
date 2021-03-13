const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
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
    postcssFontMagician({
      foundries: ['google'],
      variants: {
        'Crimson Text': {
          '400': [],
          '400 italic': [],
          '700': []
        }
      },
    }),
    autoprefixer,
    ctx.env === 'production' ? cssnano : false,
  ],
});
