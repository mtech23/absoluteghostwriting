import React from "react";
import DefaultLayout from "../../components/layout";
import "./style.css";

import servicesbg from "../../assets/images/services/services-bg.jpg";

import ghostwriter from "../../assets/images/ghos-twriter.png";
import childrenbook from "../../assets/images/childre-nbook.png";
import childrenillustration from "../../assets/images/childre-nillustration.png";
import bookpublishing from "../../assets/images/bo-okpublishing.png";

const Services = () => {
  return (
    <DefaultLayout>
      <section
        id="banner_parent"
        className="service-ban"
        style={{ backgroundImage: `url(${servicesbg})` }}
      >
        <section id="banner" className="page-section">
          <div className="wrapper">
            <div className="bnr_con animatedParent">
              {/* <!-- <figure className="services_banner"><img src="assets/images/services/services-bg.jpg" alt="large books"></figure> --> */}
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <div className="services_bnr_info">
                      <div className="services_bnr_info">
                        <h1>Our Services</h1>
                        <ul>
                          <li>
                            <a href="#ghost-serv">Ghostwriting Services</a>
                          </li>
                          <li>
                            <a href="#child-book">Children's Books</a>
                          </li>
                          <li>
                            <a href="#child-illust">Children's Illustrations</a>
                          </li>
                          <li>
                            <a href="#pub-serv">Publishing Services</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div
                      className="banner-form2"
                      data-aos="fade-right"
                      data-aos-duration="2000"
                    >
                      <h2>
                        Looking for illustrations for your book? <br />{" "}
                        <span>Book a FREE consultation call today!</span>
                      </h2>
                      <form
                        action="webpages/bannerFormController.php"
                        method="POST"
                      >
                        {/* <!-- <img src="assets/images/labor-day-off.png"> --> */}
                        <input
                          type="hidden"
                          name="ipaddress"
                          className="form-1-ip"
                        />
                        <input
                          type="hidden"
                          name="pageurl"
                          className="form-1-url"
                        />
                        <div className="mb-3">
                          <input
                            type="text"
                            name="Name"
                            className="form-control"
                            id="exampleInputName"
                            placeholder="Full Name"
                            required="true"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="email"
                            name="Email"
                            className="form-control"
                            id="exampleInputEmail"
                            placeholder="Email"
                            required="true"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="tel"
                            name="Number"
                            className="form-control"
                            id="exampleInputPhone"
                            placeholder="Phone"
                            required="true"
                          />
                        </div>
                        <div className="mb-3">
                          <textarea
                            type="text"
                            name="Message"
                            className="form-control"
                            id="exampleInputMessage"
                            placeholder="About your book (optional)"
                            required="true"
                          ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                        <input className="" type="hidden" name="ctry" value="" />
                        <input type="hidden" name="pc" value="" />
                        {/* <!--<input type="hidden" name="cip" value="" > --> */}
                        <input
                          type="hidden"
                          name="cip"
                          value=""
                          className="form-1-ip"
                        />
                        <input type="hidden" name="hiddencapcha" value="" />
                        <input
                          type="hidden"
                          id="location"
                          name="locationURL"
                          value="<?php echo 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];?>"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section id="publishing_serv_sub">
        <div className="wrapper">
          <div className="publishing_serv_sub_con">
            <div className="container">
              <div className="row" id="ghost-serv">
                <div className="col-md-6">
                  <div className="sub_con_box1 animated fadeInRight">
                    <h2>
                      Ghostwriting <br /> services
                    </h2>
                    <p>
                      Absolute Ghostwriting transforms your ideas into
                      compelling books. Whether it's fiction, nonfiction, or
                      biography, our expert writers work together with you to
                      create an honest story that reflects your voice. With
                      skilled direction, you may have a flawless experience from
                      concept to completion
                    </p>

                    <a href="ghostwriting-services">Find Out More</a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="side-img">
                    <figure>
                      <img
                        src={ghostwriter}
                        alt="woman smiling"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="row" id="child-book">
                <div className="col-md-6">
                  <div
                    className="sub_con_box1 animated fadeInLeft delay-250"
                    id="audiobook"
                  >
                    <h2>
                      Children's <br /> Books
                    </h2>
                    <p>
                      Absolute Ghostwriting specializes in developing
                      interesting children's books that combine intriguing
                      storylines and wonderfully made drawings. Our skilled
                      authors and artists combine to create stories that
                      delight, educate, and inspire young readers, allowing you
                      to share your idea with the next generation of book
                      enthusiasts.
                    </p>

                    <a href="childrens-book">Find Out More</a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="side-img">
                    <figure>
                      <img
                        src={childrenbook}
                        alt="woman smiling with headphones"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="row" id="child-illust">
                <div className="col-md-6">
                  <div className="sub_con_box1 animated fadeInRight">
                    <h2>
                      Children's <br /> Illustrations
                    </h2>
                    <p>
                      Absolute Ghostwriting brings children's stories to life
                      with fascinating graphics. Our creative artists create
                      vibrant, inventive illustrations that fascinate young
                      readers and enhance the storytelling experience. Whether
                      quirky or timeless, our illustrations capture the essence
                      of your children's book and make it memorable.
                    </p>
                    <a href="childrens-illustrations">Find Out More</a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="side-img">
                    <figure>
                      <img
                        src={childrenillustration}
                        alt="woman smiling"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="row" id="pub-serv">
                <div className="col-md-6">
                  <div className="sub_con_box2 animated fadeInLeft">
                    <h2>
                      Publishing <br /> Services
                    </h2>
                    <p>
                      Absolute Ghostwriting provides complete publishing
                      services, including manuscript formatting, cover design,
                      and distribution. Whether you're a first-time author or an
                      experienced writer, we guarantee a smooth publishing
                      process that will give your book professional polish and a
                      wide reach in both digital and print markets.
                    </p>
                    <a href="publishing-services">Find Out More</a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="side-img">
                    <figure>
                      <img
                        src={bookpublishing}
                        alt="woman smiling with headphones"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Services;
