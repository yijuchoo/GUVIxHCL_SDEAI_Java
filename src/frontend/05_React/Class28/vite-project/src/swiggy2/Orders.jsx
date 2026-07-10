import OrderCard from "./OrderCard";

function Orders({ order }) {
  return (
    <div>
      <h2>Orders</h2>
      <OrderCard order={order} />
    </div>
  );
}

export default Orders;
