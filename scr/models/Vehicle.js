class Vehicle {
    #vin: number
    #color: string

    constructor(vin, color) {
        this.#vin = vin;
        this.#color = color;
    }


    get vin(): number {
        return this.#vin;
    }

    set vin(value: number) {
        if (typeof value !== 'number') {
            throw new Error('VIN must be a number');
        }
        this.#vin = value;
    }

    get color(): string {
        return this.#color;
    }

    set color(value: string) {
        if (typeof value !== 'string') {
            throw new Error('Color must be a string');
        }

        this.#color = value;
    }
}
