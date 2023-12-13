import React, { useState } from "react";
import frontImg from "../../assets/front.png";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };
    console.log(data);
  };

  return (
    <>
      <div className="login-container">
        <div className="left-side">
          <h1>Already have an account?</h1>
          <h4>Your personal job finder is here</h4>
          
            <form action="" method="post" onSubmit={handleSubmit} className="login-form">
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
            </form>
            <p>
              Don't have an account? <Link to="/register" className="sign-up-link">Sign Up</Link>
            </p>
          
        </div>
        <div
          className="right-side"
          style={{ background: `url(${frontImg}) center/cover no-repeat` }}
        >
          <h1>Your Personal Job Finder</h1>
        </div>
      </div>
    </>
  );
};

export default Login;
