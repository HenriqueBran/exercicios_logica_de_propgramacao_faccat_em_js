let kg_morangos, kg_macas, preco_morangos, preco_macas, total_sem_desconto, total_com_desconto;

const PRECO_MORANGOS = 2.50;
const PRECO_MACAS = 1.80;

console.log("Digite a quantidade (em Kg) de morangos adquiridos: ");
kg_morangos = parseFloat(prompt());

console.log("Digite a quantidade (em Kg) de maçãs adquiridas: ");
kg_macas = parseFloat(prompt());

total_sem_desconto = (kg_morangos * PRECO_MORANGOS) + (kg_macas * PRECO_MACAS);

if ((kg_morangos + kg_macas) > 8 || total_sem_desconto > 25) {
    total_com_desconto = total_sem_desconto - (total_sem_desconto * 0.10);
} else {
    total_com_desconto = total_sem_desconto;
}

console.log("O valor a ser pago pelo cliente é: R$ " + total_com_desconto);
