import OrderDetails from "./OrderDetails";

function OrderCard({ order }) {
  return (
    <div>
      <h2>Order Card</h2>
      <OrderDetails order={order} />
    </div>
  );
}

export default OrderCard;
