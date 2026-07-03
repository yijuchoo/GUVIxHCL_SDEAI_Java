import { useState, useMemo } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  // mock products
  const products = [
    "LAPTOP",
    "MOUSE",
    "KEYBOARD",
    "PEN",
    "PENCIL",
    "TV",
    "Washing Machine",
  ];

  // logic to filter the products, filter only when search changes
  const filteredProducts = useMemo(() => {
    console.log("Filtering the products");

    return products.filter((product) =>
      product.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <>
      <span>
        <input
          type="text"
          placeholder="Search products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </span>

      <span>
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
      </span>

      {filteredProducts.map((product) => (
        <p key={product}>{product}</p>
      ))}
    </>
  );
}

export default App;
