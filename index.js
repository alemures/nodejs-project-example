const CarResource = require('./lib/car-resource');

(async () => {
  const cars = await CarResource.getAll();
  cars.forEach((car) => {
    console.log(car.toString());
  });
})();
