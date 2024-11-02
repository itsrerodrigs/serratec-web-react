
import styles from "./Card.module.css"

export function CardProduto({ nome, categoria, descricao, qntdEstoque, valorUnitario }) {
   
    return (
        <>
                <div className={styles.corpo}>
                <div className={styles.corpo2}>
                    <h2>Nome: {nome}</h2>
                    <p>Categoria: {categoria} <br /></p>
                    <p>Descrição: {descricao} <br /></p>
                    <p>Quantidade em Estoque: {qntdEstoque} <br /></p>
                    <p>Valor Unitário: R${valorUnitario.toFixed(2)} <br /></p>
                </div>
            </div>

        </>
    )

}