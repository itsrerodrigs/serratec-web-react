export function validarCadastro(cliente) {
const { cpf, dataNascimento, email, telefone, cep, numero, senha, senhaConfirm } = cliente;

    if (!cpf) {
        return "CPF é obrigatório";
    }
    if (!dataNascimento) {
        return "Data de Nascimento é obrigatória";
    }
    if (!email) {
        return "Email é obrigatório";
    }
    if (!telefone) {
        return "Telefone é obrigatório";
    }
    if (!cep) {
        return "CEP é obrigatório";
    }
    if (!numero) {
        return "Número é obrigatório";
    }
    if (!senha) {
        return "Senha é obrigatória";
    }
    if (!senhaConfirm) {
        return "Confirmação de senha é obrigatória";
    }
    if (senha !== senhaConfirm) {
        return "As senhas devem ser iguais!";
    }

    return null;
}