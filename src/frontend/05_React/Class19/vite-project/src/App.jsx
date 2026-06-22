function App() {
  const name = "Ram";
  const age = 20;
  const num1 = 10;
  const num2 = 20;

  // normal function
  function greet() {
    return "Welcome to React";
  }

  // arrow function
  const welcome = () => {
    return "Welcome India";
  };

  // Javascript Object
  const student = {
    id: 101,
    name: "Venkat",
    city: "Bangalore",
  };

  // arrays
  const mobiles = ["oppo", "vivo", "samsung"];

  const isLoggedIn = false;

  const isAdmin = true;

  // passing parameters
  const showName = (name) => {
    alert(name);
  };

  return (
    <>
      <div>
        <h1>Name is: {name}</h1>
        <h2>Age is: {age}</h2>

        <h1>Addition: {num1 + num2}</h1>
        <p>Subtraction: {num1 - num2}</p>
        <p>Multiplication: {num1 * num2}</p>

        <h1>{greet()}</h1>
        <h2>{welcome()}</h2>

        <mark>
          Student details are: {student.name} is from city {student.city}
        </mark>

        <h1>{mobiles[0]}</h1>
        <h1>{mobiles[1]}</h1>
        <h1>{mobiles[2]}</h1>

        <div>
          {/* Conditional Rendering */}
          {isLoggedIn ? <h1>Welcome to Dashboard</h1> : <h2>Login page</h2>}
        </div>

        <div>
          {isAdmin && <h1>Admin Panel</h1>}
        </div>

        <button onClick={() => showName("Venkat")}>Show Name</button>
      </div>
    </>
  );
}

export default App;
