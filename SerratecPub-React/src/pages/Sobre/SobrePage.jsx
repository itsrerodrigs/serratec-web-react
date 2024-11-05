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
import { FotoMembro, Membro, Descricao, ImagemMembro, GithubIcon } from './Sobre.js';

export function SobrePage() {
  return (
    <FotoMembro>
      <Membro>
        <a
          href="https://www.linkedin.com/in/gustavo-c-s-/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImagemMembro src={gustavoFt} alt="Gustavo" />
        </a>
        <Descricao>
          Gustavo<br/>Mestre do Café e das Noites em Claro
          <a
            href="https://github.com/Gustavo-c-s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon icon={faGithub} />
          </a>
        </Descricao>
      </Membro>
      <Membro>
        <a
          href="https://www.linkedin.com/in/murilobongard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImagemMembro src={murilo} alt="Murilo" />
        </a>
        <Descricao>
          Murilo<br/>Rei das Noites de Código e Happy Hours
          <a
            href="https://github.com/murilobongard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon icon={faGithub} />
          </a>
        </Descricao>
      </Membro>
      <Membro>
        <a
          href="https://www.linkedin.com/in/lucas-c-071903265/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImagemMembro src={lucasFt} alt="Lucas" />
        </a>
        <Descricao>
          Lucas<br/>UX Designer e Degustador Oficial de Brejas
          <a
            href="https://github.com/lucauxs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon icon={faGithub} />
          </a>
        </Descricao>
      </Membro>
      <Membro>
        <a
          href="https://www.linkedin.com/in/eduarda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImagemMembro src={eduardaFt} alt="Eduarda" />
        </a>
        <Descricao>
          Eduarda<br/>Especialista em DevOps e Rodadas de Chopp
          <a
            href="https://github.com/Eduarda-goular"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon icon={faGithub} />
          </a>
        </Descricao>
      </Membro>
      <Membro>
        <a
          href="https://www.linkedin.com/in/isabellaoliveira-pinheiro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImagemMembro src={isabellaFt} alt="Isabella" />
        </a>
        <Descricao>
          Isabella<br/>Caçadora de Bugs e Entusiasta dos Drinks Exóticos
          <a
            href="https://github.com/isb-op"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon icon={faGithub} />
          </a>
        </Descricao>
      </Membro>
      <Membro>
        <a
          href="https://www.linkedin.com/in/rerodrigs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImagemMembro src={renataFt} alt="Renata" />
        </a>
        <div className={styles.Descricao}>
          Renata<br/>Fullstack das Linhas de Código e da Caipirinha
          <a
            href="https://github.com/itsrerodrigs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon icon={faGithub} />
          </a>
        </div>
      </Membro>
      <Membro>
        <a
          href="https://www.linkedin.com/in/thiago-branco-nf/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImagemMembro src={thiago} alt="Thiago" />
        </a>
        <Descricao>
          Thiago<br/>Project Manager e Sommelier de Cervejas Artesanais
          <a
            href="https://github.com/thiagobranconf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon icon={faGithub} />
          </a>
        </Descricao>
      </Membro>
    </FotoMembro>
  );
}
