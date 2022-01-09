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

class Utils {
  static formatDate(date) {
    return `${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;
  }
}

module.exports = Utils;
