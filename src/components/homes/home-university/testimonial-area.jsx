import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function TestimonialArea() {
    const [loop, setLoop] = useState(false);
    const [testimonial, setTestimonial] = useState([]);
    const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
    const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
    const RANGE = "testimonial";

    // get data from google excel sheet
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
                );
                const result = await response.json();
                setTestimonial(result?.values);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => setLoop(true), [])

    return (
        <div style={{ background: 'var(--color-smoke)'}} className="testimonial-area-1 section-gap-equal">
            <div className="container">
                <div className="row g-lg-5">
                    <div className="col-lg-5">
                        <div className="testimonial-heading-area">
                            <div className="section-title section-left" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title">Testimonials</span>
                                <h2 className="title" style={{ fontSize: '45px' }}>What Our Students Have To Say</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>Discover how PISC has helped transform careers through practical, industry-relevant training. Our students share their experiences of gaining valuable digital skills.</p>
                                <Link href="/gallery">
                                    <a className="edu-btn btn-primary">Successful Stories <i className="icon-4"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            loop={loop}
                            className="home-one-testimonial-activator swiper "
                            modules={[Autoplay]}
                            pagination={false}
                            grabCursor={true}
                            speed={1500}
                            autoplay={{
                                delay: 3500
                            }}
                            breakpoints={{
                                577: {
                                    slidesPerView: 2
                                }
                            }}
                        >
                            {testimonial.shift() && testimonial.map((item, i) => {
                                const [id, img, desc, ratings, name, title] = item;

                                return (
                                    <SwiperSlide key={i}>
                                        <div className="testimonial-grid">
                                            <div className="thumbnail">
                                                <img src={img} alt="Testimonial" />
                                                <span className="qoute-icon"><i className="icon-26"></i></span>
                                            </div>
                                            <div className="content">
                                                <p>{desc}</p>
                                                <div className="rating-icon">
                                                    {Array.from({ length: ratings }, (_, index) => (
                                                        <i key={index} className="icon-23" />
                                                    ))}
                                                </div>
                                                <h5 className="title">{name}</h5>
                                                <span className="subtitle">{title}</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
