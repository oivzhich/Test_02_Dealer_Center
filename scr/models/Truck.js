class Truck extends Vehicle {
    #carryWeight: number


    get carryWeight(): number {
        return this.#carryWeight;
    }

    set carryWeight(value: number) {
        this.#carryWeight = value;
    }
}
