const root = require('../helpers/root');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Module rules
const jsx_rule = require('./rules/jsx.rule');
const scss_rule = require('./rules/scss.rule');
const font_rule = require('./rules/font.rule');
const json_rule = require('./rules/json.rule');
const image_rule = require('./rules/image.rule');

module.exports = {
  entry: './src/index.jsx',

  output: {
    filename: '[name].bundle.js',
    path: root(['dist']),
  },

  module: {
    rules: [
      jsx_rule,
      scss_rule,
      image_rule,
      font_rule,
      json_rule,
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      app: root(['src', 'app']),
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
