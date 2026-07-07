import { NavLink } from "react-router-dom";

// navlink will acts as a LINK but navlink will aplly the styles automatically

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/users">Users</NavLink>
    </nav>
  );
}

export default Navbar;
