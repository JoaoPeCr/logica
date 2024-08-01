const frm = document.querySelector("form"); //cria a referência do form.
const resp1 = document.querySelector("h3"); //cria a referência pra saída.

frm.addEventListener("submit", (e) => { //cia o ouvinte atravéz do submit.
  e.preventDefault(); //evita o envio do form.

  const velocidadePermitida = Number(frm.inVelocidadePermitida.value); //obtém o valor do form
  const velocidadeDoCondutor = Number(frm.inVelocidadeDoCondutor.value);

  const resposta =
    velocidadeDoCondutor <= velocidadePermitida
      ? "Sem Multa"
      : velocidadePermitida / 5 + velocidadePermitida >= velocidadeDoCondutor
      ? "Multa Leve"
      : "Multa Grave";

  resp1.innerText = `Situação: ${resposta}.`;
});
