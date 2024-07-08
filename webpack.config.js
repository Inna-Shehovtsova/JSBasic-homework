const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  devServer: {
    static: {
      directory: path.join(__dirname, "src/img"),
    },
    compress: true,
    port: 9000,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, "src/img"), to: "src/img" },
        { from: path.resolve(__dirname, "src/style"), to: "src/style" },
      ],
    }),
  ],
};
