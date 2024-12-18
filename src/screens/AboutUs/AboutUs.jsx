import React from "react";
// import "./AboutUs.css"; 
import DefaultLayout from "../../components/layout";

const AboutUs = () => {
    return (
        <DefaultLayout>
            {/* <section id="about-us" className="about-us">
                <div className="wrapper">
                    <div className="about-us-content animatedParent">
                        <h1 className="animated fadeInDown heading">
                            Let Us Help You Make Your Mark In Literature
                        </h1>
                        <div className="animated fadeInLeft">
                            <p>
                                At Absolute Ghostwriting, we are dedicated to transforming your
                                ideas into compelling narratives that resonate with readers. Our
                                team of experienced writers specializes in a diverse range of
                                genres, ensuring that every project reflects your unique voice
                                and vision. Whether you're looking for captivating storytelling,
                                thorough editing, or powerful marketing strategies, we are
                                committed to guiding you through the entire writing process.
                            </p>
                            <p>
                                With a passion for excellence and a focus on collaboration, we
                                help authors bring their dreams to life and make their mark in
                                the literary world.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}
            <section id="about-us">
                <div class="wrapper">
                <div class="about-us_con animatedParent">
                    <h1 class="animated fadeInDown">Let Us Help You Make Your Mark In Literature</h1>
                    <div class="animated fadeInLeft">
                    <p>At Absolute Ghostwriting, we are dedicated to transforming your ideas into compelling narratives that resonate with readers. Our team of experienced writers specializes in a diverse range of genres, ensuring that every project reflects your unique voice and vision. Whether you're looking for captivating storytelling, thorough editing, or powerful marketing strategies, we are committed to guiding you through the entire writing process.</p>
                    <p>With a passion for excellence and a focus on collaboration, we help authors bring their dreams to life and make their mark in the literary world.</p>
                    </div>
                </div>
                </div>
            </section>
        </DefaultLayout>
    );
};

export default AboutUs;
