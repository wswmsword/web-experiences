const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isProdMode = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProdMode ? "production" : "development",
  entry: "./index.js",
  target: "web",
  output: {
    filename: "js/[name].[fullhash:8].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
    publicPath: '',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[fullhash:8].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          isProdMode ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  optimization: {
    minimizer: [
      "...",
      new CssMinimizerPlugin(),
    ],
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  },
};
