// foreach
// hof bergantung sama satu variabel atau penyimpanan data
const arr = [1, 2, 3, 4, 5]
// jadi setiap kita menjalankan hof maka akan bergantung pada array ini
// kemduian cara pakai forEach yaitu
arr.forEach(function(item) {
    let number = item * 2
    console.log(number); //berarti data 1 menjalankan console log, 2 menjalankan console log lagi, dst jadi dia mengulangi fungsi yang sama berulang kali dari setiap datanya
})  //disini dia akan melakukan fungsi spesifik dari setiap elemen yang ada pada array, 1 dia ngapain, 2 ngapain, dst.
// forEach artinya untuk setiap, dan berarti ada kondisinya disitu, jadi kalo kita liat diatas berarti untuk tiap length arraynya, kalau cuma satu data berarti cuma jalan sekali
// bisa juga dikatakan perulangan karena mengulang setiap datanya
// forEach ibarat mencetak data dalam length data tersebut
// tugasnya item diatas sebagai penapung array, karena setiap elemen dalam length arry akan dijalankan dalam function tersebut

const arrr = ["Cat", "Dog", "Lion", "Bird"]
arrr.forEach(function(pet) {
    console.log(pet);
});

// map kurang lebihnya sama seperti forEach
const arr2 = [1, 2, 3, 4, 5]
const doubled = arr2.map ((item) => {
    return item * 2; //jadi dia mengeluarkan array baru
}) // yang awalnya (function()) disamping itu disederhanakan
console.log(doubled)
// dia memanggil dari cllback yang spesifik atau yang udah didefinisikan kemudian menjalankan fungsi tersebut dari tiap elemen dalam array yang nantinya fungsi tersebut pasti akan mengembalikan kembalian dalam bentuk sesuatu
// callback itu sendiri berarti sebuah fungsi yang kemudian dia jalankan dalam fungsi lainnya, dalam fungsi ada fungsi. fungsi yang dikembalikan dlam fungsi lainnya sebagai argumen
// jadi yang membedakan mapp dengan forEach yaitu ketika kita menggunakan forEach berarti kita menggunakan perulangan diatas dan mengubah valuenya dalam function item itu
// sedangkan dalam map itu mereturn value yang baru, artinya mereturn data baru.
// forEach sama saja seperti pengulangan jadi dia cuma manggil item yang sama kemudian mengubah menjadi item yang sama, jadi bisa jalan tanpa ditampung
// kalau di mapping itu mengubahnya menjadi data baru, jadi dia ditampung dulu

// filter (menyaring), artinya disini ada kondisi
const arr3 = [1, 2, 3, 4, 5]
const evenNumbers = arr3.filter(function(item) {
    return item % 2 == 0  //ini untuk menyeleksi ganjil genap
})
console.log(evenNumbers)
// karena disini dia akan mengembalikan elemen dari array yang kondisinya itu terpenuhi, jadi diatas semua yang dibagi dua menghasilkan nol maka elemen itulah yang diseleksi untuk dijalankan

// reduce
const arr4 = [1, 2, 3, 4, 5];
const sum = arr4.reduce(function (total, item) {
    console.log(total)
    console.log(item)

    // parameter total merupakan nilai utama dari reduce, kalau dibawah tidak dimasukkan 5 maka tiap data array ya ditambah 0
    
    return total + item;
}, 5);  //apabila dalam kurung kurawal samping dimasukkan 5 misal }, 5) maka hasilnya 20 karena ibarat 5 ini merupakan nilai awal yang diberi untuk reduce yang sebelumnya 0 tanpa penambahan itu
console.log(sum);
// dia mengembalikan satu value tapi memungkinkan untuk mengembalikan banyak data dalam array, tapi tetap dijadiin satu
// dia akan memanggil satu callback spesifik untuk semua elemen pada arraynya, jadi seua data array menggunakan satu callback spesifik yang sama
// dimana return value dari fungsi callback itu sendiri adalah hasil yang sudah diakumulasikan


