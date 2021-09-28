import React from 'react'
// Importing previous project images
import cadmium from "../images/cadmium.PNG";
import kendo from "../images/kendo.PNG";
import gighub from "../images/gighub.PNG";
import budgetTracker from "../images/budget.PNG";
import fitnessTracker from "../images/fitness-tracker.PNG";
import workday from "../images/work-day.PNG";
import employee from "../images/employee.png";
// React Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
//React Popupbox Imports
import { PopupboxManager, PopupboxContainer  } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


const Portfolio = () => {

// Cadmium Popup Box // 
const openPopupboxCadmium = () => {
  const content = (
      <>
  <img className="portfolio-image-popupbox" src={cadmium} alt="Cadmium Art Event Project.."/>
  <p>A crowd sourced application for finding, exploring,
  and posting Art Events for the city of Richmond, Virginia. 
  Users can signup, login, and post new art events, view
  upcoming art events and information pertaining to them, and share the events
  through multiple platforms. Project still in development for additional functionality.
  This application was built in MERN stack. It has a MongoDB 
  database, Mongoose ODM, an Express server,
  and RESTful API. Developed by a team collaborating 
  with Source Code Management through Github.</p>
  <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/sethvance26/Cadmium-Seth", "_blank")}
  >https://github.com/sethvance26/Cadmium-Seth</a>
  <br></br>
  <b>Demo Link:</b> <a className="hyper-link" onClick={() => window.open("https://cadmiumrva.herokuapp.com/", "_blank")}
  >https://cadmiumrva.herokuapp.com/</a>
  </>
  )
  PopupboxManager.open({ content });
  PopupboxManager.update({
    content,
    config: {
      titleBar: {
        text: "Cadmium Art Events Project ",
      },
    },
  });
}

const popupboxConfigCadmium = {
  titleBar: {
      enable: true,
      text: "Cadmium Art Event Project"
  },
  fadeIn: true,
  fadeInSpeed: 500
}

// Gighub Popup box // 
const openPopupboxGighub = () => {
    const content = (
        <>
    <img className="portfolio-image-popupbox" src={gighub} alt="Gighub Live Music Project.."/>
    <p>GigHub Music allows Artists and Consumers alike to research venues 
        in any US city and view recent Youtube results for those venues.
        With the integration of Youtube's API, the user can even see live music events or concerts
        that previously took place within a given area. With integration of Mapquest API, the User
        can view geographical location for those venues
        to plan for a future trip. GigHub Music uses multiple CSS frameworks and Third-Party API's.</p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/kcarroll21/projectoneNFTeam", "_blank")}
    >https://github.com/kcarroll21/projectoneNFTeam</a>
    <br></br>
    <b>Demo Link:</b> <a className="hyper-link" onClick={() => window.open("https://kcarroll21.github.io/projectoneNFTeam/", "_blank")}
    >https://kcarroll21.github.io/projectoneNFTeam/</a>
    </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Gighub Live Music",
        },
      },
    });
}

const popupboxConfigGighub = {
    titleBar: {
        enable: true,
        text: "Gighub Live Music"
    },
    fadeIn: true,
    fadeInSpeed: 500
}

// Kendo Popup box // 
const openPopupboxKendo = () => {
  const content = (
      <>
  <img className="portfolio-image-popupbox" src={kendo} alt="Kendo-React Exercise.."/>
  <p>A front-end application built using Kendo-React UI, and Bootstrap in order to display
    data from a JSON file to users/employees within a company in a clear and concise manner.
    Users can view information on multiple Payees, Payments, and Remittances on a grid, 
    and easily sort the information by category for a nice and polished user experience.
    This exercise/assessment was built with mobile-first design, and utilizes responsiveness 
    on multiple viewports.
  </p>
  <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/sethvance26/Kendo-React-Exercise", "_blank")}
  >https://github.com/sethvance26/Kendo-React-Exercise</a>
  <br></br>
  <b>Demo Link:</b> <a className="hyper-link" onClick={() => window.open("https://paymerang.herokuapp.com/", "_blank")}
  >https://paymerang.herokuapp.com/</a>
  </>
  )
  PopupboxManager.open({ content });
  PopupboxManager.update({
    content,
    config: {
      titleBar: {
        text: "Kendo-React Exercise",
      },
    },
  });
}

