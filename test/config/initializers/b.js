module.exports = function(app, config) {
  var counter = app.get('counter') || 0;

  counter += 1;

  app.set('counter', counter);
  app.set('b', counter);
};
