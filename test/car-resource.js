const { expect } = require('chai');
const CarResource = require('../lib/CarResource');

describe('CarResource', () => {
  describe('.getAll()', () => {
    it('should return a list of cars', () => {
      const cars = CarResource.getAll();
      return expect(cars).to.eventually.have.lengthOf(3);
    });
  });
});
