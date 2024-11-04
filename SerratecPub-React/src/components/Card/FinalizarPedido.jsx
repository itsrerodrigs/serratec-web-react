import { useState } from "react"
import { api } from "../../services/api";


export function FinalizarPedido({ carrinho }) {
    const [pedido, setPedido] = useState(null)
    const [item, setItem] = useState([])

    const postPedido = async () => {
        const pedido1 = {
            nomeCliente: "Gustavo Santos",
            produtos: carrinho.map(item => ({
                quantidade: item.qntd,
                valorBruto: item.valorBruto,
                idProduto: item.id,
            })),
            valorTotal: carrinho.reduce((acc, item) => acc + item.valorBruto, 0),
        };

        try {
            const response = await api.post('/pedidos', pedido1, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });
            console.log('Pedido finalizado com sucesso:', response.data);
            setPedido("Pedido finalizado com sucesso!");

         
           

        } catch (error) {
            console.error("Erro ao finalizar o pedido:", error.response ? error.response.data : error.message);
            setPedidoStatus("Erro ao finalizar o pedido. Tente novamente.");
        }

    }
    return (
        <>
            <button onClick={postPedido}>Finalizar Pedido</button>
            {pedido && <p>{pedido}</p>}

        </>
    )

}
