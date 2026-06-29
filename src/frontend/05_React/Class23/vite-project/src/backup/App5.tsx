import { useRef } from "react";

// Controlled forms vs Uncontrolled forms
// controlled forms will be controlled by the react useState
//  - for each and every change the event will be triggered

// uncontrolled forms will be done on the DOM
//  - it will not triggered for each input change
//  - uncontrolled form increases the performances of the app
//  - Always when use simple forms -> useRef hook

// Uncontrolled Form
function App() {
  const studentNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const departmentRef = useRef<HTMLInputElement>(null);

  // submit function
  function handleSubmit() {
    console.log("Student Name", studentNameRef.current?.value);
    console.log("Email", emailRef.current?.value);
    console.log("Department", departmentRef.current?.value);
  }


  return (
    <>
      <div>
        <h3>Student Management System</h3>

        <input 
        type="text"
        placeholder="Enter the student name"
        ref={studentNameRef}
        />
        <br /><br />

        <input 
        type="email"
        placeholder="Enter the student email"
        ref={emailRef}
        />
        <br /><br />

        <input 
        type="text"
        placeholder="Enter the department name"
        ref={departmentRef}
        />
        <br /><br />

        <button onClick={handleSubmit}>Register</button>

      </div>
    </>
  );
}

export default App;
