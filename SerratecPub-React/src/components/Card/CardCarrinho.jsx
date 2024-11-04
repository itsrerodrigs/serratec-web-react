import styles from "./Card.module.css"

export function Carrinho({ nome, categoria, descricao, qntd, valor, handle }) {

    return (
        <>
            <div className={styles.corpo}>
                <div className={styles.corpo2}>
                    <h2>Nome: {nome}</h2>
                    <p>Categoria: {categoria} <br /></p>
                    <p>Descrição: {descricao} <br /></p>
                    <p>Quantidade: {qntd} <br /></p>
                    <p>Valor R${valor} <br /></p>
                </div>
                <button onClick={handle}>✖</button>
            </div>
        
    
        </>
    )
}