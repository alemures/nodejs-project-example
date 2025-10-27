import Car from './Car.js';

/**
 * Perform operations in with cars.
 */
export default class CarResource {
  /**
   * Build and returns a list of cars.
   * @returns A list of cars.
   */
  static getAll() {
    return Promise.resolve([
      new Car('Seat', 'Ibiza', new Date(2015, 5, 2)),
      new Car('Fiat', '500', new Date(2019, 2, 20)),
      new Car('Ford', 'Scort', new Date(1999, 8, 3)),
    ]);
  }
}
