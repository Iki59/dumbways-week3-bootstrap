// Abstraction

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

    get model () {
        return this.#model;
    }
}

let myCar = new Car("Toyota", "Vios")
console.log(myCar.brand);
// outputnya Toyota
console.log(myCar.model);
// outputnya Vios

// nah ini yang dinamakan asbtraction dimana kita fokus hanya pada yang dipanggil saja
// brand yang keluar Toyota sedangkan model yang keluar Vios
// di abstraction ada yang namanya setter getter, dia bisa nge-set value dan bisa nge-get value