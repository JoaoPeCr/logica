const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const preco = Number(frm.inValor.value)
    const tempo = Number(frm.inTempo.value)

    const pagar = Math.ceil(tempo / 15) * preco

    resp1.innerText = `Valor a Pagar R$: ${pagar.toFixed(2)}`
    e.preventDefault()
})