import React from "react";
import { useState } from 'react';
import logo from "../logo2.png"
import {Link} from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Resume from "./Vance_Seth_Resume.pdf";



const Navbar = () => {
  const [open, setOpen] = useState(false);
 
    const handleClick = (e) => {
        e.preventDefault();
        const hideMenu = document.getElementById("navbarSupportedContent");
        hideMenu.classList.remove("show");
        const handleToggler = document.getElementById("toggler");
        handleToggler.classList.add("collapsed");
    }
 
    const handleState = (e) => {
        e.preventDefault();
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
<div className="container">


        <a className="navbar-brand" href="#home"><img className="logo" src={logo} alt="logo..." /></a>
        <button className="navbar-toggler"  id="toggler" onClick={handleState} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active" aria-current="page">
              <Link smooth={true} to="home" offset={-110} onClick={handleClick} className="nav-link" href="#">Home <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item" aria-current="page">
              <Link smooth={true} to="about" offset={-110} onClick={handleClick} className="nav-link" href="#">About Me</Link>
            </li>
            <li className="nav-item" aria-current="page">
              <Link smooth={true} to="services" offset={-110} onClick={handleClick} className="nav-link" href="#">Services</Link>
            </li>
            <li className="nav-item" aria-current="page">
              <Link smooth={true} to="portfolio" offset={-110} onClick={handleClick} className="nav-link" href="#">Projects</Link>
            </li>
            
            <li className="nav-item" aria-current="page">
              <Link smooth={true} to="contact" offset={-110} onClick={handleClick} className="nav-link" href="#">Contact</Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href={Resume} target="_blank" rel="noreferrer">
                  My Resume
              </a>
            </li>

            
            
          </ul>
         
        </div>
    </div>
      </nav>
    )
}

export default Navbar
