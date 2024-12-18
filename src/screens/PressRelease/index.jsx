import React from "react";
import DefaultLayout from "../../components/layout";

import "./style.css";

import pressreleasebanner from "../../assets/images/press-release-banner.png";
import prside1 from "../../assets/images/pr-side1.png";

import logonew2 from "../../assets/images/log/logonew-2.png";
import logonew1 from "../../assets/images/log/logonew-1.png";
import fox1 from "../../assets/images/log/fox-1.png";
import logonew4 from "../../assets/images/log/logonew-4.png";
import digital from "../../assets/images/log/digital.png";
import watch1 from "../../assets/images/log/watch-1.png";
import ap from "../../assets/images/log/ap.png";
import startribune from "../../assets/images/log/star-tribune.png";

import prside2 from "../../assets/images/pr-side2.png";

import Slider from "react-slick";

const PressRelease = () => {


  const settings = {
    dots: false, // Disable dots
    arrows: false, // Disable arrows
    infinite: true, // Enable infinite loop
    speed: 500, // Slide transition speed
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Time between slides
    vertical: true, // Enable vertical sliding
    verticalSwiping: true, // Enable vertical swiping
  };
  return (
    <DefaultLayout>
      <section id="banner_parent">
        <section id="banner" className="page-section">
          <div className="wrapper">
            <div className="bnr_con pub_serv_con animatedParent">
              <div className="publishing_serv_vid">
                <img src={pressreleasebanner} alt="press release" />
              </div>
              <div className="pub_serv_bnr_info animatedParent">
                <h1>
                  Get The Attention{" "}
                  <span>You Deserve With Well Written Press Releases</span>
                </h1>
                <p>
                  Absolute Ghostwriting dedicates itself to making you famous
                  worldwide through their exceptional press release services.
                  Get the visibility you deserve and become a well-known author
                  globally, by letting us write about you and your book in our
                  press release. Moreover, let’s connect and create something
                  outstanding for you and your audience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* <!-- Middle Area --> */}
      {/* <!-- middle1 --> */}
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
                    <h2>Personalized Press Release</h2>
                    <p>
                      Get your message to the right audience with our targeted
                      press releases, we ensure that each press release should
                      represent you globally professionally. We have a vast
                      network of media outlets, industry influencers, and niche
                      publications to increase your visibility and engagement.
                      However, helping your story get to the right market is
                      what we do best.
                    </p>

                    <a href="javascript:;" class="readmore_btn">
                      Read More
                    </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="side-img">
                    <img src={prside1} alt="Personalized Press Release" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="press_release">
        <div class="wrapper">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-7">
                <h2>
                  Absolute Ghostwriting Press Releases We are Recognized and
                  Endorsed by
                </h2>
                <p>
                  Increase your brand's visibility with our press release
                  service by your side. Our expert writers are here to create
                  engaging and up-to-mark press releases for you. We make sure
                  that with our service, you can reach the top of this market,
                  you and your book should be known everywhere in the globe.
                  Whether you're launching a new product, announcing a
                  partnership, or sharing exciting company news, we create each
                  release by keeping you and your audience in mind. We believe
                  that your work should create an impact on media outlets and
                  engage customers. Focus on your what you do best, and leave
                  writing on us. Contact us right away to start this journey!
                </p>
              </div>
              <div class="col-md-5">
                <div class="log-slider">
                <Slider {...settings}>
                  <div class="item">
                    <a
                      class="Newlinking"
                      target="_blank"
                      href="https://markets.businessinsider.com/news/stocks/book-authors-hub-offers-impeccable-storytelling-services-to-captivate-readers-1032688201"
                    >
                      <div class="boxpress">
                        <div class="pressheader">
                          <p> Market Insider </p>
                        </div>
                        <figure>
                          <img src={logonew2} alt="logonew-2" />
                        </figure>
                        <a
                          target="_blank"
                          class="details"
                          href="https://markets.businessinsider.com/news/stocks/book-authors-hub-offers-impeccable-storytelling-services-to-captivate-readers-1032688201"
                        >
                          View details
                        </a>
                      </div>
                    </a>
                  </div>
                  <div class="item">
                    <a
                      class="Newlinking"
                      target="_blank"
                      href="https://www.google.com/search?q=yahoo%3ABook+Authors+Hub+Now+Offers+Impeccable+Storytelling+Services+to+Captivate+Readers&sca_esv=571751170&rlz=1C1ONGR_enPK1033PK1033&ei=vusiZYjqMcOLi-gPwuuWmAI&ved=0ahUKEwiIwcHNgeeBAxXDxQIHHcK1BSMQ4dUDCBA&uact=5&oq=yahoo%3ABook+Authors+Hub+Now+Offers+Impeccable+Storytelling+Services+to+Captivate+Readers&gs_lp=Egxnd3Mtd2l6LXNlcnAiV3lhaG9vOkJvb2sgQXV0aG9ycyBIdWIgTm93IE9mZmVycyBJbXBlY2NhYmxlIFN0b3J5dGVsbGluZyBTZXJ2aWNlcyB0byBDYXB0aXZhdGUgUmVhZGVyczIOEAAYigUYsQMYgwEYkQIyDRAAGIoFGLEDGIMBGEMyCBAAGIoFGJECMg0QABiKBRixAxiDARhDMgoQABiKBRixAxhDMgcQABiKBRhDMg0QABiKBRixAxiDARhDMgsQABiABBixAxiDATILEAAYgAQYsQMYyQMyCBAAGIAEGJIDSMVbUABYqVVwAHgAkAEAmAGaAqABmgKqAQMyLTG4AQPIAQD4AQH4AQLiAwQYACBBiAYB&sclient=gws-wiz-serp"
                    >
                      <div class="boxpress">
                        <div class="pressheader">
                          <p> Google News </p>
                        </div>
                        <figure class="new-1">
                          <img src={logonew1} alt="logonew-1" />
                        </figure>
                        <a
                          target="_blank"
                          class="details"
                          href="https://www.google.com/search?q=yahoo%3ABook+Authors+Hub+Now+Offers+Impeccable+Storytelling+Services+to+Captivate+Readers&sca_esv=571751170&rlz=1C1ONGR_enPK1033PK1033&ei=vusiZYjqMcOLi-gPwuuWmAI&ved=0ahUKEwiIwcHNgeeBAxXDxQIHHcK1BSMQ4dUDCBA&uact=5&oq=yahoo%3ABook+Authors+Hub+Now+Offers+Impeccable+Storytelling+Services+to+Captivate+Readers&gs_lp=Egxnd3Mtd2l6LXNlcnAiV3lhaG9vOkJvb2sgQXV0aG9ycyBIdWIgTm93IE9mZmVycyBJbXBlY2NhYmxlIFN0b3J5dGVsbGluZyBTZXJ2aWNlcyB0byBDYXB0aXZhdGUgUmVhZGVyczIOEAAYigUYsQMYgwEYkQIyDRAAGIoFGLEDGIMBGEMyCBAAGIoFGJECMg0QABiKBRixAxiDARhDMgoQABiKBRixAxhDMgcQABiKBRhDMg0QABiKBRixAxiDARhDMgsQABiABBixAxiDATILEAAYgAQYsQMYyQMyCBAAGIAEGJIDSMVbUABYqVVwAHgAkAEAmAGaAqABmgKqAQMyLTG4AQPIAQD4AQH4AQLiAwQYACBBiAYB&sclient=gws-wiz-serp"
                        >
                          View details
                        </a>
                      </div>
                    </a>
                  </div>
                  <div class="item">
                    <a
                      class="Newlinking"
                      target="_blank"
                      href="https://fox47.marketminute.com/article/newsfile-2023-10-8-book-authors-hub-now-offers-impeccable-storytelling-services-to-captivate-readers"
                    >
                      <div class="boxpress">
                        <div class="pressheader">
                          <p> FOX 47 </p>
                        </div>
                        <figure class="new-1">
                          <img src={fox1} alt="Fox-1" />
                        </figure>
                        <a
                          target="_blank"
                          class="details"
                          href="https://fox47.marketminute.com/article/newsfile-2023-10-8-book-authors-hub-now-offers-impeccable-storytelling-services-to-captivate-readers"
                        >
                          View details
                        </a>
                      </div>
                    </a>
                  </div>
                  <div class="item">
                    <a
                      class="Newlinking"
                      target="_blank"
                      href="https://www.google.com/search?q=yahoo%3ABook+Authors+Hub+Now+Offers+Impeccable+Storytelling+Services+to+Captivate+Readers&sca_esv=571751170&rlz=1C1ONGR_enPK1033PK1033&ei=vusiZYjqMcOLi-gPwuuWmAI&ved=0ahUKEwiIwcHNgeeBAxXDxQIHHcK1BSMQ4dUDCBA&uact=5&oq=yahoo%3ABook+Authors+Hub+Now+Offers+Impeccable+Storytelling+Services+to+Captivate+Readers&gs_lp=Egxnd3Mtd2l6LXNlcnAiV3lhaG9vOkJvb2sgQXV0aG9ycyBIdWIgTm93IE9mZmVycyBJbXBlY2NhYmxlIFN0b3J5dGVsbGluZyBTZXJ2aWNlcyB0byBDYXB0aXZhdGUgUmVhZGVyczIOEAAYigUYsQMYgwEYkQIyDRAAGIoFGLEDGIMBGEMyCBAAGIoFGJECMg0QABiKBRixAxiDARhDMgoQABiKBRixAxhDMgcQABiKBRhDMg0QABiKBRixAxiDARhDMgsQABiABBixAxiDATILEAAYgAQYsQMYyQMyCBAAGIAEGJIDSMVbUABYqVVwAHgAkAEAmAGaAqABmgKqAQMyLTG4AQPIAQD4AQH4AQLiAwQYACBBiAYB&sclient=gws-wiz-serp"
                    >
                      <div class="boxpress">
                        <div class="pressheader">
                          <p> Yahoo Finance </p>
                        </div>
                        <figure>
                          <img src={logonew4} alt="logonew-4" />
                        </figure>
                        <a
                          target="_blank"
                          class="details"
                          href="https://www.google.com/search?q=yahoo%3ABook+Authors+Hub+Now+Offers+Impeccable+Storytelling+Services+to+Captivate+Readers&sca_esv=571751170&rlz=1C1ONGR_enPK1033PK1033&ei=vusiZYjqMcOLi-gPwuuWmAI&ved=0ahUKEwiIwcHNgeeBAxXDxQIHHcK1BSMQ4dUDCBA&uact=5&oq=yahoo%3ABook+Authors+Hub+Now+Offers+Impeccable+Storytelling+Services+to+Captivate+Readers&gs_lp=Egxnd3Mtd2l6LXNlcnAiV3lhaG9vOkJvb2sgQXV0aG9ycyBIdWIgTm93IE9mZmVycyBJbXBlY2NhYmxlIFN0b3J5dGVsbGluZyBTZXJ2aWNlcyB0byBDYXB0aXZhdGUgUmVhZGVyczIOEAAYigUYsQMYgwEYkQIyDRAAGIoFGLEDGIMBGEMyCBAAGIoFGJECMg0QABiKBRixAxiDARhDMgoQABiKBRixAxhDMgcQABiKBRhDMg0QABiKBRixAxiDARhDMgsQABiABBixAxiDATILEAAYgAQYsQMYyQMyCBAAGIAEGJIDSMVbUABYqVVwAHgAkAEAmAGaAqABmgKqAQMyLTG4AQPIAQD4AQH4AQLiAwQYACBBiAYB&sclient=gws-wiz-serp"
                        >
                          View details
                        </a>
                      </div>
                    </a>
                  </div>
                  <div class="item">
                    <a
                      class="Newlinking"
                      target="_blank"
                      href="https://www.digitaljournal.com/pr/news/newsfile/book-authors-hub-now-offers-impeccable-storytelling-services-to-captivate-readers"
                    >
                      <div class="boxpress">
                        <div class="pressheader">
                          <p>Digital Journal</p>
                        </div>
                        <figure class="new-1">
                          <img src={digital} alt="Digital" />
                        </figure>
                        <a
                          target="_blank"
                          class="details"
                          href="https://www.digitaljournal.com/pr/news/newsfile/book-authors-hub-now-offers-impeccable-storytelling-services-to-captivate-readers"
                        >
                          View details
                        </a>
                      </div>
                    </a>
                  </div>
                  <div class="item">
                    <a class="Newlinking" href="javascript:;">
                      <div class="boxpress">
                        <div class="pressheader">
                          <p>Market Watch</p>
                        </div>
                        <figure class="new-1">
                          <img src={watch1} alt="Watch" />
                        </figure>
                        <a class="details" href="javascript:;">
                          View details
                        </a>
                      </div>
                    </a>
                  </div>
                  <div class="item">
                    <a
                      class="Newlinking"
                      target="_blank"
                      href="https://apnews.com/press-release/marketersmedia/books-and-literature-3956f2475992113ac7291fa129a82686"
                    >
                      <div class="boxpress">
                        <div class="pressheader">
                          <p>AP News</p>
                        </div>
                        <figure class="">
                          <img src={ap} alt="Apimage" />
                        </figure>
                        <a
                          target="_blank"
                          class="details"
                          href="https://apnews.com/press-release/marketersmedia/books-and-literature-3956f2475992113ac7291fa129a82686"
                        >
                          View details
                        </a>
                      </div>
                    </a>
                  </div>
                  <div class="item">
                    <a
                      class="Newlinking"
                      target="_blank"
                      href="https://markets.financialcontent.com/startribune/article/newsfile-2023-10-8-book-authors-hub-now-offers-impeccable-storytelling-services-to-captivate-readers"
                    >
                      <div class="boxpress">
                        <div class="pressheader">
                          <p>STAR Tribune</p>
                        </div>
                        <figure class="">
                          <img src={startribune} alt="Star Tribune" />
                        </figure>
                        <a
                          target="_blank"
                          class="details"
                          href="https://markets.financialcontent.com/startribune/article/newsfile-2023-10-8-book-authors-hub-now-offers-impeccable-storytelling-services-to-captivate-readers"
                        >
                          View details
                        </a>
                      </div>
                    </a>
                  </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    <h2>Press Release Writing & Editing</h2>
                    <p>
                      We provide professional PR writing and editing services
                      that ensure you inform and captivate your audience
                      effectively. Our expert writers are confident in creating
                      content as per your brand’s unique voice. Moreover, we
                      also offer editing services to make your press release
                      exceptional for maximum impact.
                    </p>

                    <a href="javascript:;" class="readmore_btn">
                      Read More
                    </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="side-img">
                    <img src={prside2} alt="Press Release Writing & Editing" />
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

export default PressRelease;
