import styles from "./SobrePage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import gustavoFt from "../../assets/images/gustavoFt.jpeg";
import murilo from "../../assets/images/murilo.jpg";
import renataFt from "../../assets/images/renataFt.jpeg";
import isabellaFt from "../../assets/images/isabellaFt.jpeg";
import eduardaFt from "../../assets/images/eduardaFt.jpeg";
import lucasFt from "../../assets/images/lucasFt.jpeg";
import thiago from "../../assets/images/thiago.png";
import Garcom from "../../assets/images/Garcom.jpg";

export function SobrePage() {
  return (
    <div className={styles.FotoMembro}>
      <div className={styles.Membro}>
        <a
          href="https://www.linkedin.com/in/gustavo-c-s-/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gustavoFt} alt="Gustavo" />
        </a>
        <div className={styles.Descricao}>
          Gustavo - Mestre do Café e das Noites em Claro
          <a
            href="https://github.com/Gustavo-c-s"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubIcon}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

      <div className={styles.Membro}>
        <a
          href="https://www.linkedin.com/in/murilobongard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={murilo} alt="Murilo" />
        </a>
        <div className={styles.Descricao}>
          Murilo - Rei das Noites de Código e Happy Hours
          <a
            href="https://github.com/murilobongard"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubIcon}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

      <div className={styles.Membro}>
        <a
          href="https://www.linkedin.com/in/lucas-c-071903265/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={lucasFt} alt="Lucas" />
        </a>
        <div className={styles.Descricao}>
          Lucas - UX Designer e Degustador Oficial de Brejas
          <a
            href="https://github.com/lucauxs"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubIcon}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

      <div className={styles.Membro}>
        <a
          href="https://www.linkedin.com/in/eduarda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={eduardaFt} alt="Eduarda" />
        </a>
        <div className={styles.Descricao}>
          Eduarda - Especialista em DevOps e Rodadas de Chopp
          <a
            href="https://github.com/Eduarda-goular"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubIcon}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

      <div className={styles.Membro}>
        <a
          href="https://www.linkedin.com/in/isabellaoliveira-pinheiro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={isabellaFt} alt="Isabella" />
        </a>
        <div className={styles.Descricao}>
          Isabella - Caçadora de Bugs e Entusiasta dos Drinks Exóticos
          <a
            href="https://github.com/isb-op"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubIcon}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

      <div className={styles.Membro}>
        <a
          href="https://www.linkedin.com/in/rerodrigs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={renataFt} alt="Renata" />
        </a>
        <div className={styles.Descricao}>
          Renata - Fullstack das Linhas de Código e da Caipirinha
          <a
            href="https://github.com/itsrerodrigs"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubIcon}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

      <div className={styles.Membro}>
        <a
          href="https://www.linkedin.com/in/thiago-branco-nf/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={thiago} alt="Thiago" />
        </a>
        <div className={styles.Descricao}>
          Thiago - Project Manager e Sommelier de Cervejas Artesanais
          <a
            href="https://github.com/thiagobranconf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubIcon}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <div className={styles.Membro}>
        <img src={Garcom} alt="Garcom" />

        <div className={styles.Descricao}>
          Cleriton Savio - Faz muito e ganha pouco
        </div>
      </div>
    </div>
  );
}
