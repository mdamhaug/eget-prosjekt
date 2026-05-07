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

const shoeImgEl = document.querySelector(".shoe-img")
const shoeImg2El = document.querySelector(".shoe-img2")

shoeImgEl.addEventListener("mouseover", function () {
    shoeImgEl.classList.toggle("active")
    shoeImg2El.classList.toggle("active")
})

shoeImg2El.addEventListener("mouseout", function () {
    shoeImgEl.classList.toggle("active")
    shoeImg2El.classList.toggle("active")
})

const shopBtnEls = document.querySelectorAll(".shop-btn")
const bascetEl = document.querySelector(".bascet")

for (const shopBtnEl of shopBtnEls) {
    shopBtnEl.addEventListener("click", function () {
        bascetEl.classList.add("active")
    })

}
