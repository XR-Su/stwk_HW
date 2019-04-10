const webpack = require('webpack')
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, '../src/components/'),
      Assets: path.resolve(__dirname, '../assets/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [{
          loader: "style-loader",
          options: { singleton: true }
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader", options: {
            strictMath: true,
            noIeCompat: true
          }
        }]
      },
      {
        test: /\.(woff|eot|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {}
        }
      },
      // {
      //   test: /\.($/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 50000, //小于50K的 都打包
      //         name: '[hash:8].[name].[ext]'
      //       }
      //     }
      //   ]
      // }
    ]
  },
  devServer: {
    hot: true,
    contentBase: './dist'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};