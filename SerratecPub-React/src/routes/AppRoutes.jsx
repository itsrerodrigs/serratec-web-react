import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';
import { HomePage } from '../pages/Home/HomePage';
import { SobrePage } from '../pages/Sobre/SobrePage';
import { ContatoPage } from '../pages/Contato/ContatoPage';
import { LandingPage } from '../pages/Landing/LandingPage';
import { Produto } from '../pages/Produto/Produto';
import { ClientePage } from '../pages/Cliente/ClientePage';
import { CadastroPage } from '../pages/Cadastro/CadastroPage';
import { LoginPage } from '../pages/Login/LoginPage';
import { TermosDeUsoPage } from '../pages/TermosDeUso/TermosDeUsoPage';
import { ProdutoPage } from '../pages/Produto/ProdutoPage';
import {FinalizarPedido} from'../components/Card/FinalizarPedido';

export function Rotas() {
    return (
        <>
        
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path='a-melhor-loja-de-bebidas-do-mundo' element={<LandingPage/>}/>
                </Route>
                    <Route path='cliente' element={<ClientePage/>}/>
                    <Route path='sobre' element={<SobrePage/>}/>
                    <Route path='produtos' element={<Produto/>}/>
                    <Route path='produto' element={<ProdutoPage/>}/>
                    <Route path='contato' element={<ContatoPage/>}/>
                    <Route path='login' element={<LoginPage/>}/>
                    <Route path='cadastro' element={<CadastroPage/>}/>
                    <Route path='finaliar' element={<FinalizarPedido/>}/>
                    <Route path='termos-de-uso' element={<TermosDeUsoPage/>}/>
                    
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
        </>
    );
}