import Child from "./Child";

function App() {
  const address1 = {
    city: "bangalore",
    state: "Karnataka",
    country: "India",
  };

  const address2 = {
    city: "chennai",
    state: "Tamilnadu",
    country: "India",
  };


  return (
    <>
      <Child 
      skills={["HTML", "CSS", "Javascript"]} 
      address={address1}
      // employee={employee1} 
      />
      <Child skills={["TS", "React", "Angular"]} 
      address={address2} 
      />
    </>
  );
}
export default App;
