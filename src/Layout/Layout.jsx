import { Header } from "../components/Header/Header";
import { ProdutoPage } from "../pages/produto/ProdutoPage";
export function Layout(){
    return(
        <>
            <Header/>
            <ProdutoPage/>
            <footer>Fazer footer</footer>
        </>
    )
}