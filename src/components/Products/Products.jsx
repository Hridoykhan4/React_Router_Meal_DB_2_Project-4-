import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const products = useLoaderData() || [];

  return (
    <div>
      <h3 className="text-center my-10 font-bold text-2xl">
        Total Products: {products.length}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <Product key={product?.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;

