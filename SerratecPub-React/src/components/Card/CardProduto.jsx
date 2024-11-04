
import styles from "./Card.module.css"

export function CardProduto({ nome, categoria, descricao, valorUnitario }) {
   
    return (
        <>
                <div className={styles.corpo}>
                <div className={styles.corpo2}>
                    <h2> {nome}</h2>
                    <p> {categoria} <br /></p>
                    <p> {descricao} <br /></p>
                    <p>Valor Unitário: R${valorUnitario.toFixed(2)} <br /></p>
                </div>
            </div>

        </>
    )

}