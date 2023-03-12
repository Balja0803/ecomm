import { useBasketContext } from "../layout/BasketContext";
import { useProductContext } from "../layout/ProductContext";

export default function BasketList({ item }) {
  console.log(item);
  const { basket } = useBasketContext();
  const { products } = useProductContext();
  const product = products.find((product) => product.id === basket.id);
  return (
    <div className="basketList">
      <p>
        {product.name}: {basket.prodQuantity}
      </p>
    </div>
  );
}
