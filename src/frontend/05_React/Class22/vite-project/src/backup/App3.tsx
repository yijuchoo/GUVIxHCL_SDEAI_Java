// total cart value
type CartItem = {
  id: number;
  name: string;
  price: number;
};

function App() {
  const cartItems: CartItem[] = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 1000 },
    { id: 3, name: "Keyboard", price: 2000 },
  ];

  const totalAmount = cartItems.reduce(
    (acc, curr) => acc + curr.price, 0
  );

  // sort the pproducts by price
  const sortedProducts = cartItems.sort(
    (a, b) => a.price - b.price
  );

  // Check the user ROLE
  const roles: string[] = [
    "Admin", 
    "Manager", 
    "Employee"
  ];

  const isAdmin = roles.includes("Admin");

  return (
    <>
      <h2>
        Cart total is: <span>Rs. {totalAmount}</span>
      </h2>

      <h2>Products by price:</h2>
      {sortedProducts.map((product) => (
        <p>
          {product.name} - Rs. {product.price}
        </p>
      ))}

      <h2>Role check:</h2>
      <p>{isAdmin ? "Admin access granted" : "Access denied"}</p>
    </>
  );
}

export default App;
