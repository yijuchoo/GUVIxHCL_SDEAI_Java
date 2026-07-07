function App() {

  const updateEmployee = () => {

    // employee object to send
    const employee = {
      name: "RAM",
      email: "ram@gmail.com",
    };

    fetch("https://jsonplaceholder.typicode.com/users/10", {

      // http method
      method: "PUT",

      // request headers
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    })

      // convert the response to json
      .then((response) => response.json())

      .then((data) => {
        console.log("Employee updated");
        console.log(data);
      })

      .catch((error) => console.log(error));
  };

  return (
    <>
      <button onClick={updateEmployee}>Update</button>
    </>
  );
}

export default App;
