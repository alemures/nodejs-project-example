const { expect } = require('chai');
const Car = require('../lib/car');

describe('Car', () => {
  /**
   * @type {Car}
   */
  let fiat;

  describe('constructor', () => {
    it('should return a Car instance', () => {
      fiat = new Car('Fiat', '500', new Date('2022-01-01T00:00:00.000Z'));
      expect(fiat).to.be.an.instanceof(Car);
    });
  });

  describe('#clone()', () => {
    it('should return a cloned car', () => {
      const clonedFiat = fiat.clone();
      expect(clonedFiat).to.be.a.instanceof(Car);
      expect(clonedFiat).to.be.deep.equal(fiat);
      expect(clonedFiat).to.not.be.equal(fiat);
    });
  });

  describe('#toString()', () => {
    it('should return a string representation of the instance', () => {
      expect(fiat.toString()).to.equal('Fiat 500 from January 2022');
    });
  });
});
