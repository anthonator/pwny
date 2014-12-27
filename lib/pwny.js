/**
 * An automated interface for initializing Express configuration in a
 * maintainable and modular fashion. Each configuration can be standalone or
 * Express middleware.
 *
 * By default, Pwny will load any configuration found in the
 * ./config/initializers directory.
 *
 * @param {Object} app Express application
 * @param {Object} options Configuration values for modifying Pwny behavior
 * @public
 */

var _          = require('lodash'),
    config     = require('./config'),
    path       = require('path'),
    requireDir = require('require-dir');

module.exports = function(app, options) {
  var c     = config(options),
      dirs  = requireDir(path.resolve(c.configPath)),
      order = c.order || _.keys(dirs);

  _.each(order, function(k) {
    dirs[k](app, c);
  });
};
