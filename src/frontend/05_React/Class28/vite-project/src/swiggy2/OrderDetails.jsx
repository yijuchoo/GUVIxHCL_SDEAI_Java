import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

function OrderDetails() {
  // read the employee data from the context
  const { order } = useContext(OrderContext);

  return (
    <div>
      <h2>Order Details</h2>
      <p>Order ID: {order.orderId}</p>
      <p>Customer: {order.customer}</p>
      <p>Product: {order.product}</p>
      <p>Price: {order.price}</p>
    </div>
  );
}

export default OrderDetails;
