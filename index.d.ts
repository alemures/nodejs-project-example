declare module "utils" {
    export = Utils;
    class Utils {
        /**
         * @param {Date} date
         */
        static formatDate(date: Date): string;
    }
}
declare module "car" {
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
declare module "car-resource" {
    export = CarResource;
    class CarResource {
        static getAll(): any;
    }
}
