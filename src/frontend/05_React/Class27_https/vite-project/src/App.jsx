import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const deleteUser = () => {

    axios
    .delete("https://jsonplaceholder.typicode.com/users/1",
    
    )
    .then((response) => {
      console.log("User is deleted");
      console.log(response.data);
    })
    .catch((error) => console.log(error))
  }

  return (
    <>
      <button onClick={deleteUser}>Delete User</button>
    </>
  );
}

export default App;
