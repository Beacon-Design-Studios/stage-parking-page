const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const postcssNesting = require('postcss-nesting');
const postcssCustomProperties = require('postcss-custom-properties');

module.exports = {
  plugins: [
    postcssImport,
    tailwindcss,
    postcssNesting,
    postcssCustomProperties,
    purgecss({
      content: ['./**/*.html'],
    }),
    autoprefixer,
  ],
};
