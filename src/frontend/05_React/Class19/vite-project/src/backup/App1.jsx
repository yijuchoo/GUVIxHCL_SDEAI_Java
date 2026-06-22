import "./App.css";

function App() {
  
  // create the style object
  const styleObj = {
    backgroundColor: "green",
    color: "white",
    padding: "20px",
    borderRadius: "50%",
  };

  const styleObj1 = {
    backgroundColor: "orange",
    fontSize: "20px",
    fontFamily: "-apple-system",
  };

  return (
    <>
      {/* inline styles we should use double curly braces, camelCase */}
      {/* <div style={{backgroundColor: "green", color: "white", padding: "20px", borderRadius: "50%"}}> */}
      {/* <div style={styleObj}>
        Welcome to React basics
      </div>
      
      <h2 style={styleObj1}>Welcome to Home page</h2> */}

      <div className="welcome">Welcome to React basics</div>

      <h2 className="welcome1">Welcome to Home page</h2>
    </>
  );
}

export default App;
