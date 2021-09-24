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
    let destino1 = "EUR"
    let destino2 = "USD"

    let nomeOrigem = "Real Brasileiro"
    if(origem === "USD") nomeOrigem = "Dólar Americano"
    if(origem === "EUR") nomeOrigem = "Euro"

    if(origem === "EUR") destino1 = "BRL"
    if(origem === "USD") destino2 = "BRL"

    fetch(`https://economia.awesomeapi.com.br/last/${origem}-${destino1},${origem}-${destino2}`)
        .then(res => res.json())
        .then(dados => {
            result.classList.remove("hide")
            const valorDigitado = document.querySelector(`[data-value]`)
            for(let i in dados) {
                console.log(dados)

                const p = document.createElement("p")
                p.classList.add("text")
                const resultado = (valorDigitado.value * dados[i].high).toFixed(2)
                p.textContent = `${dados[i].name}: ${resultado}`
                result.appendChild(p)
            }
        })

    fetch(`https://economia.awesomeapi.com.br/last/BTC-${origem}`)
        .then(res => res.json())
        .then(dados => {
            result.classList.remove("hide")
            const valorDigitado = document.querySelector(`[data-value]`)
            for(let i in dados) {
                console.log(dados)

                const p = document.createElement("p")
                p.classList.add("text")
                const resultado = (valorDigitado.value / dados[i].high).toFixed(2)
                p.textContent = `Bitcoin/${nomeOrigem}: ${resultado}`
                result.appendChild(p)
            }
        })
}
