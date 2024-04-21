 
let quantidade_atual, quantidade_maxima, quantidade_minima, quantidade_media;


console.log("Digite a quantidade atual em estoque:");
quantidade_atual = parseInt(prompt());

console.log("Digite a quantidade máxima em estoque:");
quantidade_maxima = parseInt(prompt());

console.log("Digite a quantidade mínima em estoque:");
quantidade_minima = parseInt(prompt());


quantidade_media = (quantidade_maxima + quantidade_minima) / 2;

if (quantidade_atual >= quantidade_media) {
    console.log("Não efetuar compra");
} else {
    console.log("Efetuar compra");
}
