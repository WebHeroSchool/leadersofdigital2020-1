const root = require('../helpers/root');

module.exports = {
  mode: 'production',

  output: {
    filename: '[name].bundle.js',
    path: root(['dist']),
  },
};
