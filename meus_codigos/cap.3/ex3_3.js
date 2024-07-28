const prompt = require("prompt-sync")()

const salario = Number(prompt("Salário do Funcionário R$: "))
const tempo = Number(prompt("Quanto tempo de trabalho? (anos): "))

const quadrienio = Math.floor(tempo / 4)
const acrescimo = salario / 100 * quadrienio

console.log(`Pela quantidade de quadriênios: ${quadrienio}`);
console.log(`Seu novo salário fica R$ ${acrescimo + salario.toFixed(2)}`);

