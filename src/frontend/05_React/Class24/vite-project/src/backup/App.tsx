import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(18);
  const [username, setUsername] = useState("");

  const increment = () => {
    setCount(count + 1);
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  useEffect(() => {
    // localStorage.setItem("Username", username);

    const savedName = localStorage.getItem("username");

    if (savedName) {
      setUsername(savedName);
    }
  }, []);

  // I want to log for each and every click / interaction
  // Every time button is clicked to increment, console will print.
  // useEffect(() => {
  //   console.log(count);
  // });

  // useEffect, initial api call, load configuration, authentication, dashboarding loading
  // print only once upon load
  // to comment out <StrictMode> from main.tsx to prevent a 2nd call
  // useEffect(() => {
  //   console.log("Only once", count);
  // }, []); // empty dependency

  return (
    <>
      Count is: {count} &nbsp;
      <button onClick={increment}>Increment</button>
      <br />
      <br />
      Age is: {age} &nbsp;
      <button onClick={incrementAge}>Age</button> &nbsp;
      <input
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          localStorage.setItem("username", e.target.value);
        }}
      />
    </>
  );
}

export default App;
