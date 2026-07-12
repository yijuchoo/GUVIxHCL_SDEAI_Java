import AddEmployee from "./AddEmployee";
import EmployeeList from "./EmployeeList";

function EmployeeSection() {
  return (
    <div>
      <h3>Employee Section</h3>

      <EmployeeList />

      <AddEmployee />
    </div>
  );
}
export default EmployeeSection;
