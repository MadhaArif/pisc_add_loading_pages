import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const AboutArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="section-gap-large edu-about-area about-style-7">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-7">
                        <div className="about-content">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <h2 className="title">Who we <span className="color-secondary">are</span></h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p style={{textAlign: 'justify'}}>
                                    Welcome to PISC!
                                    we're committed to empowering students with the skills they need to thrive in the ever-evolving world of technology. 
                                    With a focus on computer short courses, we aim to provide practical and up-to-date knowledge that helps our students stay 
                                    ahead in today's competitive job market. Our experienced instructors bring real-world insights and hands-on learning to the 
                                    classroom, ensuring that each course is both engaging and relevant. Whether you're looking to start a new career, enhance your 
                                    existing skills, or simply explore a new hobby, PISC has the right course for you.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-image-gallery">
                            <img className="main-img-1" src="/assets/images/about/about-11.webp" alt="About Image" />
                            <ul className="shape-group">
                                <motion.li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={{
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    }}
                                >
                                    <img src="/assets/images/about/shape-38.png" alt="Shape" />
                                </motion.li>
                                <motion.li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={{
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y
                                    }}
                                >
                                    <img src="/assets/images/about/shape-37.png" alt="Shape" />
                                </motion.li>
                                <motion.li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={{
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y
                                    }}
                                >
                                    <img src="/assets/images/about/shape-04.png" alt="Shape" />
                                </motion.li>
                                <li className="shape-4 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <img src="/assets/images/counterup/shape-02.png" alt="Shape" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="gap-top-equal">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2 className="title">Our Mission</h2>
                                <p style={{ margin: 0 }}>
                                    Our mission is to provide high-quality, affordable, and hands-on computer short courses that equip students with the technical expertise and problem-solving abilities required in today's fast-paced digital landscape. We are committed to:
                                    <ul>
                                        <li>Delivering up-to-date, industry-relevant curriculum.</li>
                                        <li>Fostering a dynamic and inclusive learning environment.</li>
                                        <li>Encouraging creativity, critical thinking, and innovation.</li>
                                        <li>Preparing students for real-world challenges through practical training and mentorship.</li>
                                    </ul>
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <h2 className="title">Our Vision</h2>
                                <p style={{ margin: 0 }}>
                                    At PISC, we envision a future where technology education is accessible to everyone, empowering individuals with the digital skills needed to thrive in the modern world.
                                    We strive to be a leading institution in computer education, bridging the gap between learning and industry demands through innovative, practical, and career-oriented training.
                                    <ul>
                                        <li>Making technology education accessible to everyone.</li>
                                        <li>Fostering an innovative and inclusive learning environment that encourages creativity and growth.</li>
                                        <li>Preparing students for successful careers by providing industry-relevant knowledge and mentorship</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-1" data-sal-delay="500" data-sal="fade" data-sal-duration="200"></li>
            </ul>
        </div>
    )
}

export default AboutArea;