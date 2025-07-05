const mainPicture = document.querySelector("#main-picture")
const picture1 = document.querySelector("#picture-1")
const picture2 = document.querySelector("#picture-2")
const picture3 = document.querySelector("#picture-3")
const picture4 = document.querySelector("#picture-4")
const picture5 = document.querySelector("#picture-5")

picture1.addEventListener("click", () => {
    mainPicture.src = picture1.src
})

picture2.addEventListener("click", () => {
    mainPicture.src = picture2.src
})

picture3.addEventListener("click", () => {
    mainPicture.src = picture3.src
})

picture4.addEventListener("click", () => {
    mainPicture.src = picture4.src
})

picture5.addEventListener("click", () => {
    mainPicture.src = picture5.src
})