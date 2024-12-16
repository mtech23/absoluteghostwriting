import React from 'react'
import whiteLogo from "../../../assets/images/logo-white.png";

import facebook from "../../../assets/images/facebook.png";
import twitter from "../../../assets/images/twitter.png";
import instagram from "../../../assets/images/instagram.png";
import youtube from "../../../assets/images/youtube.png";
import linkedin from "../../../assets/images/linkedin.png";
import pinterest from "../../../assets/images/pinterest.png";
import quora from "../../../assets/images/quora.png";
import email from "../../../assets/images/email.png";
import call from "../../../assets/images/call.png";
import fax from "../../../assets/images/fax.png";
import map from "../../../assets/images/map.png";
import clock from "../../../assets/images/clock.png";
import ibpa from "../../../assets/images/ibpa.png";


const Footer = () => {
  return (
    <>
      <footer className="page-section footer">
                <div className="footer_top">
                    <div className="wrapper">
                        <div className="footer_top_con animatedParent">
                            <div className="row">
                                <div className="col-md-4 footer-col animated fadeInLeft">
                                    <div className="foo-wrapper-info">
                                        <a href="/">
                                            <figure>
                                                <img src={whiteLogo} alt="Absolute Ghostwriting"
                                                    id="logo" />
                                            </figure>
                                        </a>
                                        <p className="foo-text">Get yourself the reputation you deserve with our <a href="services">services</a>. Connect with are devoted team to share your story and create an outstanding book.</p>
                                        <h2>Aspire. Dare to Inspire.</h2>
                                        <a href="contact-us" className="btn">LET'S TALK</a>
                                        <ul>
                                            <li>
                                                <a href="javascript:;"
                                                    target="_blank">
                                                    <img src={facebook} alt="facebook"
                                                        className="foo-icons" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;" target="_blank">
                                                    <img src={twitter} alt="twitter"
                                                        className="foo-icons" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;" target="_blank">
                                                    <img src={instagram}
                                                        alt="instagram" className="foo-icons" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;"
                                                    target="_blank">
                                                    <img src={youtube} alt="youtube"
                                                        className="foo-icons" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;"
                                                    target="_blank">
                                                    <img src={linkedin} alt="linkedin"
                                                        className="foo-icons" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.pinterest.com/absoluteghostwriting/" target="_blank">
                                                    <img src={pinterest}
                                                        alt="pinterest" className="foo-icons" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.quora.com/profile/Absolute-Ghostwriting"
                                                    target="_blank">
                                                    <img src={quora} alt="quora"
                                                        className="foo-icons" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 footer-col animated fadeInUp">
                                    <div className="foo-wrapper-link">
                                        <h4><i> QUICK LINKS </i></h4>
                                        <div className="footer_nav">
                                            <ul>
                                                <li
                                                    className="">
                                                    <a href="featured-authors">Pride of
                                                        Absolute Ghostwriting</a></li>
                                                <li className="">
                                                    <a href="about-us">About Us</a></li>
                                                <li
                                                    className="">
                                                    <a href="publishing-services">Publishing
                                                        Services</a></li>
                                                <li
                                                    className="">
                                                    <a href="powerhouse-services">Powerhouse
                                                        Services</a></li>
                                                <li
                                                    className="">
                                                    <a href="testimonials">Author Testimonials</a>
                                                </li>
                                                <li
                                                    className="">
                                                    <a href="contact-us">Contact Us</a></li>
                                                <li
                                                    className="">
                                                    <a href="privacy-policy">Privacy Policy</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 footer-col animated fadeInRight">
                                    <div className="foo-wrapper-sched">
                                        <h4><i> STAY IN TOUCH </i></h4>
                                        <div className="footer_nav">
                                            <ul>
                                                <li><img src={email} alt="email" />
                                                    <span><a
                                                            href="mailto:info@absoluteghostwriting.com">info@absoluteghostwriting.com</a></span>
                                                </li>
                                                <li><img src={call} alt="call" />
                                                    <span><mark><a
                                                                href="tel:(855) 277-7768">(855) 277-7768</a></mark></span>
                                                </li>
                                                <li><img src={fax} alt="fax" />
                                                    <span><mark><a
                                                                href="tel:(855) 277-7768">(855) 277-7768</a></mark></span>
                                                </li>
                                                <li>
                                                    <img src={map} alt="map" />
                                                    <a href="javascript:;">
                                                        <address> <span>710 N Florida Ave,<br /> Tampa, FL 33602, USA</span>
                                                        </address>
                                                    </a>

                                                </li>
                                                {/* <!-- <li>
                                                    <img src="<?php echo $basesurl;?>images/truck.png" alt="truck">
                                                    <a href="javascript:;">
                                                        <address>
                                                            <span>710 N Florida Ave,<br> Tampa, FL 33602, USA</span>
                                                        </address>
                                                    </a>
                                                </li> --> */}
                                                <li><img src={clock} alt="clock" />
                                                    <span>8:00 AM–6:00 PM</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <img src={ibpa}
                                             alt="bbb logo" />
                                    </div>
                                </div>
                                {/* <!-- <div className="col-md-2 footer-col animated fadeInRight">
                                    <figure className="bbb"><a
                                            href="javascript:;"
                                            target="_blank"></a></figure>
                                </div> --> */}


                            </div>
                        </div>
                    </div>
                                            <div className="row animatedParent">
                            <div className="animated zoomIn delay-250">
                                <div className="wrapper">
                                <iframe
                                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.4153664435007!2d-82.46340541087385!3d27.95056275296553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c5a3e8cfd037%3A0xaa932b6203013160!2s710%20N%20Florida%20Ave%2C%20Tampa%2C%20FL%2033602%2C%20USA!5e0!3m2!1sen!2s!4v1727194653185!5m2!1sen!2s"
                                  width="600"
                                  height="450"
                                  style={{ border: 0 }}
                                  allowFullScreen=""
                                  loading="lazy"
                                  referrerPolicy="no-referrer-when-downgrade"
                                >
                                </iframe>
                                </div>
                            </div>
                        </div>
                </div>

                                <div className="footer_btm">
                    <div className="wrapper">
                        <div className="footer_btm_con">

                            <div className="copyright">
                                &copy; Copyright 2024 <a href="/">Absolute Ghostwriting </a> <span>All Rights Reserved.</span>
                            </div>


                        </div>
                    </div>
                </div>

            </footer>
            {/* <!-- Structure Ends Here --> */}
            <span className="back_top"></span>
            {/* <!-- End Clearfix --> */}
    </>
  )
}

export default Footer
