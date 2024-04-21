
let avaliacao1 = parseFloat(prompt("Digite a nota da sua primeira avaliação:"));
let avaliacao2 = parseFloat(prompt("Digite a nota da sua segunda avaliação:"));

let mediaAritSimples = (avaliacao1 + avaliacao2) / 2;

if (mediaAritSimples >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

console.log("A sua média foi: " + mediaAritSimples);
