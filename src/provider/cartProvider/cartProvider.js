import { createContext, useReducer, useState } from "react";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = {
    cartlist: []
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, value) {
    switch (value.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cartlist: state.cartlist.includes(value.payload)
            ? state.cartlist
            : [...state.cartlist, value.payload]
        };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cartlist: state.cartlist.filter(
            (product) => product.id !== value.payload.id
          )
        };
      case "QUANTITY_PLUS":
        return {
          ...state,
          cartlist: state.cartlist.map((product) =>
            product.id === value.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          )
        };
      case "QUANTITY_MINUS":
        return {
          ...state,
          cartlist: state.cartlist.map((product) =>
            product.id === value.payload.id
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
        };
      default:
        break;
    }
  }

  // console.log(state);

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};
