import { useEffect, useState } from "react";

function App() {
  // Create the state to store the users received from the API
  const [users, setUsers] = useState([]);

  // Do an API Call
  useEffect(() => {
    // fetch the data from the API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // Convert response into JSON
      .then((data) => {
        // Store the JSON data into the state
        setUsers(data);
      })
      .catch((error) => console.log(error));
  }, []); //empty [] dependency -> it should call only once

  return (
    <div>
      <h2>Students List</h2>

      {users.map((user) => (
        <div>
          <p>Name is: {user.name}</p>
          <p>Email is: {user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
