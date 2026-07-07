import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
      <header className="header">
        {/* using tailwind */}
      {/* <header className="bg-gray-500 p-6"> */}
        <h1>GUVI HCL</h1>
      </header>

      <nav className="navbar">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/profile"}>Profile</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/settings"}>Settings</Link>
        <Link to={"/login"}>Login</Link>
      </nav>

      {/* Show the nested routes */}
      <main className="content">
        {/* Nested route inside route for Layout component */}
        <Outlet />
      </main>

      <footer className="footer">
        <h3>&copy; 2026 GUVI HCL All rights reserved</h3>
      </footer>
    </div>
  );
}

export default Layout