import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { Login } from '../components/Login/Login';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';
import { LandingPage } from '../pages/Landing/LandingPage';
import { Produto } from '../pages/produto/Produto';
import { ClienteTabela } from '../pages/cliente/Cliente';
import { Cadastro } from '../pages/cadastro/Cadastro';


export function Rotas() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<LandingPage/>}/>
                    <Route path='/login' element={<Login/>}/>
                    
                </Route>
                <Route path='/produto' element={<Produto/>}/>
                <Route path='/cliente' element={<ClienteTabela/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
           
                
            </Routes>
        </>
    );
}