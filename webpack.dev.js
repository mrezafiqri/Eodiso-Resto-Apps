const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "docs"),
    watchFiles: ["src/**/*"],
    open: true,
    port: 8800,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
});
