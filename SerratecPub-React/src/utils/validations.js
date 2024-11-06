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
   
    

    return null;
}