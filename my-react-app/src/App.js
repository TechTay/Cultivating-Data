// General Imports
import { Routes, Route,Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'

// element Imports
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar.jsx";


// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage.js";
import Home from "./pages/DropdownPages/Home.js";
import Projects from "./pages/DropdownPages/Projects.js"
import Contacts from "./pages/DropdownPages/Contacts.js"
import Profile from "./pages/DropdownPages/Profile.js"

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

// All css imports

import './App.css';

function App() {
  return (
    <div>
      <NavBar />
     
      
      <Routes>
       
        <Route path="/Home" element={ <PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/" element={<LoginPage />}/>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contacts" element={<Contacts />} />
      
      </Routes>
  
    <Footer />
    </div>
          
    
  );
}

export default App;
