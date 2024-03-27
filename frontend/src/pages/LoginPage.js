import React, { useContext, useState} from "react";
import AuthContext from "../context/AuthContext";
import useCustomForm from "../hooks/useCustomForm";



// LoginPage.js


const LoginPage = () => {

  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const [errorMessage, setErrorMessage] = useState("");
 
  
  const handleLogin = async (formData) => {
    try {
      // Call the loginUser function from AuthContext
      await loginUser(formData);
      // If login is successful, clear error message and form data
      setErrorMessage("");
      reset();

    } catch (error) {
      // If login fails, display error message and clear password field
      setErrorMessage("Incorrect username or password.");
      setFormValues({ ...formData, password: "" });
    }
  };
  
  const [formData, handleInputChange, handleSubmit, reset, setFormValues] = useCustomForm(
   handleLogin, 
    defaultValues
    
  );
  

  return (
    
    <div className="container bg-light min-vh-100">
      <h3 className="mt-5 py-4">Welcome to Project Data</h3>
      {isServerError && <p>Incorrect username or password.</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            autoComplete="current-username"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </label>
        <button type="submit">Login!</button>
      </form>
    </div>
  );
}

export default LoginPage;

