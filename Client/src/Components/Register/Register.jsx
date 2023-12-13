import React, { useState } from "react";
import './Register.css'
import frontImg from "../../assets/front.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [recruiter, setRecruiter] = useState({
    email: "",
    password: "",
    name: "",
    mobile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  return (
    <>
      <div className="login-container">
        <div className="left-side">
          <h1>Create an account</h1>
          <h4>Your personal job finder is here</h4>

          <form
            action=""
            method="post"
            onSubmit={handleSubmit}
            className="login-form"
          >
            <input
              type="text"
              placeholder="Name"
              value={recruiter.name}
              onChange={(e) => setRecruiter({ ...recruiter, name: e.target.value })} 
            />
            <input
              type="text"
              placeholder="Email"
              value={recruiter.email}
              onChange={(e) => setRecruiter({...recruiter,email:e.target.value})}
            />
            <input
              type="number"
              placeholder="Mobile"
              value={recruiter.mobile}
              onChange={(e) => setRecruiter({...recruiter,mobile:e.target.value})}

            />
            <input
              type="password"
              placeholder="Password"
              value={recruiter.password}
              onChange={(e) => setRecruiter({...recruiter,password:e.target.value})}

            />
            
            <button type="submit">Create Account</button>
          </form>
          <p>
            Already have an account?
            <Link to="/" className="sign-up-link">
             Sign In
            </Link>
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

export default Register;
