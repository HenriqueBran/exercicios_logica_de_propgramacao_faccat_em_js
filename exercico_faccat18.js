let ano_nascimento, ano_atual, ano_calculo;

console.log("Digite o seu ano de nascimento:");
ano_nascimento = parseInt(prompt());

console.log("Digite o ano atual:");
ano_atual = parseInt(prompt());

ano_calculo = ano_atual - ano_nascimento;

if (ano_calculo < 0) {
    console.log("Valor inválido!");
} else {
    if (ano_calculo < 16) {
        console.log("Voto proibido!");
    } else {
        if (ano_calculo < 18) {
            console.log("Voto opcional!");
        } else {
            console.log("Voto obrigatório!");
        }
    }
}
