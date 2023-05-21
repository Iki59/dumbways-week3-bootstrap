// let namaSiswa1 = "Rizki";
// let namaSiswa2 = "Ipul";
// let namaSiswa3 = "Daeng";

// console.log(namaSiswa1);
// console.log(namaSiswa2);
// console.log(namaSiswa3);

// Array menampung lebih dari satu value
// let namaSiswa = ["Fahrul", "Faris", "Fira", "Fais"]
// console.log(namaSiswa)
// di dalam array ada namanya indeks, jadi ketika kita memanggil salah satu data di array kita panggil lagi dengan []
// console.log(namaSiswa[0])
// array selalu mulai dari indeks 0

// object
// let nama = "Erna"
// let alamat = "Jakarta Barat"
// let umur = 21

// console.log(nama);
// console.log(alamat);
// console.log(umur);
// object itu pake curly bracket
// let dataPersonal1 = {
//     nama: "Aqilah", 
//     alamat: "Jakarta Barat",
//     umur: 6
// }

// let dataPersonal2 = {
//     nama: "Ernawati",
//     alamat: "Kayu Besar",
//     umur: 21
// }

// let dataPersonal3 = {
//     nama: "Arif Rahman",
//     alamat: "Bekasi",
//     umur: 24
// }


// console.log(dataPersonal1)
// console.log(dataPersonal2)
// console.log(dataPersonal3)
// console.log(dataPersonal2.nama)
// kalau mau ambil namanya saja

// array of object
// let dataCapres = [
//     {nama: "Anies Baswedan", alamat: "Jakarta"},
//     {nama: "Ganjar Pranowo", alamat: "Jawa Tengah"}
// ];

// console.log(dataCapres);
// console.log(dataCapres[1].nama)

let dataProject = [];

function addProject(event) {
    event.preventDefault();

    let projectName = document.getElementById("input-project-title").value;
    let startDate = document.getElementById("input-project-start-date").value;
    let endDate = document.getElementById("input-project-end-date").value;
    let description = document.getElementById("input-project-content").value;
    let image = document.getElementById("input-project-image").files;

    // untuk membuat url gambar agar tampil
    image = URL.createObjectURL(image[0]);
    console.log(image);

    let project = {
        projectName,
        startDate,
        endDate,
        description,
        image,
    }

    dataProject.push(project)
    console.log(dataProject)

    renderProject()
}

function renderProject() {
    document.getElementById("contents").innerHTML = "";

    for (let index = 0; index < dataProject.length; index++)
    document.getElementById("contents").innerHTML += `

    <div class="project-list-item">
    <div class="project-image">
        <img src="${dataProject[index].image}" alt="apps" />
    </div>
    <div class="project-content">
    <div class="btn-group">
        <button class="btn-edit">Edit</button>
        <button class="btn-delete">Delete</button>
    </div>
        <h1>
         <a href="project-detail.html" target="_blank">
         ${dataProject[index].projectName}</a>
        </h1>
        <div class="detail-project-content">
        Durasi: ${dataProject[index].startDate} | ${dataProject[index].endDate}
         <p>
         ${dataProject[index]. description}
        </p>
    </div>
    </div>
    </div>
`
}