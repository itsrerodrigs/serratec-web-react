import style from "./Header.module.css";
import img from "../../assets/Logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const handleNavigation = (path) => navigate(path);
  const handleHomeNavigation = () => handleNavigation('/');
  const handleLandingNavigation = () => handleNavigation('/a-melhor-loja-de-bebidas-do-mundo');
  const handleEspacoNavigation = () => handleNavigation('/espaco');
  const handleSobreNavigation = () => handleNavigation('/sobre');
  const handleEventosNavigation = () => handleNavigation('/eventos');
  const handleContatoNavigation = () => handleNavigation('/contato');
  
  return (
    <>
      <header>
        <div className={style.containerHeader}>
          <img src={img} onClick={handleLandingNavigation} alt="Logo do SerratecPub" className={style.logo} />
          <nav>
            <ul className={style.containerNav}>
              <li>
                <button onClick={handleHomeNavigation} className={style.link}>
                  HOME
                </button>
              </li>
              <li>
              <button onClick={handleEspacoNavigation} className={style.link}>
                  ESPAÇO
                </button>
              </li>
              <li>
                <button onClick={handleSobreNavigation} className={style.link}>
              <li onClick={()=>navegar("/produto")}>
                <a href="#" className={style.link}>
                  PRODUTOS
                </a>
              </li>
              <li onClick={()=>navegar("/cliente")}>
                <a href="#" className={style.link}>
                  CLIENTE
                </a>
              </li>
                  SOBRE
                </button>
              </li>
              <li>
                <button onClick={handleEventosNavigation} className={style.link}>
                  EVENTOS
                </button>
              </li>

              <li>
                <button onClick={handleContatoNavigation} className={style.link}>
                  CONTATO
                </button>
              <li onClick={()=>navegar('/cadastro')}>
                <a href="#"  className={style.link}>
                  CADASTRO
                </a>

              </li>
            </ul>
          </nav>
          <div className={style.containerIcons}>
            <FontAwesomeIcon icon={faFacebook} className={style.icon} />
            <FontAwesomeIcon icon={faInstagram} className={style.icon} />
          </div>
        </div>
      </header>
    </>
  );
}
