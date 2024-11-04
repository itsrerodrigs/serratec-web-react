import React from 'react';
import ProdutoCard from '../Produto/ProdutoCard';
import styles from '../Produto/ProdutoStyle.module.css';

export const ProdutoLista = ({ products, onAddToCart }) => {
    return (
        <div className={styles.container}>
            {products.map(product => (
                <ProdutoCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={onAddToCart} 
                />
            ))}
        </div>
    );
};

export default ProdutoLista;
