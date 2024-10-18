import { useParams, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import products from "../../products";
// import axios from "axios";
import Rating from "../components/Rating";
import { useGetProductByIdQuery } from "../slices/productsApiSlices";

const ProductScreen = () => {
  // const { id } = useParams(); // Extract the dynamic product ID from the URL

  // const [product, setProduct] = useState({});

  // // useEffect to fetch product when component mounts
  // useEffect(() => {
  //   const foundProduct = products.find((product) => product._id === id);
  //   console.log(foundProduct);
  //   if (foundProduct) {
  //     setProduct(foundProduct);
  //   }
  // }, [id]);

  const { id: productId } = useParams();
  // const [product, setProduct] = useState({});

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const { data } = await axios.get(
  //       `http://localhost:5000/api/products/${productId}`
  //     );

  //     setProduct(data);
  //   };

  //   fetchProduct();
  // }, [productId]);

  const { data: product, error, isLoading } = useGetProductByIdQuery(productId);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <Link to="/">
        <button className="btn btn-neutral">Go Back</button>
      </Link>

      <div className="grid md:grid-cols-2 gap-10 mt-8">
        <div className="md:col-span-1 flex justify-center">
          <img
            className="max-w-full h-auto"
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="md:col-span-1 flex flex-col justify-center">
          <div className="card w-full">
            <div className="card-body">
              <h2 className="card-title text-3xl font-bold ">{product.name}</h2>
              <p className="text-lg ">{product.description}</p>
              <p className="text-2xl font-semibold  mt-4">${product.price}</p>

              <div className="flex mt-4">
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </div>

              <p className=" mt-2">
                {product.countInStock > 0 ? "In stock" : "No stock"}
              </p>

              {product.countInStock > 0 && (
                <div className="mt-4">
                  <h4 className="text-lg font-medium">Qty</h4>
                  <form className="mt-2">
                    <select className="select select-primary w-full max-w-xs">
                      {[...Array(product.countInStock).keys()].map((item) => (
                        <option key={item + 1}>{item + 1}</option>
                      ))}
                    </select>
                  </form>
                </div>
              )}

              <div className="card-actions mt-6">
                <button
                  disabled={product.countInStock === 0}
                  className="btn btn-primary w-full max-w-xs"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
