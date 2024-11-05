import styles from "../Produto/ProdutoStyle.module.css";
import PropTypes from "prop-types";

const ProdutoCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <img
        src={product.image}
        alt={product.nome}
        className={styles.productImage}
      />
      <h3>{product.nome}</h3>
      <p>R$ {product.valorUnitario}</p>
    </div>
  );
};

ProdutoCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    valorUnitario: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProdutoCard;
