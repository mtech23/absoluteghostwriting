import React from "react";
import DefaultLayout from "../../components/layout";

import childrensbook from "../../assets/videos/childrens-book.mp4"
import childrensbookside1 from "../../assets/images/childrens-book-side1.png"

import childrensbook1 from "../../assets/images/childrens-book1.jfif"
import childrensbook2 from "../../assets/images/childrens-book2.jfif"
import childrensbook3 from "../../assets/images/childrens-book3.jfif"
import childrensbook4 from "../../assets/images/childrens-book4.jfif"
import childrensbook5 from "../../assets/images/childrens-book5.jfif"
import childrensbook6 from "../../assets/images/childrens-book6.jfif"

import childrensbookside2 from "../../assets/images/childrens-book-side2.png"

import Slider from "react-slick";

const ChildrensBook = () => {


    const settings = {
        dots: false, // Hide dots
        arrows: false, // Hide arrows
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Show 4 slides at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Delay between slides in autoplay
      };


  return (
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
                    src={childrensbook}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <div className="pub_serv_bnr_info animatedParent">
                      <h2>
                        Creating <span>Adventures For Little Dreamers!</span>
                      </h2>
                      <p>
                        Absolute Ghostwriting's Children's Book service brings
                        fantastic stories to life for young readers. We
                        collaborate closely with you to create engaging,
                        entertaining, and informative books that children will
                        like.
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

                                 function onSubmit(token) {
                                    console.log(token);
                                 }
                              </script> */}
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
                          value="<?php echo 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>"
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

      {/* <!-- Middle Area -->
   <!-- middle1 --> */}
   <section id="middle1" className="page-section iner" data-section-name="publishing services">

      <div className="wrapper">
         <div className="middle1_con animatedParent">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-md-6">
                     <div className="middle1_content animated bounceInLeft">
                        <h2>Story Writing</h2>
                        <p>Our excellent writers can develop unique stories that capture children's imaginations. Whether you have a basic idea or need help coming up with one, we'll create a story that will entertain and inspire young people.</p>
                        <a href="javascript:;" className="readmore_btn">Read More</a>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="side-img">
                        <img src={childrensbookside1} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

   </section>

   {/* <!-- Bottom1 --> */}
   <section id="bottom1" className="page-section animatedParent" data-section-name="pride of Absolute Ghostwriting">
      <div className="wrapper animated fadeInDown">
         <div className="btm1_con ">
            <div className="btm1_content">
               <h1>What Is The Pride Of Absolute Ghostwriting?</h1>
               <p>We are known as the best ghostwriting company, which makes our whole team proud. We work collaboratively to make your ideas standout. And deliver you the exceptional story you deserve. We provide high-quality Book Writing Services undoubtedly, that reflect your concept with creativity and professionalism.</p>
               <a href="featured-authors" className="bottom1-btn">Explore More</a>
            </div>
            {/* <div className="js-conveyor-1 author_lists"> */}
            <div className="js-conveyor-1 author_lists jctkr-wrapper jctkr-initialized">
               <ul>
               {/* <Slider {...settings}> */}
                  <li>
                     <a href="featured-authors">
                        <figure><img src={childrensbook1} alt="Mindscope Seven" /></figure>
                        <h2>Mindscope Seven</h2>
                     </a>
                  </li>
                  <li>
                     <a href="featured-authors">
                        <figure><img src={childrensbook2} alt="Donielle Ingersoll" /></figure>
                        <h2>Donielle Ingersoll</h2>
                     </a>
                  </li>
                  <li>
                     <a href="featured-authors">
                        <figure><img src={childrensbook3} alt="Rezaul Khan" /></figure>
                        <h2>Rezaul Khan</h2>
                     </a>
                  </li>
                  <li>
                     <a href="featured-authors">
                        <figure><img src={childrensbook4} alt="Susan A. Savion" /></figure>
                        <h2>Susan A. Savion</h2>
                     </a>
                  </li>
                  <li>
                     <a href="featured-authors">
                        <figure><img src={childrensbook5} alt="Otilia Greco" /></figure>
                        <h2>Otilia Greco</h2>
                     </a>
                  </li>
                  <li>
                     <a href="featured-authors">
                        <figure><img src={childrensbook6} alt="Mairy E. Lloyd" /></figure>
                        <h2>Mairy E. Lloyd</h2>
                     </a>
                  </li>
                  {/* </Slider> */}
               </ul>
            </div>
            <div className="btm1_content btmcntnt">
               <h4>Book We've PUBLISHED!</h4>
               <a className="readmore_btn newbtnnnnn" href="featured-authors">Published Books</a>
            </div>
         </div>
      </div>
   </section>
   {/* <!-- End Bottom1 --> */}


   <section id="middle2" className="page-section" data-section-name="powerhouse services">

      <div className="wrapper">
         <div className="middle2_con animatedParent">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-md-6">
                     <div className="middle2_content animated bounceInLeft">
                        <h2>Illustration</h2>
                        <p>We produce stunning visuals that bring your tale to life. Our skilled artists create colorful, whimsical illustrations that complement your story's style and delight young readers.</p>
                        <a href="javascript:;" className="readmore_btn">Read More</a>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="side-img">
                        <img src={childrensbookside2} alt="Children Book" />
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

export default ChildrensBook;
