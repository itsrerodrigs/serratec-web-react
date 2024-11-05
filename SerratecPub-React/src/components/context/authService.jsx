import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {

        const loadingStoreDate = async () => {
            const storageUser = localStorage.getItem("@Auth:user");
            const storageToken = localStorage.getItem("@Auth:token");

            if (storageUser && storageToken) {
                setUser(storageUser);
            }
        };
        loadingStoreDate();
    }, []);
    const signIn = async (email, senha) => {
        const response = await api.post('/clientes/login', {
            email, senha,
        });
        if (response.date.error) {
            alert(response.data.error);
        } else {

            setUser(response.data.user);
            api.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.date.token}`
            localStorage.setItem("@Auth:token", response.data);
            localStorage.setItem("@Auth:user", response.data.user);
        }
    };
    return (
        <AuthContext.Provider value={{
            user,
            signed: !!user,
            signIn,
        }}>
            {children}
        </AuthContext.Provider>
    );
}