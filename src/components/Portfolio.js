import React from 'react'
import cadmium from "../images/cadmium.PNG";
import gighub from "../images/gighub.PNG";
import budgetTracker from "../images/budget.PNG";
import fitnessTracker from "../images/fitness-tracker.PNG";
import workday from "../images/work-day.PNG";
import ecommerce from "../images/e-commerce.png";


const Portfolio = () => {
    return (
       <div className= "portfolio-wrapper">
           <div className = "container">
               <h1 className= "text-uppercase text-center py-5">Portfolio</h1>
              
               <div className="image-box-wrapper row row-cols-auto justify-content-center">
                   <img className="portfolio-image" src={cadmium} alt="Cadmium Art Event Project..." />
               </div>
            {/* {} */}
            <div className="image-box-wrapper row row-cols-auto justify-content-center">
                   <img className="portfolio-image" src={gighub} alt="Gighub Music Project..." />
               </div>
            {/* {} */}
            <div className="image-box-wrapper row row-cols-auto justify-content-center">
                   <img className="portfolio-image" src={budgetTracker} alt="Budget Tracker Project..." />
               </div>
            {/* {} */}
            <div className="image-box-wrapper row row-cols-auto justify-content-center">
                   <img className="portfolio-image" src={fitnessTracker} alt="Fitness Tracker Project..." />
               </div>
                {/* {} */}
            <div className="image-box-wrapper row row-cols-auto justify-content-center">
                   <img className="portfolio-image" src={workday} alt="Workday Notes Project..." />
               </div>
                {/* {} */}
            <div className="image-box-wrapper row row-cols-auto justify-content-center">
                   <img className="portfolio-image" src={ecommerce} alt="E-Commerce Back-End Project..." />
               </div>
           </div>
       </div>
    )
}

export default Portfolio
