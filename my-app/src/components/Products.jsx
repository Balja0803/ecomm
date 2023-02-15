import "../style/products.css";
import { useAxios } from "./hooks/useAxios";
import { useEffect } from "react";
import { useProductContext } from "../layout/ProductContext";
import ProductCard from "./ProductCard";

export default function Products() {
  const { products, setProducts } = useProductContext();
  const { response, loading, error } = useAxios({
    method: "GET",
    url: "http://localhost:2020/products",
  });
  useEffect(() => {
    response && setProducts(response);
  }, [response]);

  return (
    <div className="products">
      <div className="products-title">
        <h3>Popular products</h3>
        <ul className="product-filter">
          <li>Appliance</li>
          <li>Laptops</li>
          <li>Tablets</li>
          <li>Mouse</li>
          <li>Sale</li>
        </ul>
      </div>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
}
