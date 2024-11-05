import { useEffect, useState } from "react";
import { CardProduto } from "../../components/Card/CardProduto";
import style from './Produto.module.css';
import { api } from "../../services/api";
import { Carrinho } from "../../components/Card/CardCarrinho";
import { InputNumero } from "../../components/Input/Input";
import { Botao } from "../../components/Botao/Botao";
import { FinalizarPedido } from "../../components/Card/FinalizarPedido";


export function ProdutoPage() {
    const [produtoList, setProdutoList] = useState([
        {
            id: 30,
            nome: 'cerveja',
            categoria: 'Bebida',
            descricao: 'produto.descricao',
            qntd: 2,
            valorBruto: 3.5
        },
        {
            id: 40,
            nome: 'cerveja',
            categoria: 'Bebida',
            descricao: 'descricao',
            qntd: 2,
            valorBruto: 3.5
        },
        {
            id: 60,
            nome: 'cerveja',
            categoria: 'Bebida',
            descricao: 'descricao',
            qntd: 2,
            valorBruto: 3.5
        },
    ]);
    const [carrinho, setCarrinho] = useState([]);
    const [qntd, setQntd] = useState(0);
    const [contator, setContator] = useState(0);
    const [valorTotal,setValorTotal]=useState(0)
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
        setValorTotal( carrinho.reduce((acc, item) => acc + item.valorBruto, 0)),
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
    const handleRemover = (id) => {
        setCarrinho(carrinho.filter(produto => produto.id !== id));
        setContator(contator - 1);
    };
    const handleQuantidadeChange = (produtoId, value) => {
        setQntd({ [produtoId]: value });
    };
    const handleOcultar = () => {
        let iconCar = document.getElementById("icon");
        if (iconCar.style.display == 'none') {
            iconCar.style.display = 'flex';
        } else {
            iconCar.style.display = "none"
        }
    }
    const limparCarrinho = () => {
        setCarrinho([]);
        setContator(0);
    };
    useEffect(() => {
        getProduto()
    }, []);
    useEffect(() => {
        const total = carrinho.reduce((acc, item) => acc + item.valorBruto, 0);
        setValorTotal(total.toFixed(2)); 
    }, [carrinho]);
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
            <h1>PRODUTOS</h1>
            <p className={style.iconCar} onClick={handleOcultar}>🛒{contator}</p>
            <div className={style.corpo}>
                <div className={style.boxproduto} >
                    {categories.map(categoria => (
                        <div  key={categoria}>
                            <h2>{categoria}</h2>
                            <div className={style.boxbebida}>
                                {produtoList.filter(produto => produto.categoria === categoria).map((pro) =>
                                    <div className={style.box} key={pro.id}>
                                        <CardProduto
                                            key={pro.id}
                                            nome={pro.nome}
                                            descricao={pro.descricao}
                                            valorUnitario={pro.valorUnitario?.toFixed(2)}
                                        />
                                        <div className={style.input}>
                                            <InputNumero
                                                texto={"Quantidade: "}
                                                placeholder={'Digite a quantidade...'}
                                                mask='numero'
                                                value={qntd[pro.id] || ''}
                                                onChange={(e) => handleQuantidadeChange(pro.id, e.target.value)}
                                            />
                                            <Botao
                                                handleClick={() => handleVerificarCar(pro)}
                                                texto={'➕'}
                                            />
                                        </div>

                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div id="icon" className={style.conteinerCarrinho}>
                    <p className={style.fechar} onClick={handleOcultar}>X</p>
                    {carrinho.map((car) =>
                        <div className={style.carrinho} key={car.id}>
                            <Carrinho
                                nome={car.nome}
                                categoria={car.categoria}
                                descricao={car.descricao}
                                qntd={car.qntd}
                                valor={car.valorBruto?.toFixed(2)}
                                handle={() => handleRemover(car.id)}
                            />
                        </div>
                    )}
                    <p>Valor Total: R${valorTotal}</p>
                    <FinalizarPedido
                        carrinho={carrinho}
                        limparCarrinho={()=>limparCarrinho()}
                    />
                </div>

            </div>

        </>
    );
}
