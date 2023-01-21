class Bus extends Vehicle {
    #maxPassengers: number


    get maxPassengers(): number {
        return this.#maxPassengers;
    }

    set maxPassengers(value: number) {
        this.#maxPassengers = value;
    }
}
