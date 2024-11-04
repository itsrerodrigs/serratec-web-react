import { useState } from "react"
import { api } from "../../services/api";


export function FinalizarPedido({ carrinho,limparCarrinho }) {
    

    const postPedido = async () => {
        const pedido1 = {
            statusPedido:"EM_PRODUCAO",
            nomeCliente: "Gustavo Santos",
            itemPedido: carrinho.map(item => ({
                quantidade: item.qntd,
                percentualDesconto: 5,
                idProduto: item.id,
            })),
            
        };

        try {
            const response = await api.post('/pedidos', pedido1, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });
            console.log('Pedido finalizado com sucesso:', response.data);
            limparCarrinho();   
           

         
           

        } catch (error) {
            console.error("Erro ao finalizar o pedido:", error.response ? error.response.data : error.message);
            
        }

    }
    return (
        <>
            <button onClick={postPedido}>Finalizar Pedido</button>
           

        </>
    )

}
