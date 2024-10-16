import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link to={`/products/${product._id}`}>
      <div className="card">
        <figure>
          <img src={product.image} alt={product.name} className="h-[500px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p className="line-clamp-2 mb-3">{product.description}</p>
          <div>
            <Rating value={product.rating} text={product.numReviews} />
          </div>
          <h3 className="card-title badge badge-primary">{product.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Product;
