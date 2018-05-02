const chai = require('chai');
const { expect } = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const Car = require('../lib/Car');

describe('Car', () => {
  describe('constructor', () => {
    it('should return a Car instance', () => {
      const fiat = new Car('Fiat', '500');
      expect(fiat).to.be.an.instanceof(Car);
    });
  });

  describe('#startEngine()', () => {
    it('should set the attribute started to true', () => {
      const fiat = new Car('Fiat', '500');
      return expect(fiat.startEngine()).to.eventually.equal(true);
    });
  });

  describe('#toString()', () => {
    it('should return a string representation of the instance', () => {
      const fiat = new Car('Fiat', '500');
      expect(fiat.toString()).to.equal('Fiat 500');
    });
  });
});
