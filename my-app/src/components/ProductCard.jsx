import Card from "react-bootstrap/Card";
import BasketLogo from "../subcomponent/BasketLogo";

export default function ProductCard({ product }) {
  return (
    <Card border="primary" style={{ width: "250px", height: " 300px" }}>
      <Card.Img
        variant="top"
        style={{ width: "150px", height: "150px", borderRadius: "10px" }}
        src={product.image}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}$</Card.Text>

        <BasketLogo />
      </Card.Body>
    </Card>
  );
}
