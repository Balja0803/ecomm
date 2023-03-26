import Card from "react-bootstrap/Card";
import BasketLogo from "../subcomponent/BasketLogo";

export default function ProductCard({ list }) {
  return (
    <Card border="primary" style={{ width: "250px", height: " 300px" }}>
      <Card.Title>{list.brand.name} </Card.Title>
      <Card.Img
        variant="top"
        style={{ width: "150px", height: "150px", borderRadius: "10px" }}
        src={list.image[0]}
      />
      <Card.Body>
        <Card.Title>{list.name}</Card.Title>
        <Card.Text>{list.price}$</Card.Text>

        <Card.Text style={{ fontWeight: "bold" }}>
          {list.category.name}
        </Card.Text>
        {/* <BasketLogo /> */}
      </Card.Body>
    </Card>
  );
}
