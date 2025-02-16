import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useEffect, useState } from "react";

const testimonial_data = [
    {
        img: '/assets/images/testimonial/testimonial-01.png',
        desc: 'Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.',
        ratings: <>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
        </>,
        name: 'Ray Sanchez',
        title: 'Student'
    },
    {
        img: '/assets/images/testimonial/testimonial-02.png',
        desc: 'Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.',
        ratings: <>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
        </>,
        name: 'Thomas Lopez',
        title: 'Designer'
    },
    {
        img: '/assets/images/testimonial/testimonial-03.png',
        desc: 'Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.',
        ratings: <>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
        </>,
        name: 'Amber Page',
        title: 'Developer'
    },
    {
        img: '/assets/images/testimonial/testimonial-04.png',
        desc: 'Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.',
        ratings: <>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
        </>,
        name: 'Robert Tapp',
        title: 'Content Creator'
    }
]

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
        <div className="testimonial-area-1 section-gap-equal">
            <div className="container">
                <div className="row g-lg-5">
                    <div className="col-lg-5">
                        <div className="testimonial-heading-area">
                            <div className="section-title section-left" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title">Testimonials</span>
                                <h2 className="title">What Our Students Have To Say</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim.</p>
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
                                                    {ratings}
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
