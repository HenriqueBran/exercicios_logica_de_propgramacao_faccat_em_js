let valor1, valor2, valor3, temp;

console.log("Digite o primeiro valor:");
valor1 = parseFloat(prompt());

console.log("Digite o segundo valor:");
valor2 = parseFloat(prompt());

console.log("Digite o terceiro valor:");
valor3 = parseFloat(prompt());

if (valor1 > valor2) {
    temp = valor1;
    valor1 = valor2;
    valor2 = temp;
}

if (valor2 > valor3) {
    temp = valor2;
    valor2 = valor3;
    valor3 = temp;
}

if (valor1 > valor2) {
    temp = valor1;
    valor1 = valor2;
    valor2 = temp;
}

console.log("Os valores em ordem crescente são:", valor1 + ", " + valor2 + ", " + valor3);
