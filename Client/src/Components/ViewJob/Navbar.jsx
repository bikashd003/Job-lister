import React, { useState, useEffect } from "react";
import "./Viewjob.css";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const recruiterName = localStorage.getItem("recruiterName");

    if (token && recruiterName) {
      setUserName(recruiterName);
      setIsLoggedIn(true);
    }
  }, []);

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("recruiterName");
    setUserName("");
    setIsLoggedIn(false);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/"className="logo-link">Jobfinder</Link>
        </div>
        <div className="login-signup">
          {isLoggedIn ? (
            <>
              <button className="logout" onClick={handleLogout}>
                Logout
              </button>
              <span>Hello! {userName}!</span>
            </>
          ) : (
            <>
              <button className="login" onClick={handleLogin}>
                Login
              </button>
              <button className="register" onClick={handleRegister}>
                Register
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
