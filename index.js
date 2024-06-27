const prompt = require("prompt-sync")();

let base = prompt("Base da potência: ");
let expoente = prompt("Expoente: ");

base = parseFloat(base);
expoente = parseFloat(expoente);

let resultado = Math.pow(base, expoente);

console.log(`O resultado da ${base} elevado a ${expoente} é ${resultado}`);