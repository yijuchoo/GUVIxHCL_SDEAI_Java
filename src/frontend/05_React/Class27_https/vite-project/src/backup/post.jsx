function App() {

  const addEmployee = () => {

    // employee object to send
    const employee = {
      name: "RAM",
      email: "ram@gmail.com",
    };

    fetch("https://jsonplaceholder.typicode.com/users", {

      // http method
      method: "POST",

      // request headers
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    })

      // convert the response to json
      .then((response) => response.json())

      .then((data) => {
        console.log("Employee added");
        console.log(data);
      })

      .catch((error) => console.log(error));
  };

  return (
    <>
      <button onClick={addEmployee}>Add</button>
    </>
  );
}

export default App;
