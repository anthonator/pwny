'use strict';

var objectAssign = require('object-assign'),
    rc           = require('rc');

var conf = rc('pwny');

module.exports = function(options) {
  var c = objectAssign(conf, options);

  return c;
};
