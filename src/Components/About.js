import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

let About = () => {
  return (
    <>
      <Navbar></Navbar>
      <section>
        <div className="container-fluid">
          <div className="about">
            <div className="about-box">
              <div>
                <h1>Personal Detail's</h1>
                <p>Name: Vishal Dhirajbhai Parmar</p>
                <p>Date of Birth: 1'st Oct</p>
                <p>Gender: Male</p>
                <p>Email: mrvdparmar96@gmail.com</p>
                <p>Contact: 9033200817</p>
              </div>
              <div className="about-img">
                <img src="./Images/personal details-img.avif" alt="images"/>
              </div>
            </div>
            <div className="about-box">
              <div>
                <h1>PROFILE SUMMARY</h1>
                <p>
                  coordinate with the web devlopment to team
                  <br />
                  to design user interface for client website
                  <br />
                  using HTML, CSS, BOOTSTRAPS AND javaScriot
                </p>
              </div>
              <div className="about-img">
              <img src="./Images/profile-img.jpg" alt="images"/>
              </div>
            </div>
            <div className="about-box">
              <div>
                <h1>
                  GRADUATE IN <br /> BACHLOR OF ART'S
                </h1>
                <p>
                  2019-22
                  <br />
                  UNIVERSITY NAME
                  <br />
                  BAOU
                </p>
              </div>
              <div className="about-img">
              <img src="./Images/edu-img.jpg" alt="images"/>
              </div>
            </div>
            <div className="about-box">
              <div>
                <h1>
                  CERTIFICATIONS
                </h1>
                <p>
                  Web Designer &amp; Devloper <br />
                  from Divine Institute,
                  <br />
                  JUN-2023 / Feb-2024
                </p>
              </div>
              <div className="about-img">
              <img src="./Images/certifecat-img.jpg" alt="images"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
