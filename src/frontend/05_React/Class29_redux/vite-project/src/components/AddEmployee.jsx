import { useDispatch } from "react-redux";
import { addEmployee } from "../features/employee/employeeSlice";

function AddEmployee() {
  
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(addEmployee())}>
      Add Employee
    </button>
  )
}
export default AddEmployee;
