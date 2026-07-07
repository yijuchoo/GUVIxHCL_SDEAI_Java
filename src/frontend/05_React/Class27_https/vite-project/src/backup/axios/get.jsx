import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  
  // State used to store the data coming from the API
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch the users when the component loads
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <h2>Users List:</h2>
      {users.map((user) => (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
          <p>Website is: {user.website}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default App;
