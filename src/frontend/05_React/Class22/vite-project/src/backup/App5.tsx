import { useState } from "react";



function App() {
  
  const [cart, setCart] = useState(0);

  const incrementCart = () => {
    setCart(cart + 1)
  }

  const decrementCart = () => {
    setCart(cart - 1)
  }

  const reset = () => {
    setCart(0)
  }

  return (
    <>
      <h2>Cart value is: {cart}</h2>

      <button onClick={incrementCart}>Increment Cart</button>
      <button onClick={decrementCart}>Decrement Cart</button>
      <button onClick={reset}>Reset Cart</button>
    </>
  );
}

export default App;
