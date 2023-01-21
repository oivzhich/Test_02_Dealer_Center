class Bus extends Vehicle {
    #maxPassengers: number

    constructor(vin, color, maxPassengers) {
        super(vin, color);
        this.#maxPassengers = maxPassengers;
    }


    get maxPassengers(): number {
        return this.#maxPassengers;
    }

    set maxPassengers(value: number) {
        if (typeof value !== 'number') {
            throw new Error('maxPassengers must be a number');
        }
        this.#maxPassengers = value;
    }
}
