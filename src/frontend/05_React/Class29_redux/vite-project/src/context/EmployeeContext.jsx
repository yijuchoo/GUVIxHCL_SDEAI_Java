// import createcontext, usestate
import { createContext, useState } from "react";

// Create the Context
export const EmployeeContext = createContext();

// Create the provider component
export function EmployeeProvider({ children }) {
    
  // Employee State
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Ram",
    },
    {
      id: 2,
      name: "Venkat",
    },
  ]);

  // function to add the employee
  const addEmployee = () => {
    const newEmployee = {
      id: employees.length + 1,
      name: "Employee" + (employees.length + 1),
    };

    // update the state
    setEmployees([...employees, newEmployee]);
  };

  return (
    // Provider shares data with every child component
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}
