import { useContext } from "react"
import styles from "./Card.module.css"
import { carrinhoContext } from "../context/carrinhoContext"
import { FinalizarPedido } from "./FinalizarPedido"

export function CardCarrinho() {
    const { carrinhoItem, addItem, valototal, removerItem, removerUm, limparCarrinho } = useContext(carrinhoContext)

    return (
        <>

            {carrinhoItem.map((car) => (
                <div className={styles.corpocar}>
                    <div className={styles.box}>
                        <h2>{car.nome}</h2>
                        <p>{car.descricao} <br /></p>
                        <p>{car.quantidade} <br /></p>
                        <p>R${(car.valorUnitario * car.quantidade).toFixed(2)} <br /></p>
                        <div className={styles.bnt}>
                            <button onClick={() => removerUm(car.id)}>➖</button>
                            <button onClick={() => removerItem(car.id)}>✖</button>
                            <button onClick={() => addItem(car)}>➕</button>
                        </div>
                    </div>

                </div>
            ))}
            <div className={styles.finalizar}>

                <FinalizarPedido
                    carrinho={carrinhoItem}
                    limparCarrinho={() => limparCarrinho()}
                />
            </div>
        </>
    )
}