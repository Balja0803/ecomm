import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../layout/ProductContext";
import { useAxios } from "./hooks/useAxios";
import "../style/product.css";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { products, setProducts } = useProductContext();
  const { response } = useAxios({
    method: "GET",
    url: "http://localhost:2020/products",
  });
  useEffect(() => {
    response && setProducts(response);
  }, [response, setProducts]);
  const product = products.find((product) => product.id === id);
  return (
    <>
      <div className="product">
        <div className="product-image">
          <div className="main-image">
            <img src={product.image} width="647px" height="561px" alt="" />
          </div>
          <div className="side-images">
            <div className="side-image1">
              <img src={product.image} width="310px" height="157px" alt="" />
            </div>
            <div className="side-image2">
              <img src={product.image} width="310px" height="157px" alt="" />
            </div>
          </div>
        </div>
        <div className="product-details">
          <div className="general-detail">
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <p>{product.sale !== 0 ? `Sale: ${product.sale}% off` : null}</p>
            <p>availablity:</p>
            <p>
              {product.stock !== 0
                ? `stocks available: ${product.stock}`
                : "out of stock!"}
            </p>
          </div>
          <div>
            <div className="quantity">
              <p>Quantity:</p>
              <button>-</button>
              <p>0</p>
              <button>+</button>
            </div>
            <div className="buttons">
              <p>add to cart</p>
              <p>Buy it now</p>
            </div>
          </div>
          <div className="product-specs">
            <p>{product.description}</p>
            {product.spec.map((specs, index) => (
              <p key={index}>
                {Object.keys(specs)} : {Object.values(specs)}
              </p>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={(e) => {
          navigate(-1);
        }}
      >
        back
      </button>
    </>
  );
}
