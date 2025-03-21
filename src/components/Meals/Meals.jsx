import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
  const { meals } = useLoaderData();

  return (
    <div>
      <h3 className="text-center">Total Meals: {meals.length}</h3>
      <div className="grid grid-cols-1 my-6 md:grid-cols-3 gap-5">
        {meals.map((meal) => (
          <Meal meal={meal} key={meal.idMeal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Meals;
