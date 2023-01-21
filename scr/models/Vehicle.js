class Vehicle {
    #vin: number
    #color: string


    get vin(): number {
        return this.#vin;
    }

    set vin(value: number) {
        this.#vin = value;
    }

    get color(): string {
        return this.#color;
    }

    set color(value: string) {
        this.#color = value;
    }
}
