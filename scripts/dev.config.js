const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");

const config = {
  mode: "development",
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/dev-server",
    "./src/main.js"
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
    chunkFilename: '[name].[chunkhash:5].chunk.js'
  },
  resolve: {
    alias: {
      Utils: path.resolve(__dirname, "../src/utils/"),
      App: path.resolve(__dirname, "../src/app/"),
      Components: path.resolve(__dirname, "../src/components/"),
      Pages: path.resolve(__dirname, "../src/pages/"),
      Assets: path.resolve(__dirname, "../assets/")
    }
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
            presets: ["@babel/preset-env"],
            plugins: [
              "dynamic-import-webpack"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", {
          loader: 'css-loader',
          options: {
            // modules: false,
            // importLoaders: 1,
            // localIdentName: '[name]_[local]_[hash:base64:5]'
          },
        },]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
            options: { singleton: true }
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer({ browsers: "last 5 versions" })],
              sourceMap: true
            }
          },
          {
            loader: "less-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.(woff|eot|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {}
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "public/index.html"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

const server = new WebpackDevServer(webpack(config), {
  hot: true,
  contentBase: "./dist"
});

server.listen(8080);
