import React from "react";
import { Link } from "react-router-dom";

import whiteLogo from "../../../assets/images/logo-white.png";
import logoBlack from "../../../assets/images/logo-black.png";


const Header = () => {
  return (
    <>
    
      <section id="header_top">
        <div className="wrapper">
          <div className="head_top_con">
            <div className="header_details">
              <div className="header_number">
                <a href="tel:(855) 277-7768">(855) 277-7768</a>
              </div>

              <div className="header_contact_form">
                <a href="mailto:info@absoluteghostwriting.com">
                  info@absoluteghostwriting.com
                </a>
              </div>
            </div>

            <div className="header_tools">
              <a
                href="https://www.absoluteghostwriting.com/manuscript/"
                className="login_link"
              >
                Submit Your Manuscript
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="parent">
        <header>
          <div className="wrapper">
            <div className="header_con">
              <div className="main_logo">
                <Link to="/">
                  <figure>
                    <img src={whiteLogo} alt="Absolute Ghostwriting Logo" />
                  </figure>
                </Link>
              </div>
            </div>
          </div>
        </header>
        {/* Navigation */}
        <div id="nav_area">
          <div className="wrapper">
            <nav className="header_nav">
              <ul>
                <li className="current_page_item">
                  <Link to="//">Home</Link>
                </li>
                <li className="">
                  <Link to="/services">Services</Link>
                  <span>
                    <i className="fa fa-2x">&nbsp;&nbsp;&nbsp;&nbsp;</i>
                  </span>
                  <ul>
                    <li className="">
                      <Link to="/publishing-services">Publishing Services</Link>
                    </li>
                    <li className="">
                      <Link to="/powerhouse-services">Powerhouse Services</Link>
                    </li>
                    <li className="">
                      <Link to="/ghostwriting-services">Ghostwriting Services</Link>
                    </li>
                    <li className="">
                      <Link to="/book-printing">Printing</Link>
                    </li>
                    <li className="">
                      <Link to="/other-book-services">Other Book Services</Link>
                    </li>
                    <li className="">
                      <Link to="/press-release">Press Release</Link>
                    </li>
                    <li className="">
                      <Link to="/childrens-illustrations">
                        Childrens Illustrations
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/childrens-book">Childrens book</Link>
                    </li>
                  </ul>
                </li>
                <li className="">
                  <Link to="/featured-authors">Featured Authors</Link>
                  <span>
                    <i className="fa fa-2x">&nbsp;&nbsp;&nbsp;&nbsp;</i>
                  </span>
                  <ul>
                    <li className="">
                      <Link to="/testimonials">Testimonials</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="wrapper">
            <div className="nav_toggle_button">
              <div className="toggle_holder">
                <div className="hamburger hamburger--spin-r">
                  <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="toggle_right_nav">
            <nav className="page_nav">
              <div className="menu_slide_right">
                <div className="nav_logo">
                  <Link to="/">
                    <figure>
                      <img
                        src={logoBlack}
                        alt="Absolute Ghostwriting"
                      />
                    </figure>
                  </Link>
                </div>
                <div className="toggle_holder">
                  <div className="hamburger hamburger--spin-r">
                    <div className="hamburger-box">
                      <div className="hamburger-inner"></div>
                    </div>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="wrapper">
                <ul>
                  <li className="">
                    <a href="about-us">About Us</a>
                  </li>
                  <li className="">
                    <a href="testimonials">Testimonials</a>
                  </li>
                  <li className="">
                    <a href="featured-authors">
                      Pride of Absolute Ghostwriting
                    </a>
                  </li>
                  <li className="">
                    <a href="https://www.absoluteghostwriting.com/blogs">
                      Blog
                    </a>{" "}
                  </li>
                  <li className="">
                    <a href="faq">FAQ</a>{" "}
                  </li>

                  <li className="">
                    <a href="contact-us">Contact Us</a>{" "}
                  </li>
                </ul>
              </div>
            </nav>
            <div className="toggle_nav_close"></div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Header;
