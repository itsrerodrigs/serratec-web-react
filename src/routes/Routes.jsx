import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';
import { HomePage } from '../pages/Home/HomePage';
import { SobrePage } from '../pages/Sobre/SobrePage';
import { ContatoPage } from '../pages/Contato/ContatoPage';
import { LandingPage } from '../pages/Landing/LandingPage';
import { ProdutoPage } from '../pages/produto/ProdutoPage';
import { ClientePage } from '../pages/cliente/ClientePage';
import { CadastroPage } from '../pages/cadastro/CadastroPage';
import { LoginPage } from '../pages/Login/LoginPage';

export function Rotas() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path='a-melhor-loja-de-bebidas-do-mundo' element={<LandingPage/>}/>
                    <Route path='sobre' element={<SobrePage/>}/>
                    <Route path='contato' element={<ContatoPage/>}/>
                    <Route path='produto' element={<ProdutoPage/>}/>
                    <Route path='cliente' element={<ClientePage/>}/>
                    <Route path='cadastro' element={<CadastroPage/>}/>
                    <Route path='login' element={<LoginPage/>}/>
                </Route>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
        </>
    );
}