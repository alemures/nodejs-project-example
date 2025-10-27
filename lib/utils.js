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

/**
 * Returns a formated date.
 * @param {Date} date The date.
 * @returns The formatted date.
 */
export function formatDate(date) {
  return `${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;
}
