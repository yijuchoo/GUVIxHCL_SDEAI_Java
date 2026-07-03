import { useState, useMemo } from "react";

// useMemo is used to cache or memoize the result of the calculation
// useMemo is going to prevent react from recalculating expensive operations on every render

function App() {
  const [number, setNumber] = useState(4);
  const [count, setCOunt] = useState(0);

  function expensiveCalculation(num) {
    console.log("Running expensive calculation");
    let result = 0;
    for (let i = 0; i < 1000; i++) {
      result += num;
    }
    return result;
  }

  const total = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <>
      <h2>Total: {total}</h2>
      <span>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
      </span>

      <span>
        <button onClick={() => setCOunt(count + 1)}>Increase {count}</button>
      </span>
    </>
  );
}

export default App;
