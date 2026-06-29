import { useEffect, useState } from "react";
import './App.css'; 

// product type
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

function App() {
  // store the API data
  const [products, setProducts] = useState<Product[]>([]);

  // loading state
  const [loading, setLoading] = useState(true);

  // error state
  const [error, setError] = useState("");

  // useEffect only once after the component loads
  useEffect(() => {
    fetchProducts();
  }, []);

  // API function
  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch the products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError("Unable to load the products");
    } finally {
      setLoading(false);
    }
  }

  // loading the UI
  if (loading) {
    return <h1>Loading the products...</h1>;
  }

  // error UI
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
    <div className="container">
      <h1>GUVI HCL Shopping Mall</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} className="image" />
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
            <p className="category">{product.category}</p>
            <p className="description">{product.description.substring(0,50)}</p>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default App;
