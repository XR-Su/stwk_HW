/**
 * @Name: production webpack config
 * @Description:
 * @author RiSusss
 * @date 2019-04-21
 */
const webpack = require("webpack"),
  path = require("path"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  htmlWebpackPlugin = require("html-webpack-plugin"),
  autoprefixer = require("autoprefixer");
const { smart: smartMerge } = require("webpack-merge");
const base = require("./base.config");

const config = smartMerge(base, {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "static/js/[name].[chunkhash:8].js",
    chunkFilename: "static/js/[name].[chunkhash:5].chunk.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader?cacheDirectory=true",
          options: {
            configFile: false,
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "dynamic-import-webpack",
              "@babel/plugin-proposal-class-properties"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { minimize: true }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer({ browsers: "last 5 versions" })],
              sourceMap: true
            }
          },
          {
            loader: "less-loader"
          }
        ]
      },
      {
        test: /\.(woff|eot|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "static/media/[name].[hash:8].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "public/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash:8].css",
      chunkFilename: "static/css/[name].[contenthash:8].css"
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
});

webpack(config).run();
