const cssnano = require('cssnano');
const icss = require('postcss-icss-values');
const cssnext = require('postcss-cssnext'); // Includes autoprefixer

module.exports = {
  plugins: [icss, cssnext, cssnano({ preset: 'default' })],
};
