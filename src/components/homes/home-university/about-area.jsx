import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const tabs = {
    title:[
        {
            active:true,target:'about-edu',title:'About EduBlink'
        },
        {
            target:'about-mission',title:'Our Mission'
        },
        {
            target:'about-vision',title:'Our Vision'
        }
    ],
    content:[
        {
            show:true,
            id:'about-edu',
            desc:"Welcome to PISC! we're committed to empowering students with the skills they need to thrive in the ever-evolving world of technology. With a focus on computer short courses, we aim to provide practical and up-to-date knowledge that helps our students stay ahead in today's competitive job market. Our experienced instructors bring real-world insights and hands-on learning to the classroom, ensuring that each course is both engaging and relevant.",
            feature_list: []
        },
        {
            id:'about-mission',
            desc:"Our mission is to provide high-quality, affordable, and hands-on computer short courses that equip students with the technical expertise and problem-solving abilities required in today's fast-paced digital landscape. We are committed to:",
            feature_list:[
                'Delivering up-to-date, industry-relevant curriculum.',
                'Fostering a dynamic and inclusive learning environment.',
                'Encouraging creativity, critical thinking, and innovation'
            ]
        },
        {
            id:'about-vision',
            desc:"We envision a future where technology education is accessible to everyone, empowering individuals with the digital skills needed to thrive in the modern world. We strive to be a leading institution in computer education, bridging the gap between learning and industry demands through innovative, practical, and career-oriented training",
            feature_list: [
                'Making technology education accessible to everyone.',
                'Preparing students for successful careers by providing industry-relevant knowledge and mentorship.'
            ]
        }
    ]
}

const AboutArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-about-area about-style-3">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                        <div className="about-content">
                            <div className="section-title section-left">
                                <span className="pre-title">About Us</span>
                                <h2 className="title">We Provide Best <span className="color-primary">Education</span> Services For You</h2>
                                <span className="shape-line">
                                    <i className="icon-19"></i>
                                </span>
                            </div>
                            <ul className="nav nav-tabs" role="tablist"> 
                                {
                                    tabs.title.map((t,i) => (
                                        <li key={i} className="nav-item" role="presentation">
                                            <button className={`nav-link ${t.active?'active':''}`} data-bs-toggle="tab" data-bs-target={`#${t.target}`} type="button" role="tab" tabIndex={'-1'} aria-selected={t.active?"true":'false'}> {t.title}</button>
                                        </li>
                                    ))
                                } 
                            </ul>
                            <div className="tab-content"> 
                                {tabs.content.map((item,i) => { const {desc,feature_list,id,show} = item; 
                                    return (
                                        <div key={id} className={`tab-pane fade ${show?"show active":""}`} id={id} role="tabpanel">
                                            <p>{desc}</p>
                                            <ul className="features-list"> {feature_list.map((l,i) => <li key={i}>{l}</li>)} </ul>
                                        </div> 
                                    )})
                                } 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img className="main-img-1" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800" src="/assets/images/about/about-04.webp" alt="About Image" />
                            <img className="main-img-2" data-sal-delay="100" data-sal="slide-left" data-sal-duration="800" src="/assets/images/about/about-05.webp" alt="About Image" />
                            <ul className="shape-group">
                                <motion.li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-13.png" alt="Shape" />
                                </motion.li>
                                <motion.li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-39.png" alt="Shape" />
                                </motion.li>
                                <motion.li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-07.png" alt="Shape" />
                                </motion.li>
                                <li className="shape-4" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-5">
                    <img className="rotateit" src="/assets/images/about/shape-13.png" alt="Shape" />
                </li>
                <li className="shape-6">
                    <span></span>
                </li>
            </ul>
        </div>
    )
}

export default AboutArea;