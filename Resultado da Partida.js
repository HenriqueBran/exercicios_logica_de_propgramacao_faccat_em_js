let time1, time2, gols_time1, gols_time2;

console.log("Digite o nome do primeiro time:");
time1 = prompt();

console.log("Digite o nome do segundo time:");
time2 = prompt();

console.log("Digite o número de gols marcados pelo " + time1 + ":");
gols_time1 = parseInt(prompt());

console.log("Digite o número de gols marcados pelo " + time2 + ":");
gols_time2 = parseInt(prompt());

if (gols_time1 > gols_time2) {
    console.log("O vencedor é:", time1);
} else if (gols_time2 > gols_time1) {
    console.log("O vencedor é:", time2);
} else {
    console.log("EMPATE");
}
