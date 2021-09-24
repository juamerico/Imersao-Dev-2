const input = document.querySelector(`[data-value]`)
const secretNumber = Math.floor(Math.random() * 11)
const result = document.querySelector(`[data-select='result']`)

function printResult(message) {
    input.value = ""
    result.textContent = ""
    
    result.classList.remove("hide")
    const p = document.createElement("p")
    p.classList.add("text")

    p.textContent = message
    result.appendChild(p)
}

const form = document.querySelector(`[data-form]`)
form.addEventListener("submit", (e) => {
    e.preventDefault()


    let message = ""
    if(input.value > secretNumber) {
        message = "Errou. O número secreto é menor."
    } else if(input.value < secretNumber) {
        message = "Errou. O número secreto é maior."
    } else {
        message = `Parabéns, você acertou! O número secreto era ${secretNumber}!`
    }

    printResult(message)
})

input.focus()
