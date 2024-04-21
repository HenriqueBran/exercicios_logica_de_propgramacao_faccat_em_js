let idade_homem1, idade_homem2, idade_mulher1, idade_mulher2, soma_idades, produto_idades;

console.log("Digite a idade do primeiro homem:");
idade_homem1 = parseInt(prompt());

console.log("Digite a idade do segundo homem:");
idade_homem2 = parseInt(prompt());

console.log("Digite a idade da primeira mulher:");
idade_mulher1 = parseInt(prompt());

console.log("Digite a idade da segunda mulher:");
idade_mulher2 = parseInt(prompt());

soma_idades = (idade_homem1 > idade_homem2 ? idade_homem1 : idade_homem2) + (idade_mulher1 < idade_mulher2 ? idade_mulher1 : idade_mulher2);

produto_idades = (idade_homem1 < idade_homem2 ? idade_homem1 : idade_homem2) * (idade_mulher1 > idade_mulher2 ? idade_mulher1 : idade_mulher2);

console.log("A soma das idades do homem mais velho com a mulher mais nova é:", soma_idades);
console.log("O produto das idades do homem mais novo com a mulher mais velha é:", produto_idades);
