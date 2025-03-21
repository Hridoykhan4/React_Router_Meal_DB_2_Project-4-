import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
  const {
    strMeal: name,
    idMeal: id,
    strArea: area,
    strMealThumb: image,
  } = meal;
  return (
    <Link to={`/meal/${id}`}>
      {" "}
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <img
            className="h-[260px] w-full object-cover"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Area: {area}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </Link>
  );
};

export default Meal;
