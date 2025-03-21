import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getOrderedItems } from "../utils/localStorage";
import Meal from "../Meal/Meal";

const AddToOrder = () => {
  const [orderItems, setOrderItems] = useState([]);
  const { meals } = useLoaderData();

  useEffect(() => {
    const storedItems = getOrderedItems();
    const items = meals.filter((meal) =>
      storedItems.includes(parseInt(meal.idMeal))
    );
    setOrderItems(items);
  }, [meals]);

  const handleSort = () => {
    const sortMeal = [...orderItems].sort(
      (a, b) => parseInt(a.idMeal) - parseInt(b.idMeal)
    );
    setOrderItems(sortMeal);
  };
  return (
    <div className="my-3 px-6">
      <h3 className="text-2xl font-bold mb-2 underline text-red-600">
        Order Items: {orderItems.length}
      </h3>

      <button onClick={handleSort} className="my-7 btn">
        Sort By Price
      </button>

      <div className="grid gap-5 md:grid-cols-2">
        {orderItems.map((orderItem) => (
          <Meal key={orderItem?.idMeal} meal={orderItem}></Meal>
        ))}
      </div>
    </div>
  );
};

export default AddToOrder;
