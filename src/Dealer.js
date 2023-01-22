import Vehicle from "./Vehicle.js";
import Bus from "./Bus.js";
import Truck from "./Truck.js";

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
        return this.#vehicles
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
     * @param vehicle: boolean
     */
    addVehicle(vehicle) {
        if (!(vehicle instanceof Vehicle)) {
            throw new Error('Invalid vehicle object');
        }
        console.log(`Adding vehicle ${vehicle.vin}...`)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.vehicles.findIndex(v => v.vin === vehicle.vin) !== -1) {
                    reject(new Error(`A vehicle with VIN: ${vehicle.vin} already exists in the dealership`));
                } else {
                    this.vehicles.push(vehicle);
                    resolve(true);
                }
            }, 1000);
        });
    }


    /***
     * метод, который продает Vehicle с указанным vin из дилерского центра (продажа = удалить из массива #vehicles).
     * Если Vehicle с указанным vin нет в массиве #vehicles, то выбрасывает сообщение об ошибке
     * @param vin: Vehicle
     */
    sellVehicle(vin) {
        if (typeof vin !== 'number') {
            throw new Error('VIN must be a number');
        }
        console.log(`Selling truck ${vin}...`)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const vehicleIndex = this.vehicles.findIndex(vehicle => vehicle.vin === vin);
                if (vehicleIndex === -1) {
                    reject(new Error(`No vehicle with VIN: ${vin} found in the dealership`));
                } else {
                    const soldVehicle = this.vehicles.splice(vehicleIndex, 1)[0];
                    resolve(soldVehicle);
                }
            }, 1000);
        });
    }

    /***
     * метод, который в массиве #vehicles ищет Truck с указанным числом carryWeight и цветом color.
     * Возвращает найденный экзмепляр класса Truck либо выбрасывает сообщение об ошибке если такого Truck нет в массиве #vehicles
     * @param carryWeight
     * @param color
     */
    findTruck(carryWeight, color) {
        console.log('Searching for truck...')
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const truck = this.vehicles.find(vehicle =>
                    vehicle instanceof Truck &&
                    vehicle.carryWeight === carryWeight &&
                    vehicle.color === color
                );
                if (!truck) {
                    reject(new Error(`No truck with carry weight of ${carryWeight} and color ${color} found in the dealership`));
                } else {
                    resolve(truck);
                }
            }, 1000);
        });
    }

    /***
     * метод, который выполняет перекрашивание экземпляра класса Bus.js с указанным числом vin в указанный цвет color.
     * Если такого Bus.js в массиве #vehicles нет, то выдает сообщение об ошибке. Иначе меняет цвет на указанный
     * @param vin
     * @param color
     */
    paintBus(vin, color) {
        return new Promise((resolve, reject) => {
            console.log('Painting bus...');
            setTimeout(() => {
                const bus = this.vehicles.find(vehicle => vehicle.vin === vin && vehicle instanceof Bus);
                if (!bus) {
                    reject(new Error(`No bus with VIN: ${vin} found in the dealership`));
                } else {
                    bus.color = color;
                    resolve(bus);
                }
            }, 1000);
        });
    }

    /***
     * метод, который считает кол-во автомобилей Vehicle с указанным цветом color.
     * Если ни одного автомобиля данного цвета не найдено, возвращает число 0. Иначе возвращает кол-во автомобилей.
     * @param color
     */
    countVehiclesWithColor(color) {
        return new Promise((resolve) => {
            console.log('Counting vehicles...')
            setTimeout(() => {
                const vehiclesOfColor = this.vehicles.filter(vehicle => vehicle.color === color);
                resolve(vehiclesOfColor.length);
            }, 1000);
        });
    }
}

export default Dealer
