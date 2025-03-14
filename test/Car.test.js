const Car = require('../lib/Car');

describe('Car', () => {
  /**
   * @type {Car}
   */
  let fiat;

  describe('constructor', () => {
    it('should return a Car instance', () => {
      fiat = new Car('Fiat', '500', new Date('2022-01-01T00:00:00.000Z'));
      expect(fiat).toBeInstanceOf(Car);
    });
  });

  describe('#clone()', () => {
    it('should return a cloned car', () => {
      const clonedFiat = fiat.clone();
      expect(clonedFiat).toBeInstanceOf(Car);
      expect(clonedFiat).toEqual(fiat);
      expect(clonedFiat).not.toBe(fiat);
    });
  });

  describe('#toString()', () => {
    it('should return a string representation of the instance', () => {
      expect(fiat.toString()).toBe('Fiat 500 from January 2022');
    });
  });
});
