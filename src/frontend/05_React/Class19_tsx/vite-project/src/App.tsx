interface Employee {
  id: number;
  name: string;
  city: string;
}

function App() {
  const name: string = "Venkat";
  const age: number = 20;
  const isAdmin: boolean = false;

  // normal function
  function add(a: number, b: number) {
    return a + b;
  }

  // arrow function
  const multiply = (a: number, b: number): number => {
    return a * b;
  };

  // objects
  const student: {
    id: number;
    name: string;
    age: number;
  } = {
    id: 1,
    name: "RAM",
    age: 18,
  };

  // use the interface
  const employee: Employee = {
    id: 1,
    name: "Ram",
    city: "Bangalore",
  };

  // arrays in tsx
  const mobiles: string[] = [
    "OPPO", 
    "VIVO", 
    "iPhone"
  ];

  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{isAdmin ? <h1>Admin page</h1> : <h2>Please login</h2>}</h3>

      <h2>Add of two numbers: {add(10, 40)}</h2>
      <h3>Multiply of two numbers: {multiply(10, 20)}</h3>

      <div>
        Show the details of the student: <br />
        <br />
        <strong>Name is: {student.name}</strong>
        <br />
        <br />
        <strong>Age is: {student.name}</strong>
        <br />
        <br />
      </div>

      <div>
        Details of the employee interface: <br />
        <br />
        Name is: {employee.name} and is from city: {employee.city}
      </div>

      <div>
        Mobile details: {mobiles[0]} is better than {mobiles[1]}
      </div>
    </>
  );
}

export default App;
