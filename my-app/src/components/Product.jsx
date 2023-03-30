import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../layout/ProductContext";
import { useAxios } from "./hooks/useAxios";
import "../style/product.css";
import { useNavigate } from "react-router-dom";
import { useBasketContext } from "../layout/BasketContext";

export default function Product() {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();
  const { products } = useProductContext();
  const { setBasket } = useBasketContext();
  // const { response } = useAxios({
  //   method: "GET",
  //   url: "http://localhost:2323/products",
  // });

  const quantityHandlerInc = () => {
    if (quantity < product.stock) {
      setQuantity((c) => c + 1);
    }
  };
  const quantityHandlerDec = () => {
    setQuantity((c) => Math.max(c - 1, 0));
  };
  // useEffect(() => {
  //   response && setProducts(response);
  // }, [response, setProducts]);

  const product = products.find((product) => product._id === id);

  const basketHandler = () => {
    setBasket({ id: product._id, prodQuantity: quantity });
  };
  return (
    <>
      <div className="product">
        <div className="product-image">
          <div className="main-image">
            <img src={product.image[0]} alt="" />
          </div>
          <div className="side-images">
            <div className="side-image1">
              <img src={product.image[1]} alt="" />
            </div>
            <div className="side-image2">
              <img src={product.image[2]} alt="" />
            </div>
          </div>
        </div>
        <div className="product-details">
          <div className="general-detail">
            <h2>{product.name}</h2>
            <p> price: ${product.price}</p>
            <p>{product.sale !== null ? `Sale: ${product.sale}% off` : null}</p>
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
            {product.specs.map((spec, index) => (
              <p key={index}>
                {spec.key} : {spec.value}
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
