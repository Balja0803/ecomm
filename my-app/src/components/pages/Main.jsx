import Products from "../Products";
import Slider from "../Slider";
import { Route, Routes } from "react-router-dom";
import Product from "../ProductCard";

export default function Main() {
  return (
    <div>
      <Slider />
      <Products />
    </div>
  );
}
