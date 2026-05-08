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

const shopBtnEls = document.querySelectorAll(".shop-btn")
const basketEl = document.querySelector(".basket")

for (const shopBtnEl of shopBtnEls) {
    shopBtnEl.addEventListener("click", function () {
        basketEl.classList.add("active")
    })

}

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