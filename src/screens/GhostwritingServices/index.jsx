import React from "react";
import DefaultLayout from "../../components/layout";

import publishingservicesbanner from "../../assets/videos/publishing-services-banner.mp4"

import pagebreaker1 from "../../assets/images/page-breaker1.png"
import bestsellerbestquality from "../../assets/images/best-seller-best-quality.png"
import subconimg1 from "../../assets/images/ghostwriting-services/sub-con-img1.png"
import subconimg2 from "../../assets/images/ghostwriting-services/sub-con-img2.png"

const GhostwritingServices = () => {
  return (
    <DefaultLayout>
      <section id="banner_parent" class="ghost-ban">
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
                  <source
                    src={publishingservicesbanner}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-md-7">
                    <div class="pub_serv_bnr_info animatedParent">
                      <h1>
                        Why Stressed Out For Your Story{" "}
                        <span>When You Can Hire One Of Our Ghostwriter?</span>
                      </h1>
                      <p>
                        Our ghostwriting service is our pride which makes us
                        stands tall as one of the best ghostwriting company. Our
                        book ghostwriters will make your words into a ready to
                        publish masterpiece, making sure that you get everything
                        that you wanted in that manuscript. However, if you want
                        fiction, non-fiction, or a memoir, it’s not a big deal
                        for us. Reach us now!
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
                            style={{display: 'none'}}
                          >
                            Contact No Incorrect
                          </span>
                        </div>
                        <div class="mb-3">
                          <textarea
                            type="text"
                            name="Message"
                            class="form-control"
                            id="exampleInputMessage"
                            placeholder="About your book (optional)"
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

      <section id="pub_serv">
        <div class="wrapper">
            

            <figure class="page_breaker1"><img src={pagebreaker1} alt="page breaker" /></figure>

            {/* <!-- Deluxe Publishing --> */}
            <div class="pub_serve2_con animatedParent" id="deluxe-publishing-platforms">
                <div class="pub_deluxe_content animated fadeInUp">
                    <h2>Deluxe <span>Ghostwriting </span> <small>Platforms</small></h2>
                    <p>Do you have an idea or message you want to bring to every reader? Then why not create it in a proper story and deliver it to everyone around? Our ghostwriting services are the finest way for you to share your unique narrative with the world.</p>

                </div>

                <div class="pub_deluxe_holder">
                    <div class="pub_deluxe_box1 ">
                        <h2>STANDARD</h2>
                        <input type="checkbox" class="read-more-state" id="post-4" />
                        <ul class="deluxe_list read-more-wrap">
                            <li>The chief ghostwriter will be a Published Author (3-5 years experience)
                            </li>
                            <li>Procedure includes a detailed strategy building and implementing session to create an outline for your book</li>
                            <li>Ghostwriting original content based on interviews or research.</li>
                            <li>Proofreading</li>
                            <li>Pagination</li>
                            <li class="read-more-target">Formatting and typesetting</li>
                            <li class="read-more-target">Cover Art (Front)</li>
                            <li class="read-more-target">Publishing on Amazon</li>
                            <li class="read-more-target">Publishing in Ebook format for your customers’ ease</li>
                            <li class="read-more-target">Access to an online portal</li>
                            <li class="read-more-target">Unlimited Revisions</li>
                            <li class="read-more-target">Premium Support</li>

                        </ul>
                        <label for="post-4" class="read-more-trigger"></label>
                        <a href="contact-us" class="subsribe_btn">Get Started</a>
                    </div>
                    <div class="pub_deluxe_box2">
                        <h2>PREMIUM</h2>
                        <input type="checkbox" class="read-more-state" id="post-5" />
                        <ul class="deluxe_list read-more-wrap">
                            <li>The chief ghostwriter will be an Extensively Published Author (7-9 years experience)</li>
                            <li>Procedure includes a detailed strategy building and implementing session to create an outline for your book</li>
                            <li>Ghostwriting original content based on interviews or research.</li>
                            <li>Developmental Editing (Also called: conceptual editing or manuscript appraisal.)</li>
                            <li>Evaluation Editing (Also called: manuscript critique or structural editing.)</li>
                            <li class="read-more-target">Content Editing (Also called: substantive editing or full editing.)</li>
                            <li class="read-more-target">Line Editing (Also called: stylistic editing or comprehensive edit.)</li>
                            <li class="read-more-target">Proofreading</li>
                            <li class="read-more-target">Pagination</li>
                            <li class="read-more-target">Formatting and typesetting</li>
                            <li class="read-more-target">Cover Art (Front, Back, and Spine)</li>
                            <li class="read-more-target">Publishing on Amazon, Barnes & Noble, and KDP</li>
                            <li class="read-more-target">Publishing in different formats for your customers’ ease (E-book, and Paperback)</li>
                            <li class="read-more-target">Access to an online portal</li>
                            <li class="read-more-target">Unlimited Revisions</li>
                            <li class="read-more-target">Premium Support</li>


                        </ul>
                        <label for="post-5" class="read-more-trigger"></label>
                        <a href="contact-us" class="subsribe_btn">Get Started</a>
                    </div>
                    <div class="pub_deluxe_box3">
                        <img src={bestsellerbestquality} class="bstslrstickr" alt="best-seller" />
                        <h2>PLATINUM</h2>
                        <input type="checkbox" class="read-more-state" id="post-6" />
                        <ul class="deluxe_list read-more-wrap">
                            <li>The chief ghostwriter will be a Bestseller Author (15+ years experience)</li>
                            <li>Procedure includes a detailed strategy-building and implementing session to create an outline for your book</li>
                            <li>Ghostwriting original content based on interviews or research</li>
                            <li>Developmental Editing (Also called: conceptual editing or manuscript appraisal.)</li>
                            <li>Evaluation Editing (Also called: manuscript critique or structural editing.)</li>
                            <li class="read-more-target">Content Editing (Also called: substantive editing or full editing.)</li>
                            <li class="read-more-target">Line Editing (Also called: stylistic editing or comprehensive edit.)</li>
                            <li class="read-more-target">Proofreading</li>
                            <li class="read-more-target">Pagination</li>
                            <li class="read-more-target">Formatting and typesetting</li>
                            <li class="read-more-target">Cover Art (Front, Back, and Spine)</li>
                            <li class="read-more-target">Publishing on Google Bookstore, Apple Bookstore, Amazon, Barnes & Noble, BookBaby, CreateSpace, Kobo, and KDP</li>
                            <li class="read-more-target">Publishing in different formats for your customers’ ease (E-book, Paperback, and Hardcover)</li>
                            <li class="read-more-target">Access to an online portal</li>
                            <li class="read-more-target">Unlimited Revisions</li>
                            <li class="read-more-target">Premium Support</li>
                            <li class="read-more-target">Dedicated ISBN & Barcode</li>

                        </ul>
                        <label for="post-6" class="read-more-trigger"></label>
                        <a href="contact-us" class="subsribe_btn">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="publishing_serv_sub">
        <div class="wrapper">
            <div class="publishing_serv_sub_con animatedParent" id="E-BOOK">
                <div class="sub_con_box1 animated fadeInRight">
                    <figure><img src={subconimg1} alt="woman smiling" /></figure>
                    <h2 style={{textTransform: 'inherit'}}>Complete <br /> Manuscript</h2>
                    <p>By understanding your idea deeply our professional book ghostwriters start writing down your concept into wonderful words. We will create your manuscript by keeping your voice and storytelling style in mind. Whether a coffee table book, novel, or celebrities autobiography nothing big for us! Give us the genre and we promise to deliver the outstanding polished manuscript to you.</p>
                </div>
                <div class="clearfix"></div>
                <div class="sub_con_box2 animated fadeInLeft delay-250" id="audiobook">
                    <figure><img src={subconimg2} alt="woman smiling with headphones" /></figure>
                    <h2>Writing <br /> Expertise</h2>

                    <p>Choosing us means you chose a company with everlasting expertise in ghostwriting or one of the best script writing companies. Therefore, we can deliver any genre or style, converting your idea into a masterpiece. We ensure to deliver your authentic voice through words, your manuscript resonated with all your reader. Moreover, from engaging dialogues to developing rich characters and fascinating plots, our dedicated team will make your book shine in the market. At last, contact us for ghostwriting or <span><a href="book-printing">printing services</a></span> to get what you deserve!</p>
                </div>
            </div>
        </div>
    </section>
    </DefaultLayout>
  );
};

export default GhostwritingServices;