const popupboxConfigKendo = {
  titleBar: {
      enable: true,
      text: "Kendo-React Exercise"
  },
  fadeIn: true,
  fadeInSpeed: 500
}

// Budget Tracker Popup box // 
const openPopupboxbudgetTracker = () => {
    const content = (
        <>
    <img className="portfolio-image-popupbox" src={budgetTracker} alt="Budget Tracker Project.."/>
    <p>Budget Tracker is a progressive web application where users can track their withdrawals and 
        deposits with and without data or an internet connection. <br></br> Users can have faith that their 
        budgets will maintain accuracy during travel, no matter where they go. Budget Tracker additionally
         has the functionality <br></br> to graph a user's total amount of money over time, giving the user a
          physical representation of their budget.</p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/sethvance26/Budget-Tracker-Offline-Online", "_blank")}
    >https://github.com/sethvance26/Budget-Tracker-Offline-Online</a>
    <br></br>
    <b>Demo Link:</b> <a className="hyper-link" onClick={() => window.open("https://mighty-gorge-65427.herokuapp.com/", "_blank")}
    >https://mighty-gorge-65427.herokuapp.com/</a>
    </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Budget Tracker",
        },
      },
    });
}

const popupboxConfigbudgetTracker = {
    titleBar: {
        enable: true,
        text: "Budget Tracker"
    },
    fadeIn: true,
    fadeInSpeed: 500
}

// Workout Tracker Popup box // 
const openPopupboxfitnessTracker = () => {
    const content = (
        <>
    <img className="portfolio-image-popupbox" src={fitnessTracker} alt="Workout Tracker Project.."/>
    <p>Workout Tracker is a application where users can track their workouts, and create new workouts as well.
         Users can log multiple exercises <br></br> in a workout they've done for that day with functionality for 
         different types of exercises, different amounts of reps/sets, weight amounts,<br></br> duration of the 
         exercise, or distance traveled for cardio. Users can also view their dashboard, which shows their 
         workout information graphed over time.</p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/sethvance26/Workout-Tracker", "_blank")}
    >https://github.com/sethvance26/Workout-Tracker</a>
    <br></br>
    <b>Demo Link:</b> <a className="hyper-link" onClick={() => window.open("https://protected-bayou-89644.herokuapp.com/?id=60dbe7a87541f90015d101ca", "_blank")}
    >https://protected-bayou-89644.herokuapp.com/?id=60dbe7a87541f90015d101ca</a>
    </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Workout Tracker",
        },
      },
    });
}

const popupboxConfigfitnessTracker = {
    titleBar: {
        enable: true,
        text: "Workout Tracker"
    },
    fadeIn: true,
    fadeInSpeed: 500
}

// Workday Scheduler Popup box //
const openPopupboxworkday = () => {
    const content = (
        <>
    <img className="portfolio-image-popupbox" src={workday} alt="Workday scheduler Project.."/>
    <p>WorkDay scheduler uses Moment.js to give user the current time and date, and alters the color of each line depending 
        on the current hour within a typical 9 to 5 workday. The User can also write in notes for each hour which will be stored in the
        user's Local Storage and remain on the page. Jquery and conditional statements were also applied in this project. </p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/sethvance26/Day-Planner", "_blank")}
    >https://github.com/sethvance26/Day-Planner</a>
    <br></br>
    <b>Demo Link:</b> <a className="hyper-link" onClick={() => window.open("https://sethvance26.github.io/Day-Planner/", "_blank")}
    >https://sethvance26.github.io/Day-Planner/</a>
    </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Workday Scheduler",
        },
      },
    });
}

