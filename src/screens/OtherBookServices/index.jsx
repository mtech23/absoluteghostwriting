import React from 'react'
import DefaultLayout from '../../components/layout'
import "./style.css"

import servicesBg from "../../assets/images/services/services-bg.jpg"

import ebook from "../../assets/images/e-b-ook.png"
import audiobook from "../../assets/images/au-dio-book.png"
import booktrailer from "../../assets/images/bo-ok-trailer.png"
import bookcover from "../../assets/images/bo-ok-cover.png"
import bookprinting from "../../assets/images/bo-ok-printing.png"
import translation from "../../assets/images/tr-anslation.png"
import authorwebsite from "../../assets/images/a-uthor-website.png"

const OtherBookServices = () => {
  return (
    <DefaultLayout>
      <section id="banner_parent" className="othrspgserv" style={{ backgroundImage: `url(${servicesBg})` }}>
        <section id="banner" className="page-section">
            <div className="wrapper">
                <div className="bnr_con animatedParent">
                    {/* <!-- <figure className="services_banner"><img src="assets/images/services/services-bg.jpg" alt="large books" /></figure> --> */}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <div className="services_bnr_info">
                                    <div className="services_bnr_info">
                                        <h1 className="othrspgghdng">Other Book Services</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
        </section>
    </section>


    <section className="own-book-sec should-hire">
        <div className="container-xl">
            <section className="our-pakages">
                <div className="container pakages-container">
                    <div className="row">
                        <div className="txtwrp">
                            <h2>Select your ISBN package and checkout</h2>
                            <h4>Only takes 1 minute, with instant delivery at checkout.</h4>
                        </div>
                    </div>
                    <div className="our-pakages-content">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="pakage-content">
                                    <div className="pakage-header">
                                        <h2>10 ISBNs <br />5 Barcodes <br />1 QRPlus Code</h2>
                                    </div>
                                    <div className="pakage-ul">
                                        <ul className="scrollbar_scr" id="style-scr">
                                            <li>Save when purchasing multiple ISBNs and barcodes</li>
                                            <li>Have enough ISBNs and barcodes for multiple book formats</li>
                                            <li>Make your printed book interactive with a QRPlus code</li>
                                            
                                        </ul>
                                    </div>
                                    <div className="pakage-footer">
                                        <a href="contact-us" className="pakage-number"> Get a Quote</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="pakage-content">
                                    <div className="pakage-header">
                                        <h2>10 ISBNs <br />1 Barcode</h2>
                                        
                                    </div>
                                    <div className="pakage-ul">
                                        <ul className="scrollbar_scr" id="style-scr">
                                            <li>Get savings on multiple ISBNs</li>
                                            <li>Have enough ISBNs for multiple books or formats</li>
                                            <li>A barcode makes your printed book easier to sell</li>
                                            
                                        </ul>
                                    </div>
                                    <div className="pakage-footer">
                                        
                                        <a href="contact-us" className="pakage-number"> Get a Quote</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="pakage-content">
                                    <div className="pakage-header">
                                        <h2>1 ISBN <br />1 Barcode </h2>
                                        
                                    </div>
                                    <div className="pakage-ul">
                                        <ul className="scrollbar_scr" id="style-scr">
                                            <li>The ISBN is the global standard for identifying titles</li>
                                            <li>Having a barcode on your book will facilitate automated sales and inventory tracking</li>
                                        </ul>
                                    </div>
                                    <div className="pakage-footer">
                                        <a href="contact-us" className="pakage-number"> Get a Quote</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>


    <section className="boxxsec">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="txtwrp">
                        <h2>ISBNs For Your Book Just A Call Away</h2>
                        <p>Making writers well known with our expert ISBN service, we simplify your publishing process by making every step a breeze. Therefore, let’s start your journey now.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="boxwrp">
                        <i className="fa fa-shopping-cart"></i>
                        <h4>Purchase</h4>
                        <p>Get yourself the most suitable package and make it yours with our secured payment method.</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="boxwrp boxwrp22">
                        <i className="fa fa-barcode"></i>
                        <h4>ISBN registration</h4>
                        <p>Your ISBN will be delivered to your account quickly making your manuscript reached first step to the competitive market.</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="boxwrp">
                        <i className="fa fa-file"></i>
                        <h4>Submit Details</h4>
                        <p>Provide us with all the book information as your data will be transferred with the book to ISBN database.</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="boxwrp boxwrp22">
                        <i className="fas fa-chart-line"></i>
                        <h4>On the radar</h4>
                        <p>Get yourself a book wire profile to increase your visibility, connecting you with potential readers, distributers, and retailers.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="publishing_serv_sub">
        <div className="wrapper">
            <div className="publishing_serv_sub_con animatedParent" id="E-BOOK">
                <div className="sub_con_box1 animated fadeInRight">
                    <figure><img src={ebook} alt="woman smiling" /></figure>
                    <h2 style={{textTransform: 'inherit'}}>E-BOOK</h2>
                    <p>Providing you with exceptional eBook writing services, doesn’t matter the genre we create all with our expertise. Moreover, our dedicated team is here to make your manuscript a ready to publish eBook. Although, we expertly format and edit your book to make it polished and attractive to all readers. Get it now!</p>
                    <a href="contact-us">Buy Now</a>
                </div>
                <div className="clearfix"></div>
                <div className="sub_con_box2 animated fadeInLeft delay-250" id="audiobook">
                    <figure><img src={audiobook} alt="woman smiling with headphones" /></figure>
                    <h2>AUDIOBOOK</h2>

                    <p>An audiobook for you? Don’t you think it is an interesting idea? Make your reach those who have no time to read. However, with our audiobook services we provide you a modern format to get large amount of audience. Make your book heard where it can’t be read. At last, let’s make your book reach more audience now!</p>
                    <a href="contact-us">Buy Now</a>
                </div>
            </div>
        </div>
    </section>




    <section id="publishing_serv_sub">
        <div className="wrapper">
            <div className="publishing_serv_sub_con animatedParent" id="E-BOOK">
                <div className="sub_con_box1 animated fadeInRight">
                    <figure><img src={booktrailer} alt="woman smiling" /></figure>
                    <h2 style={{textTransform: 'inherit'}}>Book Trailer </h2>
                    <p>A book trailer is what which adds extra attractiveness towards your book. Undoubtedly, having a video trailer for your book will allow you to access larger amount of audience and create a hype between the readers with its stunning and captivating style. Before releasing your book why not create some audience first? Get our service now!</p>
                    <a href="contact-us">Buy Now</a>
                </div>
                <div className="clearfix"></div>
                <div className="sub_con_box2 animated fadeInLeft delay-250" id="audiobook">
                    <figure><img src={bookcover} alt="woman smiling with headphones" /></figure>
                    <h2>Book Cover </h2>

                    <p>Undoubtedly, a <span><a href="powerhouse-services">book cover</a></span> is what which makes readers to choose your book in a row of 100 books. Don’t make a mistake! Get yourself a compelling book cover and attract your readers towards. However, your book cover will not only make it look good but will reflect the story of yours which will make the readers more fascinating about it. At last, get yourself a book cover according to the trends, with just a call!</p>
                    <a href="contact-us">Buy Now</a>
                </div>
            </div>
        </div>
    </section>


    <section id="publishing_serv_sub" className="lastfld">
        <div className="wrapper">
           
            <div className="clearfix"></div>
            <div className="sub_con_box2 animated fadeInLeft delay-250" id="audiobook">
                <figure><img src={bookprinting} alt="woman smiling with headphones" /></figure>
                <h2>Printing </h2>

                <p>Done with the <span><a href="publishing-services">publishing</a></span>? Now let’s print it out to distribute it to the larger amount. Undoubtedly, we provide high-quality that makes you satisfy, doesn’t matter if you want softcover, hardcover, or something different. Our team is your first choice, we make sure to give you the quality while keeping the affordability by your side.</p>
                <a href="book-printing">Buy Now</a>
            </div>
            <div className="sub_con_box2 animated fadeInLeft delay-250" id="audiobook">
                <figure><img src={translation} alt="woman smiling with headphones" /></figure>
                <h2>Translations</h2>

                <p>At Absolute Ghostwriting, we provide exceptional translation services to help authors reach a large array of audience. If you’re looking to translate your book into another language or localize your work for a specific market, our experienced translators deliver your message precisely.</p>
                <a href="contact-us">Buy Now</a>
            </div>
            <div className="sub_con_box2 animated fadeInLeft delay-250" id="audiobook">
                <figure><img src={authorwebsite} alt="woman smiling with headphones" /></figure>
                <h2>Author Website </h2>

                <p>We believe that every author should have its own kingdom which we call Author Website, undoubtedly every author needs a professional online presence, and Absolute Ghostwriting can help you create one. We showcase your books, share your story, and engage with your readers. Absolute Ghoswriting build tailored, user-friendly websites designed to make a significant impact on your work. And make it easy for audience to connect with you. Stop wasting time and let’s connect to make this empire of your ready!</p>
                <a href="contact-us">Buy Now</a>
            </div>
        </div>
        {/* </div> */}
    </section>



    </DefaultLayout>
  )
}

export default OtherBookServices
