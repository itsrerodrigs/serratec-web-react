import styles from './Input.module.css'

export function InputText({ texto,value, onChange }) {
    return (
        <>
            
                <div className={styles.conteinerInput}>
                    <label className={styles.label}>{texto}</label>
                    <input className={styles.input} type="text" placeholder="Digite aqui.." value={value} onChange={onChange} />
                </div>
         
        </>
    );
};
export function InputNumb({ texto,value, onChange }) {
    return (
        <>
            
                <div className={styles.conteinerInput}>
                    <label className={styles.label}>{texto}</label>
                    <input className={styles.input} type="number" placeholder="Digite aqui.." value={value} onChange={onChange} />
                </div>
         
        </>
    );
};
export function InputSenha({texto,value, onChange }) {
    return (
        <>
            
                <div className={styles.conteinerInput}>
                    <label  className={styles.label}>{texto}</label>
                    <input className={styles.input} type="password" placeholder="Digite aqui.." value={value} onChange={onChange} />
                </div>
           
        </>
    );
};
export function InputEmail({ texto,value, onChange }) {
    return (
        <>
          
                <div className={styles.conteinerInput}>
                    <label className={styles.label}>{texto}</label>
                    <input className={styles.input} type="email" placeholder="Digite aqui..." nome={value} value={value} onChange={onChange} />
                </div>
       
        </>
    );
};


