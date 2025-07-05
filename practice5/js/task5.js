const burgerMenuBtn = document.querySelector("#burger-menu-btn")
const burgerMenu = document.querySelector("#burger-menu")
const burgerMenuClose = document.querySelector("#burger-menu-close")

burgerMenuBtn.addEventListener("click", () => {
    burgerMenu.classList.add("burger-menu-open")
})

burgerMenuClose.addEventListener("click", () => {
    burgerMenu.classList.remove("burger-menu-open")
})