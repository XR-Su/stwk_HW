const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");

const config = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "static/js/[name].[chunkhash:8].js",
    chunkFilename: '[name].[chunkhash:5].chunk.js'
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "../src/components/"),
      Assets: path.resolve(__dirname, "../assets/")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { minimize: true },
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
            name: 'static/media/[name].[hash:8].[ext]'
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
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].css',
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};

webpack(config).run();
