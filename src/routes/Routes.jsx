import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { Login } from '../components/Login/Login';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';
import { LandingPage } from '../pages/Landing/LandingPage';

export function Rotas() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<LandingPage/>}/>
                    <Route path='login' element={<Login/>}/>
                    
                </Route>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
        </>
    );
}