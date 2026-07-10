import EmployeeSection from "./EmployeeSection";

function Dashboard({ employee }) {
  return (
    // <div style={{border: "2px solid blue", padding: "15px", marginTop: "20px"}}>
    //     <h1>Dashboard</h1>
    //     <h2>{employee.name}</h2>
    //     <h2>{employee.department}</h2>
    // </div>

    <div
      style={{ border: "2px solid blue", padding: "15px", marginTop: "20px" }}
    >
      <h2>Dashboard</h2>
      {/* Dashboard doesn't use employee */}
      <EmployeeSection employee={employee} />
    </div>
  );
}

export default Dashboard;
