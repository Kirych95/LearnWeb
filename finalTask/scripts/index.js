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

/* Переход по ссылкам основной навигации */
const navLinks = document.querySelectorAll("nav a")
navLinks[0].addEventListener("click", (e) => {
    e.preventDefault()
    const element = document.querySelector("#hero")
    element.scrollIntoView({ behavior: "smooth" })
})
navLinks[1].addEventListener("click", (e) => {
    e.preventDefault()
    const element = document.querySelector("#advantages")
    element.scrollIntoView({ behavior: "smooth" })
})
navLinks[2].addEventListener("click", (e) => {
    e.preventDefault()
    const element = document.querySelector("#rent")
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

/* Переход по ссылкам навигации бургер-меню */
navLinks[5].addEventListener("click", (e) => {
    e.preventDefault()
    const element = document.querySelector("#hero")
    element.scrollIntoView({ behavior: "smooth" })
    burgerMenu.classList.remove("burger-menu-open")
})
navLinks[6].addEventListener("click", (e) => {
    e.preventDefault()
    const element = document.querySelector("#advantages")
    element.scrollIntoView({ behavior: "smooth" })
    burgerMenu.classList.remove("burger-menu-open")
})
navLinks[7].addEventListener("click", (e) => {
    e.preventDefault()
    const element = document.querySelector("#rent")
    element.scrollIntoView({ behavior: "smooth" })
    burgerMenu.classList.remove("burger-menu-open")
})
navLinks[8].addEventListener("click", (e) => {
    e.preventDefault()
    const element = document.querySelector("#reviews")
    element.scrollIntoView({ behavior: "smooth" })
    burgerMenu.classList.remove("burger-menu-open")
})
navLinks[9].addEventListener("click", (e) => {
    e.preventDefault()
    const element = document.querySelector("#contacts")
    element.scrollIntoView({ behavior: "smooth" })
    burgerMenu.classList.remove("burger-menu-open")
})

/* Переход по кнопкам в hero */
const heroButtons = document.querySelectorAll(".hero__buttons a")
heroButtons[0].addEventListener("click", (e) => {
    e.preventDefault()
    const element = document.querySelector("#rent")
    element.scrollIntoView({ behavior: "smooth" })
})
heroButtons[1].addEventListener("click", (e) => {
    e.preventDefault()
    const element = document.querySelector("#contacts")
    element.scrollIntoView({ behavior: "smooth" })
})

/* Слайдер преимуществ */
const elements = document.querySelectorAll(".element")
const buttons = document.querySelectorAll(".buttons button")

buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        buttons.forEach((btn) => btn.style.borderBottom = "")
        btn.style.borderBottom = "2px solid var(--primary-color)"
        for (let el of elements) {
            el.style.left = -index * 120 + "%"
        }
    })
})