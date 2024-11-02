import { useEffect, useState } from "react";
import { CardProduto } from "../../components/Card/CardProduto";
import style from './Produto.module.css';
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function ProdutoPage() {
    const [produtoList, setProdutoList] = useState([]);
    const handleRemover = (index) => {
        setProdutoList(produtoList.filter(produto => produto.id !== index));
    };
    const navegar = useNavigate();

    useEffect(() => {
        getProduto()
    }, []);
    const getProduto = async () => {
        try {
            api.get('/produtos'
            ).then((response) => {
                console.log((response.data));
                setProdutoList(response.data);
            });
        } catch (error) {
            console.error("Erro ao buscar produto:", error);
        }
    };
    return (
        <>
            <button onClick={() => navegar("/")}>◀</button>
            <h1>Produtos</h1>
            <div className={style.boxproduto}>
            {produtoList.map((pro) =>
                    <CardProduto
                        key={pro}
                        nome={pro.nome}
                        categoria={pro.categoria}
                        descricao={pro.descricao}
                        qntdEstoque={pro.qntdEstoque}
                        valorUnitario={pro.valorUnitario}
                    />

                )}
                </div>
        </>
    );
}