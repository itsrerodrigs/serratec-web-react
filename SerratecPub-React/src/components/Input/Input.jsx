import styles from './Input.module.css'
import PropTypes from 'prop-types';

export function InputText({ texto, placeholder, value, onChange }) {
    return (
        <>
            <div className={styles.containerInput}>
                <label className={styles.label}>{texto}</label>
                <input 
                    className={styles.input} 
                    type="text" 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={(e) => onChange(e.target.value)} 
                />
            </div>
        </>
    );
}

export function InputNumb({ texto, placeholder, mask, value, onChange }) {
    const handleChange = (e) => {
        let newValue = e.target.value;
        if (mask) {
            newValue = newValue.replace(/\D/g, '');
            if (mask === 'telefone') {
                newValue = newValue.replace(/\D/g, ''); // Remove non-numeric characters
                newValue = newValue.replace(/^(\d{2})(\d{2})(\d{1})(\d{4})(\d{4})/, '+$1 ($2) $3 $4-$5');
                if (newValue.length > 20) {
                    newValue = newValue.slice(0, 20);
                }
            }
            if (mask === 'cep') {
                newValue = newValue.replace(/(\d{5})(\d{3})/, '$1-$2');
                if (newValue.length > 15) {
                    newValue = newValue.slice(0, 15);
                }
            }
            if (mask === 'cpf') {
                newValue = newValue.replace(/(\d{3})(\d)/, '$1.$2');
                newValue = newValue.replace(/(\d{3})(\d)/, '$1.$2');
                newValue = newValue.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
                if (newValue.length > 14) {
                    newValue = newValue.slice(0, 14);
                }
            }
            if (mask === 'numero') {
                if (newValue.length > 6) {
                    newValue = newValue.slice(0, 6);
                }
            }
        }
        onChange(newValue);
    };

    return (
        <>
            <div className={styles.containerInput}>
                <label className={styles.label}>{texto}</label>
                <input 
                    className={styles.input} 
                    type="text" 
                    mask={mask}
                    placeholder={placeholder} 
                    value={value} 
                    onChange={handleChange} 
                />
            </div>
        </>
    );
}

export function InputSenha({texto,value, onChange }) {
    return (
        <>
            <div className={styles.containerInput}>
                <label  className={styles.label}>{texto}</label>
                <input 
                    className={styles.input} 
                    type="password" 
                    placeholder="Digite aqui a senha" 
                    value={value} 
                    onChange={(e) => onChange(e.target.value)}
                />
            </div> 
        </>
    );
};

export function InputEmail({ texto, placeholder, value, onChange }) {
    return (
        <>
            <div className={styles.containerInput}>
                <label className={styles.label}>{texto}</label>
                <input 
                    className={styles.input} 
                    type="email" 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={(e) => onChange(e.target.value)} 
                />
            </div>
        </>
    );
};

export function InputDate({ texto, value, mask, onChange }) {
    const handleChange = (e) => {
        let newValue = e.target.value;
        if (mask) {
            newValue = newValue.replace(/\D/g, '');
            newValue = mask === 'data' 
                ? newValue.replace(/(\d{2})(\d{2})(\d{2})/, '$1-$2-$3')
                : newValue;
        }
        onChange(newValue);
    };
    
    return (
        <>
            <div className={styles.containerInput}>
                <label className={styles.label}>{texto}</label>
                <input 
                    className={styles.input} 
                    type="date" 
                    placeholder="Digite aqui a data:" 
                    value={value} 
                    onChange={handleChange} 
                />
            </div>
        </>
    );
}
