import { useSelector } from "react-redux";

function RecentEmployees() {
  const { employees, loading, error } = useSelector(
    state => state.employee);

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
      <h2>Recent Employees</h2>
      {employees.map((employee) => (
        <p key={employee.id}>{employee.firstName}</p>
      ))}
    </div>
  );
}

export default RecentEmployees;
