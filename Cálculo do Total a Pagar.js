 let descricao_produto;
let quantidade_adquirida;
let preco_unitario;
let total;
let desconto;
let total_a_pagar;


console.log("Digite a descrição do produto:");
descricao_produto = prompt();

console.log("Digite a quantidade adquirida:");
quantidade_adquirida = parseInt(prompt());

console.log("Digite o preço unitário:");
preco_unitario = parseFloat(prompt());


total = quantidade_adquirida * preco_unitario;


if (quantidade_adquirida <= 5) {
    desconto = total * 0.02;
} else if (quantidade_adquirida <= 10) {
    desconto = total * 0.03;
} else {
    desconto = total * 0.05;
}


total_a_pagar = total - desconto;


console.log("Total: R$", total.toFixed(2));
console.log("Desconto: R$", desconto.toFixed(2));
console.log("Total a pagar: R$", total_a_pagar.toFixed(2));
