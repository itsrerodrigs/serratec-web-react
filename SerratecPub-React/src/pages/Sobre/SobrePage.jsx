import styles from "./SobrePage.module.css";

import gustavoFt from "../../assets/images/gustavoFt.jpeg";
import muriloFt from "../../assets/images/muriloFt.jpeg";
import renataFt from "../../assets/images/renataFt.jpeg";
import isabellaFt from "../../assets/images/isabellaFt.jpeg";
import eduardaFt from "../../assets/images/eduardaFt.jpeg";
import lucasFt from "../../assets/images/lucasFt.jpeg";
import thiago from "../../assets/images/thiago.png";

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
        </div>
      </div>
      <div className={styles.Membro}>
        <a
          href="https://www.linkedin.com/in/murilobongard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={muriloFt} alt="Murilo" />
        </a>
        <div className={styles.Descricao}>
          Murilo - Rei das Noites de Código e Happy Hours
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
        </div>
      </div>
    </div>
  );
}
