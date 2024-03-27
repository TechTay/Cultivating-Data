import React from "react";
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Nav from "../components/NavBar/Nav";


// Dashboard where the API will present the information



function Dashboard() {
    return (
        
        <div className="px-5 bg-dark min-vh-100" >
            <Nav />
            <div className="container-fluid">
                <div className="row g-2 my-5">
                    <div className="col-md-2">
                        <div className="container text-center bg-white shadow-sm d-flex justify-content-around align-items-center round">
                            <div>
                            <h4 class="text-decoration-underline">Department</h4>
                            <p className="container text-center fs-5">Cybersecurity</p>
                            </div>
                            <i className="bi bi-shield-lock p-1 fs-1"></i>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="bg-white shadow-sm d-flex justify-content-around align-items-center round">
                            <div>
                            <h4 class="text-decoration-underline">Projects</h4>
                            <p className="fs-5"></p>
                            </div>
                            <i className="bi bi-file-earmark-ppt-fill p-1 fs-1"></i>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="bg-white shadow-sm d-flex justify-content-around align-items-center round">
                            <div>
                            <h4 class="text-decoration-underline">Profile</h4>
                            <p className="fs-5"></p>
                            </div>
                            <i className="bi-person-circle p-1 fs-1"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard 