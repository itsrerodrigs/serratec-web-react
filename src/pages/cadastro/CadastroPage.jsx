import { useState } from "react";
import { InputSenha, InputText } from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function CadastroPage() {
    
    const [cadastroList, setCadastroList] = useState([])
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [telefone, setTelefone] = useState('')
    const [endereco, setEndereco] = useState([])
    const [cep, setCep] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [senha, setSenha] = useState('')
    const handleCadastrar = () => {
        const novoCadastro = {
            nome,
            cpf,
            dataNascimento,
            email,
            telefone,
            endereco:{ cep, numero, complemento },  
        };
        postCliente(novoCadastro);
    }
    const navegar = useNavigate();
    const postCliente = async (cliente) => {
        const auth = btoa("Gustavo:teste"); 
    
        try {
            await api.post('/clientes/cadastrar', cliente, {
                headers: {
                    'Authorization': `Basic ${auth}`,
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            console.log('Cadastro foi um sucesso');
            setCadastroList([...cadastroList, cliente]);
        } catch (error) {
            console.error("Erro no cadastro:", error);
        }
    };
    return (
        <>
            <button onClick={() => navegar("/")}>◀</button>
            <form onSubmit={handleCadastrar}>
                <h3>Cadastro de Cliente</h3>
                <div>
                    <InputText
                        texto={"Nome: "}
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <InputText
                        texto={"CPF: "}
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                    />
                    <InputText
                        texto={"Data Nascimento: "}
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                    />
                    <InputText
                        texto={"Email: "}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputText
                        texto={"Telefone: "}
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                    />
                    <InputText
                        texto={"Cep: "}
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                    />
                    <InputText
                        texto={"Numero: "}
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                    />
                    <InputText
                        texto={"Complemento: "}
                        value={complemento}
                        onChange={(e) => setComplemento(e.target.value)}
                    />
                    <InputSenha
                        texto={"Senha:"}
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <InputSenha
                        texto={"Confirma senha:"}
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <button type="submit">Adicionar cliente</button>
                </div>
            </form>

        </>
    );
}