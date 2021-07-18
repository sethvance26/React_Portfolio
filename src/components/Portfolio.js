import React from 'react'
import cadmium from "../images/cadmium.png";
import gighub from "../images/gighub.png";
import budgetTracker from "../images/budget-tracker.png";
import fitnessTracker from "../images/fitness-tracker.png";
import workday from "../images/work-day.png";
import ecommerce from "../images/e-commerce.png";


const Portfolio = () => {
    return (
       <div className= "portfolio-wrapper">
           <div className = "container">
               <h1 className= "text-uppercase text-center py-5">Portfolio</h1>
              
               <div className="image-box-wrapper row justify-content-center">
                   <img className="portfolio-image" src={cadmium} alt="Cadmium Art Event Project..." />
               </div>
            {/* {} */}
            <div className="image-box-wrapper row justify-content-center">
                   <img className="portfolio-image" src={gighub} alt="Gighub Music Project..." />
               </div>
            {/* {} */}
            <div className="image-box-wrapper row justify-content-center">
                   <img className="portfolio-image" src={budgetTracker} alt="Budget Tracker Project..." />
               </div>
            {/* {} */}
            <div className="image-box-wrapper row justify-content-center">
                   <img className="portfolio-image" src={fitnessTracker} alt="Fitness Tracker Project..." />
               </div>
                {/* {} */}
            <div className="image-box-wrapper row justify-content-center">
                   <img className="portfolio-image" src={workday} alt="Workday Notes Project..." />
               </div>
                {/* {} */}
            <div className="image-box-wrapper row justify-content-center">
                   <img className="portfolio-image" src={ecommerce} alt="E-Commerce Back-End Project..." />
               </div>
           </div>
       </div>
    )
}

export default Portfolio
