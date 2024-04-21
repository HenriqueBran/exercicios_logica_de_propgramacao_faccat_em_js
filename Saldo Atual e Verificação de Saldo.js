let numero_conta, saldo, debito, credito, saldo_atual;


console.log("Digite o número da conta do cliente:");
numero_conta = parseInt(prompt());

console.log("Digite o saldo atual:");
saldo = parseFloat(prompt());

console.log("Digite o débito:");
debito = parseFloat(prompt());

console.log("Digite o crédito:");
credito = parseFloat(prompt());


saldo_atual = saldo - debito + credito;

if (saldo_atual >= 0) {
    console.log("Saldo Positivo");
} else {
    console.log("Saldo Negativo");
}
