import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./provider/cartProvider/cartProvider";
import { RouterProvider } from "./provider/router/routerContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <RouterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </RouterProvider>
  </StrictMode>,
  rootElement
);
