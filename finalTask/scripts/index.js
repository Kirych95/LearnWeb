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
const links = ["#hero", "#advantages", "#rent", "#reviews", "#contacts"]
const navLinks = document.querySelectorAll("nav a")
navLinks.forEach((link, n) => {
    link.addEventListener("click", (event) => {
        event.preventDefault()
        const element = document.querySelector(links[n])
        element.scrollIntoView({ behavior: "smooth" })
    })
})

/* Переход по ссылкам навигации бургер-меню */
const burgerLinks = document.querySelectorAll(".burger-menu a")
burgerLinks.forEach((link, n) => {
    link.addEventListener("click", (event) => {
        event.preventDefault()
        const element = document.querySelector(links[n])
        element.scrollIntoView({ behavior: "smooth" })
        burgerMenu.classList.remove("burger-menu-open")
    })
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

/* Переход по ссылкам навигации футера */
const footerLinks = document.querySelectorAll(".footer__nav a")
footerLinks.forEach((link, n) => {
    link.addEventListener("click", (event) => {
        event.preventDefault()
        const element = document.querySelector(links[n])
        element.scrollIntoView({ behavior: "smooth" })
    })
})