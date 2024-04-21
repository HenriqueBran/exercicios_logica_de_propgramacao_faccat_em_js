let codigo_empregado, ano_nascimento, ano_ingresso, idade, tempo_trabalho;

console.log("Digite o número do empregado (código): ");
codigo_empregado = parseInt(prompt());

console.log("Digite o ano de nascimento do empregado: ");
ano_nascimento = parseInt(prompt());

console.log("Digite o ano de ingresso na empresa do empregado: ");
ano_ingresso = parseInt(prompt());

idade = 2024 - ano_nascimento;
tempo_trabalho = 2024 - ano_ingresso;

if (idade >= 65 || tempo_trabalho >= 30 || (idade >= 60 && tempo_trabalho >= 25)) {
    console.log("Idade: " + idade + " anos");
    console.log("Tempo de trabalho: " + tempo_trabalho + " anos");
    console.log("Requerer aposentadoria");
} else {
    console.log("Idade: " + idade + " anos");
    console.log("Tempo de trabalho: " + tempo_trabalho + " anos");
    console.log("Não requerer");
}
