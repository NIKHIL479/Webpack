const path = require("path");
const AssetsPlugin = require('assets-webpack-plugin');

// Determine mode from environment variable
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProduction ? "production" : "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../backend/ohiohealth/wwwroot/build"),
    filename: "bundle.[contenthash].js",
    clean: true, // removes old files
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: isProduction ? false : "source-map", // source maps only in dev
  plugins: [
    new AssetsPlugin({
      path: path.resolve(__dirname, "../backend/OhioHealth/wwwroot/build"),
      filename: 'assets.json',
      prettyPrint: true,
      update: true
    })
  ],
};
