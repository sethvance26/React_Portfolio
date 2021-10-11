import React from "react";
import Typed from "react-typed";
import {Link} from "react-scroll";

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>Your Next Full-Stack Web Developer Has Arrived</h1>
                <Typed 
                className="typed-text" 
                strings={["Front-End Development", "Back-End Development", "All your needs and more!"]}
                typeSpeed={40}
                backSpeed={30}
                loop
                />
                {/* <Link smooth={true} to="contact" offset={-110} className="btn-main-offer">Contact Me</Link> */}
                <Link className="btn-main-offer" to="contact" offset={-110} >Contact Me</Link>
            </div>
        </div>
    )
}

export default Header
