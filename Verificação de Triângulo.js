
let A = parseFloat(prompt("Digite o valor do lado A: "));
let B = parseFloat(prompt("Digite o valor do lado B: "));
let C = parseFloat(prompt("Digite o valor do lado C: "));

if (A < B + C && B < A + C && C < A + B) {
    console.log("Os valores formam um triângulo.");
} else {
    console.log("Os valores não formam um triângulo.");
}

