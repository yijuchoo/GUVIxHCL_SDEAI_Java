import { useState } from "react";
import Age from "./components/Age";
import AgeBtn from "./components/AgeBtn";
import Count from "./components/Count";
import CountBtn from "./components/CountBtn";
import Title from "./components/Title";
import { useCallback } from "react";

function App() {
  // state variables for count and age
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(18);

  const handleCount = useCallback(() => {
    setCount(count + 1);
  },[count]);

  const handleAge = useCallback(() => {
    setAge(age + 1);
  },[age]);

  return (
    <>
      <Title />
      <Count count={count} />
      <CountBtn handleCount={handleCount} />
      <br />
      <hr style={{width: "100%"}} />
      <Age age={age} />
      <AgeBtn handleAge={handleAge} />
    </>
  );
}

export default App;
