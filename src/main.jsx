import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Dashboard from "./components/Dashboard/Dashboard";
import Meals from "./components/Meals/Meals";
import getMealData from "./components/utils/getMealData";
import MealDetail from "./components/MealDetail/MealDetail";
import AddToOrder from "./components/AddToOrder/AddToOrder";
// import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/product/:productId",
        element: <ProductDetail></ProductDetail>,
        loader: ({ params }) =>
          fetch(`https://fakestoreapi.com/products/${params.productId}`),
      },
      {

      },
      {
        path: "/meals",
        element: <Meals></Meals>,
        loader: getMealData,
      },
      {
        path: '/orderMeals',
        element: <AddToOrder></AddToOrder>,
        loader: getMealData
      },
      {
        path: "/meal/:mealId",
        element: <MealDetail></MealDetail>,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`
          ),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("https://fakestoreapi.com/products"),
      },
      {
        path: "/products",
        element: <Products />,
        loader: async () => {
          try {
            const res = await fetch("https://fakestoreapi.com/products");
            if (!res.ok) throw new Error("Failed to fetch products");
            return await res.json();
          } catch (error) {
            console.error("Loader error:", error);
            return [];
          }
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <RouterProvider router={router}></RouterProvider>
  //</StrictMode>
);
