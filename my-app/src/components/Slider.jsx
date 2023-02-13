import { ProductContext } from "../layout/ProductContext";
import { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import "../style/slider.css";

export default function Slider() {
  const { products, setProducts } = useContext(ProductContext);
  useEffect(() => {
    axios.get("http://localhost:2020/products").then((res) => {
      console.log("products:", res.data);
      setProducts(res.data);
    });
  }, []);
  //   console.log(products[0].image);
  return (
    <div className="slider">
      {products ? (
        <Carousel>
          <Carousel.Item>
            <img
              width={1000}
              height={500}
              className="d-block w-100 "
              src={products[0].image}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{products[0].name}</h3>
              <p>{products[0].description}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width={900}
              height={500}
              className="d-block w-100"
              src={products[1].image}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>{products[1].name}</h3>
              <p>{products[1].description}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width={900}
              height={500}
              className="d-block w-100"
              src={products[2].image}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>{products[2].name}</h3>
              <p>{products[2].description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
}
