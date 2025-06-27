const title = document.querySelector("#title")
const details = document.querySelector("#details")
const btnSave = document.querySelector("#btn-save")
const taskList = document.querySelector("#task-list")

btnSave.addEventListener("click", () => {
    const h3 = document.createElement("h3")
    h3.innerHTML = title.value
    const p = document.createElement("p")
    p.innerHTML = details.value

    const button = document.createElement("button")
    button.innerHTML = "Удалить задачу"
    button.addEventListener("click", () => {
        button.parentNode.remove()
    })

    const div = document.createElement("div")
    div.classList.add("task")
    div.appendChild(h3)
    div.appendChild(p)
    div.appendChild(button)

    taskList.appendChild(div)

    title.value = ""
    details.value = ""
})