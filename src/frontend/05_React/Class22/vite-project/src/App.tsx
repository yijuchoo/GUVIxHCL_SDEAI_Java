import { useState } from "react";

function App() {
  // initial state
  const [students, setStudents] = useState<string[]>([
    "Ram", 
    "Venkat"
  ]);

  // object type
  const [cart, setCart] = useState({
    id: 1,
    name: "LG",
    price: 55000,
    additionalDiscount: 50,
  });

  // add the student
  const addStudent = () => {
    // I want to create a new array (spread operator)
    setStudents([...students, "Shyam"]);
  };

  // update the price for the state object
  const updatePrice = () => {
    setCart({
      ...cart,
      price: 60000,
      additionalDiscount: 100,
    });
  };

  return (
    <>
      <button onClick={addStudent}>Add Student</button>

      {students.map((student, index) => (
        <p key={index}> {student}</p>
      ))}

      <h2>Product Details:</h2>
      <h2>{cart.name}</h2>
      <h2>{cart.price}</h2>
      <h2>{cart.additionalDiscount}</h2>

      <button onClick={updatePrice}>Update Price</button>
    </>
  );
}

export default App;
