import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../ViewJob/Navbar";
import { IoSearch } from "react-icons/io5";
import { TbCurrencyRupee } from "react-icons/tb";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [job, setJob] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const recruiterName = localStorage.getItem("recruiterName");

    if (token && recruiterName) {
      setUserName(recruiterName);
      setIsLoggedIn(true);
    }
    axios
      .get("http://localhost:4000/api/get-jobs")
      .then((res) => {
        setJob(res.data.jobs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="main">
        <Navbar />
        <div className="search-container">
          <div className="search-box">
            <span className="search-icon">
              <IoSearch />
            </span>
            <input type="text" placeholder="Type any job title" />
          </div>
        </div>
        <div className="job-container-wraper">
          {job.length > 0 ? (
            job.map((jobData) => {
              return (
                <div className="job-container" key={jobData._id}>
                  <div className="left-job-details">
                    <div className="company-icon">
                      <img
                        src={jobData.company.logoURL}
                        alt={jobData.company.name}
                      />
                    </div>
                    <div className="job-details">
                      <h3>{jobData.job.position}</h3>
                      <div className="salary-location">
                        <p>
                          <TbCurrencyRupee /> {jobData.job.salary}
                        </p>
                        <p>{jobData.job.location}</p>
                      </div>

                      <div className="job-types">
                        <p>{jobData.job.remoteOrOffice}</p>
                        <p>{jobData.job.type}</p>
                      </div>
                    </div>
                  </div>
                  <div className="right-job-details">
                    <div className="skills">
                      {jobData.job.skillsRequired.map((skill) => {
                        return <h1 key={skill}>{skill}</h1>;
                      })}
                    </div>
                    <div className="job-buttons">
                    {isLoggedIn?   <Link to={`/update-job/${jobData._id}`}>
                        <button className="edit-job">Edit job</button>
                      </Link>:""}
                      <Link to={`/view-job/${jobData._id}`}>
                        <button className="view-job">View details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;


//{data.filter((item)=>{
  // return IoSearch.toLowerCase()===""?item:item.first_name.toLowerCase().includes()}).map((item)=>{))