import products from "../../products";
import Product from "../components/Product";
import axios from "axios";
import { useEffect, useState } from "react";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:5000/api/products");

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1 className="text-5xl my-10">All Products</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default HomeScreen;