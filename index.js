// index.js
const mandelbrot = require('@frctl/mandelbrot');

/**
 * Configure the theme
 */
const pulitoTheme = mandelbrot({
    skin: 'black',
    styles: ['default', '/pulitoTheme/style/theme.css'] // link to the default stylesheet followed by a custom one
});

/**
 * Specify a template directory to override any view templates
 */
pulitoTheme.addLoadPath(`${__dirname}/views`);

/**
 * Specify the static assets directory that contains the custom stylesheet.
 */
pulitoTheme.addStatic(`${__dirname}/assets`, '/pulitoTheme');

/**
 * Export the customised theme instance so it can be used in Fractal projects
 */
module.exports = pulitoTheme;
