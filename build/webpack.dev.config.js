var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: '#eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
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
