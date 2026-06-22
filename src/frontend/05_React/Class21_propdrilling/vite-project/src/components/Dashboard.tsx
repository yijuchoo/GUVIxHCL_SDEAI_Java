import Sidebar from "./Sidebar";

type DashboardProps = {
  employeeName: string;
};

function Dashboard({ employeeName }: DashboardProps) {
  return (
    <div>
      <h1>Dashboard</h1>
      <Sidebar employeeName={employeeName} />
    </div>
  );
}

export default Dashboard;
