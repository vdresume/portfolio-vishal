import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
let Hero = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="hero-container">
        <div className="hero-img">
          <img src="./Images/hero-img.jpg" alt="img-1"></img>

          <div className="hero-icon">
            <div className="icon-child">
              <img src="./Images/icon1.webp" alt="icon" />
            </div>
            <div className="icon-child">
              <img src="./Images/icon2.webp" alt="icon" />
            </div>
            <div className="icon-child">
              <img src="./Images/icon3.png" alt="icon" />
            </div>
          </div>
        </div>
        <div className="hero-content">
          <h1>Hello</h1>
          <h2>
            <i>I'm</i> Vishal Parmar <span id="element" />
          </h2>
          <h2 id="element">Front End Web Developer</h2>
          <p>
            Hello!!! I’m Vishal Parmar fast learner with a passion for
            problem-solving and always eager to take on new challenges
          </p>
        </div>
      </div>
    </>
  );
};
export default Hero;
