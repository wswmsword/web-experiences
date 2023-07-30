const path = require("path");
const devMode = process.env.NODE_ENV !== "production";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackNoModulePlugin } = require("webpack-nomodule-plugin");

const commonConfig = {
  // `devMode` is the result of process.env.NODE_ENV !== "production"
  mode: devMode ? "development" : "production",
  // entry: "./main.js",
};
// 针对旧版浏览器
// webpack.config.js
const legacyConfig = {
  name: "client-legacy",
  entry: {
    legacy: "./main.js"
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "output"),
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        // Make sure you're bundling your vendor scripts to a separate chunk,
        // otherwise this exclude pattern may break your build on the client!
        exclude: /node_modules/i,
        use: {
          loader: "babel-loader",
          options: {
            envName: "legacy" // Points to env.legacy in babel.config.js
          }
        }
      },
      // Other loaders...
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "main.html"),
      filename: "[name].html",
      scriptLoading: "module",
    }),
    new WebpackNoModulePlugin({
      filePatterns: ["**.js"]
    }),
  ],
  // Spread syntax merges commonConfig into this object.
  ...commonConfig
};
// 针对现代l浏览器
const nextConfig = {
  name: "client-next",
  entry: {
    next: "./main.js"
  },
  // Note the use of the .mjs extension for the next config.
  output: {
    filename: "index.mjs",
    path: path.resolve(__dirname, "output"),
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/i,
        exclude: /node_modules/i,
        use: {
          loader: "babel-loader",
          options: {
            envName: "next" // Points to env.next in babel.config.js
          }
        }
      },
      // Loaders go here...
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "main.html"),
      filename: "[name].html",
      scriptLoading: "module",
    }),
  ],
  // Ditto.
  ...commonConfig
};

// Slap 'em in there
module.exports = [legacyConfig, nextConfig];