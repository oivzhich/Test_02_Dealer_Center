import Vehicle from "./Vehicle.js";

class Bus extends Vehicle {
    #maxPassengers

    constructor(vin, color, maxPassengers) {
        super(vin, color);
        this.#maxPassengers = maxPassengers;
    }


    get maxPassengers() {
        return this.#maxPassengers;
    }

    set maxPassengers(value) {
        if (typeof value !== 'number') {
            throw new Error('maxPassengers must be a number');
        }
        this.#maxPassengers = value;
    }
}

export default Bus
