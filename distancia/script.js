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

	if(entrada.nextElementSibling.value === saida.nextElementSibling.value) {
		resultado = valor
	}

	if(entrada.nextElementSibling.value === "mi" && saida.nextElementSibling.value === "km") {
		resultado = valor * 1.60934
	} else if(saida.nextElementSibling.value === "mi" && entrada.nextElementSibling.value === "km") {
		resultado = valor / 1.60934
	}

	if(entrada.nextElementSibling.value === "mi" && saida.nextElementSibling.value === "m") {
		resultado = valor * 1609.34
	} else if(saida.nextElementSibling.value === "mi" && entrada.nextElementSibling.value === "m") {
		resultado = valor / 1609.34
	}

	if(entrada.nextElementSibling.value === "mi" && saida.nextElementSibling.value === "cm") {
		resultado = valor * 160934
	} else if(saida.nextElementSibling.value === "mi" && entrada.nextElementSibling.value === "cm") {
		resultado = valor / 160934
	}

	if(entrada.nextElementSibling.value === "mi" && saida.nextElementSibling.value === "in") {
		resultado = valor * 63360
	} else if(saida.nextElementSibling.value === "mi" && entrada.nextElementSibling.value === "in") {
		resultado = valor / 63360
	}

	if(entrada.nextElementSibling.value === "km" && saida.nextElementSibling.value === "m") {
		resultado = valor * 1000
	} else if(saida.nextElementSibling.value === "km" && entrada.nextElementSibling.value === "m") {
		resultado = valor / 1000
	}

	if(entrada.nextElementSibling.value === "km" && saida.nextElementSibling.value === "cm") {
		resultado = valor * 100000
	} else if(saida.nextElementSibling.value === "km" && entrada.nextElementSibling.value === "cm") {
		resultado = valor / 100000
	}

	if(entrada.nextElementSibling.value === "km" && saida.nextElementSibling.value === "in") {
		resultado = valor * 39370.1
	} else if(saida.nextElementSibling.value === "km" && entrada.nextElementSibling.value === "in") {
		resultado = valor / 39370.1
	}

	if(entrada.nextElementSibling.value === "m" && saida.nextElementSibling.value === "cm") {
		resultado = valor * 100
	} else if(saida.nextElementSibling.value === "m" && entrada.nextElementSibling.value === "cm") {
		resultado = valor / 100
	}

	if(entrada.nextElementSibling.value === "m" && saida.nextElementSibling.value === "in") {
		resultado = valor * 39.3701
	} else if(saida.nextElementSibling.value === "m" && entrada.nextElementSibling.value === "in") {
		resultado = valor / 39.3701
	}

	if(entrada.nextElementSibling.value === "cm" && saida.nextElementSibling.value === "in") {
		resultado = valor * 0.393701
	} else if(saida.nextElementSibling.value === "cm" && entrada.nextElementSibling.value === "in") {
		resultado = valor / 0.393701
	}

	saida.value = resultado

}
