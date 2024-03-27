// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// Pages Imports

import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports

import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      
      <Routes>
    
        
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
       
      </Routes>
      
    </div>
  );
}

export default App;
