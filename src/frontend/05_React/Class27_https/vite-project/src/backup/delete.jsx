function App() {

  const deleteEmployee = () => {

    fetch("https://jsonplaceholder.typicode.com/users/10", {

      // http method
      method: "DELETE",
    })

      // convert the response to json
      .then((response) => response.json())

      .then((data) => {
        console.log("Deleted");
      })

      .catch((error) => console.log(error));
  };

  return (
    <>
      <button onClick={deleteEmployee}>Delete Record</button>
    </>
  );
}

export default App;
