import { useState } from 'react';
import styles from './LoginPage.module.css';
import { useNavigate } from 'react-router-dom';
import { InputSenha, InputText } from '../../components/Input/Input';


export function LoginPage() {
    const [email, setEmail] = useState ('');
    const [senha, setSenha] = useState ('');
    const navigate = useNavigate();
    const handleNavigation = () => navigate('/cadastro');

    const enviar = (event) => {
        event.preventDefault();
    
    
    };

    return (
        <div className={styles.loginWrapper}>
            <h2>Login</h2>
            <form onSubmit={enviar}>
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
    );
};