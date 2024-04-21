 
let hora_inicio, hora_fim, duracao;


console.log("Digite a hora de início do jogo (apenas horas inteiras):");
hora_inicio = parseInt(prompt());

console.log("Digite a hora de término do jogo (apenas horas inteiras):");
hora_fim = parseInt(prompt());


if (hora_inicio < hora_fim) {
    duracao = hora_fim - hora_inicio;
} else {
    duracao = 24 - hora_inicio + hora_fim;
}
console.log("A duração do jogo é de", duracao, "horas.");
