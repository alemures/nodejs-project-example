declare module "nodejs-project-example_internal_do_not_import/utils" {
    /**
     * Returns a formated date.
     * @param {Date} date The date.
     * @returns The formatted date.
     */
    export function formatDate(date: Date): string;
}
declare module "nodejs-project-example_internal_do_not_import/Car" {
    export = Car;
    /**
     * Car model.
     */
    class Car {
        /**
         * @param {string} brand The brand.
         * @param {string} model The model.
         * @param {Date} date The construction date.
         */
        constructor(brand: string, model: string, date: Date);
        brand: string;
        model: string;
        date: Date;
        /**
         * Clones the current car.
         * @returns The clonned car.
         */
        clone(): Car;
        /**
         * Returns a representation of this car as string.
         * @returns The string representing this car.
         */
        toString(): string;
    }
}
declare module "nodejs-project-example_internal_do_not_import/CarResource" {
    export = CarResource;
    /**
     * Perform operations in with cars.
     */
    class CarResource {
        /**
         * Build and returns a list of cars.
         * @returns A list of cars.
         */
        static getAll(): Promise<Car[]>;
    }
    import Car = require("nodejs-project-example_internal_do_not_import/Car");
}
declare module "nodejs-project-example" {
    const _exports: {
        CarResource: typeof import("nodejs-project-example_internal_do_not_import/CarResource");
        Car: typeof import("nodejs-project-example_internal_do_not_import/Car");
        formatDate: typeof import("nodejs-project-example_internal_do_not_import/utils").formatDate;
    };
    export = _exports;
}
