const CarResource = require('../lib/CarResource');

describe('CarResource', () => {
  describe('.getAll()', () => {
    it('should return a list of cars', async () => {
      const cars = await CarResource.getAll();
      expect(cars).toHaveLength(3);
    });
  });
});
