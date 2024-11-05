import React from "react";
import { Rotas } from "./routes/AppRoutes";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { AuthProvider } from "./components/context/authService";



function App() {
  return (
    <>
      <Header />
      <AuthProvider>
        <Rotas />
      </AuthProvider>
      <Footer />
    </>
  );
}

export default App;