class Vehicle {
    #vin;
    #color;

    constructor(vin, color) {
        this.#vin = vin;
        this.#color = color;
    }


    get vin() {
        return this.#vin;
    }

    set vin(value) {
        if (typeof value !== 'number') {
            throw new Error('VIN must be a number');
        }
        this.#vin = value;
    }

    get color() {
        return this.#color;
    }

    set color(value) {
        if (typeof value !== 'string') {
            throw new Error('Color must be a string');
        }

        this.#color = value;
    }
}

export default Vehicle
