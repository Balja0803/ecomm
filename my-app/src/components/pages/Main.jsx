import Products from "../Products";
import Slider from "../Slider";
import { Route, Routes } from "react-router-dom";
import Product from "../ProductCard";
import { Navigate } from "react-router-dom";
export default function Main() {
  return (
    <div>
      <Routes>
        <Route>
          <Products path="products" />
        </Route>
        <Route>
          <Product path="product/:id" />
        </Route>
      </Routes>
      <Slider />
    </div>
  );
}
