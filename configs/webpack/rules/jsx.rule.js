module.exports = {
  test: /\.jsx$/,
  loader: 'babel-loader',
  exclude: /(node_modules)/,
  options: {
    presets: ['@babel/preset-react'],
  },
};
