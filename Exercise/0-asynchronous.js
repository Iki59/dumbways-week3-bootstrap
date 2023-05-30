// synchronous concept
// contohnya
// console.log("Hello")
// console.log("Javascript")
// console.log("Coder")

// async concept
console.log("Hello!")
setTimeout(() => {
    console.log("Javascript")
}, 5000);
console.log("Coder")
// jadi dia gk menunggu yang atas jalan dulu, bahkan coder tampil lebih duluan dari javascript
// karena javascript di set timeout, dia muncul setelah 5 detik, jadi coder akan berjalan dan tidak menunggu javascript muncul