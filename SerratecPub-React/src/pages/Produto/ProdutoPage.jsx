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
    const categories = [...new Set(produtoList.map(produto => produto.categoria))];
    return (
        <>
            <Botao
                handleClick={() => navegar("/")}
                texto={'◀'}
            />
        
            <h1>PRODUTOS</h1>
            <p className={style.iconCar} onClick={handleOcultar}>🛒{contator}</p>
            <div className={style.corpo}>
                <div className={style.boxproduto}>
                {/* {categories.map(categoria => (
                <div key={categoria}>
                    <h2>{categoria}</h2>
                    <ProdutoLista
                        products={produtoList.filter(produto => produto.categoria === categoria)}
                        onAddToCart={()=>handleVerificarCar(produto.id)}
                    />
                </div>
            ))} */}
                    {produtoList.map((pro) =>
                        <div className={style.box}>
                            <CardProduto
                                key={pro}
                                nome={pro.nome}
                                categoria={pro.categoria}
                                descricao={pro.descricao}
                                valorUnitario={pro.valorUnitario}
                            />
                            <div className={style.input}>
                                <InputNumb
                                    texto={"Quantidade: "}
                                    placeholder={'Digite a quantidade...'}
                                    mask={'numero'}
                                    value={qntd[pro.id] || ''}
                                    onChange={(e) => handleQuantidadeChange(pro.id, e.target.value)}
                                />
                                <Botao 
                                    handleClick={() => handleVerificarCar(pro)}
                                    texto={'Adiciona ao Carrinho'}
                                />
                            </div>
                            
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
                                handle={() => handleRemover(car.id)}
                            />           
                        </div>
                    )}
                </div>
                
            </div>

        </>
    );
}
