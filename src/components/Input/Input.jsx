import styles from './Input.module.css'

export function InputText({ texto, value, onChange }) {
    return (
        <>

            <div className={styles.conteinerInput}>
                <label className={styles.label}>{texto}</label>
                <input className={styles.input} type="text" placeholder="Digite aqui.." value={value} onChange={onChange} />
            </div>

        </>
    );
};
export function InputNumb({ texto, value, onChange }) {
    return (
        <>

            <div className={styles.conteinerInput}>
                <label className={styles.label}>{texto}</label>
                <input className={styles.input} type="number" placeholder="Digite aqui.." value={value} onChange={onChange} />
            </div>

        </>
    );
};
export function InputSenha({ texto, value, onChange }) {
    return (
        <>

            <div className={styles.conteinerInput}>
                <label className={styles.label}>{texto}</label>
                <input className={styles.input} type="password" placeholder="Digite aqui.." value={value} onChange={onChange} />
            </div>

        </>
    );
};
export function InputEmail({ texto, value, onChange }) {
    return (
        <>

            <div className={styles.conteinerInput}>
                <label className={styles.label}>{texto}</label>
                <input className={styles.input} type="email" placeholder="Digite aqui..." nome={value} value={value} onChange={onChange} />
            </div>

        </>
    );
};
export function SelectCategoria({ texto, value, handleChange }) {
    return (
        <><div className={styles.conteinerInput}>
            <label className={styles.label}>{texto}</label>
            <select className={styles.input} value={value} onChange={handleChange}>
                <option value="...">...</option>
                <option value="CERVEJA">CERVEJA</option>
                <option value="DESTILADOS">DESTILADOS</option>
                <option value="VINHOS">VINHOS</option>
                <option value="NAO_ALCOOLICOS">NAO ALCOOLICOS</option>
                <option value="AGUAS_E_GELO">AGUAS E GELO</option>
                <option value="DRINKS_PRONTOS">DRINKS PRONTOS</option>
            </select>
        </div>
        </>
    )
}
