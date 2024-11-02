import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Login } from '../pages/Login';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';

export function Rotas() {
    return (
        <>
            <Routes>
                <Route path= "/" element={<Layout/>}/>
                <Route index element={"Vamos colocar a pagina inicial aqui dentro, que ai só de passar o link do serratecPub ja manda pra ela"}/>
                <Route path= "login" element={<Login/>}/>
            </Routes>
            <Route path='*' element={<NotFoundPage/>}/>
        </>
    );
}