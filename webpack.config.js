/*eslint no-unused-vars: "error"*/
var webpack = require("webpack");
var path = require("path");

module.exports = {
  devtool: "inline-source-map",
  watch: true,
  context: path.resolve("core/app/"),
  entry: "./index.jsx",
  output: {
    path: path.resolve("public/assets/js/"),
    publicPath: "public/assets/js/",
    filename: "bundle.js"
  },
  module: {
    preLoaders: [
      {
        test: /(\.js$)/,
        exclude: /(node_modules|server)/,
        loader: "jshint-loader"
      }
    ],
    loaders: [
      {
        test: /(\.jsx$|\.js$)/,
        exclude: /(node_modules|server)/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|server)/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  },
  resolve: {
    extensions: [ "", ".js", ".jsx" ]
  }
};
