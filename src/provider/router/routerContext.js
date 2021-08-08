import { createContext, useState } from "react";

export const routerContext = createContext();

export const RouterProvider = ({ children }) => {
  const [route, setRoute] = useState("Product-List");
  return (
    <routerContext.Provider value={{ route, setRoute }}>
      {children}
    </routerContext.Provider>
  );
};
