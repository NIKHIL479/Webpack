const path = require("path");

// Check if we are in production mode
const isProduction = process.env.NODE_ENV === "production";

module.exports = async () => {
  const { WebpackManifestPlugin } = await import('webpack-manifest-plugin');

  return {
    mode: isProduction ? "production" : "development",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "../backend/OhioHealth/wwwroot/build"),
      filename: "bundle.[contenthash].js",
      clean: true, // clears old files before build
    },
    module: {
      rules: [
        { test: /\.(js|jsx)$/, exclude: /node_modules/, use: "babel-loader" },
        { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      ],
    },
    resolve: { extensions: [".js", ".jsx"] },
    devtool: isProduction ? false : "source-map",
    plugins: [
      new WebpackManifestPlugin({
        fileName: "assets.json",
        publicPath: "/build/", // optional, prefix for asset paths
      }),
    ],
  };
};
