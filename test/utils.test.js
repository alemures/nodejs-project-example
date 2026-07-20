import { formatDate } from '../src/utils.js';

describe('utils', () => {
  describe('.formatDate()', () => {
    it('should format a date', () => {
      const dateString = formatDate(new Date('2022-01-01T00:00:00.000Z'));
      expect(dateString).toBe('January 2022');
    });
  });
});
