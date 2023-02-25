import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../layout/ProductContext";

export default function Product() {
  const { id } = useParams();
  const { products, prodId } = useProductContext;
  console.log(prodId);
  return <div>{prodId && <h1>product: {prodId}</h1>}</div>;
}
