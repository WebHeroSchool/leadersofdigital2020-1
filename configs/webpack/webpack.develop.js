const root = require('../helpers/root');

module.exports = {
  mode: 'development',

  entry: [
    'react-hot-loader/patch',
    root(['src', 'index.jsx']),
  ],

  devServer: {
    hot: true,
    port: 9000,
  },
};
