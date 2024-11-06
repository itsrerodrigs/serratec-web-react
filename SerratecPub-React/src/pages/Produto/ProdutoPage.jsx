import { useContext, useEffect, useState } from "react";
import { CardProduto } from "../../components/Card/CardProduto";
import style from './Produto.module.css';
import { api } from "../../services/api";
import { CardCarrinho } from "../../components/Card/CardCarrinho";
import { InputNumero } from "../../components/Input/Input";
import { Botao } from "../../components/Botao/Botao";
import { FinalizarPedido } from "../../components/Card/FinalizarPedido";
import { carrinhoContext } from "../../components/context/carrinhoContext";

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
    const [qntd, setQntd] = useState({});
    const { addItem,carrinhoItem } = useContext(carrinhoContext);

    // Função para alterar quantidade de um produto específico
    const handleQuantidadeChange = (produtoId, value) => {
        setQntd(prevQntd => ({ ...prevQntd, [produtoId]: parseInt(value) || 1 }));
    };

    // Função para adicionar produto ao carrinho usando contexto
    const handleAddProduto = (produto) => {
        const quantidade = qntd[produto.id] || 1; // Usa a quantidade do input ou 1
        addItem({ ...produto, quantidade });
        setQntd(qntd[produto.id] || 1);
    };


    


    useEffect(() => {
        getProduto();
    }, []);

    const getProduto = async () => {
        try {
            const response = await api.get('/produtos');
            setProdutoList(response.data);
        } catch (error) {
            console.error("Erro ao buscar produto:", error);
        }
    };

    const categories = [...new Set(produtoList.map(produto => produto.categoria))];

    return (
        <>
            <h1>PRODUTOS</h1>
            
            <div className={style.corpo}>
                <div className={style.boxproduto}>
                    {categories.map(categoria => (
                        <div key={categoria}>
                            <h2>{categoria}</h2>
                            <div className={style.boxbebida}>
                                {produtoList.filter(produto => produto.categoria === categoria).map((pro) => (
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
                                                value={qntd[pro.id] || 1}
                                                onChange={(e) => handleQuantidadeChange(pro.id, e.target.value)}
                                            />
                                            <Botao
                                                handleClick={() => handleAddProduto(pro)}
                                                texto={'➕'}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div id="icon" className={style.conteinerCarrinho}>
                    <p className={style.fechar} onClick={handleOcultar}>X</p>
                    {carrinhoItem.map((car) => (
                        <div className={style.carrinho} key={car.id}>
                            <CardCarrinho
                                nome={car.nome}
                                categoria={car.categoria}
                                descricao={car.descricao}
                                qntd={car.quantidade}
                                valor={(car.valorUnitario * car.quantidade).toFixed(2)}
                                handle={() => removerItem(car.id)}
                                handleadd={() => handleAddProduto(car)}
                            />
                           
                        </div>
                    ))}
                    <p>Valor Total: R${valorTotal.toFixed(2)}</p>
                    <FinalizarPedido
                        carrinho={carrinhoItem}
                        limparCarrinho={limparCarrinho}
                    />
                </div> */}
            </div>
        </>
    );
}
