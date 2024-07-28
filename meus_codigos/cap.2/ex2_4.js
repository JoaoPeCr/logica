const frm = document.querySelector("form")
const resposta1 = document.querySelector("resp1")

frm.addEventListener("submit", (e) => {
    const buffetPorKg = Number(frm.BuffetPorKg.value) //50 reais o kilo
    const consumoDoCliente = Number(frm.ConsumoDoCliente.value) // 500 gramas
    /* 
    50 reais / 1000 (quanto custa cada grama)
    0,5 reais por grama * 500g (o quanto o cliente gastou) 
    = 25 (quanto o cliente tem que pagar)
    */
    const valor = (buffetPorKg / 1000) * consumoDoCliente
    resp1.innerText = `Valor a Pagar fica ${valor.toFixed(2)}`

    e.preventDefault()
}
)