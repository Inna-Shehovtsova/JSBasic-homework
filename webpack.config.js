const path = require("path");

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
};
