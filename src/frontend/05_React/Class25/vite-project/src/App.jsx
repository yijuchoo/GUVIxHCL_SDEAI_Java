import { useState } from "react";

import { useRef } from "react";

// useRef
// 1. store a value without re-rendering the component
// 2. access DOM elements directly
// 3. the component will not re-render even if we change the value;
//    which will increase the performance

// useRef is best for values that don't need to be displayed or shouldn't cause re-renders

function App() {
  // --------------------------------------------
  // useState only Example
  // state changes => component re-renders => UI updates
  // const [count, setCount] = useState(0);
  // console.log("Component is rendered");

  // const increase = () => {
  //   setCount(count + 1);
  // }
  // --------------------------------------------

  const countRef = useRef(0);
  const [displayCount, setDisplayCount] = useState(0);

  // Using only useRef as example. UI will not show the count change
  // const increase = () => {
  //   countRef.current++;
  //   console.log(countRef.current);
  // }

  // Using useRef and useState together as useState is for UI
  const increase = () => {
    countRef.current++;
    setDisplayCount(countRef.current);
  };

  return (
    <>
      {/* <h2>{count}</h2> */}

      {/* useRef example */}
      {/* <h2>{countRef.current}</h2> */}

      {/* useRef + usState example */}
      <h2>{displayCount}</h2>
      <span>
        <button onClick={increase}>Increase Count</button>
      </span>
    </>
  );
}

export default App;
/* 
Rule of thumb
Need the UI to update? → Use useState.
Need to store a mutable value without causing a re-render? → Use useRef.
 */