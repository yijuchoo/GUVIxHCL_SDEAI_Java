function App() {
  const prices = [500, 1500, 2000, 300];

  // I want to find expensive product
  const expensive = prices.filter((price) => price > 1900);

  const products = [
    { name: "Laptop", stock: 10 },
    { name: "Mobile", stock: 0 },
  ];

  const available = products.some(
    product => product.stock > 0
  );

  return (
    <>
      <h3>Expensive product is:</h3>
      {expensive.map((price) => (
        <p>{price}</p>
      ))}

      <h3>{available ? "Stock is available" : "Out of Stock"}</h3>
    </>
  );
}

export default App;
