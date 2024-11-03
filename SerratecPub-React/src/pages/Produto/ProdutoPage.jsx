import { useEffect, useState } from "react";
import { CardProduto } from "../../components/Card/CardProduto";
import style from './Produto.module.css';
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Carrinho } from "../../components/Card/CardCarrinho";
import { InputNumb } from "../../components/Input/Input";
import { Botao } from "../../components/Botao/Botao";

export function ProdutoPage() {
    const [produtoList, setProdutoList] = useState([]);
    const [carrinho, setCarrinho] = useState([]);
    const [qntd, setQntd] = useState(0);
    const [contator, setContator] = useState(0);
    const handleAddCarin = (produto) => {

        const quantidade = qntd[produto.id] || 0;
        const valorBruto = (produto.valorUnitario * 2) * quantidade;
        const addCarrinho = {
            id: produto.id,
            nome: produto.nome,
            categoria: produto.categoria,
            descricao: produto.descricao,
            qntd: quantidade,
            valorBruto: valorBruto
        };
        console.log()
        setCarrinho([...carrinho, addCarrinho]);
        setContator(contator + 1);
    }
    const handleVerificarCar = (produto) => {
        const produtoExistente = carrinho.find(item => item.id === produto.id);
        ; if (produtoExistente) {
            const novoCarrinho = carrinho.map(item =>
                item.id === produto.id ? { ...item, qntd: parseInt(qntd[produto.id] || 0, 10) } : item);
            setCarrinho(novoCarrinho);
        } else {
            handleAddCarin(produto);
        }
    }
    const handleRemover = (index) => {
        setCarrinho(carrinho.filter(produto => produto.id !== index));
        setContator(contator - 1);
    };
    const handleQuantidadeChange = (produtoId, value) => {
        setQntd({ [produtoId]: value });
    };
    const navegar = useNavigate();
    const handleOcultar = () => {
        let iconCar = document.getElementById("icon");
        if (iconCar.style.display == 'none') {
            iconCar.style.display = 'flex';
        } else {
            iconCar.style.display = "none"
        }
    }
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
            <Botao
                handleClick={() => navegar("/")}
                texto={'◀'}
            />
            <h2 onClick={()=>navegar('/cadastro/produto')}>CADASTRA PRODUTO</h2>
            <h1>Produtos</h1>
            <div className={style.corpo}>
                <div className={style.boxproduto}>
                    {produtoList.map((pro) =>
                        <div>
                            <CardProduto
                                key={pro}
                                nome={pro.nome}
                                categoria={pro.categoria}
                                descricao={pro.descricao}
                                qntdEstoque={pro.qntdEstoque}
                                valorUnitario={pro.valorUnitario}
                            />
                            <div className={style.input}>
                                <InputNumb
                                    texto={"Quantidade: "}
                                    value={qntd[pro.id] || ''}
                                    onChange={(e) => handleQuantidadeChange(pro.id, e.target.value)}
                                />
                                <Botao
                                    handleClick={() => handleVerificarCar(pro)}
                                    texto={'➕'}
                                />
                            </div>
                            {/* <button onClick={() => }>➕</button> */}
                        </div>
                    )}
                </div>
                <div id="icon" className={style.conteinerCarrinho}>
                    {carrinho.map((car) =>
                        <div className={style.carrinho}>
                            <Carrinho
                                nome={car.nome}
                                categoria={car.categoria}
                                descricao={car.descricao}
                                qntd={car.qntd}
                                valor={car.valorBruto}
                            />
                            <button onClick={() => handleRemover(car.id)}>✖</button>
                        </div>
                    )}
                </div>
                <p className={style.iconCar} onClick={handleOcultar}>🛒{contator}</p>
            </div>

        </>
    );
}
