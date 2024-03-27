// General Imports
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'
import "./App.css";

// Pages Imports
import LoginPage from "./pages/LoginPage.js";
import Dashboard from "./pages/Dashboard.js";
import Projects from "./pages/Projects.js";
import Contacts from "./pages/Contacts.js";
import Profile from "./pages/Profile.js";


// Component Imports
import Footer from "./components/Footer/Footer";
import Nav from "./components/NavBar/Nav.jsx";
// Util Imports
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  const[toggle,setToggle] = useState(false)
  const Toggle= () => {
    setToggle(!toggle)
  }
 
  return (
    <div>
       
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/Home" element={<Dashboard />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contacts" element={<Contacts />} />

  </Routes>
      {/* <div className="container-fluid bg-secondary min-vh-100">
        <div className="row">
          {toggle && <div className="col-2 bg-light min-vh-100">
          <SideBar />
          </div>}
          <div className="col">
            <Home Toggle={Toggle}/>
          </div>
        </div>   
      </div> */}
      
      
      

      
    
      <Footer />
    </div>
  );
}

export default App;
