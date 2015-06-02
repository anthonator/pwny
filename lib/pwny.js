'use strict';

/**
 * An automated interface for initializing Express configuration in a
 * maintainable and modular fashion. Each configuration can be standalone or
 * Express middleware.
 *
 * @param {Object} app Express application
 * @param {Object} options Configuration values for modifying Pwny behavior
 * @public
 */

var config     = require('./config'),
    path       = require('path'),
    requireDir = require('require-dir');

module.exports = function(app, options) {
  var c     = config(options),
      dirs  = requireDir(path.resolve(c.configPath)),
      order = c.order || Object.keys(dirs);

  for(var i = 0; i < order.length; i++) {
    dirs[order[i]](app, c);
  }
};
