const Utils = require('./utils');

class Car {
  /**
   * @param {string} brand
   * @param {string} model
   * @param {Date} date
   */
  constructor(brand, model, date) {
    this.brand = brand;
    this.model = model;
    this.date = date;
  }

  clone() {
    return new Car(this.brand, this.model, new Date(this.date.getTime()));
  }

  toString() {
    return `${this.brand} ${this.model} from ${Utils.formatDate(this.date)}`;
  }
}

module.exports = Car;
