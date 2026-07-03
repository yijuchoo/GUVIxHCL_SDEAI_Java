import { useState } from "react";
import Counter from "./components/Counter";

// useState Example
// function App() {
//   const [count, setCount] = useState(0);

//   // increase count
//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   const reset = () => {
//     setCount(0);
//   };

//   return (
//     <>
//       <p>Count value is: {count}</p>
//       <br />
//       <button onClick={increment}>Increment</button>&nbsp;&nbsp;
//       <button onClick={decrement}>Decrement</button>&nbsp;&nbsp;
//       <button onClick={reset}>Reset</button>
//     </>
//   );
// }

// export default App;

// ----------------------------------------------------------------------
// useReducer Example

function App() {
  return (
    <>
      <Counter />
    </>
  );
}
export default App;