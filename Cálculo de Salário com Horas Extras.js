 
let horas_trabalhadas, salario_por_hora, salario_total, horas_extras;


console.log("Digite o número de horas trabalhadas no mês:");
horas_trabalhadas = parseFloat(prompt());

console.log("Digite o salário por hora:");
salario_por_hora = parseFloat(prompt());


if (horas_trabalhadas > 160) { 
    horas_extras = horas_trabalhadas - 160;
} else {
    horas_extras = 0;
}


salario_total = (160 * salario_por_hora) + (horas_extras * salario_por_hora * 1.5);


console.log("O salário total do funcionário é de R$", salario_total.toFixed(2));
