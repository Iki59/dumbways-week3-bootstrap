// async await adalah sebuah fitur dalam js yang memudahkan kita menangani proses asynchronous, yaitu sebuah sintas khusus untuk menangani promise agar sintaksnya lebih rapi
// sebuah fitur dari javascript yang memudahkan dalam async
// adalah gabungan dari async dan promise dalam bentuk yang lebih simpel
// async await? the point is async await is simply other to call promise but it looks like in synchronous way.

let condition = true;

let promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve("Promise is resolved")
    } else {
        reject("Promise is rejected")
    }
})


// if we previously call the promise like this:
// promise.then((value) => {
//     console.log(value)
// }).catch((reason) => {
//     console.log(reason)
// })

// now, with async-await, we can call it like this:
async function asyncFunction() {
    const response = await promise;  //disini kita membuat fungsinya jadi async
    console.log(response)
}
// diatas bentuknya seperti synchronous tapi diberi await supaya ditandai menjadi asynchronous
// kembalinya hanya true saja, kalau tanpa await outputnya langsung promisenya, promisenya yang di consol
// intinya kita pakai asynchronous itu untuk menangkap error pada sebuah fitur, seperti di youtube kalau internet kita mati kemudian direfresh maka youtube menampilkan error dengan tampilang not connected etc


asyncFunction() //we call the function here