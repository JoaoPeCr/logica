const prompt = require("prompt-sync")(); //adiciona o pacote
const numero = Number(prompt("Número (centena): ")); //recebe a entrada

if (numero < 100 || numero >= 1000 ) {      //diz até onde vai o programa
  num1 = Math.floor(numero / 100)           //pega a unidade da centena (001)
  num2 = Math.floor((numero % 100) / 10)    //pega a dezena da centena  (011)
  num3 = Math.floor((num1 % 10) / 1)    
} else {
  console.log(`O número ${numero} não é centena`)
}