const login = document.querySelector("login")
const password = document.querySelector("#password")
const passwordErrors = document.querySelector("#password-errors")
const repeatPassword = document.querySelector("#repeat-password")
const repeatPasswordErrors = document.querySelector("#repeat-password-errors")
const registerBtn = document.querySelector("#register-btn")

registerBtn.addEventListener("click", () => {

    const equalPassword = password.value == repeatPassword.value

    if (equalPassword) {
        repeatPasswordErrors.innerHTML = ""
    } else {
        repeatPasswordErrors.innerHTML = "Пароли не совпадают"
    }

    passwordErrors.innerHTML = ""

    const hasLength = password.value.length > 8
    if (!hasLength == true) {
        passwordErrors.innerHTML += "Длина пароля менее 8 <br>"
    }

    const hasNumber = /[0-9]/.test(password.value)
    if (!hasNumber) {
        passwordErrors.innerHTML += "Нет в пароле цифр <br>"
    }

    const hasBigLetter = /[A-Z]/.test(password.value)

    if (!hasBigLetter) {
        passwordErrors.innerHTML += "Нет в пароле больших букв"
    }

    // ! не
    // && и
    // || или

    if (equalPassword && hasLength && hasNumber && hasBigLetter) {
        alert("Аккаунт зарегистрирован")
    }
})

const timeBlock = document.querySelector("#time")
/* timeBlock.innerHTML = new Date() */
setInterval(() => {
    const hours = new Date().getHours()
    if (hours < 6) {
        timeBlock.innerHTML = new Date() + "<br>Доброй ночи"
    } else if (hours < 12) {
        timeBlock.innerHTML = new Date() + "<br>Доброе утро"
    } else if (hours < 18) {
        timeBlock.innerHTML = new Date() + "<br>Добрый день"
    } else {
        timeBlock.innerHTML = new Date() + "<br>Добрый вечер"
    }
}, 1000)