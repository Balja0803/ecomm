import Product from "../Product";
import Slider from "../Slider";
import { Route, Routes } from "react-router-dom";
import Products from "../Products";

export default function Main() {
  return (
    <div className="main">
      <Slider />
      <Products />
    </div>
  );
}
