function calculaMedia() {
	const value1 = document.querySelector(`[data-value='um']`).value
	const value2 = document.querySelector(`[data-value='dois']`).value
	const value3 = document.querySelector(`[data-value='tres']`).value
	const value4 = document.querySelector(`[data-value='quatro']`).value

	return (parseFloat(value1) + parseFloat(value2) + parseFloat(value3) + parseFloat(value4)) / 4
}

function escreveMedia(media) {
	console.log(media)

	const name = document.querySelector(`[data-name]`).value
	let mensagem = ""

	if(media >= 6) {
		mensagem = `${name} aprovado(a). Média: ${media}.`
	} else {
		mensagem = `${name} reprovado(a). Média: ${media}.`
	}
	console.log(mensagem)

	const tela = document.querySelector(`[data-result='text']`)
	tela.innerText = ""
	tela.insertAdjacentHTML("afterbegin", mensagem)
}


const form = document.querySelector(`[data-form]`)

form.addEventListener("submit", function (e) {
	e.preventDefault()

	const media = calculaMedia()
	escreveMedia(media)
	toggleHide()
})

function toggleHide() {
	const form = document.querySelector(`[data-form]`)
	const result = document.querySelector(`[data-result='screen']`)

	result.classList.toggle("hide")
	form.classList.toggle("hide")
}

document.querySelector(`[data-result='goBack']`).addEventListener("click", () => toggleHide())
