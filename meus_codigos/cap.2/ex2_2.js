// cria referencia ao form e aos elementos h3 h4 (respostaa)
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// crua um "ouvinte" de evento, acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) =>{
    const titulo = frm.tituloDoFilme.value //obtem dados dos campos
    const duracao = Number(frm.duracaoDoFilme.value)

    const horas = Math.floor(duracao / 60) //arredonda para baixo o resultado
    const minutos = duracao % 60 //obtem o resto da divisao

    resp1.innerText = titulo //exibe as respostas
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`

    e.preventDefault() //evita que a resposta nao suma
})