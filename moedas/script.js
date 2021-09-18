const form = document.querySelector(`[data-form]`)
const result = document.querySelector(`[data-select='result']`)

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    result.textContent = ""
    // result.classList.add("hide")
    const origem = document.querySelector(`[data-select='menu']`)
    fetchAPI(origem.value)
})

function fetchAPI(origem) {
    let destino1 = "BRL"
    let destino2 = "EUR"
    let destino3 = "USD"

    if(origem === "BRL") destino1 = "BTC"
    if(origem === "EUR") destino2 = "BTC"
    if(origem === "USD") destino3 = "BTC"

    fetch(`https://economia.awesomeapi.com.br/last/${destino1}-${origem},${destino2}-${origem},${destino3}-${origem}`)
    .then(res => res.json())
    .then(dados => {
        result.classList.remove("hide")
        const valorDigitado = document.querySelector(`[data-value]`)
        for(let i in dados) {
            console.log(dados)

            const p = document.createElement("p")
            p.classList.add("text")
            p.style.marginTop = "1rem";
            const resultado = (valorDigitado.value * dados[i].high).toFixed(2)
            p.textContent = `${dados[i].name}: ${resultado}`
            result.appendChild(p)
        }
    })
}

