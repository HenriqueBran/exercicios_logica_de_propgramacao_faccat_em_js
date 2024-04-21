 
let numeroCarrosVendidos, salarioFixo, valorPorCarro, valorTotalVendas, comissao, salarioFinal;


console.log("Digite o número de carros vendidos:");
numeroCarrosVendidos = parseFloat(prompt());

console.log("Digite o valor total das vendas:");
valorTotalVendas = parseFloat(prompt());

console.log("Digite o salário fixo do vendedor:");
salarioFixo = parseFloat(prompt());

console.log("Digite o valor que ele recebe por carro vendido:");
valorPorCarro = parseFloat(prompt());


comissao = (valorTotalVendas * 0.05) + (numeroCarrosVendidos * valorPorCarro);

salarioFinal = salarioFixo + comissao;


console.log("O salário final do vendedor é:", salarioFinal.toFixed(2));
