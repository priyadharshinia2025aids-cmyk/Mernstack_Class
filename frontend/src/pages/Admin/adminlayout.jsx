import { Link, Outlet } from "react-router-dom";

function Admin() {
    return ( 
        <>
        <h1>Admin Layout page</h1>
        <nav>
            <Link to = {"/admin/admin_dashboard"}>AdminDashboard</Link>
            <Link to = {"/admin/userdetails"}>AdminUserdetails</Link>
            <Link to = {"/admin/AdminSettings"}>AdminSettings</Link>


        </nav>
        <Outlet/>
        <footer>
            
        </footer>
        </>
     );
}

export default Admin;