import { formatDate } from './utils.js';

/**
 * Car model.
 */
export default class Car {
  /**
   * @param {string} brand The brand.
   * @param {string} model The model.
   * @param {Date} date The construction date.
   */
  constructor(brand, model, date) {
    this.brand = brand;
    this.model = model;
    this.date = date;
  }

  /**
   * Clones the current car.
   * @returns The cloned car.
   */
  clone() {
    return new Car(this.brand, this.model, new Date(this.date.getTime()));
  }

  /**
   * Returns a representation of this car as string.
   * @returns The string representing this car.
   */
  toString() {
    return `${this.brand} ${this.model} from ${formatDate(this.date)}`;
  }
}
