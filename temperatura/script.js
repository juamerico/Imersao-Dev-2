const input1 = document.querySelector(`[data-value='um']`)
const input2 = document.querySelector(`[data-value='dois']`)

input1.addEventListener("input", () => {
    converteValor(input1.value, input1, input2)
})

input2.addEventListener("input", () => {
    converteValor(input2.value, input2, input1)
})

function converteValor(valor, entrada, saida) {
	let resultado = 0

	if(entrada.nextElementSibling.value === saida.nextElementSibling.value ) {
		resultado = valor
	}

	if(entrada.nextElementSibling.value === "C" && saida.nextElementSibling.value === "F" || saida.nextElementSibling.value === "C" && entrada.nextElementSibling.value === "F") {
		resultado = (valor * 9/5) + 32
	}

	if(entrada.nextElementSibling.value === "C" && saida.nextElementSibling.value === "K" || saida.nextElementSibling.value === "C" && entrada.nextElementSibling.value === "K") {
		resultado = parseFloat(valor) + 273.15
	}

	if(entrada.nextElementSibling.value === "F" && saida.nextElementSibling.value === "K" || saida.nextElementSibling.value === "F" && entrada.nextElementSibling.value === "K") {
		resultado = (parseFloat(valor) - 32) * 5/9 + 273.15
	}

	saida.value = resultado

}

