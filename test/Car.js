'use strict';

const describe = require('mocha').describe;
const it = require('mocha').it;
const chai = require('chai');

const Car = require('../lib/Car');

describe('Car', () => {
  describe('constructor', () => {
    it('should return a Car instance', () => {
      let fiat = new Car('Fiat', '500');
      chai.expect(fiat).to.be.an.instanceof(Car);
    });
  });

  describe('#startEngine(cb)', () => {
    it('should set the attribute started to true', (done) => {
      let fiat = new Car('Fiat', '500');
      fiat.startEngine(() => {
        chai.expect(fiat.started).to.equal(true);
        done();
      });
    });
  });

  describe('#toString()', () => {
    it('should return a string representation of the instance', () => {
      let fiat = new Car('Fiat', '500');
      chai.expect(fiat.toString()).to.equal('Fiat 500');
    });
  });
});
