const frm = document.querySelector("form"); //cria referencia do form.
const resp = document.querySelector("h3"); //cria referencia da saída.

frm.addEventListener("submit", (e) => { //cria ouvinte do evento "submit".
  e.preventDefault(); //evita o envio do form.

  const numero = Number(frm.inNumero.value); //obtém o valor do form.

  const resposta = numero % 2 ? "é ímpar" : "é par" //Se tiver sobra é impar, se não é par.
  
  resp.innerText = `${resposta} ${numero}`; //Saída.

});
