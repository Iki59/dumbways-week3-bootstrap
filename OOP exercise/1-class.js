// cara buat class di JS

class Car {
    // anehnya kalau kita memanggil brand tanpa this disini
    // brand= ""
    // maka return dibawah akan memanggil properties brand yang diatas ini
    // karena brand ini posisinya diatas maka ngambilnya diatas, ini hirarki.
    constructor(brand, model) {
        // constructor berfungsi untuk membuat sesuatu jadi ada yang dikonstruksikan, diatas ada parameter yang dikonstruksikan yaitu brand dan model
        this.brand = brand;
        this.model = model;
        // this ini mendefinisikan propertinya sendiri yaitu brand
        // this ini membatasi variable global untuk mendefiniskan definisinya sendiri
        // artinya dia mencari secara spesifik lingkupnya yaitu lingkup car, kalau variablenya brand saja maka bisa saja memanggil brand yang diluar class
        // di class tidak boleh ada const
    }

    getInfo() {
        return `The Car is a ${this.brand} ${this.model}`
        // model akan merefernsikan ke properties diatas yaitu this.model begitu juga brand
    }
}