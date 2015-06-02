'use strict';

require('assert');

var chai   = require('chai');


var expect = chai.expect;

describe('run all configs', function() {

  var expressEnv = expressSetup({ configPath: './test/config/initializers' }, before, after);

  it('app.get(\'a\') should return a numerical value', function() {
    expect(expressEnv.app.get('a')).to.be.a('number');
  });

  it('app.get(\'b\') should return a numerical value', function() {
    expect(expressEnv.app.get('b')).to.be.a('number');
  });

});
