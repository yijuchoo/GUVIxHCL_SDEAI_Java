import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // we are converting response to the JSON
      .then((data) => setUsers(data)) // whatever response we got, we are storing in the setUsers

      .catch(() => {
        setError("Unable to fetch the users");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (error) {
    return <h2>{error}</h2>;
  }

  if (loading) {
    return <h2>Loading the user details ... ...</h2>;
  }

  return (
    <>
      <div>
        <h2>User Details</h2>

        {users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "2px solid orange",
              padding: "20px",
              margin: "20px",
            }}
          >
            <span>
              <strong>{user.name}</strong> and email is: {user.email}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

// https://jsonplaceholder.typicode.com/users
// inspect element > Network > Fetch/XHR to click on users to see the data
