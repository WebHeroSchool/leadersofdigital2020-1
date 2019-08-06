const merge = require('webpack-merge');

// Webpack configuration files
const common_config = require('./configs/webpack/webpack.common');
const develop_config = require('./configs/webpack/webpack.develop');

const mode = process.env.ENV ? process.env.ENV : 'develop';

switch(mode) {
  case 'develop': {
    return merge(common_config, develop_config);
  }

  default: {
    return common_config;
  }
}
