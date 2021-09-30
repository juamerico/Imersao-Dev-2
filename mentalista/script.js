const input = document.querySelector(`[data-value]`)
let secretNumber = Math.ceil(Math.random() * 10)
let counter = 3

const form = document.querySelector(`[data-form]`)
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let message = ""

    if(input.value == secretNumber) {
        message = `Parabéns, você acertou! O número secreto era ${secretNumber}!`
        secretNumber = Math.ceil(Math.random() * 10)
        counter = 3
    } else if(input.value > secretNumber && counter !== 1) {
        counter--
        message = `Errou. O número secreto é menor. Resta(m) ${counter} tentativa(s).`
    } else if(input.value < secretNumber && counter !== 1) {
        counter--
        message = `Errou. O número secreto é maior. Resta(m) ${counter} tentativa(s).`
    } else {
        message = `Não foi desta vez... O número secreto era ${secretNumber}. Tente novamente!`
        secretNumber = Math.ceil(Math.random() * 10)
        counter = 3
    }

    print(message)
})

function print(message) {
    const result = document.querySelector(`[data-select='result']`)
    input.value = ""
    result.textContent = ""

    result.classList.remove("hide")
    const p = document.createElement("p")
    p.classList.add("text")

    p.textContent = message
    result.appendChild(p)

    console.log("Secret Number: " + secretNumber)
}

input.focus()
