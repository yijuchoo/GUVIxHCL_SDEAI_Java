function App() {
  // this function App is a component (not the normal functions)
  const name = "Venkat"; // JS variable

  // normal javascript function, because function name started with small letter
  function something() {
    alert("Hello, how are you?");
  }

  const city = "Bangalore";
  const age = 20;
  const value = null;
  const value1 = undefined;
  const isLoggedIn = true;

  return (
    // <div>
    //   <h1>Hello World</h1>
    //   <p>My name is {name}</p>
    // </div>

    // Must have 1 parent element, otherwise HTML will not show
    // <h1>Hello World</h1>
    // <p>Hello India</p>

    // Fragment is nothing but adding elements inside an empty tag
    <>
      <h1>Hello World</h1>
      <p>Hello India</p>
      <label htmlFor="name">Username:</label>
      <input type="text" placeholder="Enter your name" />
      <p>Hello, my name is {name}</p>
      <button onClick={something}>Click me</button>
      <hr />
      City is: {city} <br /><br />
      Age is: {age} <br /><br />
      Value is: {value} <br /><br />
      Value1 is: {value1} <br /><br />
      Logged in is: {isLoggedIn ? <h1>Welcome User</h1> : <h1>Please log in</h1>} <br />
      
    </>
  );
}

export default App;
