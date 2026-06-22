import ProfileSection from "./ProfileSection";

type MenuProps = {
  employeeName: string;
};

function Menu({ employeeName }: MenuProps) {
  return (
    <div>
      <h2>Menu</h2>
      <ProfileSection employeeName={employeeName} />
    </div>
  );
}

export default Menu;
