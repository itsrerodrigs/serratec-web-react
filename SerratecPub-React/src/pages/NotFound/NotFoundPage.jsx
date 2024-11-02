import { useNavigate } from "react-router-dom"


export function NotFoundPage(){
  const navigate = useNavigate()
  const handleNavigation=()=> navigate('/')
  
  return (
    <>
      <h1>404 Not Found</h1>
      <button onClick={handleNavigation}>Voltar a pagina inicial</button>
    </>
  )
}
