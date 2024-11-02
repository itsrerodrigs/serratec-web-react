import { useEffect, useState } from "react";
import { CardProduto } from "../../components/Card/CardProduto";
import style from './Produto.module.css';
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Carrinho } from "../../components/Card/CardCarrinho";
import { InputNumb } from "../../components/Input/Input";

export function ProdutoPage() {
    const [produtoList, setProdutoList] = useState([]);
    const [carrinho, setCarrinho] = useState([]);
    const [qntd, setQntd] = useState({});
    const [contator,setContator]=useState(0);
    const handleAddCarin = (produto) => {
        const valorBruto = (produto.valorUnitario * 2) * qntd;
        const addCarrinho = {
            nome: produto.nome,
            categoria: produto.categoria,
            descricao: produto.descricao,
            qntd: qntd,
            valorBruto: valorBruto
        };
        setCarrinho([...carrinho, addCarrinho]);
        setContator(contator+1);
    }
    const handleRemover = (index) => {
        setCarrinho(carrinho.filter(produto => produto.id !== index));
    };
    const handleQuantidadeChange = (produtoId, value) => { 
        setQntd({ ...qntd, [produtoId]: value });
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
            <button onClick={() => navegar("/")}>◀</button>
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
                            <InputNumb
                                texto={"Quantidade: "}
                                value={qntd[pro.id] ||''}
                                onChange={(e) => handleQuantidadeChange(pro.id, e.target.value)}
                            />
                            <button onClick={() => handleAddCarin(pro)}>➕</button>
                        </div>
                    )}
                </div>
                <div id="icon" className={style.conteinerCarrinho}>
                    {carrinho.map((car) =>
                        <div  className={style.carrinho}>
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