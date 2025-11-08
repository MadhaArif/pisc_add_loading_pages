import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const tabs = {
    title:[
        {
            active:true,target:'about-edu',title:'About us'
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
            desc:"PISC is your gateway to mastering in-demand tech skills through expertly designed computer short courses. We focus on practical, up-to-date knowledge that aligns with industry needs, ensuring you stay ahead in today's competitive job market. Our experienced instructors bring real-world expertise and hands-on learning to every session, making complex concepts easy to understand and apply. Whether you're looking to boost your career, switch industries, or gain new digital skills, PISC provides the tools, guidance, and support to help you succeed.",
            feature_list: []
        },
        {
            id:'about-mission',
            desc:"Our mission is to provide high-quality, affordable, and immersive computer short courses that equip students with cutting-edge technical skills and critical problem-solving abilities, preparing them to excel in today's dynamic digital landscape. We are committed to:",
            feature_list:[
                'Delivering up-to-date, industry-relevant curriculum.',
                'Fostering a dynamic and inclusive learning environment.',
                'Encouraging creativity, critical thinking, and innovation'
            ]
        },
        {
            id:'about-vision',
            desc:"We envision a future where technology education is universally accessible, empowering individuals with the digital skills necessary to thrive in an ever-evolving world. Our aim is to become a pioneering institution in computer education, seamlessly connecting academic learning with real-world industry needs through innovative, practical, and career-driven training.",
            feature_list: [
                'Making technology education accessible to everyone.',
                'Preparing students for successful careers by providing industry-relevant knowledge and mentorship.'
            ]
        }
    ]
}

const AboutArea = () => {
    return (
        <div className="edu-about-area about-style-3">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                        <div className="about-content">
                            <div className="section-title section-left">
                                <span className="pre-title">About Us</span>
                                <h2 className="title" style={{fontSize: '45px'}}>We Equip You with Top Digital Skills.</h2>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutArea;