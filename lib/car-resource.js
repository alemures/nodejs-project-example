const Car = require('./car');

class CarResource {
  static getAll() {
    return Promise.resolve([
      new Car('Seat', 'Ibiza', new Date(2015, 5, 2)),
      new Car('Fiat', '500', new Date(2019, 2, 20)),
      new Car('Ford', 'Scort', new Date(1999, 8, 3)),
    ]);
  }
}

module.exports = CarResource;
