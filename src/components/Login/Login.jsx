import { useState } from 'react';
import styles from './Login.module.css';

export function Login() {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');

    const enviar = (event) => {
        event.preventDefault();

        console.log('Email:', email);
        console.log('Senha:', password);
    };

    return (
        <div className={styles.loginWrapper}>
            <h2>Login</h2>
            <form onSubmit={enviar}>
                <div>
                    <label>Email:</label>
                        <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}                     required
                        />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};