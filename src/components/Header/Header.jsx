import style from "./Header.module.css";
import img from "../../assets/Logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export function Header() {
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
              <li>
                <a href="#" className={style.link}>
                  ESPAÇO
                </a>
              </li>
              <li>
                <a href="#" className={style.link}>
                  SOBRE
                </a>
              </li>
              <li>
                <a href="#" className={style.link}>
                  EVENTOS
                </a>
              </li>
              <li>
                <a href="#" className={style.link}>
                  CONTATO
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
