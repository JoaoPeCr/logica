const frm = document.querySelector("form") //Criei a referência do form.
const resp1 = document.querySelector("outTempo") //Criei a referência da saída.
const resp2 = document.querySelector("outTroco") //Criei a referência da saída2.

frm.addEventListener("submit", (e) => { //Criei o ouvinte.
  e.preventDefault() //Evita o envio do form.

  const valor = Number(frm.inValor.value) //Busquei o valor do form

   const meiaHora = 30
   const umaHora = 60
   const duasHoras = 120

   const resto = valor % 3

   if (valor < 1) {
    resp1.innerText = "Valor insuficiente"
    return
   }
  
  let tempo
  if 
  
})