import Dashboard from "./components/Dashboard";


function App() {
  const employee = {
    id: 101,
    name: "RAM",
    department: "Engineering",
    location: "Bangalore",
    email: "ram@gmail.com"
  }

  return (
    <>
      <h1>Employee Management System</h1>

      {/* Passing employee to the dashboard */}
      <Dashboard employee = {employee} />
    </>
  );
}

export default App;
