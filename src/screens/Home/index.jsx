import React from 'react'
import DefaultLayout from '../../components/layout'

import bannervideo2 from "../../assets/videos/banner-video2.mp4"

import bnrbookelement from "../../assets/images/bnr-book-element.png"
import pg7 from "../../assets/images/pg7.png"
import pg6 from "../../assets/images/pg6.png"
import pg5 from "../../assets/images/pg5.png"
import pg4 from "../../assets/images/pg4.png"
import pg3 from "../../assets/images/pg3.png"
import pg2 from "../../assets/images/pg2.png"
import pg1 from "../../assets/images/pg1.png"
import bookelement from "../../assets/images/book-element.png"

import sliderimg from "../../assets/images/slider-img.jpg"

import middleeffects1 from "../../assets/images/middle-effects1.png"
import middleeffects2 from "../../assets/images/middle-effects2.png"

import mustread from "../../assets/images/must-read.png"

import mustread1 from "../../assets/images/featured/511cCKg2syL._SY466_.jpg"
import mustread2 from "../../assets/images/featured/41qh+7C836L._SY445_SX342_.jpg"
import mustread3 from "../../assets/images/featured/81JeQb-VZlL._SY466_.jpg"
import mustread4 from "../../assets/images/featured/81t1GOS1pKL._SY466_.jpg"
import mustread5 from "../../assets/images/featured/41QKnLt6n9L._SY445_SX342_.jpg"


import port1 from "../../assets/images/port-1.webp"
import port2 from "../../assets/images/port-2.webp"
import port3 from "../../assets/images/port-3.webp"
import port4 from "../../assets/images/port-4.webp"
import port5 from "../../assets/images/port-5.webp"
import port6 from "../../assets/images/port-6.webp"
import port7 from "../../assets/images/port-7.webp"
import port8 from "../../assets/images/port-8.webp"
import port9 from "../../assets/images/port-9.webp"



