const frm = document.querySelector("form"); //cria a referência do form.
const resp = document.querySelector("h3"); //cria a referência pra saída.

frm.addEventListener("submit", (e) => { //cia o ouvinte atravéz do submit.
  e.preventDefault(); //evita o envio do form.

  const velPermitida = Number(frm.inVelPermitida.value); //obtém os valores do form.
  const velCondutor = Number(frm.inVelCondutor.value);

  if (velCondutor <= velPermitida) { 
    resp.innerText = "Situação: Sem Multa"
  } else {
    const maisVinte = velPermitida * 1.2
    if (velCondutor <= maisVinte) {
      resp.innerText = "Situação: Multa Leve"
    } else {
      resp.innerText = "Situação: Multa Grave"
    }
  }
});
