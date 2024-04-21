// Declarações das variáveis 
let dias, mes, ano, total_dias;

// Seção de Comandos
console.log("Escreva quantos anos completos você tem:");
ano = parseInt(prompt());

console.log("Escreva quantos meses se passaram após seu último aniversário:");
mes = parseInt(prompt());

console.log("Escreva o dia que você está:");
dia = parseInt(prompt());

// Operação
total_dias = ano * 365 + mes * 30 + dia;

// Saída
console.log("Você tem", total_dias, "dias.");
