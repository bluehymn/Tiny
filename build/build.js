var webpack = require('webpack');
var webpackProdConfig = require('./webpack.prod.config');

webpack(webpackProdConfig, function(err, data){
  console.log(err)
});