const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

module.exports = class Utils {
  /**
   * @param {Date} date
   */
  static formatDate(date) {
    return `${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;
  }
};
