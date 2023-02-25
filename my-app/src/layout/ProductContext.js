import { createContext, useContext, useState } from "react";

const AllProductContext = createContext();

export const useProductContext = () => {
  return useContext(AllProductContext);
};

export default function ProductContext({ children }) {
  const [products, setProducts] = useState([]);
  const [prodId, setProdId] = useState();
  console.log(prodId);

  return (
    <AllProductContext.Provider
      value={{ products, setProducts, prodId, setProdId }}
    >
      {children}
    </AllProductContext.Provider>
  );
}
