import React from 'react'
import cadmium from "../images/cadmium.PNG";
import gighub from "../images/gighub.PNG";
import budgetTracker from "../images/budget.PNG";
import fitnessTracker from "../images/fitness-tracker.PNG";
import workday from "../images/work-day.PNG";
import ecommerce from "../images/e-commerce.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
//React Popupbox Imports
import { PopupboxManager, PopupboxContainer  } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
const Portfolio = () => {

// 1st
const openPopupboxCadmium = () => {
    const content = (
        <>
    <img className="portfolio-image-popupbox" src={cadmium} alt="Cadmium Art Event Project.."/>
    <p>A crowd sourced application for finding, exploring,
    and posting Art Events for the city of Richmond, Virginia
    This application was built with node using the MVC Framework. 
    It has a MySQL database and Sequelize ORM, an Express server and restful API, 
    and uses the handlebars templating engine for server side rendering.
    Developed by a team collaborating with Source Code Management through Github</p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/johnsoncm/cadmium")}
    >https://github.com/johnsoncm/cadmium</a>
    <br></br>
    <b>Heroku Link:</b> <a className="hyper-link" onClick={() => window.open("https://ancient-lowlands-14789.herokuapp.com/")}
    >https://ancient-lowlands-14789.herokuapp.com/</a>
    </>
    )
    PopupboxManager.open({content})
}

const popupboxConfigCadmium = {
    titleBar: {
        enable: true,
        text: "Cadmium Art Event Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
}



    return (
       <div className= "portfolio-wrapper">
           <div className = "container">
               <h1 className= "text-uppercase text-center py-5">Portfolio</h1>
              
               <div className="image-box-wrapper row row-cols-auto justify-content-center">
                   <div className="portfolio-image-box" onClick={openPopupboxCadmium}>
                   <img className="portfolio-image" src={cadmium} alt="Cadmium Art Event Project..." />
                   <div className="overflow"></div>
                   <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
                {/* {} */}
            <div className="portfolio-image-box">
                   <img className="portfolio-image" src={gighub} alt="Gighub Music Project..." />
                   <div className="overflow"></div>
                   <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
                {/* {} */}
            <div className="portfolio-image-box">
                   <img className="portfolio-image" src={budgetTracker} alt="Budget Tracker Project..." />
                   <div className="overflow"></div>
                   <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
                {/* {} */}
            <div className="portfolio-image-box">
                   <img className="portfolio-image" src={fitnessTracker} alt="Fitness Tracker Project..." />
                   <div className="overflow"></div>
                   <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
                {/* {} */}
            <div className="portfolio-image-box">
                   <img className="portfolio-image" src={workday} alt="Workday Notes Project..." />
                   <div className="overflow"></div>
                   <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
                {/* {} */}
            <div className="portfolio-image-box">
                   <img className="portfolio-image" src={ecommerce} alt="E-Commerce Back-End Project..." />
                   <div className="overflow"></div>
                   <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
               </div>
           </div>
           <PopupboxContainer {...popupboxConfigCadmium} />
       </div>
    )
}

export default Portfolio
