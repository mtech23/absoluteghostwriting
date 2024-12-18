
import React from "react";
import  { useState } from "react";
import DefaultLayout from "../../components/layout";

// import "./Faq.css"


const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    // Toggle active state
    const handleToggle = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    // FAQ data for dynamic rendering
    const faqCategories = [
        {
          category: "Writing and Publishing with Absolute Ghostwriting",
          faqs: [
            { question: "What’s included in your publishing service?", answer: "We provide every tiny point to provide professional standards of publishing services. Absolute Ghostwriting’s publishing services include book formatting, book cover design, and selecting a reliable platform to publish online. Provide extensive and comprehensive distribution to reach quality audiences through demographic and target markets." },
            { question: "How long does ghostwriting take?", answer: "First of all, it depends on the length of the book. If the book consists of lots of information and details, it can take more than 6 months. Meanwhile, a general 60,000 to 80,000 words book is completed in between three to six months approximately. In case of complexity, the project can take longer." },
            { question: "Can you help me print physical copies of my book?", answer: "We have every facility to provide traditional print copies of your precious book. Although we have a perfect variety of papers, hardcover, and VIP options to print a gift copy. We also provide a print-on-demand facility to provide any particular collectible book print copy." },
          ],
        },
        {
          category: "The Professionals behind the Scenes",
          faqs: [
            { question: "Can I stay involved during the ghostwriting process?", answer: "Yes! You can be involved throughout the project at each stage of the process. We also admire your involvement in making sure everything is progressing smoothly and wisely according to the idea. Absolute Ghostwriting always works in collaboration to provide the right expectation of the final project." },
            { question: "How do you price your services?", answer: "Our pricing depends on your content and project complexity. You can get comprehensive guidance through our upfront quotes and packages. We have no hidden charges and absolutely transparent pricing that deals with completing your project." },
            { question: "What makes Absolute Ghostwriting different from other companies?", answer: "Our entire mission is to provide a comprehensive suite of services related to books. We generously respect the efforts of authors who serve in the industry; that’s why our commitment is to quality. Absolute Ghostwriting can provide a professional book based on a single unique idea of yours. We have the strong capabilities to create an extraordinary book storyline that touches readers’ emotions and hearts." },
          ],
        },
        {
          category: "Marketing",
          faqs: [
            { question: "Will I own the rights to my book?", answer: "Always go with the fair contract agreement to have clarity that you have 100% copyrights to your content. Our assignment is only to provide confidentiality as an anonymous writing expert at Absolute Ghostwriting." },
            { question: "How do you market my book with the powerhouse marketing service?", answer: "Our marketers define extraordinary online strategies to bring your book to the top concern of readers to read. Absolute Ghostwriting has a tremendous range of campaigns that can initiate rapid growth for your book in the industry. Thus, our powerhouse marketing services include several options for paid marketing, such as PPC, social media ad campaigns, email campaigns, etc." },
            { question: "Do you help with book reviews?", answer: "Of course, we have professional people to provide authentic reviews on your book. You can find desired book reviews that initiate remarkable online visibility and enlightened credibility and efforts." },
          ],
        },
        {
          category: "Copyrights and Licensing",
          faqs: [
            { question: "Do you provide copyright and licensing services?", answer: "Yes, we ensure that your work is copyrighted and licensed to protect your intellectual property. We provide support for filing copyrights and securing all necessary licensing agreements." },
            { question: "Do you help authors with royalty management?", answer: "Absolutely! We help you manage royalties effectively, ensuring you receive the financial rewards for your hard work and creativity." },
            { question: "How do you ensure content confidentiality?", answer: "We prioritize content confidentiality through binding agreements and secure processes. Absolute Ghostwriting values the trust of our clients and ensures that their content remains strictly confidential at all times." },
          ],
        },
      ];
      
    return <DefaultLayout>
        <section id="FAQ">
            <div className="wrapper">
                <div className="faq_con">
                    <h1>Frequently Asked Questions</h1>
                    <div className="faq_search_parent">

                    </div>
                    <div className="faq-container">
      {faqCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="faq-category">
          {/* <h3 className="subheader">{category.category}</h3> */}
          <ul className="faq-list">
            {category.faqs.map((item, index) => (
              <li
                key={index}
                className={`faq-item ${
                  activeIndex === `${categoryIndex}-${index}` ? "the-active active" : ""
                }`}
                onClick={() => handleToggle(`${categoryIndex}-${index}`)}
              >
                <h4 className="faq-heading">{item.question}</h4>
                <div
                  className="read faq-text"
                  style={{
                    display: activeIndex === `${categoryIndex}-${index}` ? "block" : "none",
                  }}
                >
                  <p>{item.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
                </div>
            </div>
        </section>


    </DefaultLayout>
}

export default Faq










