import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const updateUser = () => {
    const updatUser = {
      name: "RAM",
      email: "ram@gmail.com"
    };

    axios
    .put("https://jsonplaceholder.typicode.com/users/1",
      updatUser
    )
    .then((response) => {
      console.log("User is updated");
      console.log(response.data);
    })
    .catch((error) => console.log(error))
  }

  return (
    <>
      <button onClick={updateUser}>Update User</button>
    </>
  );
}

export default App;
