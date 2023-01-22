import Dealer from './src/Dealer.js'
import Bus from './src/Bus.js'
import Truck from './src/Truck.js'

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

// каждый элемент массива из тестовой базы данных переводим в экземпляр класса Bus.js. Сохраняем полученный массив в переменную buses
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

async function addVehicle(vehiclesArray, dealerObject) {
    for (let vehicle of vehiclesArray) {
        try {
            await dealerObject.addVehicle(vehicle);
            console.log(`Successfully added vehicle with VIN ${vehicle.vin} to dealership\n`);
        } catch (error) {
            console.log(error.message);
        }
    }
}

addVehicle(trucks, dealer)
    .then(() => {
        console.log("Trucks have been successfully added to the dealership")
        return addVehicle(buses, dealer);
    })
    .then(() => {
        console.log("Buses have been successfully added to the dealership\n")
        return dealer.findTruck(10, 'Red');
    })
    .then(truck => {
        console.log(`Truck found: ${truck.vin}\n`);
        return dealer.sellVehicle(truck.vin)
    })
    .then(soldTruck => {
        console.log(`Truck with VIN: ${soldTruck.vin} has been sold\n`);
        return dealer.countVehiclesWithColor('Yellow');
    })
    .then(count => {
        console.log(`Number of vehicles with color Yellow: ${count}\n`);
        return dealer.paintBus(6543, 'Red')
    })
    .then(bus => {
        console.log(`Bus with VIN: ${bus.vin} has been painted to ${bus.color}\n`);
        return dealer.countVehiclesWithColor('Yellow');
    })
    .then(count => {
        console.log(`Number of vehicles with color Yellow: ${count}\n`);
        return dealer.addVehicle(new Truck(12345, 'Yellow', 1200));
    })
    .then(() => {
        console.log(`Truck was successfully added\n`);
        return dealer.countVehiclesWithColor('Yellow');
    })
    .then(count => {
        console.log(`Number of vehicles with color Yellow: ${count}\n`);
    })
    .catch(error => {
        console.log(error.message);
    });
