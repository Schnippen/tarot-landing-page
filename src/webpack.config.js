/* const Dotenv = require("dotenv-webpack");
const pathBrowserify = require.resolve("path-browserify");
const osBrowserify = require.resolve("os-browserify/browser");
const cryptoBrowserify = require.resolve("crypto-browserify");

module.exports = {
  // other webpack configuration options

  resolve: {
    fallback: {
      crypto: false,
    },
  },

  plugins: [
    new Dotenv({
      systemvars: true,
      fallback: {
        path: pathBrowserify,
        os: osBrowserify,
        crypto: cryptoBrowserify,
      },
    }),
  ],

  // other webpack configuration options
};
 */