import React, { useEffect } from "react";
import DefaultLayout from "../../components/layout";
import "./style.css";

import bestsellerbestquality from "../../assets/images/best-seller-best-quality.png"

import publishingservicesbannervideo from "../../assets/videos/publishing-services-banner.mp4"
import pagebreaker1 from "../../assets/images/page-breaker1.png"
import subconimg2 from "../../assets/images/publishing-services/sub-con-img2.png"
// import publishingservicesbannerimg from "../../assets/videos/publishing-services-banner.jpg"

const PublishingServices = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.classList.add('hompg', 'publi-serv');
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.body.classList.remove('hompg', 'publi-serv');
      }
    };
  }, []);
  return (
    // <div className="hompg publi-serv">
    <DefaultLayout>
      <section id="banner_parent">
        <section id="banner" className="page-section">
          <div className="wrapper">
            <div className="bnr_con pub_serv_con animatedParent">
              <div className="publishing_serv_vid">
                <video
                  muted
                  autoPlay
                  autobuffer
                  autoloop
                  loop
                  playsinline
                  poster="assets/videos/publishing-services-banner.jpg"
                >
                  <source
                    src={publishingservicesbannervideo}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* <!--<figure className="pub_serv_bnr"><img src="assets/images/publishing-services/banner-bg.jpg" alt="lot of books"></figure>--> */}
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <div className="pub_serv_bnr_info animatedParent">
                      <h1>
                        Get your work{" "}
                        <span>recognized with Absolute Ghostwriting Today</span>
                      </h1>
                      <p>
                        Absolute Ghostwriting offers every ambitious writer an
                        equal opportunity to have their work recognized in our
                        book publishing services. Our dedicated team provides
                        tailored support, ensuring that the writer's story
                        reaches its full potential.
                      </p>
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
                        {/* <script>
                            function contactForm(token) {
                                document.getElementById("contactForm").submit();
                            }
                            function onSubmit(token){
                                console.log(token);
                            }
                        </script> */}
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
                            type="text"
                            id="phone-coun"
                            name="Number"
                            placeholder="Phone number"
                            pattern="^\d{5,}$"
                            minlength="9"
                            required
                          />
                          <span
                            className="bg-danger col-lg-offset-3 contact_error "
                            style={{display: 'none'}}
                          >
                            Contact No Incorrect
                          </span>
                        </div>
                        <div className="mb-3">
                          <textarea
                            type="text"
                            name="Message"
                            className="form-control"
                            id="exampleInputMessage"
                            placeholder="About your book (optional)"
                            // id="textInput"
                            minlength="25"
                            required
                          ></textarea>
                        </div>
                        <div
                          className="g-recaptcha"
                          data-sitekey="6LdQ2X0qAAAAAN5M4fOrUwFTZ6vTKsDC-l3schBy"
                        ></div>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                        <input className="" type="hidden" name="ctry" value="" />
                        <input type="hidden" name="pc" value="" />
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

      <section id="pub_serv">
        <div className="wrapper">
            {/* <!-- Standard Publising --> */}
            <div className="pub_serve1_con animatedParent animatedParent" id="standard-publishing-platform">
                <div className="pub_standard_content animated fadeInUp">
                    <h2>Our standard <span>Publishing</span> <small>services</small></h2>
                    <p>With passage of time black-and-white books have influenced readers' perspectives thereby enabling them to go through some of the finest works produced to date. For those in quest of a refined and well-designed publication, our Publishing services are the perfect choice. Explore our choice of Standard Publishing packages to get started today!</p>
                </div>

                <div className="pub_standard_holder">
                    <div className="pub_standard_box1">
                        <h2>Viscount</h2>
                        <span className="pkggdtl">(Proofreading + Editing + Formatting + Publishing)</span>
                        <input type="checkbox" className="read-more-state" id="post-1" />
                        <ul className="standard_list read-more-wrap">
                            <li>eBook, Paperback</li>
                            <li>Complete Editing, Formatting , Typesetting, for final check</li>
                            <li>Complete Proofreading</li>
                            <li>Grammar check & sentence correction</li>
                            <li>Error checks & corrections</li>
                            <li>Margins & Indexing</li>
                            <li>Author account creation</li>
                            <li>Single screen dashboard for Authors to track Sales, Orders and Royalties</li>


                        </ul>
                        <label for="post-1" className="read-more-trigger"></label>
                        <a href="contact-us" className="subsribe_btn">Get Started</a>
                    </div>
                    <div className="pub_standard_box2">
                        <h2>Marquess</h2>
                        <span className="pkggdtl">(Proofreading + Editing + Formatting + Book Cover design + ISBN + 5 Publishing platforms)</span>
                        <input type="checkbox" className="read-more-state" id="post-2" />
                        <ul className="standard_list read-more-wrap">
                            <li>eBook, Paperback & Hardcover format</li>
                            <li>Editorial Review (complementary)</li>
                            <li>Complete Proofreading</li>
                            <li>Complete book Editing & Formatting</li>
                            <li>Grammar check & sentence correction</li>
                            <li>Error checks & corrections</li>
                            <li>Margins & Indexing</li>
                            <li>Author account creation</li>
                            <li>Cover alignment</li>
                            <li>3D Customized Front and Back Book cover designing (Unlimited revisions)</li>
                            <li>International Book Number (ISBN)</li>
                            <li>Single screen dashboard for Authors to track Sales, Orders and Royalties</li>

                        </ul>
                        <label for="post-2" className="read-more-trigger"></label>
                        <a href="contact-us" className="subsribe_btn">Get Started</a>
                    </div>
                    <div className="pub_standard_box3">
                        <img src={bestsellerbestquality} className="bstslrstickr" alt="best-seller" />
                        <h2>Emperor</h2>
                        <span className="pkggdtl">(Proofreading + Editing + Formatting + Book Cover design + ISBN + Publishing)</span>
                        <input type="checkbox" className="read-more-state" id="post-3" />
                        <ul className="standard_list read-more-wrap">
                            <li>eBook, Paperback & Hardcover format</li>
                            <li>5 publishing platforms including Amazon</li>
                            <li>Editorial Review (complementary)</li>
                            <li>Complete Proofreading</li>
                            <li>Complete book Editing & Formatting</li>
                            <li>Grammar check & sentence correction</li>
                            <li>Error checks & corrections</li>
                            <li>Margins & Indexing</li>
                            <li>Author account creation</li>
                            <li>Inner pages alignment</li>
                            <li>Cover alignment</li>
                            <li>3D Customized Front and Back Book cover designing (Unlimited revisions)</li>
                            <li>International Book Number (ISBN)</li>
                            <li>Single screen dashboard for Authors to track Sales, Orders and Royalties</li>

                        </ul>
                        <label for="post-3" className="read-more-trigger"></label>
                        <a href="contact-us" className="subsribe_btn">Get Started</a>
                    </div>
                </div>
            </div>

            <figure className="page_breaker1"><img src={pagebreaker1} alt="page breaker" /></figure>
        </div>  
    </section>


    <section id="publishing_serv_sub">
        <div className="wrapper">
            <div className="publishing_serv_sub_con animatedParent" id="E-BOOK">
                <div className="sub_con_box1 animated fadeInRight">
                    <figure><img src="assets/images/publishing-services/sub-con-img1.png" alt="woman smiling" /></figure>
                    <h2 style={{textTransform: 'inherit'}}>E-BOOK</h2>
                    <p>In the modern world, convenience has taken over especially with the growing popularity of reading devices. This change has led to a significant rise in eBooks. Due to this sudden rise of digital books, readers have engaged themselves in these reading devices. Better now than never, this is the ideal time to transform your book into a digital forum.</p>
                </div>
                <div className="clearfix"></div>
                <div className="sub_con_box2 animated fadeInLeft delay-250" id="audiobook">
                    <figure><img src={subconimg2} alt="woman smiling with headphones" /></figure>
                    <h2>AUDIOBOOK</h2>
                    
                    <p>Now you can convert your books into a memorable auditory experience with audio book publishing. Therefore, by exploring the world of skilled narratives and thus reaching a much larger audience.</p>
                    <p>What’s Included in our publishing audio books:</p>
                    <ul>
                        <li>You can easily convert your printed book into a fascinating audio format with a word limit of 10,000 words.</li>
                        <li>Expert voice over artists can easily complete your narration for you.</li>
                        <li>Royalty-free background music for memorable  intros, continuous transitions, and an unforgettable conclusion.</li>
                        <li>A round of revisions to ensure that we meet your needs.</li>
                        <li>Our distribution includes Overdrive, Audible.com, Amazon.com, iTunes, and 46 additional channels.</li>
                        </ul>
                        <p><strong>Music add-on for enhanced experience</strong></p>
                        <p>Enhance your listening experience with music that will blend well with the right emotions thus adding a more charmed experience to your audio book.
                            {/* <!-- <br />Music added during narration --> */}
                        </p>
                        <ul>
                        <li>Now you can add a musical touch on your narrations.</li>
                    </ul>
                    <p>Get yourself the appreciation you deserve with our services whether it is publishing or power house services. Contact our dedicated team to share your side of the story to create a book that will become everyone's next favorite.</p>
                    
                </div>
            </div>
        </div>
    </section>


    </DefaultLayout>
    // </div>
  );
};

export default PublishingServices;
