const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js", // Single entry syntax
  // entry: ["./src/index.js", "./src/vendor.js"], // Multi-main entry syntax
  // entry: {
  //   // Object entry syntax
  //   app: "./src/index.js",
  //   vendor: "./src/vendor.js",
  // },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
