const path = require('path');

module.exports = (pathElements = []) => {
  return path.resolve(__dirname,'..', '..', ...pathElements);
}
