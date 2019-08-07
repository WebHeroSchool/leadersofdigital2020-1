const merge = require('webpack-merge');

// Webpack configuration files
const common_config = require('./configs/webpack/webpack.common');
const develop_config = require('./configs/webpack/webpack.develop');
const production_config = require('./configs/webpack/webpack.production');

const mode = process.env.NODE_ENV ? process.env.NODE_ENV : 'develop';

let config;
switch(mode) {
  case 'develop': {
    config = merge(common_config, develop_config);
    break;
  }

  case 'production': {
    config = merge(common_config, production_config);
    break;
  }

  default: {
    config = common_config;
    break;
  }
}

module.exports = config;
