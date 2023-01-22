import Vehicle from "./Vehicle.js";

class Truck extends Vehicle {
    #carryWeight;

    constructor(vin, color, carryWeight) {
        super(vin, color);
        this.#carryWeight = carryWeight;
    }


    get carryWeight() {
        return this.#carryWeight;
    }

    set carryWeight(value) {
        if (typeof value !== 'number') {
            throw new Error('Carry weight must be a number');
        }
        this.#carryWeight = value;
    }
}

export default Truck
