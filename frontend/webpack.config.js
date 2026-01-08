const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = async () => {
  const { WebpackManifestPlugin } = await import('webpack-manifest-plugin');

  return {
    mode: isProduction ? "production" : "development",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "../backend/OhioHealth/wwwroot/build"),
      filename: "[name].[contenthash].js", // main JS bundle
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.(css|scss|sass)$/i,
          use: [
             MiniCssExtractPlugin.loader,
            "css-loader",     
          ],
        },
      ],
    },
    resolve: { extensions: [".js", ".jsx"] },
    devtool: isProduction ? false : "source-map",
    optimization: {
      splitChunks: {
        chunks: "all",
        minSize: Infinity,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
            enforce: true,
          },
        },
      },
      runtimeChunk: {
        name: "runtime",
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css", // separate CSS file
      }),
      new WebpackManifestPlugin({
        fileName: "assets.json",
        publicPath: "/build/",
        filter: (file) => !file.path.endsWith(".map"),
    generate: (seed, files) => {
          const manifest = {};
          files.forEach((file) => {
            if (!file.path.endsWith(".map")) {
             
              manifest[file.name] = file.path;
            }
          });
          return manifest;
        }
      }),
    ],
  };
};
