const Utils = require('../lib/Utils');

describe('Utils', () => {
  describe('.formatDate()', () => {
    it('should format a date', () => {
      const dateString = Utils.formatDate(new Date('2022-01-01T00:00:00.000Z'));
      expect(dateString).toBe('January 2022');
    });
  });
});
