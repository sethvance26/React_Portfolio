import React from 'react'

const Contact = () => {
    return (

        <div className = "contacts">
            <div className="text-center">
            <h1>Contact Me</h1>
            <p>Please fill out the form...</p>
        </div>
            <div className= "container">
            <div className="row">
            <div className="col-md-6 col-xs-12">
            {/* {NAME INPUT} */}
            <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            />
            {/* {PHONE INPUT} */}
            <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            phone="phone"
            />
             {/* {EMAIL INPUT} */}
             <input
             type="email"
            className="form-control"
            placeholder="Email"
            email="email"
            />
            {/* {SUBJECT INPUT} */}
            <input
            type="text"
            className="form-control"
            placeholder="Subject"
            subject="subject"
            />
            </div>
            <div className="col-md-6 col-xs-12">
            {/* {DESCRIPTION} */}
            <textarea
            type="text"
            className="form-control"
            placeholder="Description"
            email="email"
            ></textarea>
            <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Contact
