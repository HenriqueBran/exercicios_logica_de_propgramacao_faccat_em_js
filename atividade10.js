 
let salarioMensal, reajuste, novoSalario;


console.log("Salário mensal:");
salarioMensal = parseFloat(prompt());

console.log("Percentual de reajuste:");
reajuste = parseFloat(prompt());


novoSalario = salarioMensal * (1 + reajuste / 100);


console.log("");
console.log("O salário depois de reajustado ficou:");
console.log("R$", novoSalario.toFixed(2));
