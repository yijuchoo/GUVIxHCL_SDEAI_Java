import Child, { type Employee } from "./Child";

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

  const employee1: Employee = {
      id: 1,
      name: "Ram",
      city: "Bangalore"
  };

  const employee2: Employee = {
    
      id: 2,
      name: "Shyam",
      city: "Chennai"
  };

  return (
    <>
      <Child
        skills={["HTML", "CSS", "Javascript"]}
        address={address1}
        employee={employee1}
      />
      <Child
        skills={["TS", "React", "Angular"]}
        address={address2}
        employee={employee2}
      />
    </>
  );
}
export default App;
