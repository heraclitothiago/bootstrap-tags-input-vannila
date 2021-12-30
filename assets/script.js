const tagBtn = (classes) => {
    if (typeof(classes) == 'object') {
        const tagBtn = document.createElement("a")

        classes.btnClasses.forEach(el => tagBtn.classList.add(el))

        const fontAwesomeBtn = () => document.createElement('i')
        const btnRemove = fontAwesomeBtn()
        const btnEdit = fontAwesomeBtn()
        btnEdit.classList.add("fa", "fa-pencil", "pe-auto", "text-warning")
        btnEdit.setAttribute("onclick", "editTag(this)")
        btnRemove.classList.add("fa", "fa-trash", "text-danger", "pe-auto", "me-1")
        btnRemove.setAttribute("onclick", "removeTag(this)")

        const spanContent = document.createElement("span")
        spanContent.classList.add("pe-2")
        spanContent.innerText = classes.content
        tagBtn.append(spanContent, btnRemove, btnEdit)
        document.getElementById("teste").prepend(tagBtn)
    }
}


const bootstrapClasses = {
    btnClasses: ["btn", "btn-outline-light", "btn-sm", "text-dark", "me-2", "border-primary", "pe-none"]
}

const inputTagContent = document.querySelector("#teste > input")
const btnListeneds = ["Enter", "Tab", ";"]

inputTagContent.addEventListener("keydown", ({ key }) => {
    if (btnListeneds.includes(key) == true) {
        bootstrapClasses.content = inputTagContent.value
        inputTagContent.value = ""
        tagBtn(bootstrapClasses)
    }
})

const removeTag = target => {
    target.closest("a").remove()
}

const editTag = target => {
    inputTagContent.value = target.closest("a").innerText
    removeTag(target)
}