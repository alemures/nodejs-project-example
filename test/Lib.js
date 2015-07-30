'use strict';

var describe = require('mocha').describe;
var it = require('mocha').it;
var chai = require('chai');

var Lib = require('../lib/Lib');

describe('Lib', function() {
  describe('#getName()', function() {
    it('should be equal to the argument passed in the constructor', function() {
      var libName = 'Awesome library';
      var lib = new Lib(libName);
      chai.assert.equal(lib.getName(), libName, '#getName() equal ' + libName);
    });
  });

  describe('#sum()', function() {
    it('should be the sum of the two parameters', function() {
      var number1 = 5;
      var number2 = 4;
      var sum = number1 + number2;
      var lib = new Lib('LibName');
      chai.assert.equal(lib.sum(number1, number2), sum, '#sum() equal ' + sum);
    });
  });
});
