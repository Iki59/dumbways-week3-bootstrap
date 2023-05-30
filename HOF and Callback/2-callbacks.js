// callbacks
// fungsi callbacks adalah istilah yang nantinya mengacu pada sebuah function yang dijalankan dalam function lain yang bertindak, artinya suatu function akan bejalan ketika ada function yang memanggilnya
// misal func 1 gk akan bisa jalan kalau func 2 gk dijalanin, dia nunggu func 2 dulu jalan, walaupun secara spesifik func1 bisa jalan sendiri
// tapi ketika kita memakai callback function, maka function yang memanggil function utamanya tidak perlu punya nama, anonymous function

function hello() {
    console.log("Hello World!")
}

function goodbye() {
    console.log("Goodbye World!")
}

// terus cara bikin callbacknya gimana, yaitu dengan cara ubah fungsi diatas menjadi parameter kemudian memanggilnya di fungsi ini
function print(callback) {
    callback()
}

print(hello)
print(goodbye)
// fungsi yang udah kita buat diatas dipanggilnya dalam fungsi ini
// callback tidak boleh lebih dari sekali misal kita membuat function copy(callback)
// terus bagian print jadi print(copy(hello), dia gk bisa, coba cek ss.
