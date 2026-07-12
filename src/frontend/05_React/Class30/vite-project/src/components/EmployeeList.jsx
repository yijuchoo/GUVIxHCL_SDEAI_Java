// import { useEffect, useState } from "react";
// import { getEmployees } from "../services/employeeService";

import { useSelector } from "react-redux";

function EmployeeList() {
  const { employees, loading, error } = useSelector(
    state => state.employee
  );

  // Show the loader
  if (loading) {
    return <h2>Loading Employees ...</h2>;
  }
  // Show the Error
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="card">
      <h2>Employee List</h2>
      {employees.map((employee) => (
        <div key={employee.id} className="employee">
          <h4>
            {employee.firstName} {employee.lastName}
          </h4>
          <p>{employee.university}</p>
          <p>{employee.email}</p>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;
