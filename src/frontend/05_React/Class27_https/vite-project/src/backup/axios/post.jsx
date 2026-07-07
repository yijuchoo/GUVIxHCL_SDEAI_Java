import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const addUser = () => {
    const newUser = {
      name: "RAM",
      email: "ram@gmail.com"
    };

    axios
    .post("https://jsonplaceholder.typicode.com/users",
      newUser
    )
    .then((response) => {
      console.log("User is added");
      console.log(response.data);
    })
    .catch((error) => console.log(error))
  }

  return (
    <>
      <button onClick={addUser}>Add User</button>
    </>
  );
}

export default App;
