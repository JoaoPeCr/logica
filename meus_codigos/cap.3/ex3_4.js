const prompt = require("prompt-sync")()

const pesoKg = Number(prompt("Peso da ração (kg): "))
const consumoGr = Number(prompt("Consumo diário (gr): "))

const dias = Math.floor([pesoKg * 1000] / consumoGr)
const sobra = (pesoKg * 1000) % consumoGr

console.log(`Dias que duraram a ração: ${dias} dias`);
console.log(`Sabrando: ${sobra}gr`);


