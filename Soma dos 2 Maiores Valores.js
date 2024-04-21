let valor1, valor2, valor3, soma_maior;

console.log("Digite o primeiro valor:");
valor1 = parseFloat(prompt());

console.log("Digite o segundo valor:");
valor2 = parseFloat(prompt());

console.log("Digite o terceiro valor:");
valor3 = parseFloat(prompt());

if (valor1 > valor2 && valor1 > valor3) {
    soma_maior = valor1 + Math.max(valor2, valor3);
} else if (valor2 > valor3) {
    soma_maior = valor2 + Math.max(valor1, valor3);
} else {
    soma_maior = valor3 + Math.max(valor1, valor2);
}

console.log("A soma dos dois maiores valores é:", soma_maior);
