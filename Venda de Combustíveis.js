let litros_vendidos, tipo_combustivel, preco_gasolina, preco_alcool, valor_pago;

const PRECO_GASOLINA = 3.30;
const PRECO_ALCOOL = 2.90;

console.log("Digite o número de litros vendidos: ");
litros_vendidos = parseFloat(prompt());

console.log("Digite o tipo de combustível (A para Álcool, G para Gasolina): ");
tipo_combustivel = prompt().toUpperCase();

if (tipo_combustivel === 'A') {
    if (litros_vendidos <= 20) {
        valor_pago = litros_vendidos * (PRECO_ALCOOL - (PRECO_ALCOOL * 0.03));
    } else {
        valor_pago = litros_vendidos * (PRECO_ALCOOL - (PRECO_ALCOOL * 0.05));
    }
} else if (tipo_combustivel === 'G') {
    if (litros_vendidos <= 20) {
        valor_pago = litros_vendidos * (PRECO_GASOLINA - (PRECO_GASOLINA * 0.04));
    } else {
        valor_pago = litros_vendidos * (PRECO_GASOLINA - (PRECO_GASOLINA * 0.06));
    }
}

console.log("O valor a ser pago pelo cliente é: R$ " + valor_pago);
