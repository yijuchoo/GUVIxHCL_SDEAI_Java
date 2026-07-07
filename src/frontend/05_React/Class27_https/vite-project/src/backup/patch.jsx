function App() {

  const updateEmployee = () => {

    // employee object to send
    const employee = {
      name: "RAM",
      email: "ram@gmail.com",
    };

    fetch("https://jsonplaceholder.typicode.com/users/10", {

      // http method
      method: "PATCH",

      // request headers
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "newram@gmail.com"
      }),
    })

      // convert the response to json
      .then((response) => response.json())

      .then((data) => {
        console.log("Email is updated");
        console.log(data);
      })

      .catch((error) => console.log(error));
  };

  return (
    <>
      <button onClick={updateEmployee}>Update Email</button>
    </>
  );
}

export default App;
