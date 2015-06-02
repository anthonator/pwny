'use strict';

var objectAssign = require('object-assign'),
    rc           = require('rc');

var defaultConfig = {
  configPath: './config/initializers'
};

var conf = rc('pwny', defaultConfig);

module.exports = function(options) {
  var c = objectAssign(conf, options);

  return c;
};
