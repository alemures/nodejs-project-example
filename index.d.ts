declare module "nodejs-project-example_internal_do_not_import/utils" {
    /**
     * Returns a formated date.
     * @param {Date} date The date.
     * @returns The formatted date.
     */
    export function formatDate(date: Date): string;
}
declare module "nodejs-project-example_internal_do_not_import/Car" {
    /**
     * Car model.
     */
    export default class Car {
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
    /**
     * Perform operations in with cars.
     */
    export default class CarResource {
        /**
         * Build and returns a list of cars.
         * @returns A list of cars.
         */
        static getAll(): Promise<Car[]>;
    }
    import Car from "nodejs-project-example_internal_do_not_import/Car";
}
declare module "nodejs-project-example" {
    const _default: {
        CarResource: typeof CarResource;
        Car: typeof Car;
        formatDate(date: Date): string;
    };
    export default _default;
    import CarResource from "nodejs-project-example_internal_do_not_import/CarResource";
    import Car from "nodejs-project-example_internal_do_not_import/Car";
}
