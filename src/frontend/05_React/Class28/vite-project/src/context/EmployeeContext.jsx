import { createContext, useState } from "react";

// Create the context
export const EmployeeContext = createContext();

// Provider component
function EmployeeProvider({ children }) {
  const [employee] = useState({
    id: 101,
    name: "RAM",
    department: "Engineering",
    location: "Bangalore",
    email: "ram@gmail.com",
  });

  return (
    // Provide the employee to every child
    <EmployeeContext.Provider value={{ employee }}>
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeProvider;
