import React from 'react'

const Services = () => {
    return (
        <div className="services">
          <div className="py-5">
            <div className ="container">
                <div className="row">
                   
                   <div className="col-md-3 col-sm-6">
                        <div className="box">
                           <h3> Web Development </h3>
                           <p> Your application will be built with new proven technologies. </p>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                           <h3> Front-End </h3>
                           <p> Ensuring that user experience determines design choices. </p>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                           <h3> Back-End </h3>
                           <p> Building and maintaining servers, applications, and databases. </p>
                        </div>
                    </div>
                 </div>
                </div>
            </div>
        </div>
    )
}

export default Services
