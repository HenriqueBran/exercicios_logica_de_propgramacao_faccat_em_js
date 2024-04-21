let valor;

console.log("Digite um valor: ");
valor = parseFloat(prompt());

if (valor > 0) {
    console.log("O valor é positivo.");
} else if (valor < 0) {
    console.log("O valor é negativo.");
} else {
    console.log("O valor é zero.");
}
