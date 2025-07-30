
const AboutArea = () => {
    return (
        <div className="gap-top-equal about-style-7">
            <div className="container gap-bottom-equal">
                <div className=" row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div style={{ paddingRight: '0' }} className="about-content">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title">About us</span>
                                <h2 className="title" style={{ fontSize: '45px' }}>Who We Are</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p style={{ textAlign: 'justify' }}>
                                    PISC is your gateway to mastering in-demand tech skills through expertly designed computer short courses. We focus on practical, up-to-date knowledge that aligns with industry needs, ensuring you stay ahead in today's competitive job market. Our experienced instructors bring real-world expertise and hands-on learning to every session, making complex concepts easy to understand and apply. Whether you're looking to boost your career, switch industries, or gain new digital skills, PISC provides the tools, guidance, and support to help you succeed. With flexible learning options and a focus on real-world applications, we ensure that you're not just learning, but preparing to excel in your career. Our courses are designed to cater to learners at every stage, from beginners to advanced professionals, so you can always find the right path to achieve your goals. Let PISC be your partner in unlocking a brighter, tech-driven future.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img style={{ width: '100%' }} className="main-img-1" src="/assets/images/about/about-11.webp" alt="About Image" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="gap-top-equal gap-bottom-equal" style={{ background: 'var(--color-smoke)' }}>
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-6" style={{borderRight: '3px solid var(--color-secondary)'}}>
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <h2 className="title" style={{ fontSize: '45px' }}>Our <span className="color-secondary">Mission</span></h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p style={{ textAlign: 'justify' }}> 
                                    Our mission is to provide high-quality, affordable, and immersive computer short courses that equip students with cutting-edge technical skills and critical problem-solving abilities, preparing them to excel in today's dynamic digital landscape. We are committed to:                                    <ul>
                                        <li>Delivering up-to-date, industry-relevant curriculum.</li>
                                        <li>Fostering a dynamic and inclusive learning environment.</li>
                                        <li>Encouraging creativity, critical thinking, and innovation.</li>
                                        <li>Preparing students for real-world challenges through practical training and mentorship.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <h2 className="title" style={{ fontSize: '45px' }}>Our <span className="color-secondary">Vision</span></h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p style={{ textAlign: 'justify' }}>
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

            <div className="gap-top-equal gap-bottom-equal">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-7">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <h2 className="title" style={{ fontSize: '45px' }}>About <span className="color-secondary">CEO</span></h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p style={{ textAlign: 'justify' }}>
                                    We envision a future where technology education is universally accessible, empowering individuals with the digital skills necessary to thrive in an ever-evolving world. Our aim is to become a pioneering institution in computer education, seamlessly connecting academic learning with real-world industry needs through innovative, practical, and career-driven training.
                                    <ul>
                                        <li>Making technology education accessible to everyone.</li>
                                        <li>Fostering an innovative and inclusive learning environment that encourages creativity and growth.</li>
                                        <li>Preparing students for successful careers by providing industry-relevant knowledge and mentorship</li>
                                        <li>Making technology education accessible to everyone.</li>
                                        <li>Fostering an innovative and inclusive learning environment that encourages creativity and growth.</li>
                                        <li>Preparing students for successful careers by providing industry-relevant knowledge and mentorship</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <img style={{ width: '100%', height: '100%' }} src="/assets/images/ceo.jpg" alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutArea;