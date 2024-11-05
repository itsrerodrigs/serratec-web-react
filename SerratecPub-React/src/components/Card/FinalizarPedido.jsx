import { useEffect, useState } from "react"
import { api } from "../../services/api";


export function FinalizarPedido({ carrinho, limparCarrinho }) {
    // useEffect(() => {
    //     console.log(nomeCliente.nome)
    // }, [])
    
    const datoUsuario = localStorage.getItem('@Auth:user')
    const usuario = datoUsuario ? JSON.parse(datoUsuario) : null;
    
    
    // let nomeUser =obterUser().usuario.nome;
    const postPedido = async () => {
        const datoUsuario = localStorage.getItem('@Auth:user')
        const usuario = datoUsuario ? JSON.parse(datoUsuario) : null;
        const pedido1 = {
            statusPedido: "EM_PRODUCAO",
            nomeCliente: usuario.nome,
            itemPedido: carrinho.map(item => ({
                quantidade: item.qntd,
                percentualDesconto: 5,
                idProduto: item.id,
            })),

        };
        alert(pedido1)
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
            {usuario.nome}
            <button onClick={postPedido}>Finalizar Pedido</button>


        </>
    )

}
