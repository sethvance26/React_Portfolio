import React from "react";
import Typed from "react-typed";


const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Web development and websites promotions</h1>
                <Typed 
                className="typed-text" 
                strings={["Front-End Development", "Back-End Development", "All your needs and more!"]}
                typeSpeed={40}
                backSpeed={30}
                loop
                />
                <a href='#' className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
