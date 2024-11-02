
export function Carrinho({ nome, categoria, descricao, qntd, valor }) {
   
    return (
        <>
            <div >
                <div >
                    <h2>Nome: {nome}</h2>
                    <p>Categoria: {categoria} <br /></p>
                    <p>Descrição: {descricao} <br /></p>
                    <p>Quantidade: {qntd} <br /></p>
                    <p>Valor R${valor} <br /></p>
                </div>
            </div>

        </>
    )
}