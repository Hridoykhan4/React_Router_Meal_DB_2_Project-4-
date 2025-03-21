import { useLoaderData } from "react-router-dom";
import { addToLS } from "../utils/localStorage";

const MealDetail = () => {
  const { meals } = useLoaderData();
  const meal = meals[0];
  const {
    strMeal: name,
    strInstructions: ins,
    strArea: area,
    strMealThumb: image,
    idMeal,
  } = meal;

  const currentId = parseInt(idMeal);

  const handleAddToOrderItem = (id) => {
    addToLS(id);
  };

  return (
    <div className=" p-8 bg-base-100  shadow-sm">
      <figure>
        <img className="w-[400px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Area: {area}</p>

        <p>{ins}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToOrderItem(currentId)}
            className="btn btn-primary"
          >
            Add To Order Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
