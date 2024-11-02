import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';
import { HomePage } from '../pages/Home/HomePage';
import { EspacoPage } from '../pages/Espaco/EspacoPage';
import { SobrePage } from '../pages/Sobre/SobrePage';
import { EventosPage } from '../pages/Eventos/EventosPage';
import { ContatoPage } from '../pages/Contato/ContatoPage';
import { LandingPage } from '../pages/Landing/LandingPage';

export function Rotas() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path='a-melhor-loja-de-bebidas-do-mundo' element={<LandingPage/>}/>
                    <Route path='espaco' element={<EspacoPage/>}/>
                    <Route path='sobre' element={<SobrePage/>}/>
                    <Route path='eventos' element={<EventosPage/>}/>
                    <Route path='contato' element={<ContatoPage/>}/>
                </Route>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
        </>
    );
}