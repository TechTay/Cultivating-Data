import { React, useContext } from "react";
import 'bootstrap/js/dist/dropdown';
import './NavBar.css'
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";


// This is the Navigation Bar & background setup.

function Nav() {
    


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-transparent px-5">
            

        
            
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item dropdown" href="#">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="dropdownId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            >Menu</a
                        >
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <Link to='/' className="dropdown-item bi bi-house p-2" > Home</Link>
                            <Link to='/Profile' className="dropdown-item bi bi-person p-2" > Profile</Link>
                            <Link to='/Projects' className="dropdown-item bi bi-file-earmark p-2" > Projects</Link>
                            <Link to='/Contacts' className="dropdown-item bi bi-people p-2" > Contacts</Link>
                            <Link to='/Settings' className="dropdown-item bi-gear p-2" > Settings</Link>                
                            <Link to='/login' className="dropdown-item bi bi-power p-2" > Logout</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        
    )
}

export default Nav