import { Link, useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const {
    id,
    title,
    description,
    image,
    rating: { rate },
  } = product;

  const nav = useNavigate();

  const handleShowDetail = () => {
    nav(`/product/${id}`);
  };

  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img className="h-[200px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>Rating: {rate}</p>
        <div className="card-actions justify-end">
          <Link to={`/product/${id}`} className="btn btn-primary">
            Show Detail
          </Link>
        </div>
        <button
          onClick={handleShowDetail}
          className="btn place-self-end btn-warning text-white"
        >
          Click To Show Detail
        </button>
      </div>
    </div>
  );
};

export default Product;
