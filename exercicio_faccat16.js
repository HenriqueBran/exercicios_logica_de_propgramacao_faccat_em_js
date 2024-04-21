let macas, total;

console.log("Digite a quantidade de maçãs:");
macas = parseInt(prompt());

if (macas < 12) {
    total = macas * 1.3;
    console.log("O valor a ser pago é: R$", total.toFixed(2));
} else {
    total = macas;
    console.log("O valor a ser pago é: R$", total);
}
