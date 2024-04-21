let N1, N2, N3, Media_Exercicios, Media_Aproveitamento;


console.log("Digite a nota da primeira verificação:");
N1 = parseFloat(prompt());

console.log("Digite a nota da segunda verificação:");
N2 = parseFloat(prompt());

console.log("Digite a nota da terceira verificação:");
N3 = parseFloat(prompt());

console.log("Digite a média dos exercícios:");
Media_Exercicios = parseFloat(prompt());


Media_Aproveitamento = (N1 + N2 * 2 + N3 * 3 + Media_Exercicios) / 7;


if (Media_Aproveitamento >= 9.0) {
    console.log("Conceito: A");
} else if (Media_Aproveitamento >= 7.5) {
    console.log("Conceito: B");
} else if (Media_Aproveitamento >= 6.0) {
    console.log("Conceito: C");
} else {
    console.log("Conceito: D");
}
