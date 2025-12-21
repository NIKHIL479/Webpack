const path = require("path");

// Determine mode from environment variable
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProduction ? "production" : "development",
  entry: "./src/main.jsx",
  output: {
    path: path.resolve(__dirname, "../backend/wwwroot/build"),
    filename: "bundle.js",
    clean: true, // removes old files
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
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
};
