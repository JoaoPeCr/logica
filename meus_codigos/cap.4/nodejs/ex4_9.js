const prompt = require("prompt-sync")(); //adiciona o pacote.
const numero = Number(prompt("Número (centena): ")); //recebe a entrada. 334
if (numero < 100 || numero >= 1000) {
  console.log(`Erro.. deve ser uma centena..`); //verifica se o número é aceitável.
  return;
}
const num1 = Math.floor(numero / 100); //pega o número e divide por 100. 3
const sobra = numero % 100; //pega a sobra da outra operação. 3.34 => 34
const num2 = Math.floor(sobra / 10) * 10; //divide por dez arredondado e multiplica. 30
const num3 = Math.floor(sobra % 10) * 100; //pega a sobra da sobra e arredonda e multiplica 400
console.log(`A centena invérsa é: ${num3 + num2 + num1}`);
