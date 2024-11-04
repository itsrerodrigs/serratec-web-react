import React from 'react';
import styles from './HomePage.module.css';
import imgDrink from '../../assets/images/pub.png';
import imgProdutos from '../../assets/images/home-bar222.png';
import imgContatos from '../../assets/images/home-bar3333.png';
import imgBar from '../../assets/images/home-bar44.png';

export function HomePage() {
    return(
        <>
            <main>
                <section className={styles.container_a}>
                    <div className={styles.tabs}>
                        <input id="home1" type="radio" name="slider" defaultChecked />
                        <input id="home2" type="radio" name="slider" />
                        <input id="home3" type="radio" name="slider" />
                        <div className={styles.buttons}>
                            <label htmlFor="home1"></label>
                            <label htmlFor="home2"></label>
                            <label htmlFor="home3"></label>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.box}>
                                <div className={styles.contentBx}>
                                    <h2>O Break que Todo Dev Merece</h2>
                                    <a className={styles.button_home} href="/">
                                        REPOSITÓRIO DE BEBIDAS
                                    </a>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.contentBx}>
                                    <h2>Wi-Fi rápido e cerveja gelada, combinação perfeita!</h2>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.contentBx}>
                                    <h2>Pausa estratégica para quem vive em modo ‘run’.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.container_b}>
                    <div className={styles.container_b_about}>
                        <h2>O Serratec Pub</h2>
                        <p>
                            Seja bem-vindo ao SerratecPub, o bar perfeito para quem quer brindar a paixão
                            por tecnologia em um ambiente descontraído e inovador! Aqui, cerveja e código se
                            encontram para oferecer uma experiência única. Nosso menu é inspirado no universo
                            da programação, com drinques e petiscos nomeados com termos da TI, prontos para dar
                            aquele "break" merecido na rotina. Venha relaxar, conhecer pessoas que compartilham
                            do mesmo entusiasmo por tecnologia e, claro, explorar nossa "stack" de sabores.
                            No SerratecPub, seu happy hour vira linha de código!
                        </p>
                    </div>
                    <img src={imgDrink} alt="Imagem de bebida" />
                </section>
                <section className={styles.container_c}>
                    <div className={styles.container_c_box}>
                        <div className={styles.boxImg1}>
                            <img src={imgProdutos} alt="Imagem de produtos" />
                            <figcaption>Produtos</figcaption>
                        </div>

                        <div className={styles.boxImg2}>
                            <img src={imgContatos} alt="Imagem de contatos" />
                            <figcaption>Equipe</figcaption>
                        </div>

                        <div className={styles.boxImg3}>
                            <img src={imgBar} alt="Imagem do bar" />
                            <figcaption>Fale conosco!</figcaption>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}