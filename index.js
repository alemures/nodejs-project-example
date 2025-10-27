import * as utils from './lib/utils.js';
import Car from './lib/Car.js';
import CarResource from './lib/CarResource.js';

export default {
  ...utils,
  CarResource: CarResource,
  Car: Car,
};
