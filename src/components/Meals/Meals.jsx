import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";
import { useState } from "react";

const Meals = () => {
  const { meals } = useLoaderData();

  const [counter, setCounter] = useState(4);

  return (
    <div>
      <h3 className="text-center">Total Meals: {meals.length}</h3>
      <div className="grid grid-cols-1 my-6 md:grid-cols-3 gap-5">
        {meals.slice(0, counter).map((meal) => (
          <Meal meal={meal} key={meal.idMeal}></Meal>
        ))}
      </div>

      {counter > 4 ? (
        ""
      ) : (
        <div className="flex justify-center my-8">
          <a
            onClick={() => setCounter(meals.length)}
            className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 cursor-pointer hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">See all</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Meals;
