let numero1, numero2;

console.log("Digite o primeiro número:");
numero1 = parseInt(prompt());

console.log("Digite o segundo número:");
numero2 = parseInt(prompt());

if (numero1 < numero2) {
    console.log("O número", numero1, "é menor que o número", numero2);
} else {
    console.log("O número", numero2, "é menor que o número", numero1);
}
