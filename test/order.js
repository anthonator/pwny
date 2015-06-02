'use strict';

require('assert');

var chai   = require('chai');

var expect = chai.expect;

describe('order', function() {

  var expressEnv = expressSetup({ configPath: './test/config/initializers', order: ['b', 'a'] }, before, after);

  it('app.get(\'b\') should return a value of 1', function() {
    expect(expressEnv.app.get('b')).to.equal(1);
  });

  it('app.get(\'a\') should return a value of 2', function() {
    expect(expressEnv.app.get('a')).to.equal(2);
  });

});
