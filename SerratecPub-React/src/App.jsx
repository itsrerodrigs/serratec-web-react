import React from "react";
import { Rotas } from "./routes/AppRoutes";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
    <Header />
    <Rotas />
    <Footer/>
    </>
  );
}

export default App;