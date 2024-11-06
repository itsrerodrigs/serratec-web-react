import { createContext, useState, useEffect } from "react";

// Criação do contexto do carrinho
const carrinhoContext = createContext();

const CarrinhoProvider = (props) => {
    // Estado para armazenar itens do carrinho e o valor total
    const [carrinhoItem, setCarrinhoItem] = useState([]);
    const [valorTotal, setValorTotal] = useState(0);

    // Função para adicionar um item ao carrinho
    function addItem(produto) {
        setCarrinhoItem((prevCarrinho) => {
            // Verifica se o produto já está no carrinho
            const itemExistente = prevCarrinho.find((item) => item.id === produto.id);
    
            if (itemExistente) {
                // Se o produto já existe no carrinho, apenas incrementa a quantidade
                return prevCarrinho.map((item) =>
                    item.id === produto.id
                        ? { ...item, quantidade: item.quantidade + 1 }
                        : item
                );
            } else {
                // Se o produto não existe, adiciona-o ao carrinho com quantidade 1
                return [...prevCarrinho, { ...produto, quantidade: 1 }];
            }
        });
    }
    function removerUm(produtoId) {
        setCarrinhoItem((prevCarrinho) => {
            return prevCarrinho
                .map((item) =>
                    item.id === produtoId
                        ? { ...item, quantidade: item.quantidade - 1 }
                        : item
                )
                 // Remove o item se a quantidade for 0
        });
    }
    // Função para remover um item do carrinho
    function removerItem(id) {
        const novoCarrinho = carrinhoItem.filter(produto => produto.id !== id);
        setCarrinhoItem(novoCarrinho);
    }

    // Função para limpar o carrinho
    function limparCarrinho() {
        setCarrinhoItem([]);
    }

    // Calcula o valor total sempre que o carrinho é atualizado
    useEffect(() => {
        const total = carrinhoItem.reduce((acc, item) => acc + item.quantidade * item.valorUnitario, 0);
        setValorTotal(total);
    }, [carrinhoItem]);

    return (
        <carrinhoContext.Provider
            value={{
                carrinhoItem,
                valorTotal,
                addItem,
                removerItem,
                limparCarrinho,
                removerUm
            }}
        >
            {props.children}
        </carrinhoContext.Provider>
    );
};

export { carrinhoContext, CarrinhoProvider };
