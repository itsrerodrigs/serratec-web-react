import React from 'react';
import styles from '../Produto/ProdutoStyle.module.css';

const ProdutoCard = ({ product }) => {
    return (
        <div className={styles.productCard}>
            <img src={product.image} alt={product.nome} className={styles.productImage} />
            <h3>{product.nome}</h3>
            <p>R$ {product.valorUnitario}</p>
          
        </div>
    );
};

export default ProdutoCard;
