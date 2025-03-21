import { useLoaderData, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const productDetail = useLoaderData();
  const { id, title, price, image, description } = productDetail;
  const navigate = useNavigate()
  return (
    <div className="card p-7 bg-base-100 w-96 shadow-sm">
      <figure>
        <img className="h-[200px]"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description}
        </p>
        <h2>Product Id: {id}</h2>
        <p>Price: {price}</p>
       <button className="btn" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default ProductDetail;
