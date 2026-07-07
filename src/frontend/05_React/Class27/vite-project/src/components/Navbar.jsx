import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Product Filter</Link>
      <Link to="/employees">Employee Search</Link>
    </nav>
  );
}

export default Navbar;
