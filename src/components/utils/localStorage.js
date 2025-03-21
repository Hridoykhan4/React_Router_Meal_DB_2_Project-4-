const getOrderedItems = () => {
  const getOrderItems = localStorage.getItem("order-items");
  return getOrderItems ? JSON.parse(getOrderItems) : [];
};

const addToLS = (id) => {
  const orderItems = getOrderedItems();
  if (!orderItems.includes(id)) {
    orderItems.push(id);
    saveToLS();
  } else {
    alert("");
  }
};

const saveToLS = (items) => {
  localStorage.setItem("order-items", JSON.stringify(items));
};

const removeFromLS = (id) => {
  const storedOrder = getOrderedItems();

  const remaining = [...storedOrder].filter(
    (storeId) => storeId !== parseInt(id)
  );
  saveToLS(remaining);
};

export { addToLS, getOrderedItems, removeFromLS };
