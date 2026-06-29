import { useState } from "react";

// Controlled forms vs Uncontrolled forms
// controlled forms will be controlled by the react useState
//  - for each and every change the event will be triggered

// uncontrolled forms will be done on the DOM
//  - it will not triggered for each input change

// Controlled form
function App() {
  
  // create the React state for the student
  const [studentName, setStudentName] = useState("");

  const [email, setEmail] = useState("");

  const [department, setDepartment] = useState("");

  // submit function
  function handleSubmit() {
    console.log("Student Name", studentName);
    console.log("Email", email);
    console.log("Department", department);
  }


  return (
    <>
      <div>
        <h3>Student Management System</h3>

        <input 
        type="text"
        placeholder="Enter the student name"
        value={studentName} // controls this value by react
        onChange={(e) => setStudentName(e.target.value)}
        />
        <br /><br />

        <input 
        type="email"
        placeholder="Enter the student email"
        value={email} // controls this value by react
        onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input 
        type="text"
        placeholder="Enter the department name"
        value={department} // controls this value by react
        onChange={(e) => setDepartment(e.target.value)}
        />
        <br /><br />

        <button onClick={handleSubmit}>Register</button>

        <hr />

        <h3>Live Preview</h3>
        <p>Name: {studentName}</p>
        <p>Email: {email}</p>
        <p>Department: {department}</p>
      </div>
    </>
  );
}

export default App;
