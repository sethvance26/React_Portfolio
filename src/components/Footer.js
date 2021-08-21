import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
    EmailShareButton,
    EmailIcon
} from "react-share";


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
                                <a className="footer-nav">Home</a>
                                <br/>
                                <a className="footer-nav">About Me</a>
                                <br/>
                                <a className="footer-nav">Services</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Projects</a>
                                <br/>
                                <a className="footer-nav">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://github.com/sethvance26/React_Portfolio"}
                                quote={"Seth Vance - FullStack Developer"}
                                hashtag="#React"
                            >   
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>

                            <LinkedinShareButton
                                url={"https://github.com/sethvance26/React_Portfolio"}
                                quote={"Seth Vance - FullStack Developer"}
                                hashtag="#React"
                            >   
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>

                            <TwitterShareButton
                                url={"https://github.com/sethvance26/React_Portfolio"}
                                quote={"Seth Vance - FullStack Developer"}
                                hashtag="#React"
                            >   
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>

                            <EmailShareButton
                                url={"https://github.com/sethvance26/React_Portfolio"}
                                quote={"Seth Vance - FullStack Developer"}
                                hashtag="#React"
                            >   
                                <EmailIcon className="mx-3" size={36} />
                            </EmailShareButton>
                        </div>
                        <p className="pt-3 text-center">
                        Copyright&copy;
                        {new Date().getFullYear()}&nbsp;Seth J. Vance | All Rights Reserved
                        <br/>
                        Drone Image Taken In Downtown RVA
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
