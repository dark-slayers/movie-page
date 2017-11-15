var webpack = require("webpack");
var path = require('path');
var config = require('./webpack.base.config.js');
config.module.rules[0].use[0].options.plugins.push('transform-remove-console');
module.exports = config;
