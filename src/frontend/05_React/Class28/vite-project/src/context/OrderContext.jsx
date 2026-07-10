import { createContext, useState } from "react";

// Create the context
export const OrderContext = createContext();

// Provider component
function OrderProvider({ children }) {
  const [order] = useState({
    orderId: "ORD-12345",
    customer: "Venkat",
    product: "Iphone",
    price: 72000,
    status: "Out for Delivery",
  });

  return (
    // Provide the employee to every child
    <OrderContext.Provider value={{ order }}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderProvider;
