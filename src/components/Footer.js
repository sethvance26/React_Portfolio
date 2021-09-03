import React from "react";
import { Link } from "react-scroll";
import { SocialMediaIconsReact } from "social-media-icons-react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Seth Jordan Vance</p>
            </div>
            <div className="d-flex">
              <a href="tel: 804-502-9700">(804)502-9700</a>
            </div>
            <div className="d-flex">
              <p>sethvance39@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link
                  smooth={true}
                  to="home"
                  offset={-110}
                  className="footer-nav"
                >
                  Home
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="about"
                  offset={-110}
                  className="footer-nav"
                >
                  About Me
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="services"
                  offset={-110}
                  className="footer-nav"
                >
                  Services
                </Link>
              </div>
              <div className="col">
                <Link
                  smooth={true}
                  to="portfolio"
                  offset={-110}
                  className="footer-nav"
                >
                  Projects
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="contact"
                  offset={-110}
                  className="footer-nav"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="socialMedia d-flex justify-content-space-evenly">
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                icon="linkedin"
                iconColor="rgba(255,255,255,1)"
                backgroundColor="rgba(26,166,233,1)"
                url="https://www.linkedin.com/in/seth-vance-b1b28115a/"
                size="48"
              />
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                icon="github"
                iconColor="rgba(255,255,255,1)"
                backgroundColor="rgba(132,140,146,1)"
                url="https://github.com/sethvance26"
                size="48"
              />
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                icon="mail"
                iconColor="rgba(242,90,54,1)"
                backgroundColor="rgba(242,243,245,1)"
                url="mailto:sethvance39@gmail.com"
                size="48"
              />
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Seth J. Vance | All Rights
              Reserved
              <br />
              Drone Image Taken In Downtown RVA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
