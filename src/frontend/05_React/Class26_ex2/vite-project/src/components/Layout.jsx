import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

function Layout() {
    return (
        <div>
            <Navbar />
            <hr />
            <Outlet />
        </div>
    )
}

export default Layout