let salario_fixo, valor_vendas, comissao, salario_total;

console.log("Digite o salário fixo do vendedor:");
salario_fixo = parseFloat(prompt());

console.log("Digite o valor das vendas efetuadas pelo vendedor:");
valor_vendas = parseFloat(prompt());

if (valor_vendas <= 1500) {
    comissao = valor_vendas * 0.03;
} else {
    comissao = (1500 * 0.03) + ((valor_vendas - 1500) * 0.05);
}

salario_total = salario_fixo + comissao;

console.log("O salário total do vendedor é:", salario_total);
