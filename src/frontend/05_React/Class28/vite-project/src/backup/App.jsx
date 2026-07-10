// local state
import { useState } from "react";

function App() {
  const [cart, setCart] = useState(0);

  return (
    <>
      <h2>{cart}</h2>

      {/* increase the cart */}
      <button onClick={() => setCart(cart + 1)}>Increment Cart</button>
    </>
  );
}

export default App;
