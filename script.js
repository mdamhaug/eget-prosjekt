/* NAVBAR */

const navLinksEl = document.querySelector(".nav-links")
const burgerEl = document.querySelector(".burger")
const closeEl = document.querySelector(".close")

burgerEl.addEventListener("click", function () {
    navLinksEl.classList.toggle("active")
    burgerEl.classList.toggle("active")
    closeEl.classList.toggle("active")
})

closeEl.addEventListener("click", function () {
    navLinksEl.classList.toggle("active")
    burgerEl.classList.toggle("active")
    closeEl.classList.toggle("active")
})

/* FAVORITTER */

const nameEls = document.querySelectorAll(".info-text span")

for (const nameEl of nameEls) {
    const heart = document.createElement("i")
    heart.classList.add("fa-regular", "fa-heart")
    nameEl.appendChild(heart)

    heart.addEventListener("click", function () {
        heart.classList.toggle("fa-regular")
        heart.classList.toggle("fa-solid")
    })
}

/* HANDLEKURV */

const shopBtnEls = document.querySelectorAll(".shop-btn")
const basketEl = document.querySelector(".basket")

let counter = 0
const displayEl = document.getElementById("display")
const emptyBtnEl = document.querySelector(".btn")

for (const shopBtnEl of shopBtnEls) {
    shopBtnEl.addEventListener("click", function () {
        basketEl.classList.add("active")
        counter += 1
        displayEl.innerHTML = counter
    })
}

emptyBtnEl.addEventListener("click", function () {
    counter = 0
    displayEl.innerHTML = counter
})

/* BILDER I INDEX */

const shoeImgEls = document.querySelectorAll(".shoe-img")
const shoeImg2Els = document.querySelectorAll(".shoe-img2")
const imgContainerEls = document.querySelectorAll(".img-container")

for (const imgContainerEl of imgContainerEls) {
    imgContainerEl.addEventListener("mouseover", function () {
        imgContainerEl.classList.toggle("active")
    })

    imgContainerEl.addEventListener("mouseout", function () {
        imgContainerEl.classList.toggle("active")
    })
}

/* SHOW MORE */

const showMoreEl = document.querySelector(".show-more")
const moreTextEl = document.querySelector(".more-text")

showMoreEl.addEventListener("click", function () {
    moreTextEl.classList.toggle("active")
})



