'use strict';

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;

    this.started = false;
  }

  startEngine(cb) {
    setTimeout(() => {
      this.started = true;
      cb();
    }, 50);
  }

  toString() {
    return `${this.brand} ${this.model}`;
  }
}

module.exports = Car;
