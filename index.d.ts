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
        clone(): import("lib/Car");
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
    export const CarResource: {
        new (): import("lib/CarResource");
        getAll(): Promise<import("lib/Car")[]>;
    };
    export const Car: {
        new (brand: string, model: string, date: Date): import("lib/Car");
    };
    export const Utils: {
        new (): import("lib/Utils");
        formatDate(date: Date): string;
    };
}
