class Truck extends Vehicle {
    #carryWeight: number

    constructor(vin, color, carryWeight) {
        super(vin, color);
        this.#carryWeight = carryWeight;
    }


    get carryWeight(): number {
        return this.#carryWeight;
    }

    set carryWeight(value: number) {
        if (typeof value !== 'number') {
            throw new Error('Carry weight must be a number');
        }
        this.#carryWeight = value;
    }
}
