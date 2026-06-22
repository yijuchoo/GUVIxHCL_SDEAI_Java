import Menu from "./Menu";

type SidebarProps = {
  employeeName: string;
};

function Sidebar({ employeeName }: SidebarProps) {
  return (
    <div>
      <h2>Sidebar</h2>
      <Menu employeeName={employeeName} />
    </div>
  );
}

export default Sidebar;
