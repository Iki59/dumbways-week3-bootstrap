const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "https://assets.kompasiana.com/items/album/2023/02/03/1675436655926-63dd22708c39af24284b5532.png?t=o&v=400"
    , true);
    console.log(xhr);
    xhr.onload = () => {
        if (xhr.status === 200) {
            // we parsing it so it is easier to read in console
            // response vs responseText, the difference are, responseText is an older version, when response is more newer, but the output is still same/similiar.
            resolve(JSON.parse(xhr.response));
        } else {
            reject("Error loading data.");
        }
    }
    xhr.onerror = () => {
        reject("Network error.")
    }
    xhr.send();
})

async function getAllTestimonials() {
    const response = await promise;
    // console.log(response)

    let testimonialHTML = "";
    response.forEach(function(item) {
        testimonialHTML += `<div class="testimonial">
        <img
            src="${item.image}"
            class="profile-testimonial"
        />
        <p class="quote">${item.quote}</p>
        <p class="author">- ${item.author}</p>
        <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
    </div>
`;
    });

    document.getElementById("testimonials").innerHTML = testimonialHTML;
}

getAllTestimonials();

async function getFilteredTestimonials(rating) {
    const response = await promise; //dipakai disini artinya kita menunggu promisenya selesai, kalau tidak pake await itu akan ditampilkan status pending

    const testimonialFiltered = response.filter((item) => {
        return item.rating === rating;
    })
    // console.log(testimonialFiltered)

    let testimonialHTML = "";

    if (testimonialFiltered.length === 0) {
        testimonialHTML = "<h1>Data not found!</h1>";
    } else {
        testimonialFiltered.forEach((item) => {
            testimonialHTML += `<div class="testimonial">
            <img
                src="${item.image}"
                class="profile-testimonial"
            />
            <p class="quote">${item.quote}</p>
            <p class="author">- ${item.author}</p>
            <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
        </div>
    `;
        })
    }
    dosument.getElementById("testimonials").innerHTML = testimonialHTML;
}

