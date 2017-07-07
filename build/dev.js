var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackDevConfig = require('./webpack.dev.config');

var app = express();
var compiler = webpack(webpackDevConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/"
}))

app.listen(3000, function () {
  console.log("Listening on port 3000!");
});
