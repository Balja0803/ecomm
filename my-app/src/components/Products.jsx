import "../style/products.css";
import { useAxios } from "./hooks/useAxios";
import { useEffect, useState } from "react";
import { useProductContext } from "../layout/ProductContext";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "../subcomponent/Pagination";

export default function Products() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState();
  const { products, setProducts } = useProductContext();
  // const { response, loading, error } = useAxios({
  //   method: "GET",
  //   url: "http://localhost:2323/products",
  // });
  // useEffect(() => {
  //   response && setProducts(response);
  //   console.log(response);
  //   axios.get("http://localhost:2323/categories").then((res) => {
  //     setCategories(res.data);
  //   });
  // }, [response]);
  const filterCategory = async (curCat) => {
    console.log(curCat);
    const selectedCat = products.filter(
      (product) => product.category._id === curCat
    );
    console.log(selectedCat);
    const result = await axios.get(`http://localhost:2323/products/${curCat}`);
    console.log("filtered", result.data);
    setProducts(result.data);
  };
  const setAllProducts = async () => {
    axios
      .get("http://localhost:2323/products")
      .then((res) => setProducts(res.data));
  };

  return (
    <div className="products">
      <div className="products-title">
        <h3 className="allProducts" onClick={() => setAllProducts(products)}>
          Popular products
        </h3>
        <ul className="product-filter">
          {categories &&
            categories.map((category, i) => (
              <li key={i} onClick={() => filterCategory(category._id)}>
                {category.name}
              </li>
            ))}
        </ul>
      </div>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/products/${product._id}`);
            }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
}
