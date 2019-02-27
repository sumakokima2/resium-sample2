"use strict";

const path = require("path");

const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlIncludeAssetsPlugin = require("html-webpack-include-assets-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = (env, args) => {
  const prod = args.mode === "production";
  const extractCSS = new ExtractTextPlugin(`style${prod ? ".[chunkhash]" : ""}.css`);
  const cssLoaders = [
    {
      loader: "css-loader",
      options: {
        camelCase: true,
        importLoaders: 1,
        localIdentName: "[local]_[hash:base64:5]",
        minimize: false, // minimized by OptimizeCssAssetsPlugin
        modules: true,
        sourceMap: !prod,
      },
    },
    "postcss-loader",
  ];
  return {
    context: __dirname,
    devServer: {
      hot: true,
      port: 3000,
    },
    devtool: !prod ? void 0 : "eval-source-map",
    entry: "./src",
    externals: {
      cesium: "Cesium",
    },
    mode: prod ? "production" : "development",
    module: {
      rules: [
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
              ...(prod
                ? []
                : [
                    {
                      loader: "babel-loader",
                      options: {
                        babelrc: false,
                        cacheDirectory: true,
                        plugins: ["react-hot-loader/babel"],
                      },
                    },
                  ]),
              "ts-loader",
            ],
          },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: prod
            ? extractCSS.extract({
                fallback: "style-loader",
                use: cssLoaders,
              })
            : ["style-loader", ...cssLoaders],
        },
      ],
    },
    output: {
      path: path.join(__dirname, "build"),
    },
    plugins: [
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify("/cesium"),
      }),
      new CopyPlugin([
        {
          from: `node_modules/cesium/Build/Cesium${prod ? "" : "Unminified"}`,
          to: "cesium",
        },
      ]),
      new HtmlPlugin({
        template: "index.html",
      }),
      new HtmlIncludeAssetsPlugin({
        append: false,
        assets: ["cesium/Widgets/widgets.css", "cesium/Cesium.js"],
      }),
      ...(prod ? [] : [new webpack.HotModuleReplacementPlugin()]),
    ],
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.json', '.ts', '.tsx']
      }
  };
};