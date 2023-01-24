declare module "lib/Utils" {
    export = Utils;
    class Utils {
        /**
         * @param {Date} date
         */
        static formatDate(date: Date): string;
    }
}
declare module "lib/Car" {
    export = Car;
    class Car {
        /**
         * @param {string} brand
         * @param {string} model
         * @param {Date} date
         */
        constructor(brand: string, model: string, date: Date);
        brand: string;
        model: string;
        date: Date;
        clone(): Car;
        toString(): string;
    }
}
declare module "lib/CarResource" {
    export = CarResource;
    class CarResource {
        static getAll(): Promise<Car[]>;
    }
    import Car = require("lib/Car");
}
declare module "nodejs-project-example" {
    export const CarResource: typeof import("lib/CarResource");
    export const Car: typeof import("lib/Car");
    export const Utils: typeof import("lib/Utils");
}
