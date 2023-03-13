import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../layout/ProductContext";
import { useAxios } from "./hooks/useAxios";
import "../style/product.css";
import { useNavigate } from "react-router-dom";
import { useBasketContext } from "../layout/BasketContext";

export default function Product() {
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();
  const { products, setProducts } = useProductContext();
  const { setBasket } = useBasketContext();
  const { response } = useAxios({
    method: "GET",
    url: "http://localhost:2020/products",
  });

  const quantityHandlerInc = () => {
    setQuantity((c) => c + 1);
  };
  const quantityHandlerDec = () => {
    setQuantity((c) => Math.max(c - 1, 0));
  };
  useEffect(() => {
    response && setProducts(response);
  }, [response, setProducts]);
  const product = products.find((product) => product.id === id);
  const basketHandler = () => {
    localStorage.setItem([product.id, quantity]);
  };
  return (
    <>
      <div className="product">
        <div className="product-image">
          <div className="main-image">
            <img src={product.image} alt="" />
          </div>
          <div className="side-images">
            <div className="side-image1">
              <img src={product.image} alt="" />
            </div>
            <div className="side-image2">
              <img src={product.image} alt="" />
            </div>
          </div>
        </div>
        <div className="product-details">
          <div className="general-detail">
            <h2>{product.name}</h2>
            <p> price: ${product.price}</p>
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
              <button onClick={quantityHandlerDec}>-</button>
              <p>{quantity}</p>
              <button onClick={quantityHandlerInc}>+</button>
            </div>
            <div className="buttons">
              <p onClick={basketHandler}>add to cart</p>
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
