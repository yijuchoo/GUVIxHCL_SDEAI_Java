import Home from "./swiggy/Home";

// example of swiggy

function App() {
  const order = {
    orderId: "ORD-12345",
    customer: "Venkat",
    product: "Iphone",
    price: 72000,
    status: "Out for Delivery",
  };

  return (
    <>
      <Home order={order} />
    </>
  );
}

export default App;
