class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;

    this.started = false;
  }

  startEngine() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.started = true;
        resolve(this.started);
      }, 50);
    });
  }

  toString() {
    return `${this.brand} ${this.model}`;
  }
}

module.exports = Car;
