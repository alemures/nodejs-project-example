'use strict';

function Lib(name) {
  this.name = name;
}

Lib.prototype.getName = function() {
  return this.name;
};

Lib.prototype.sum = function(number1, number2) {
  return number1 + number2;
};

module.exports = Lib;
