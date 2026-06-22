import Child from "./components/Child";


function App() {
  
  function handleSearch(text: string) {
    console.log("Searching products for:", text)
  }

  return (
    <div>
      <h2>Product Page</h2>
      <Child onSearch = {handleSearch} />
    </div>
  );
}

export default App;
