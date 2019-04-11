const webpack = require('webpack')
const path = require('path');

const config = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, '../src/components/')
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
      }
    ]
  }
};

webpack(config).run()