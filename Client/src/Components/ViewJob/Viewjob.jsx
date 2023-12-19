import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Viewjob.css";
import { PiMoneyFill } from "react-icons/pi";

const Viewjob = () => {
  const [isloggedIn, seIsloggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const recruiter = localStorage.getItem("recruiterName");
    if (token && recruiter) {
      seIsloggedIn(true);
    }
  }, []);


  const handleEditJob = () => {
    
  }

  return (
    <>
      <div className="main">
        <Navbar />
        <div className="main-job-container">
          <div className="job-heading">
            <h3>
              WordPress Development work from home job/internship at Adyaka
              Infosec Private Limited
            </h3>
          </div>
          <div className="job-description">
            <div className="createdAt-type">
              <p>1w ago</p>
              <p>. Full Time</p>
            </div>
            <div className="position">
              <h1>WordPress Development</h1>
              {isloggedIn ? <button onClick={handleEditJob}>Edit job</button> : ""}
            </div>
            <div className="location">Bangalore | India</div>
            <div className="salary">
              <PiMoneyFill /> Stipend
            </div>
            <div className="money">
              <p>Rs 25000/month</p>
            </div>

            <div className="about">
              <h1>About company</h1>
              <p>
                We provide technology-based services to help businesses and
                organizations achieve their goals. We offer a wide range of
                services, including software development, system integration,
                network and security services, cloud computing, and data
                analytics. Our primary focus is on leveraging technology to
                streamline business processes, improve productivity, and enhance
                overall efficiency.
              </p>
            </div>
            <div className="description">
              <h1>About the job/internship</h1>
              <p>
                We are looking for a responsible PHP/WordPress/Laravel/Shopify
                Developer. He/She will be liable for managing services and
                therefore the interchange of knowledge between the server and
                the users. The candidate's primary focus is going to be the
                event of all server-side logic, definition, and maintenance of
                the central database and ensuring high performance and
                responsiveness to requests from the front end. Selected intern's
                day-to-day responsibilities include: 1. Work on the development
                of theme customization, liquid programming language, and
                corresponding apps 2. Implement system integrations that are
                crucial to our success 3. Contribute to the development of
                HTML5/CSS/JavaScript and standard web technologies integral to
                building seamless multi-channel experiences 4. Work on speed
                optimization and making a mobile-friendly website
              </p>
            </div>
            <div className="skill-required">
              <h1>Skill(s) required</h1>
              <div className="skills">
                <h1>css</h1>
                <h1>html</h1>
                <h1>javascript</h1>
              </div>
            </div>
            <div className="additional-information">
              <h1>Additional Information</h1>
              <p>
                Stipend structure: This is a performance-based internship. In
                addition to the minimum-assured stipend, you will also be paid a
                performance-linked incentive (₹ 2500 per design).
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Viewjob;
