import "../style/products.css";
import { useAxios } from "./hooks/useAxios";
import { useEffect } from "react";
import { useProductContext } from "../layout/ProductContext";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  const { products, setProducts, setProdId } = useProductContext();
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
          <div
            key={index}
            onClick={() => {
              console.log(product.id);
              setProdId(product.id);
              navigate("/products/:id");
            }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
