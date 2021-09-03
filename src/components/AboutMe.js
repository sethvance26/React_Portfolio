import React from 'react';
import personalPic from "../me.jpg"

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row g-0">
                <div className="col-sm-6 col-md-8">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={personalPic} alt="author.." />
                </div>
                </div>
                <div className="col-lg-6 col-xm-12"></div>
                <h1 className="about-heading">About Me</h1>

                <p className="text-end">A tireless, results-driven Web Developer dedicated to building and optimizing user-focused websites for customers with various business and personal objectives. 
                Judicious and creative when crafting effective websites, apps and platforms to propel growth and competitive advantage. 
                Technically proficient and analytical problem solver with calm and focused demeanor. Leveraging years of customer service experience with my recent graduation of the University Of Richmond's Full Stack Flex Bootcamp, 
                working collaboratively or solo on projects comes naturally. 
                </p>
                <h2 className="about-heading">Experience with:</h2>

                <p> HTML5, CSS3, JavaScript, jQuery, MongoDB, Express.js, React.js, Node.js, MySQL, Handlebars, Bootstrap, Kendo-React, Git, and working with source code management.
                </p>
            </div>
        </div>
    )
}

export default AboutMe
