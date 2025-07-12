/* Бургер-меню */
const burgerMenuBtn = document.querySelector("#burger-menu-btn")
const burgerMenu = document.querySelector("#burger-menu")
const burgerMenuClose = document.querySelector("#burger-menu-close")

burgerMenuBtn.addEventListener("click", () => {
    burgerMenu.classList.toggle("burger-menu-open")
})

burgerMenuClose.addEventListener("click", () => {
    burgerMenu.classList.remove("burger-menu-open")
})

/* Переход по ссылкам навигации */
const navLinks = document.querySelectorAll("nav a")
navLinks[0].addEventListener("click", (e) => {
    e.preventDefault()
    const element = document.querySelector("#hero")
    element.scrollIntoView({ behavior: "smooth" })
})
navLinks[1].addEventListener("click", (e) => {
    e.preventDefault()
    const element = document.querySelector("#about")
    element.scrollIntoView({ behavior: "smooth" })
})
navLinks[2].addEventListener("click", (e) => {
    e.preventDefault()
    const element = document.querySelector("#menu")
    element.scrollIntoView({ behavior: "smooth" })
})
navLinks[3].addEventListener("click", (e) => {
    e.preventDefault()
    const element = document.querySelector("#reviews")
    element.scrollIntoView({ behavior: "smooth" })
})
navLinks[4].addEventListener("click", (e) => {
    e.preventDefault()
    const element = document.querySelector("#contacts")
    element.scrollIntoView({ behavior: "smooth" })
})