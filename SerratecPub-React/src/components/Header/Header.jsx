import style from "../Header/Header.module.css";
import img from "../../assets/images/Logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const handleNavigation = (path) => navigate(path);
  const handleHomeNavigation = () => handleNavigation("/");
  const handleLandingNavigation = () =>
    handleNavigation("/a-melhor-loja-de-bebidas-do-mundo");
  const handleSobreNavigation = () => handleNavigation("/sobre");
  const handleContatoNavigation = () => handleNavigation("/contato");
  const handleProdutoNavigation = () => handleNavigation("/produto");
  const handleClienteNavigation = () => handleNavigation("/cliente");
  const handleLoginNavigation = () => handleNavigation("/login");

  return (
    <>
      <div className={style.containerHeader}>
        <img
          src={img}
          onClick={handleLandingNavigation}
          alt="Logo do SerratecPub"
          className={style.logo}
        />
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
            <button
              onClick={handleLoginNavigation}
              className={style.link}
            ></button>
          </ul>
        </nav>
        <FontAwesomeIcon
          onClick={handleLoginNavigation}
          icon={faUser}
          className={style.user}
        />
      </div>
    </>
  );
}
