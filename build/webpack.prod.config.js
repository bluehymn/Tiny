var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  }
};
