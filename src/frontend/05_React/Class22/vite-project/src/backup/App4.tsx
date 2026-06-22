
interface Product {
  id:number;
  name: string;
  price: number;
  image: string;
}

function App() {
  const products: Product[] = [
    {
      id: 1,
      name: "Lenovo Laptop",
      price: 35000,
      image: "https://m.media-amazon.com/images/I/71nYpJKrGNL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 2,
      name: "Apple Laptop",
      price: 25000,
      image: "https://m.media-amazon.com/images/I/71nYpJKrGNL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 3,
      name: "ASUS Laptop",
      price: 45000,
      image: "https://m.media-amazon.com/images/I/71nYpJKrGNL._AC_UL480_FMwebp_QL65_.jpg"
    },
  ];

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <img src= {product.image} width= "150" />
          <h3>{product.name}</h3>
          <p>Rs. {product.price}</p>
          <button>Add to Cart</button><br /><br />
        </div>
      ))}
    </>
  );
}

export default App;
