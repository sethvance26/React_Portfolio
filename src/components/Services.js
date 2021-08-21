import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faFileCode, faUser } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div id="services" className="services">
          <h1 className="py-5">My Services</h1>
            <div className ="container">
                <div className="row">
                   
                   <div className="col-md-3 col-sm-6">
                        <div className="box">
                          <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/></div> 
                           <h3> Web Development </h3>
                           <p> Your application will be built with new proven technologies. </p>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faUser} size="2x"/></div>
                           <h3> Front-End </h3>
                           <p> Ensuring that user experience determines design choices. </p>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/></div>
                           <h3> Back-End </h3>
                           <p> Building and maintaining servers, applications, and databases. </p>
                        </div>
                    </div>
                 </div>
                </div>
            </div>
        
    )
}

export default Services
