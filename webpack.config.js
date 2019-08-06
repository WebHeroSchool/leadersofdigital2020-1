const merge = require('webpack-merge');

// Webpack configuration files
const common_config = require('./configs/webpack/webpack.common');
const develop_config = require('./configs/webpack/webpack.develop');

const mode = process.env.ENV ? process.env.ENV : 'develop';

let config;
switch(mode) {
  case 'develop': {
    config = merge(common_config, develop_config);
    break;
  }

  default: {
    config = common_config;
    break;
  }
}

module.exports = config;
