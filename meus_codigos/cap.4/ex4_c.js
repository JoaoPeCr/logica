const frm = document.querySelector("form"); //Criei a referência do form.
const resp1 = document.querySelector("#outTempo"); //Criei a referência da saída.
const resp2 = document.querySelector("#outTroco"); //Criei a referência da saída2.

frm.addEventListener("submit", (e) => { //Criei o ouvinte.

  e.preventDefault(); //Evita o envio do form.

  const valor = Number(frm.inValor.value); //Busquei o valor do form.

  if (valor < 1) {
    alert("Valor Insuficiente (no mínimo, R$ 1.00)");
    frm.inValor.focus();
    return;
  }

  //cria as variáveis.
  let tempo;
  let troco;

  if (valor >= 3.0) {
    //se o valor for maior que 3, deu 120 min e o troco.
    tempo = 120;
    troco = valor - 3.0;
  } else if (valor >= 1.75) {
    //se não se for maior que 1.75, de 60 min e o troco.
    tempo = 60;
    troco = valor - 1.75;
  } else {
    //se não, apenas de 30 e o troco.
    tempo = 30;
    troco = valor - 1.0;
  }

  // exibe as respostas
  resp1.innerText = `Tempo: ${tempo}`;
  if (troco > 0) {
    resp2.innerText = `Troco: ${troco.toFixed(2)}`;
  }
});
