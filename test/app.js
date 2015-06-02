'use strict';

var express = require('express');

var pwny    = require('../lib/pwny');

module.exports = function(pwnyConfig) {
  var app = express();

  pwny(app, pwnyConfig);

  return app;
};
