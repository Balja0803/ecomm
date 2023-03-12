import { createContext, useContext, useState } from "react";

const AllBasketContext = createContext();

export const useBasketContext = () => {
  return useContext(AllBasketContext);
};

export default function BasketContext({ children }) {
  const [basket, setBasket] = useState([{}]);

  return (
    <AllBasketContext.Provider value={{ basket, setBasket }}>
      {children}
    </AllBasketContext.Provider>
  );
}
