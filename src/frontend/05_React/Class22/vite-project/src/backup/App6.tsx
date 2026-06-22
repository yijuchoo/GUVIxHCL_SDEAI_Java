import { useState } from "react";

function App() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const passwordFunc = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <input type={showPassword ? "text" : "password"} placeholder="Enter your password" />

      <button onClick={passwordFunc}> {showPassword ? "Hide" : "Show"}</button>
    </>
  );
}

export default App;
