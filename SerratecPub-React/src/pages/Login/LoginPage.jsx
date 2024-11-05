import { useContext, useState } from 'react';
import styles from './LoginPage.module.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { InputSenha, InputText } from '../../components/Input/Input';
import { api } from '../../services/api';
import { AuthContext } from '../../components/context/authService';


export function LoginPage() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cliente,setCliente] =useState([]);
    const {signIn,signed}= useContext(AuthContext);
    const navigate = useNavigate();
    const enviar = (event) => {
        event.preventDefault();
        getCliente()
        
    };
    
    const handleSignIn = async(e)=>{
        e.preventDefault();
        const data = {
            email,senha,
        };
        await signIn(data);
    };
    if(signed){
        return<Navigate to='/home'/>
    }
    const getCliente = async () => {
        try {
            api.get(`/clientes/login/${email}/${senha }`)
            .then((response) => {
                setCliente(response.data);
                alert((cliente.nome));
                setEmail('');
                setSenha('');
                handleOcultar;
            });
        } catch (error) {
            console.error("Erro ao buscar produto:", error); 
        }
    }; 
    const handleOcultar = () => {
        let login = document.getElementById("logi");
        if (login.style.display == 'none') {
            login.style.display = 'flex';
        } else {
            login.style.display = "none"
        }
    }
    const handleNavigation = () => navigate('/cadastro');
    return (<>
        <div className={styles.corpo}>

            <div id='logi' className={styles.loginWrapper}>
                <h2>Login</h2>
                <form onSubmit={handleSignIn}>
                    <InputText
                        className={styles.input}
                        texto="Email: "
                        placeholder="Digite seu email"
                        value={email}
                        onChange={setEmail}
                    />
                    <div>
                        <InputSenha
                            className={styles.input}
                            texto="Senha: "
                            value={senha}
                            onChange={setSenha}
                        />
                    </div>
                    <button type="submit" className={styles.buttonEntrar}>Entrar</button>
                    <div className={styles.divCadastro}>
                        <p>Não possui login?</p>
                        <button onClick={handleNavigation} className={styles.buttonCadastro}>Cadastre-se</button>
                    </div>
                </form>
            </div>
        </div>
    </>
    );
};