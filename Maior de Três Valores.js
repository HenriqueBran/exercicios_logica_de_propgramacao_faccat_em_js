let valor1, valor2, valor3, maior;

console.log("Digite o primeiro valor:");
valor1 = parseFloat(prompt());

console.log("Digite o segundo valor:");
valor2 = parseFloat(prompt());

console.log("Digite o terceiro valor:");
valor3 = parseFloat(prompt());


if (valor1 > valor2 && valor1 > valor3) {
    maior = valor1;
} else if (valor2 > valor3) {
    maior = valor2;
} else {
    maior = valor3;
}

console.log("O maior valor é:", maior);
