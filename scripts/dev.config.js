/**
 * @Name: development webpack config
 * @Description:
 * @author RiSusss
 * @date 2019-04-21
 */
const webpack = require("webpack"),
  WebpackDevServer = require("webpack-dev-server"),
  path = require("path"),
  htmlWebpackPlugin = require("html-webpack-plugin"),
  autoprefixer = require("autoprefixer");
const { smart: smartMerge } = require("webpack-merge");
const base = require("./base.config");

const config = smartMerge(base, {
  mode: "development",
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/dev-server",
    "./src/main.js"
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
    chunkFilename: "[name].[chunkhash:5].chunk.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, '../src')
        ],
        loader: "eslint-loader",
        enforce: 'pre'
      },
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
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // modules: false,
              // importLoaders: 1,
              // localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          }
        ]
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
});

const server = new WebpackDevServer(webpack(config), {
  hot: true,
  contentBase: "./dist"
});

server.listen(8080);
