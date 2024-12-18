import React from "react";
import DefaultLayout from "../../components/layout";

const ContactUS = () => {
  return (
    <DefaultLayout>
      <section id="contact_us">
        <div className="wrapper">
          <div className="contact_us_con  animatedParent">
            <div className="contact_us_content animated fadeInLeft">
              <h1>Contact us</h1>
              <p>
                At Absolute Ghostwriting, we offer a variety of publishing
                packages and top-notch services tailored to your needs. Bring
                your book to life, share it with the world, and promote it
                effectively using our comprehensive publishing platforms and
                powerful marketing solutions. Contact us today to receive a full
                list of services designed to match your goals.
              </p>
            </div>

            <div className="contact_form animated fadeInRight">
              <form
                method="POST"
                action="webpages/bannerFormController.php"
                id="submitform"
              >
                {/* <script>
              function contactForm(token) {
                document.getElementById("contactForm").submit();
              }

              function onSubmit(token) {
                console.log(token);
              }
            </script> */}
                <div className="form-group ">
                  <input
                    className="form-field"
                    id="name"
                    placeholder="Your Name*"
                    required="required"
                    name="Name"
                    type="text"
                  />
                  <span className="text-danger"></span>
                </div>

                <div className="form-group ">
                  <input
                    className="form-field"
                    id="email"
                    placeholder="Your Email*"
                    required="required"
                    name="Email"
                    type="text"
                  />
                  <span className="text-danger"></span>
                </div>

                <div className="form-group ">
                  <input
                    className="form-field"
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
                  <span className="text-danger"></span>
                </div>

                <div className="form-group ">
                  <textarea
                    className="form-field"
                    id="msg"
                    placeholder="Your Message*"
                    required="required"
                    name="Message"
                    cols="50"
                    rows="10"
                    // id="textInput"
                    minlength="25"
                  ></textarea>
                  <span className="text-danger"></span>
                </div>

                <div
                  className="g-recaptcha"
                  data-sitekey="6LdQ2X0qAAAAAN5M4fOrUwFTZ6vTKsDC-l3schBy"
                ></div>
                <input type="submit" name="submit" value="SEND MESSAGE" />
                <input className="" type="hidden" name="ctry" value="" />
                <input type="hidden" name="pc" value="" />
                <input type="hidden" name="cip" value="" className="form-1-ip" />
                <input type="hidden" name="hiddencapcha" value="" />
                <input
                  type="hidden"
                  id="location"
                  name="locationURL"
                  value="https://www.absoluteghostwriting.com/contact-us"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default ContactUS;
