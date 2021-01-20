const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

const prod = common.map(x => merge(x, {mode: "production"}))

module.exports = prod