'use strict';

module.exports = function(app) {
  var counter = app.get('counter') || 0;

  counter += 1;

  app.set('counter', counter);
  app.set('b', counter);
};
