// promises mewakili penyelesaian atau sebuah kesalahan yang terjadi ketika mengoperasikan asynchronous

let condition = true;

let promise = new Promise(function(resolve, reject) {
    if (condition) {
        resolve("Promise is resolved")
    } else {
        reject("Promise is rejected")
    }
})



// console.log(promise)
// what? why it is appear promise? Because we need toi wait it, that's the point of Promise. We should acces it like this
// intinya poin promise kita harus nunggu dulu promisenya berjalan, nunggu resolve atau rejectnya itu, kemudian dieksekusi dibawah
promise
    .then(function(value) {
    console.log(value)
    return alert("The promise is fulfilled")
}).catch(function(reason) {
    console.log(reason)
})
// kalau conditionnya true makan resolve yang akan diproses, kalau false itu reject