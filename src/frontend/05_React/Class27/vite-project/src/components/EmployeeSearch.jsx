import { useParams, useSearchParams } from "react-router-dom";

// Create mock data
const employees = [
  {
    id: 1,
    name: "venkat",
    department: "IT",
  },
  {
    id: 2,
    name: "Sree",
    department: "HR",
  },
  {
    id: 3,
    name: "RAM",
    department: "Finance",
  },
  {
    id: 4,
    name: "shyam",
    department: "QA Testing",
  },
];

function EmployeeSearch() {
  // read and update the URL query parameters
  const [searchParams, setSearchParams] = useSearchParams();

  // get "name" parameter from URL /employees?name=ravi
  const searchName = searchParams.get("name") || "";

  // execute the below whenever the user types
  function handleSearch(event) {
    // get the entered text
    const value = event.target.value;

    // if textbox has value
    if (value) {
      // update the URL
      setSearchParams({
        name: value,
      });
    } else {
      // remove the query parameter
      setSearchParams({});
    }
  }

  // filter the employees
  const filteredEmployees = employees.filter((employee) =>
    // ignore the uppercase/lowercase
    employee.name.toLowerCase().includes(searchName.toLowerCase()),
  );

  return (
    <>
      <h2>Employee Search</h2>

      {/* Search textbox */}
      <input
        type="text"
        placeholder="Search Employee"
        onChange={handleSearch}
      />
      <hr />

      {/* if employees found */}
      {filteredEmployees.length > 0 ? (
        filteredEmployees.map((employee) => (
          <div
            key={employee.id}
            style={{
              border: "1px solid gray",
              borderBottom: "10px",
              padding: "20px",
            }}
          >
            <p>
              <strong>ID:</strong> {employee.id}
            </p>

            <p>
              <strong>Name:</strong> {employee.name}
            </p>

            <p>
              <strong>Department:</strong> {employee.department}
            </p>
          </div>
        ))
      ) : (
        <h3>No employee found</h3>
      )}
    </>
  );
}

export default EmployeeSearch;
