// cara bikin inheritance
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    getInfo() {
        return `The Car is a ${this.brand} ${this.model}`
    }
}

class ElectricCar extends Car {
    // artinya extends itu dari Car ini akan diextendsikan ke ElectricCar, berarti properties ataupun terkait variable dan parameter dari Car bisa dipakai di ElectricCar
    constructor(brand, model, batteryCapacity) {
        // cara mereuse dari parentnya yaitu car
        // super digunakan untuk untuk menunjuk object super class atau parent class, jadi super classnya yaitu class car diatas.
        super(brand, model)
        this.batteryCapacity = batteryCapacity;
    }

    getInfo() {
        return `The Car is a ${super.getInfo()} and has a battery capacity of ${this.batteryCapacity}`
    }
    // kelebihan menggunakan oop kita bisa bangun classnya di file manapun, tidak harus file yang sama
}

let myCar = new ElectricCar("Tesla", "Model S", 100);
console.log(myCar.getInfo());

// outputnya: The Car is a Tesla Model S and has a battery capacity of 100