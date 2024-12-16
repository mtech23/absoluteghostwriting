import React from "react";

import whiteLogo from "../../../assets/images/logo-white.png";

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
                <a href="/">
                  <figure>
                    <img src={whiteLogo} alt="Absolute Ghostwriting Logo" />
                  </figure>
                </a>
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
                  <a href="/">Home</a>
                </li>
                <li className="">
                  <a href="services">Services</a>
                  <span>
                    <i className="fa fa-2x">&nbsp;&nbsp;&nbsp;&nbsp;</i>
                  </span>
                  <ul>
                    <li className="">
                      <a href="publishing-services">Publishing Services</a>
                    </li>
                    <li className="">
                      <a href="powerhouse-services">Powerhouse Services</a>
                    </li>
                    <li className="">
                      <a href="ghostwriting-services">Ghostwriting Services</a>
                    </li>
                    <li className="">
                      <a href="book-printing">Printing</a>
                    </li>
                    <li className="">
                      <a href="other-book-services">Other Book Services</a>
                    </li>
                    <li className="">
                      <a href="press-release">Press Release</a>
                    </li>
                    <li className="">
                      <a href="childrens-illustrations">
                        Childrens Illustrations
                      </a>
                    </li>
                    <li className="">
                      <a href="childrens-book">Childrens book</a>
                    </li>
                  </ul>
                </li>
                <li className="">
                  <a href="featured-authors">Featured Authors</a>
                  <span>
                    <i className="fa fa-2x">&nbsp;&nbsp;&nbsp;&nbsp;</i>
                  </span>
                  <ul>
                    <li className="">
                      <a href="testimonials">Testimonials</a>
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
                  <a href="./">
                    <figure>
                      <img
                        src="assets/images/logo-black.png"
                        alt="Absolute Ghostwriting"
                      />
                    </figure>
                  </a>
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
