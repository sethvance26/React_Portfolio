import React from 'react';
import author from "../me.jpg"

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row g-0">
                <div className="col-sm-6 col-md-8">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author.." />
                </div>
                </div>
                <div className="col-lg-6 col-xm-12"></div>
                <h1 className="about-heading">About Me</h1>

                <p className="text-end">A Tireless, results-driven Web Developer dedicated to building and optimizing user-focused websites for customers with various business and personal objectives. 
                Judicious and creative when crafting effective websites, apps and platforms to propel growth and competitive advantage. 
                Technically proficient and analytical problem solver with calm and focused demeanor. 
                </p>
            </div>
        </div>
    )
}

export default AboutMe
