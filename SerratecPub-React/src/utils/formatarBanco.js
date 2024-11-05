export function formatarBanco(cliente){
    let { cpf, dataNascimento, telefone, cep} = cliente;


    if (cliente) {
        cpf = cpf.replace(/\D/g, '');
        dataNascimento = dataNascimento.replace(/\D/g, '');
        dataNascimento = dataNascimento.replace(/(\d{2})(\d{2})(\d{4})/, '$3-$2-$1');
        telefone = telefone.replace(/\D/g, '');
        cep = cep.replace(/\D/g, '');
        return {...cliente, cpf, dataNascimento, telefone, cep };
    }
}