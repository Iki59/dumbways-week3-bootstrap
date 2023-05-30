class Vehicle {
    drive() {
        return "The vehicle is being driven";
    }
}

class Car extends Vehicle {
    drive() {
        return "The car is being driven"
    }
}

class ElectricCar extends Car {
    drive() {
        return "The electric car is driven silently"
    }
}

let myVehicle = new Vehicle();
let myCar = new Car();
let myElectricCar = new ElectricCar();

console.log(myVehicle.drive());
// outputnya yaitu The vehicle is being driven
console.log(myCar.drive());
// outputnya yaitu The car is being driven
console.log(myElectricCar.drive());
// outputnya The electric car is driven silently

// polymorphism disini methodnya sama yaitu drive namun outputnya berbeda
