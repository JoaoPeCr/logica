const prompt = require("prompt-sync")(); //adiciona o pacote
const numero = Number(prompt("Número (centena): ")); //recebe a entrada 334

if (numero > 100 || numero < 1000 ) {      //diz até onde vai o programa
  num1 = Math.floor(numero / 100)           //pega a unidade da centena (001) 3
  num2 = Math.floor((numero % 100) / 10)    //pega a dezena da centena  (010) 3
  num4 = ((numero % 100) / 10)
  num3 = Math.floor((num4 % 10) / 1)        //pega a centena do centena (100) 4
  console.log("A centena invérsa é: ")
} else {
  console.log(`O número ${numero} não é centena`)
}