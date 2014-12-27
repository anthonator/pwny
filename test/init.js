var expressApp = require('./app');

global.expressSetup = function(o, before, after) {
  var env = {};

  before(function(next) {
    env.app = expressApp(o);

    env.server = env.app.listen();

    next();
  });

  after(function() {
    env.server.close();
  });

  return env;
};
