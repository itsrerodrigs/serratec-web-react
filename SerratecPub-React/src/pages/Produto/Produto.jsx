import React, { useState } from 'react';
import ProdutoLista from '../Produto/ProdutoLista';

export const Produto = () => {
    const [products] = useState([
        { id: 1, name: 'Cerveja', price: 5.0, category: 'Bebidas', image: 'https://i.imgur.com/bekSHV9.png' },
        { id: 2, name: 'Refrigerante', price: 3.5, category: 'Bebidas', image: 'https://i.imgur.com/bekSHV9.png' },
        { id: 3, name: 'Petiscos', price: 10.0, category: 'Comida', image: 'https://i.imgur.com/bekSHV9.png' },
        { id: 4, name: 'Cerveja', price: 5.0, category: 'Bebidas', image: 'https://i.imgur.com/bekSHV9.png' },
        { id: 5, name: 'Refrigerante', price: 3.5, category: 'Bebidas', image: 'https://i.imgur.com/bekSHV9.png' },
        { id: 6, name: 'Petiscos', price: 10.0, category: 'Comida', image: 'https://i.imgur.com/bekSHV9.png' },
        { id: 7, name: 'Cerveja', price: 5.0, category: 'Bebidas', image: 'https://i.imgur.com/bekSHV9.png' },
        { id: 8, name: 'Refrigerante', price: 3.5, category: 'Bebidas', image: 'https://i.imgur.com/bekSHV9.png' },
        { id: 9, name: 'Petiscos', price: 10.0, category: 'Comida', image: 'https://i.imgur.com/bekSHV9.png' },
    ]);

    const handleAddToCart = (product) => {
        console.log('Produto adicionado ao carrinho:', product);
    };

    const categories = [...new Set(products.map(product => product.category))];

    return (
        <div>
            {categories.map(category => (
                <div key={category}>
                    <h2>{category}</h2>
                    <ProdutoLista
                        products={products.filter(product => product.category === category)}
                        
                    />
                </div>
            ))}
        </div>
    );
};

export default Produto;