const popupboxConfigworkday = {
    titleBar: {
        enable: true,
        text: "Work Day Scheduler"
    },
    fadeIn: true,
    fadeInSpeed: 500
}

// Employee Tracker Project Popup box //
const openPopupboxEmployee = () => {
    const content = (
        <>
    <img className="portfolio-image-popupbox" src={employee} alt="Employee Tracker Project.."/>
    <p>Employee Tracker uses MySql to architect and build a solution for managing a potential
         company's employees using node, inquirer, and mySQL. In simple terms, this application 
         builds a Content Management System, so that non-developers can view and interact with 
         employee information within the database. This way you can add Employees, Departments, 
         and Roles, view the existing ones in the database, and update roles for existing employees'
        as well.  </p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/sethvance26/Employee-Tracker", "_blank")}
    >https://github.com/sethvance26/Employee-Tracker</a>
    <br></br>
    <b>Video Demonstration:</b> <a className="hyper-link" onClick={() => window.open("https://drive.google.com/file/d/10lopFrnOohjneWHMSBO-3dtR5eKPAqi1/view", "_blank")}
    >https://drive.google.com/file/d/10lopFrnOohjneWHMSBO-3dtR5eKPAqi1/view</a>
    </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Employee Tracker",
        },
      },
    });
}

const popupboxConfigEmployee = {
    titleBar: {
        enable: true,
        text: "Employee Tracker"
    },
    fadeIn: true,
    fadeInSpeed: 500
}

    return (
       <div id="portfolio" className= "portfolio-wrapper">
           <div className = "container">
               <h1 className= "text-uppercase text-center py-5">Previous Projects</h1>
               <h3 className= "text-uppercase text-center py-1">Click on Images to See More!</h3>
              
               <div className="image-box-wrapper row row-cols-auto justify-content-center">
                   <div className="portfolio-image-box" onClick={openPopupboxCadmium}>
                   <img className="portfolio-image" src={cadmium} alt="Cadmium Art Event Project..." />
                   <div className="overflow"></div>
                   <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
                {/* {} */}
            <div className="portfolio-image-box" onClick={openPopupboxGighub}>
                   <img className="portfolio-image" src={gighub} alt="Gighub Music Project..." />
                   <div className="overflow"></div>
                   <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
                {/* {} */}
                  
                  <div className="portfolio-image-box" onClick={openPopupboxKendo}>
                   <img className="portfolio-image" src={kendo} alt="Kendo-React Exercise..." />
                   <div className="overflow"></div>
                   <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
               {/* {} */}
            <div className="portfolio-image-box" onClick={openPopupboxbudgetTracker}>
                   <img className="portfolio-image" src={budgetTracker} alt="Budget Tracker Project..." />
                   <div className="overflow"></div>
                   <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
                {/* {} */}
            <div className="portfolio-image-box" onClick={openPopupboxfitnessTracker}>
                   <img className="portfolio-image" src={fitnessTracker} alt="Fitness Tracker Project..." />
                   <div className="overflow"></div>
                   <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
                {/* {} */}
            <div className="portfolio-image-box" onClick={openPopupboxworkday}>
                   <img className="portfolio-image" src={workday} alt="Workday Notes Project..." />
                   <div className="overflow"></div>
                   <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
                {/* {} */}
            <div className="portfolio-image-box" onClick={openPopupboxEmployee}>
                   <img className="portfolio-image" src={employee} alt="Employee Tracker Project..." />
                   <div className="overflow"></div>
                   <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
               </div>
           </div>
           <PopupboxContainer {...popupboxConfigCadmium} />
           <PopupboxContainer {...popupboxConfigGighub} />     
           <PopupboxContainer {...popupboxConfigKendo} />
           <PopupboxContainer {...popupboxConfigbudgetTracker} />
           <PopupboxContainer {...popupboxConfigfitnessTracker} />
           <PopupboxContainer {...popupboxConfigworkday} />
           <PopupboxContainer {...popupboxConfigEmployee} />
       </div>
    )
}

export default Portfolio
