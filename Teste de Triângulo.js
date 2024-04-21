let a, b, c, mens;

console.log("Digite o valor de a:");
a = parseFloat(prompt());

console.log("Digite o valor de b:");
b = parseFloat(prompt());

console.log("Digite o valor de c:");
c = parseFloat(prompt());

if (a < b + c && b < a + c && c < a + b) {
  
    if (a === b && b === c) {
        mens = "Triângulo Equilátero";
    } else if (a === b || b === c || a === c) {
        mens = "Triângulo Isósceles";
    } else {
        mens = "Triângulo Escaleno";
    }
} else {
    mens = "Não é possível formar um triângulo";
}

console.log("Resultado para a = " + a + ", b = " + b + ", c = " + c + ": " + mens);
