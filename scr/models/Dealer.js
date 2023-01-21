class Dealer {
    // название дилерского центра
    #title: string

    // массив Vehicle, выставленных в дилерском центре
    #vehicles: Array<Vehicle>

    constructor(title) {
        this.#title = title;
        this.#vehicles = [];
    }

    get title(): string {
        return this.#title;
    }

    set title(value: string) {
        if (typeof value !== 'string') {
            throw new Error('Title must be a string');
        }
        this.#title = value;
    }

    get vehicles(): Array<Vehicle> {
        return this.#vehicles;
    }

    set vehicles(value: Array<Vehicle>) {
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
    addVehicle(vehicle: Vehicle): boolean {

    }


    /***
     * метод, который продает Vehicle с указанным vin из дилерского центра (продажа = удалить из массива #vehicles).
     * Если Vehicle с указанным vin нет в массиве #vehicles, то выбрасывает сообщение об ошибке
     * @param vin
     */
    sellVehicle(vin: number): Vehicle {

    }

    /***
     * метод, который в массиве #vehicles ищет Truck с указанным числом carryWeight и цветом color.
     * Возвращает найденный экзмепляр класса Truck либо выбрасывает сообщение об ошибке если такого Truck нет в массиве #vehicles
     * @param carryWeight
     * @param color
     */
    findTruck(carryWeight: number, color: string): Truck {

    }

    /***
     * метод, который выполняет перекрашивание экземпляра класса Bus с указанным числом vin в указанный цвет color.
     * Если такого Bus в массиве #vehicles нет, то выдает сообщение об ошибке. Иначе меняет цвет на указанный
     * @param vin
     * @param color
     */
    paintBus(vin: number, color: string): Bus {

    }

    /***
     * метод, который считает кол-во автомобилей Vehicle с указанным цветом color.
     * Если ни одного автомобиля данного цвета не найдено, возвращает число 0. Иначе возвращает кол-во автомобилей.
     * @param color
     */
    countVehiclesWithColor(color: string): number {

    }
}
