import EmployeeCard from "./EmployeeCard";

function EmployeeSection({ employee }) {
  return (
    <div
      style={{ border: "2px solid blue", padding: "15px", marginTop: "20px" }}
    >
      <h2>Employee Section</h2>
      <EmployeeCard employee={employee} />
    </div>
  );
}

export default EmployeeSection;
