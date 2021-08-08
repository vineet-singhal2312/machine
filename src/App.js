import "./styles.css";
// import Data from "./data/Data";
import { ProductList } from "./pages/productList/ProductList";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./pages/cart/cart";
import { useContext } from "react";
import { routerContext } from "./provider/router/routerContext";
export default function App() {
  const { route } = useContext(routerContext);

  return (
    <div className="App">
      {route === "Product-List" && <ProductList />}
      {route === "Cart" && <Cart />}
    </div>
  );
}
