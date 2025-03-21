const getOrderedItems = () => {
  const getOrderItems = localStorage.getItem("order-items");
  return getOrderItems ? JSON.parse(getOrderItems) : [];
};

const addToLS = (id) => {
  const orderItems = getOrderedItems();
  if (!orderItems.includes(id)) {
    orderItems.push(id);
    localStorage.setItem("order-items", JSON.stringify(orderItems));
  } else {
    alert("");
  }
};

export { addToLS, getOrderedItems };
