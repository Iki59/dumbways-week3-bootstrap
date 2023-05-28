// Encapsulation

class Car {
    #brand = ""
    #model = ""

    constructor(brand, model) {
        this.#brand = brand;
        this.#model = model;
    }

    get brand() {
        return this.#brand;
    }

    set brand(brand) {
        if (brand === "") {
            console.log("The brand cannot be an empty string");
            return;
        }
        this.#brand = brand;
    }

    get model () {
        return this.#model;
    }

    set model(model) {
        if (model === "") {
            console.log("The model cannot be an empty string");
            return;
        }
        this.#model = model;
    }

    drve() {
        console.log(`Driving a ${this.#brand} ${this.#model}`)
    }
}

let car = new Car("Toyota", "Vios");
console.log(car.brand)
// outputnya toyota
car.brand = "Honda"
console.log(car.brand);
// outputnya honda

car.drive();
// outputnya driving a Honda Vios