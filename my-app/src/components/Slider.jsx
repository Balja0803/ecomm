import { ProductContext, useProductContext } from "../layout/ProductContext";
import { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import "../style/slider.css";
import { useAxios } from "./hooks/useAxios";
import { useState } from "react";

export default function Slider() {
  const { products, setProducts } = useProductContext();
  const { response, loading, error } = useAxios({
    method: "GET",
    url: "http://localhost:2020/products",
  });
  useEffect(() => {
    response && setProducts(response);
  }, [response]);
  // useEffect(() => {
  //   axios.get("http://localhost:2020/products").then((res) => {
  //     console.log("products:", res.data);
  //     setProducts(res.data);
  //     console.log(res.data);
  //   });
  // }, []);

  return (
    <div className="slider">
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div>
          {products &&
            products.map((product, i) => <p key={i}>{product.name}</p>)}
        </div>

        // <Carousel>
        //   <Carousel.Item>
        //     <img
        //       width={1000}
        //       height={500}
        //       className="d-block w-100 "
        //       src={products && products}
        //       alt="First slide"
        //     />
        //     <Carousel.Caption>
        //       <h3>{products && products[0].name}</h3>
        //       <p>{products && products[0].description}</p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        //   <Carousel.Item>
        //     <img
        //       width={900}
        //       height={500}
        //       className="d-block w-100"
        //       src={products && products[1].image}
        //       alt="Second slide"
        //     />

        //     <Carousel.Caption>
        //       <h3>{products && products[1].name}</h3>
        //       <p>{products && products[1].description}</p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        //   <Carousel.Item>
        //     <img
        //       width={900}
        //       height={500}
        //       className="d-block w-100"
        //       src={products[2].image}
        //       alt="Third slide"
        //     />

        //     <Carousel.Caption>
        //       <h3>{products && products[2].name}</h3>
        //       <p>{products && products[2].description}</p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        // </Carousel>
      )}
    </div>
  );
}
