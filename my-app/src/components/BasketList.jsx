import { useEffect, useState } from "react";
import { useProductContext } from "../layout/ProductContext";

export default function BasketList() {
  const { products } = useProductContext();
  // const product = products.find((product) => product.id === basket.id);
  return (
    <div className="basketList">
      <p>{/* {product.name}: {basket.prodQuantity} */}</p>
    </div>
  );
}
