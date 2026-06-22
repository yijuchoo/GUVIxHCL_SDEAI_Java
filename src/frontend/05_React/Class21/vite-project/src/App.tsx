import Child from "./components/Child";

function App() {
  // simulate the product data (API data)
  const product = {
    id: 101,
    name: "iPhone 12",
    price: 76000,
    brand: "Apple",
  };

  function handleAddToCart(productId: number) {
    alert(`Product ${productId} added to cart`);
  }

  return (
    <>
      <div>
        <h1>Amazon Product Page</h1>
        <Child 
        product={product} 
        onAddToCart={handleAddToCart} 
        />
      </div>
    </>
  );
}

export default App;
