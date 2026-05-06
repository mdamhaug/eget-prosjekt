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