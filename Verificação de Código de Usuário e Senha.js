let codigo_usuario, senha;

console.log("Digite o código de usuário: ");
codigo_usuario = parseInt(prompt());

if (codigo_usuario !== 1234) {
    console.log("Usuário inválido!");
} else {

    console.log("Digite a senha: ");
    senha = parseInt(prompt());

    
    if (senha !== 9999) {
        console.log("Senha incorreta");
    } else {
        console.log("Acesso permitido");
    }
}
