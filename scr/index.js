class Dealer {
    // название дилерского центра
    #title;
    // массив Vehicle, выставленных в дилерском центре
    #vehicles;

    constructor(title) {
        this.#title = title;
        this.#vehicles = [];
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        if (typeof value !== 'string') {
            throw new Error('Title must be a string');
        }
        this.#title = value;
    }

    get vehicles() {
        let vehilesVins = "";
        this.#vehicles.forEach(vehile => {
            vehilesVins += `${vehile.vin} `
        })
        return vehilesVins.trim();
    }

    set vehicles(value) {
        if (!Array.isArray(value) || !value.every(v => v instanceof Vehicle)) {
            throw new Error('Invalid vehicles array');
        }
        this.#vehicles = value;
    }

    /***
     * метод, который добавляет Vehicle в дилерский центр.
     * Если Vehicle с таким vin шуже есть в базе, то выбрасывает сообщение об ошибке.
     * Иначе добавляет Vehicle в массив #vehicles
     * @param vehicle
     */
    async addVehicle(vehicle) {
        if (!(vehicle instanceof Vehicle)) {
            throw new Error('Invalid vehicle object');
        }
        const foundVehicle = this.#vehicles.find(v => v.vin === vehicle.vin);
        if (foundVehicle) {
            throw new Error(`Vehicle with VIN ${vehicle.vin} already exists in the dealership`);
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.#vehicles.push(vehicle);
        return true;
    }


    /***
     * метод, который продает Vehicle с указанным vin из дилерского центра (продажа = удалить из массива #vehicles).
     * Если Vehicle с указанным vin нет в массиве #vehicles, то выбрасывает сообщение об ошибке
     * @param vin
     */
    sellVehicle(vin) {

    }

    /***
     * метод, который в массиве #vehicles ищет Truck с указанным числом carryWeight и цветом color.
     * Возвращает найденный экзмепляр класса Truck либо выбрасывает сообщение об ошибке если такого Truck нет в массиве #vehicles
     * @param carryWeight
     * @param color
     */
    findTruck(carryWeight, color) {

    }

    /***
     * метод, который выполняет перекрашивание экземпляра класса Bus с указанным числом vin в указанный цвет color.
     * Если такого Bus в массиве #vehicles нет, то выдает сообщение об ошибке. Иначе меняет цвет на указанный
     * @param vin
     * @param color
     */
    paintBus(vin, color) {

    }

    /***
     * метод, который считает кол-во автомобилей Vehicle с указанным цветом color.
     * Если ни одного автомобиля данного цвета не найдено, возвращает число 0. Иначе возвращает кол-во автомобилей.
     * @param color
     */
    countVehiclesWithColor(color) {

    }
}

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

const DATABASE = {
    dealer: {
        title: 'Trucks & Buses Vilnius LTD'
    },
    trucks: [
        {
            vin: 1112,
            color: 'Red',
            carryWeight: 10
        },
        {
            vin: 2332,
            color: 'Yellow',
            carryWeight: 20
        },
        {
            vin: 5234,
            color: 'Green',
            carryWeight: 70
        }
    ],
    buses: [
        {
            vin: 1112,
            color: 'Green',
            maxPassengers: 50
        },
        {
            vin: 6543,
            color: 'Yellow',
            maxPassengers: 25
        }
    ]
}

const dealer = new Dealer(DATABASE.dealer.title);

console.log(`Dealer name: ${dealer.title}`);

// каждый элемент массива из тестовой базы данных переводим в экземпляр класса Bus. Сохраняем полученный массив в переменную buses
const buses = DATABASE.buses.map(bus => {
    return new Bus(bus.vin, bus.color, bus.maxPassengers);
});

// каждый элемент массива из тестовой базы данных переводим в экземпляр класса Truck. Сохраняем полученный массив в переменную trucks
const trucks = DATABASE.trucks.map(truck => {
    return new Truck(truck.vin, truck.color, truck.carryWeight);
});

console.log(`Amount of buses: ${buses.length}`);
console.log(`Amount of trucks: ${trucks.length}`);

console.log(`Amount of vehicles at dealer: ${dealer.vehicles.length}`);

dealer.addVehicle(buses[0]).then(() => {
    console.log(`Vehicle ${buses[0].vin} added to dealer`);
    console.log(`Amount of vehicles at diller: ${dealer.vehicles.length}`); // should include the 'bus' object
}).catch(error => console.log(error.message)).then(() => {
    dealer.addVehicle(buses[0]).then(() => {
        console.log(`Vehicle ${buses[0].vin} added to dealer`);
        console.log(`Amount of vehicles at diler: ${dealer.vehicles.length}`); // should include the 'bus' object
    }).catch(error => {
        console.log("Error!")
        console.log(error.message)
    });
}).then(() => {

})