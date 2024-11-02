import { useNavigate } from "react-router-dom"
import { Botao } from "../../components/Botao/Botao"


export function NotFoundPage(){
  const navigate = useNavigate()
  const handleNavigation=()=> navigate('/')
  
  return (
    <>
      <h1>404 Not Found</h1>
      <Botao handleClick={handleNavigation} texto="Voltar a pagina inicial"/>
    </>
  )
}
