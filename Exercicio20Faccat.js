let numero1 = parseInt(prompt("Digite o primeiro número:"));
let numero2 = parseInt(prompt("Digite o segundo número:"));

if (numero1 === numero2) {
    console.log("Não pode ser digitado números iguais");
} else {o
    if (numero1 < numero2) {
        console.log("O número " + numero1 + " é menor que o número " + numero2);
    } else {
        console.log("O número " + numero2 + " é menor que o número " + numero1);
    }
}
