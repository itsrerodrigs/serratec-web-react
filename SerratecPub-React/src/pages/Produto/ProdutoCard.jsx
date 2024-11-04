import React from 'react';
import styles from '../Produto/ProdutoStyle.module.css';

const ProdutoCard = ({ product, onAddToCart }) => {
    return (
        <div className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <h3>{product.nome}</h3>
            <p>R$ {product.valorUnitario}</p>
            <button onClick={() => onAddToCart(product)}>Adicionar ao Carrinho</button>
        </div>
    );
};

export default ProdutoCard;
