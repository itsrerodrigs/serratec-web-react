import PropTypes from "prop-types";

const ProdutoLista = ({ products, onAddToCart }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Preço: R${product.price.toFixed(2)}</p>
          <button onClick={() => onAddToCart(product)}>
            Adicionar ao Carrinho
          </button>
        </div>
      ))}
    </div>
  );
};

ProdutoLista.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProdutoLista;
