import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getOrderedItems, removeFromLS } from "../utils/localStorage";
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

  const handleCancelOrder = (id) => {
    const remaining = orderItems.filter((meal) => meal?.idMeal !== id);
    setOrderItems(remaining);
    removeFromLS(id);
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
          //   <Meal key={orderItem?.idMeal} meal={orderItem}></Meal>
          <div key={orderItem.idMeal} className="card bg-base-100  shadow-sm">
            <figure className="">
              <img
                src={orderItem?.strMealThumb}
                alt="Shoes"
                className="rounded-xl w-full object-cover h-[300px]"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{orderItem?.strMeal}</h2>
              <p>{orderItem?.strInstructions}</p>
              <div className="card-actions">
                <button
                  onClick={() => handleCancelOrder(orderItem?.idMeal)}
                  className="btn btn-error text-white"
                >
                  Cancel Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddToOrder;
