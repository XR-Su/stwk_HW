const webpack = require('webpack')
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'commonjs2' // 这个配置项的默认参数是 'var'，我们需要改成 commonjs2，这样可以通过模块系统引入这个组件。
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
  },
  externals: [nodeExternals()] //使得打包的组件中不包括任何 node_modules 里面的第三方组件，起到减小体积的作用。
};

webpack(config).run()