
import React from "react";
import Slider from "react-slick";
import "./Testimonials.css"; // Importing the styles

import DefaultLayout from "../../components/layout";
import wordood from '../../assets/images/testi-images/worwood-testiimg.png'
import ruffer from '../../assets/images/testi-images/ruffer-testiimg.png'
import robreta from '../../assets/images/testi-images/roberta-testiimg.png'
import bolanzi from '../../assets/images/testi-images/bo-lanzi-testiimg.png'

const testimonialsData = [
  {
    img: wordood,
    alt: "Ronald Hera",
    text: `Hi. So I just wanted to share my experience with Absolute Ghostwriting through Amazon's KDP program. They sort of definitely came in and saved the day for me. I've been working on trying to get traditionally published for some time with no results. I was either not getting responses back from agents or agents were just telling me that they weren't accepting any new clients. Uh, I've been trying for months sending out dozens hundreds of query letters. Um I, at that point, I'd basically almost pretty much given up altogether on publishing.`,
    author: "Mathew Worwood",
    date: "",
  },
  {
    img: ruffer,
    alt: "Craig Barr",
    text: `I'd like to take a moment to thank Veronica and Kate of Absolute Ghostwriting for the Kindness and expert assistance they gave in the production and publication of my recent book becoming Zionsville Indiana. It's an archive of stories that describe the evolution of the 1852 Hamlet of Zionsville into the town. It was in 2022 that serves as a record of those days when the town had a population significantly smaller than that of today. Their help was instrumental in the success of the project. Thank you, Veronica and Kate.`,
    author: "David Ruffer",
    date: "12-Oct, 2021",
  },
  {
    img: robreta,
    alt: "Abba Lin",
    text: `Hi, my name is Roberta and I just got my first book published by Absolute Ghostwriting and my representative was Justin Daniels and he did a fantastic job. He led me through every aspect of it. He helped me all along the way and I couldn't give him big enough thanks and recommendation. He did a fantastic job and I really appreciate it very much. Thank you.`,
    author: "Roberta",
    date: "12-Oct, 2021",
  },
  {
    img: bolanzi,
    alt: "Charles Hopson",
    text: `Hi my name is Bo Lanzi. I am the author of two published books. My first book was completely self-published on my own and it wasn’t easy. With the help of Absolute Ghostwriting and Neil Smith and his staff, the publication process was much easier and more efficient. The communication was performed quick and effectively. Thank you for all your help.`,
    author: "Bob Lanzilotta",
    date: "12-Oct, 2021",
  },
];

const Testimonials = () => {
  const sliderSettings = {

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <DefaultLayout>
      <section id="banner_parent">
        <section id="banner" className="page-section">
          <div className="wrapper">
            <div className="bnr_con animatedParent"></div>
          </div>
        </section>
      </section>
      <section id="testimonials_text">
        <div className="wrapper">
          <div className="testimonial_con animatedParent">
            <div className="testimonial_content">
              <h1>Testimonials</h1>
              <h3>What Our Authors Say</h3>
            </div>
            <Slider {...sliderSettings} className="testimonial-slider">
              {testimonialsData.map((testimonial, index) => (
                // <div key={index} className="testimonial-slide">
                //   <figure>
                //     <img src={testimonial.img} alt={testimonial.alt} />
                //   </figure>
                //   <article className="testimonial-content">
                //     <p>{testimonial.text}</p>
                //   </article>
                //   <h2>{testimonial.author}</h2>
                //   <h3>{testimonial.date}</h3>
                // </div>
                <div className="testimonial_boxes">
                  <ul className="testimonial-owl">

                    <li key={index}>
                      <figure>
                        <img src={testimonial.img} alt={testimonial.alt} />
                      </figure>
                      <article className="testimonial-article scrollbox" style={{background:"transparent"}}>
                        <p>{testimonial.text}</p>
                      </article>
                      <h2>{testimonial.author}</h2>
                      {testimonial.date && <h3>{testimonial.date}</h3>}
                    </li>

                  </ul>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Testimonials;