const Home = () => {
  return (
    <DefaultLayout>
      <div id="fullpage">
      {/* <!-- Banner Area --> */}
      <section id="banner_parent" className="page-section paginate-me" data-section-name="banner">
         <section id="banner">
            <div className="wrapper">
               <div className="bnr_con animatedParent">
                  <div className="slider">
                     <figure className="slider_img">
                     </figure>
                     <video muted autoPlay autobuffer autoloop loop playsinline poster={sliderimg}>
                        <source src={bannervideo2} type="video/mp4" />
                        Your browser does not support the video tag.
                     </video>
                  </div>
                  <div className="bnr_info" id="bnr_scheduling">
                     <div className="bnr_blinks">
                        <ul className="bnrSlides home-banner-location">
                           <li className="home-banner-location-item">
                              <div className="indicator active"> <span className="marker"></span> </div>
                              <a href="powerhouse-services">Powerhouse Services</a>
                           </li>
                           <li className="home-banner-location-item">
                              <div className="indicator active"> <span className="marker"></span> </div>
                              <a href="publishing-services">Publishing Services</a>
                           </li>
                           <li className="home-banner-location-item">
                              <div className="indicator active"> <span className="marker"></span> </div>
                              <a href="about-us">About Us</a>
                           </li>
                           <li className="home-banner-location-item">
                              <div className="indicator active"> <span className="marker"></span> </div>
                              <a href="contact-us">Contact Us</a>
                           </li>
                           <li className="home-banner-location-item">
                              <div className="indicator active"> <span className="marker"></span> </div>
                              <a href="testimonials">Success Stories</a>
                           </li>
                           {/* <!--<li className="home-banner-location-item">-->
                           <!--   <div className="indicator active"> <span className="marker"></span> </div>-->
                           <!--   <a href="bookstore">Bookstore</a>-->
                           <!--</li>--> */}
                           <li className="home-banner-location-item">
                              <div className="indicator active"> <span className="marker"></span> </div>
                              <a href="featured-authors">Pride of Absolute Ghostwriting</a>
                           </li>
                           <li className="home-banner-location-item">
                              <div className="indicator active"> <span className="marker"></span> </div>
                              <a href="testimonials">Testimonials</a>
                           </li>
                           <li className="home-banner-location-item">
                              <div className="indicator active"> <span className="marker"></span> </div>
                              <a href="faq">FAQ</a>
                           </li>



                        </ul>
                     </div>
                     <h2 className="">Expert</h2>
                     <h1 className="">Ghostwriting Dedicated To <span>Create You A Masterpiece</span></h1>
                     <p>We at absolute ghostwriting are providing you with excellent Book Writers that will make your book raise in this competitive market. What we believe is that if you ghost book writers, we are your only stop you can rely on. Moreover, have a look at our services and accomplishments. </p>
                     <a href="javascript:;" onclick="$zopim.livechat.window.toggle()" className="bannerbtnn" title="Schedule With Us">Let's Talk</a>
                  </div>
                  <figure className="bnr_element">
                     <img src={bnrbookelement} alt="page" />
                  </figure>
                  <ul className="bnr_transparent animatedParent animatedOnce">
                     <li className="animated fadeInDownShort delay-250">
                        <figure>
                           <img src={pg7} alt="page" />
                        </figure>
                     </li>
                     <li className="animated fadeInDownShort delay-500">
                        <figure>
                           <img src={pg6} alt="page" />
                        </figure>
                     </li>
                     <li className="animated fadeInDownShort delay-750">
                        <figure>
                           <img src={pg5} alt="page" />
                        </figure>
                     </li>
                     <li className="animated fadeInDownShort delay-1000">
                        <figure>
                           <img src={pg4} alt="page" />
                        </figure>
                     </li>
                     <li className="animated fadeInDownShort delay-1250">
                        <figure>
                           <img src={pg3} alt="page" />
                        </figure>
                     </li>
                     <li className="animated fadeInDownShort delay-1500" >
                        <figure>
                           <img src={pg2} alt="page" />
                        </figure>
                     </li>
                     <li className="animated fadeInDownShort delay-1750" >
                        <figure>
                           <img src={pg1} alt="page" />
                        </figure>
                     </li>
                     <li className="animated fadeInDownShort delay-2000">
                        <figure>
                           <img src={bookelement} alt="book" />
                        </figure>
                     </li>
                  </ul>
               </div>
            </div>
         </section>
      </section>
      {/* <!-- End Banner Area --> */}

      {/* <!-- Middle Area --> */}

      {/* <!-- middle1 --> */}
      <section id="middle1" className="page-section" data-section-name="publishing services">
         <div className="wrapper">
            <div className="middle1_con animatedParent">
               <div className="middle_icons icons1 animated zoomIn">
                  <figure className="animated_figure1 floating1-1"><img src={middleeffects1} alt="effects1" /></figure>
                  <ul className="floating1">
                     <li className="cube cb1">
                        <div className="face top"></div>
                        <div className="face bottom"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                        <div className="face front"></div>
                        <div className="face back"></div>
                     </li>
                     <li className="cube cb2">
                        <div className="face top"></div>
                        <div className="face bottom"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                        <div className="face front"></div>
                        <div className="face back"></div>
                     </li>
                     <li className="cube cb3">
                        <div className="face top"></div>
                        <div className="face bottom"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                        <div className="face front"></div>
                        <div className="face back"></div>
                     </li>
                     <li className="cube cb4">
                        <div className="face top"></div>
                        <div className="face bottom"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                        <div className="face front"></div>
                        <div className="face back"></div>
                     </li>
                  </ul>
               </div>
               <div className="middle1_content animated bounceInLeft">
                  <h2>Publishing <span>services</span></h2>
                  <ul>
                     <li><a href="publishing-services">standard publishing platform</a></li>
                     {/* <!--<li><a href="publishing-services">deluxe publishing platforms</a></li>--> */}
                     <li><a href="publishing-services">e-Book</a></li>
                     <li><a href="publishing-services">audiobook</a></li>
                  </ul>
                  <a href="publishing-services" className="readmore_btn">Discover More</a>
               </div>
            </div>
         </div>
      </section>

      <section id="middle2" className="page-section" data-section-name="powerhouse services">
         <div className="wrapper">
            <div className="middle2_con animatedParent">
               <div className="middle_icons icons2 animated zoomIn">
                  <figure className="animated_figure2 floating2-1"><img src={middleeffects2} alt="effects1" /></figure>
                  <ul className="floating2">
                     <li className="cube cb1">
                        <div className="face top"></div>
                        <div className="face bottom"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                        <div className="face front"></div>
                        <div className="face back"></div>
                     </li>
                     <li className="cube cb2">
                        <div className="face top"></div>
                        <div className="face bottom"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                        <div className="face front"></div>
                        <div className="face back"></div>
                     </li>
                     <li className="cube cb3">
                        <div className="face top"></div>
                        <div className="face bottom"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                        <div className="face front"></div>
                        <div className="face back"></div>
                     </li>
                  </ul>
               </div>
               <div className="middle2_content animated bounceInLeft">
                  <h2>Marketing <span>Services</span></h2>
                  <ul>
                     <li><a href="powerhouse-services">book essentials</a></li>
                     <li><a href="powerhouse-services">classic marketing services</a></li>
                     <li><a href="powerhouse-services">mixed media marketing</a></li>
                  </ul>
                  <a href="powerhouse-services" className="readmore_btn">Discover More</a>
               </div>
            </div>
         </div>
      </section>

      {/* <!-- Main Area --> */}
      <section id="main_area" className="page-section" data-section-name="new book releases">
         <div className="mainBg"></div>
         <div className="wrapper">
            <div className="main_con  animatedParent">
               <h2 className="animated fadeInLeft">new <span>Book Releases</span></h2>
               <div className="main_off animated zoomIn delay-250">
                  <img src={mustread} alt="" />
                  {/* <!--<h4>Up To</h4>-->
                  <!--<h5 >20 <span>%</span> <small>off</small></h5>--> */}
               </div>
               <ul className="new_books animatedParent">
                  <li className="animated fadeInUpShort  delay-250">
                     <a href="featured-authors">
                        <figure><img src={mustread1} alt="" /></figure>
                     </a>
                  </li>
                  <li className="animated fadeInUpShort  delay-500">
                     <a href="featured-authors">
                        <figure><img src={mustread2} alt="" /></figure>
                     </a>
                  </li>
                  <li className="animated fadeInUpShort  delay-750">
                     <a href="featured-authors">
                        <figure><img src={mustread3} alt="" /></figure>
                     </a>
                  </li>
                  <li className="animated fadeInUpShort  delay-1000">
                     <a href="featured-authors">
                        <figure><img src={mustread4} alt="lyrics-and-poems" /></figure>
                     </a>
                  </li>
                  <li className="animated fadeInUpShort  delay-1250">
                     <a href="featured-authors">
                        <figure><img src={mustread5} alt="" /></figure>
                     </a>
                  </li>
               </ul>
               <a href="featured-authors" className="readmore_btn readmore_btn1">Explore <span>More</span></a>
            </div>
         </div>
      </section>
      {/* <!-- End Main Area --> */}

      {/* <!-- Bottom1 --> */}
      <section id="bottom1" className="page-section animatedParent" data-section-name="pride of Absolute Ghostwriting">
         <div className="wrapper animated fadeInDown">
            <div className="btm1_con ">
               <div className="btm1_content">
                  <h2>What Is The Pride Of Absolute Ghostwriting?</h2>
                  <p>We are known as the best ghostwriting company, which makes our whole team proud. We work collaboratively to make your ideas standout. And deliver you the exceptional story you deserve. We provide high-quality Book Writing Services undoubtedly, that reflect your concept with creativity and professionalism.</p>
                  <a href="featured-authors" className="bottom1-btn">Explore more</a>
               </div>
               <div className="js-conveyor-1 author_lists">
                  <ul>
                     <li>
                        <a href="featured-authors">
                           <figure><img src={port1} alt="Mindscope Seven" /></figure>
                           <h3>Mindscope Seven</h3>
                        </a>
                     </li>
                     <li>
                        <a href="featured-authors">
                           <figure><img src={port2} alt="Donielle Ingersoll" /></figure>
                           <h3>Donielle Ingersoll</h3>
                        </a>
                     </li>
                     <li>
                        <a href="featured-authors">
                           <figure><img src={port3} alt="Rezaul Khan" /></figure>
                           <h3>Rezaul Khan</h3>
                        </a>
                     </li>
                     <li>
                        <a href="featured-authors">
                           <figure><img src={port4} alt="Susan A. Savion" /></figure>
                           <h3>Susan A. Savion</h3>
                        </a>
                     </li>
                     <li>
                        <a href="featured-authors">
                           <figure><img src={port5} alt="Otilia Greco" /></figure>
                           <h3>Otilia Greco</h3>
                        </a>
                     </li>
                     <li>
                        <a href="featured-authors">
                           <figure><img src={port6} alt="Mairy E. Lloyd" /></figure>
                           <h3>Mairy E. Lloyd</h3>
                        </a>
                     </li>
                     <li>
                        <a href="featured-authors">
                           <figure><img src={port7}alt="Dr. Ida Acuña-Garza" /></figure>
                           <h3>Dr. Ida Acuña-Garza</h3>
                        </a>
                     </li>
                     <li>
                        <a href="featured-authors">
                           <figure><img src={port8}alt="Dr. Ida Acuña-Garza" /></figure>
                           <h3>Dr. Ida Acuña-Garza</h3>
                        </a>
                     </li>
                     <li>
                        <a href="featured-authors">
                           <figure><img src={port9}alt="Dr. Ida Acuña-Garza" /></figure>
                           <h3>Dr. Ida Acuña-Garza</h3>
                        </a>
                     </li>
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



      </div>
    </DefaultLayout>
  )
}

export default Home
