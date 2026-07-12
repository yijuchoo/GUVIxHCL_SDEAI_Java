import { useEffect } from "react";
import { useDispatch } from "react-redux";

// async thunk
import { fetchEmployees } from "../features/employee/employeeSlice";

// components
import EmployeeStats from "./EmployeeStats";
import EmployeeSearch from "./EmployeeSearch";
import EmployeeList from "./EmployeeList";
import RecentEmployees from "./RecentEmployees";
import Attendace from "./Attendance";
import SalarySummary from "./SalarySummary";

// dashboard componenet is responsible for making one API call

function Dashboard() {
  // dispatch function - used to dispatch the redux actions
  const dispatch = useDispatch();

  // runs only once, make one API call
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <div className="dashboard">
      <h1>Employee Dashboard</h1>
      <EmployeeStats />
      <EmployeeSearch />
      <div className="grid">
        <EmployeeList />
        <RecentEmployees />
      </div>
      <div className="grid">
        <Attendace />
        <SalarySummary />
      </div>
    </div>
  );
}

export default Dashboard;
