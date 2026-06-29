import { useState } from "react";

// Controlled form
function App() {
  const students = ["RAM", "RAVI", "SREE", "Siva", "Venkat"];

  // search text
  const [search, setSearch] = useState("");

  // filter
  const filterStudents = students.filter((student) =>
    student.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div>
        <h2>Student search</h2>
        <input 
        type="text" 
        placeholder="Search the student"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <br /><br />

        <h3>Students</h3>
        {
          filterStudents.length > 0 ? (
            filterStudents.map((student, index) => (
              <p key={index}>{student}</p>
            ))
          ) : (
            <h1>No students found</h1>
          )
        }
      </div>
    </>
  );
}

export default App;
