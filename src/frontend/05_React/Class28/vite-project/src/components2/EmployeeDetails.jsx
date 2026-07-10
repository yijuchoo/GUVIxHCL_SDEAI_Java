// we use the context
import { useContext } from "react";
import {EmployeeContext} from "../context/EmployeeContext"

function EmployeeDetails() {

  // read the employee data from the context
  const {employee} = useContext(EmployeeContext)

  return (
    <div
      style={{ border: "2px solid blue", padding: "15px", marginTop: "20px" }}
    >
      <h2>Employee Details:</h2>

      <h3>ID: {employee.id}</h3>
      <h3>Name: {employee.name}</h3>
      <h3>Department: {employee.department}</h3>
      <h3>Location: {employee.location}</h3>
      <h3>Email: {employee.email}</h3>
    </div>
  );
}

export default EmployeeDetails;
