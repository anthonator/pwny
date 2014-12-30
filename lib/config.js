/**
 * @private
 */

var defaultConfig = {
  configPath: './config/initializers'
};

var _    = require('lodash'),
    conf = require('rc')('pwny', defaultConfig);

module.exports = function(options) {
  var c = _.assign(conf, options);

  return c;
};
