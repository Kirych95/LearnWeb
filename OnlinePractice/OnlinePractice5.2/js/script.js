const aBtn = document.querySelector("#a-btn")
const aBody = document.querySelector("#a-body")

aBtn.addEventListener('click', () => {
    aBody.classList.toggle("accordeon-body-open") //toggle - это проверка, если есть удаляет, если нет добавляет
    aBtn.classList.toggle("accordeon-btn-open")
})