const root = require('../helpers/root');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Module rules
const scssRule = require('./rules/scss.rule');
const imageRule = require('./rules/image.rule');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: root(['dist']),
  },

  module: {
    rules: [ scssRule, imageRule ],
  },

  plugins: [
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: root(['src', 'index.html']),
    }),
  ],
};
