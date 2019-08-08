const root = require('../helpers/root');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Module rules
const jsxRule = require('./rules/jsx.rule');
const scssRule = require('./rules/scss.rule');
const fontRule = require('./rules/font.rule');
const imageRule = require('./rules/image.rule');

module.exports = {
  entry: './src/index.jsx',


  module: {
    rules: [ scssRule, imageRule, fontRule, jsxRule ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      assets: root(['src', 'assets']),
    }
  },

  plugins: [
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      favicon: 'src/favicon.ico',
      filename: 'index.html',
      template: root(['src', 'index.html']),
    }),
  ],
};
