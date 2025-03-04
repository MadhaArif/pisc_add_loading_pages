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
                                <p style={{ textAlign: 'justify' }}>
                                    PISC is your gateway to mastering in-demand tech skills through expertly designed computer short courses. We focus on practical, up-to-date knowledge that aligns with industry needs, ensuring you stay ahead in today's competitive job market. Our experienced instructors bring real-world expertise and hands-on learning to every session, making complex concepts easy to understand and apply. Whether you're looking to boost your career, switch industries, or gain new digital skills, PISC provides the tools, guidance, and support to help you succeed. With flexible learning options and a focus on real-world applications, we ensure that you're not just learning, but preparing to excel in your career. Our courses are designed to cater to learners at every stage, from beginners to advanced professionals, so you can always find the right path to achieve your goals. Let PISC be your partner in unlocking a brighter, tech-driven future.
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
                                    Our mission is to provide high-quality, affordable, and immersive computer short courses that equip students with cutting-edge technical skills and critical problem-solving abilities, preparing them to excel in today's dynamic digital landscape. We are committed to:                                    <ul>
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
                                    We envision a future where technology education is universally accessible, empowering individuals with the digital skills necessary to thrive in an ever-evolving world. Our aim is to become a pioneering institution in computer education, seamlessly connecting academic learning with real-world industry needs through innovative, practical, and career-driven training.
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