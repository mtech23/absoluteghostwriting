import React from "react";
import DefaultLayout from "../../components/layout";

import "./style.css";

import childrensillustration from "../../assets/videos/childrens-illustration.mp4";
import childrensillustrationsside1 from "../../assets/images/childrens-illustrations-side1.png";

import illust1 from "../../assets/images/illust-1.jpg";
import illust2 from "../../assets/images/illust-2.jpg";
import illust3 from "../../assets/images/illust-3.jpg";
import illust4 from "../../assets/images/illust-4.jpg";
import illust5 from "../../assets/images/illust-5.jpg";
import illust6 from "../../assets/images/illust-6.jpg";

import childrensillustrationsside2 from "../../assets/images/childrens-illustrations-side2.png";

import Slider from "react-slick";

const ChildrensIllustrations = () => {

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
      <section id="banner_parent" class="childrens-illustrations-main-ban">
        <section id="banner" class="page-section">
          <div class="wrapper">
            <div class="bnr_con pub_serv_con animatedParent">
              <div class="publishing_serv_vid">
                <video
                  muted
                  autoPlay
                  autobuffer
                  autoloop
                  loop
                  playsinline
                  poster="assets/videos/publishing-services-banner.jpg"
                >
                  <source src={childrensillustration} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* <!--<figure class="pub_serv_bnr"><img src="assets/images/publishing-services/banner-bg.jpg" alt="lot of books"></figure>--> */}
              <div class="container">
                <div class="row">
                  <div class="col-md-7">
                    <div class="pub_serv_bnr_info animatedParent">
                      <h2>
                        Visuals Only <span>For The Young Minds!</span>
                      </h2>
                      <p>
                        We provide engaging and colorful graphics designed
                        specifically for children. These images assist to bring
                        stories to life for young readers, igniting their
                        curiosity and interest. These visualizations are ideal
                        for getting children interested in books and learning,
                        as they make reading more magical and enjoyable!
                      </p>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div
                      class="banner-form2"
                      data-aos="fade-right"
                      data-aos-duration="2000"
                    >
                      <h2>
                        Looking for illustrations for your book? <br />{" "}
                        <span>Book a FREE consultation call today!</span>
                      </h2>
                      <form
                        action="webpages/servicebannerFormController.php"
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
                          class="form-1-ip"
                        />
                        <input
                          type="hidden"
                          name="pageurl"
                          class="form-1-url"
                        />
                        <div class="mb-3">
                          <input
                            type="text"
                            name="Name"
                            class="form-control"
                            id="exampleInputName"
                            placeholder="Full Name"
                            required="true"
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            type="email"
                            name="Email"
                            class="form-control"
                            id="exampleInputEmail"
                            placeholder="Email"
                            required="true"
                          />
                        </div>
                        <div class="mb-3">
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
                            class="bg-danger col-lg-offset-3 contact_error "
                            style={{ display: "none" }}
                          >
                            Contact No Incorrect
                          </span>
                        </div>
                        <div class="mb-3">
                          <select
                            class="form-control"
                            name="illustrationsTypes"
                          >
                            <option selected="" disabled="">
                              Types of illustrations
                            </option>
                            <option>Children</option>
                            <option>Comic</option>
                            <option>Book illustration</option>
                            <option>Animals</option>
                            <option>Fantasy</option>
                            <option>Portrait</option>
                            <option>Psychedelic</option>
                            <option>Retro</option>
                            <option>Cartoon–cute or childlike</option>
                            <option>Cartoon–whacky or funny</option>
                            <option>Realistic</option>
                            <option>Whimsical</option>
                            <option>Line drawings</option>
                            <option>Sketchy drawings</option>
                            <option>Stylized</option>
                            <option>Children</option>
                            <option>Comic</option>
                            <option>Book illustration</option>
                            <option>Animals</option>
                            <option>Fantasy</option>
                            <option>Portrait</option>
                            <option>Psychedelic</option>
                            <option>Retro</option>
                          </select>
                        </div>
                        <div class="mb-3">
                          <textarea
                            name="Message"
                            id="exampleInputMessage"
                            placeholder="About your book (optional)"
                            // id="textInput"
                            minlength="25"
                            required
                          ></textarea>
                        </div>
                        <div
                          class="g-recaptcha"
                          data-sitekey="6LdQ2X0qAAAAAN5M4fOrUwFTZ6vTKsDC-l3schBy"
                        ></div>
                        <button type="submit" class="btn btn-primary">
                          Submit
                        </button>
                        <input class="" type="hidden" name="ctry" value="" />
                        <input type="hidden" name="pc" value="" />
                        {/* <!--<input type="hidden" name="cip" value="" > --> */}
                        <input
                          type="hidden"
                          name="cip"
                          value=""
                          class="form-1-ip"
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

      {/* <!-- Middle Area -->
      <!-- middle1 --> */}
      <section
        id="middle1"
        class="page-section iner"
        data-section-name="publishing services"
      >
        <div class="wrapper">
          <div class="middle1_con animatedParent">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <div class="middle1_content animated bounceInLeft">
                    <h2>Custom Character Design</h2>
                    <p>
                      Make your story's characters to life with our creative
                      artwork by your side! Doesn’t matter if you want fun
                      animals, heroic warriors, or magical creatures, our
                      experts will make it that for you exactly by keeping your
                      idea in mind.
                    </p>
                    <a href="javascript:;" class="readmore_btn">
                      Read More
                    </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="side-img">
                    <img
                      src={childrensillustrationsside1}
                      alt="Children Book Illustration"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Bottom1 --> */}
      <section
        id="bottom1"
        class="page-section animatedParent"
        data-section-name="pride of Absolute Ghostwriting"
      >
        <div class="wrapper animated fadeInDown">
          <div class="btm1_con ">
            <div class="btm1_content">
              <h1>What Is The Pride Of Absolute Ghostwriting?</h1>
              <p>
                We are known as the best ghostwriting company, which makes our
                whole team proud. We work collaboratively to make your ideas
                standout. And deliver you the exceptional story you deserve. We
                provide high-quality Book Writing Services undoubtedly, that
                reflect your concept with creativity and professionalism.
              </p>
              <a href="featured-authors" class="bottom1-btn">
                Explore More
              </a>
            </div>
            {/* <div class="js-conveyor-1 author_lists"> */}
            <div class="js-conveyor-1 author_lists jctkr-wrapper jctkr-initialized">
              <ul>
                {/* <Slider {...settings}> */}
                <li>
                  <a href="featured-authors">
                    <figure>
                      <img src={illust1} alt="Mindscope Seven" />
                    </figure>
                    <h2>Mindscope Seven</h2>
                  </a>
                </li>
                <li>
                  <a href="featured-authors">
                    <figure>
                      <img src={illust2} alt="Donielle Ingersoll" />
                    </figure>
                    <h2>Donielle Ingersoll</h2>
                  </a>
                </li>
                <li>
                  <a href="featured-authors">
                    <figure>
                      <img src={illust3} alt="Rezaul Khan" />
                    </figure>
                    <h2>Rezaul Khan</h2>
                  </a>
                </li>
                <li>
                  <a href="featured-authors">
                    <figure>
                      <img src={illust4} alt="Susan A. Savion" />
                    </figure>
                    <h2>Susan A. Savion</h2>
                  </a>
                </li>
                <li>
                  <a href="featured-authors">
                    <figure>
                      <img src={illust5} alt="Otilia Greco" />
                    </figure>
                    <h2>Otilia Greco</h2>
                  </a>
                </li>
                <li>
                  <a href="featured-authors">
                    <figure>
                      <img src={illust6} alt="Mairy E. Lloyd" />
                    </figure>
                    <h2>Mairy E. Lloyd</h2>
                  </a>
                </li>
                {/* </Slider> */}
              </ul>
            </div>
            <div class="btm1_content btmcntnt">
              <h4>Book We've PUBLISHED!</h4>
              <a class="readmore_btn newbtnnnnn" href="featured-authors">
                Published Books
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Bottom1 --> */}

      <section
        id="middle2"
        class="page-section"
        data-section-name="powerhouse services"
      >
        <div class="wrapper">
          <div class="middle2_con animatedParent">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <div class="middle2_content animated bounceInLeft">
                    <h2>Full Illustrations For The Storybook </h2>
                    <p>
                      Do you want to add appealing and fascinating pictures to
                      every page of children’s book? Our expert painters will
                      create eye-catching scenes that will captivate the
                      imagination and bring your story to life from beginning to
                      end.
                    </p>
                    <a href="javascript:;" class="readmore_btn">
                      Read More
                    </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="side-img">
                    <img
                      src={childrensillustrationsside2}
                      alt="Childrens Book Illustration"
                    />
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

export default ChildrensIllustrations;
