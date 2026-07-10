import EmployeeSection from "./EmployeeSection";

function Dashboard() {
  return (
    

    <div
      style={{ border: "2px solid blue", padding: "15px", marginTop: "20px" }}
    >
      <h2>Dashboard</h2>
      {/* Dashboard doesn't use employee */}
      <EmployeeSection />
    </div>
  );
}

export default Dashboard;
