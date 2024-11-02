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
  const handleSobreNavigation = () => handleNavigation('/sobre');
  const handleContatoNavigation = () => handleNavigation('/contato');
  const handleProdutoNavigation = () => handleNavigation('/produto');
  const handleClienteNavigation = () => handleNavigation('/cliente');
  const handleCadastroNavigation = () => handleNavigation('/cadastro');
  const handleLoginNavigation = () => handleNavigation('/login');
  
  return (
    <>
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
                <button onClick={handleSobreNavigation} className={style.link}>
                  SOBRE
                </button>
              </li>
              <li>
                <button onClick={handleProdutoNavigation} className={style.link}>
                  PRODUTOS
                </button>
              </li>
              <li>
                <button onClick={handleClienteNavigation} className={style.link}>
                  CLIENTE
                </button>
              </li>
              <li>
                <button onClick={handleContatoNavigation} className={style.link}>
                  CONTATO
                </button>
              </li>
              <li>
                <button onClick={handleLoginNavigation} className={style.link}>
                  LOGIN
                </button>
              </li>
              <li>
                <button onClick={handleCadastroNavigation} className={style.link}>
                  CADASTRO
                </button>
              </li>
            </ul>
          </nav>
          <div className={style.icon}>
            <FontAwesomeIcon onClick={() => window.location.href = 'https://www.facebook.com'} icon={faFacebook} className={style.icon} id="facebook" />
            <FontAwesomeIcon onClick={() => window.location.href = 'https://www.instagram.com'} icon={faInstagram} className={style.icon} />
          </div>
        </div>
    </>
  );
}
