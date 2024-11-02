import style from "./Header.module.css";
import img from "../../assets/Logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";



export function Header() {
  const navegar = useNavigate();
  return (
    <>
      <header>
        <div className={style.containerHeader}>
          <img src={img} alt="Logo do SerratecPub" className={style.logo} />
          <nav>
            <ul className={style.containerNav}>
              <li>
                <a href="#" className={`${style.link} ${style.activeLink}`}>
                  HOME
                </a>
              </li>
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
              <li >
                <a href="#" className={style.link}>
                  SOBRE
                </a>
              </li>
              <li>
                <a href="#" className={style.link}>
                  EVENTOS
                </a>
              </li>
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
