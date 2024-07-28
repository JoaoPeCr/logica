// cria referencia ao form e aos elementos de resposta (pelo seu id)
const frm = document.querySelector("form")
const rsp1 = document.querySelector("#resp1")
const rsp2 = document.querySelector("#resp2")
const rsp3 = document.querySelector("#resp3")

// cria um "ouvinte" de evento, acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
    const veiculo = frm.modeloDoCarro.value //entrada
    const valor = Number(frm.preco.value)

    const entrada = valor / 2 //calculo
    const parcela = entrada / 12

    rsp1.innerText = `Promoção: ${veiculo}` //resposta (saida)
    rsp2.innerText = `Entrada de RS: ${entrada.toFixed(2)}`
    rsp3.innerText = `+12x de RS ${parcela.toFixed(2)}`
    e.preventDefault()
})