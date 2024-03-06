import React from "react";
import "./Skill.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


let Skill = () =>{
    return(
        <>
       <Navbar></Navbar>
       <section className="Skill-container">
       <div className="Skill"></div>

        <div className="Skill-info"></div>
       </section>
        </>
    )
}
export default Skill;