import { useEffect, useState } from "react";
import styles from "./Card.module.css"
import { api } from '../../services/api';
import { useNavigate } from "react-router-dom";


export function CardProduto() {
    const [produtoList, setProdutoList] = useState([]);
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);
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
                ).then((response)=>{
                    console.log((response.data));
                    setProdutoList(response.data); 
                    setProdutosFiltrados(response.data); 
                });
            } catch (error) {
                console.error("Erro ao buscar produto:", error);
            }
    };
return (
    <>
        <button onClick={() => navegar("/")}>◀</button>
        {produtoList.map((index) =>
            <div className={styles.corpo}>
                <div >
                    <ul>
                        <li key={index.id}>
                            Nome: {index.nome} <br />
                            Categoria: {index.categoria} <br />
                            Descrição: {index.descricao} <br />
                            Data de Cadastro: {index.dataCadastro} <br />
                            Quantidade em Estoque: {index.qtdEstoque} <br />
                            Valor Unitário: R${index.valorUnitario.toFixed(2)} <br />
                        </li>
                    </ul>
                </div>
            </div>
        )}
    </>
)

}