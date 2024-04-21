 let x, y, z;
let resposta;

console.log("Digite o valor de x:");
x = parseInt(prompt());

console.log("Digite o valor de y:");
y = parseInt(prompt());


z = (x * y) + 5;


if (z <= 0) {
    resposta = "A";
} else if (z <= 100) {
    resposta = "B";
} else {
    resposta = "C";
}


console.log("O valor de z é:", z, "e a resposta é:", resposta);
