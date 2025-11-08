import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper";
import { useEffect, useState } from "react";
import Link from "next/link";

const HeroSlider = () => {
    const [loop, setLoop] = useState(false);
    const [slider, setSlider] = useState([]);
    const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
    const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
    const RANGE = "slider";

    // get data from google excel sheet
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
                );
                const result = await response.json();
                result?.values.shift() &&setSlider(result?.values);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => setLoop(true), [])

    return (
        <div className="hero-banner hero-style-3 bg-image">
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={loop}
                pagination={false}
                grabCursor={true}
                draggable={true}
                modules={[Autoplay, EffectFade, Navigation]}
                effect="fade"
                className="swiper university-activator"
                speed={1000}
                autoplay={{
                    delay: 5500
                }}
                navigation={{
                    nextEl: ".slide-next",
                    prevEl: ".slide-prev"
                }}
                lazy={{
                    loadPrevNext: false,
                    loadPrevNextAmount: 1
                }}
            >
                {slider.map((item) => {
                    const [id, src, subtitle, title, sm_text, btn_text ] = item;
                    const img = `/assets/images/course/${src}`;

                    return (
                        <SwiperSlide key={id}>
                            <img data-transform-origin='center center' src={img} className="swiper-lazy" alt="image" />
                            
                            <div className="thumbnail-bg-content">
                                <div className="container edublink-animated-shape">
                                    <div className="row">
                                        <div className="col-7">
                                            <div className="banner-content">
                                                <span className="subtitle" data-sal="slide-up" data-sal-duration="1000">{subtitle}</span>
                                                <h1 style={{fontWeight: 700, fontSize: '65px'}} className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">
                                                    {title}
                                                </h1>
                                                
                                                <p data-sal-delay="200" data-sal="slide-up" data-sal-duration="1000">{sm_text}</p>
                                                <div className="banner-btn" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                                                    <Link href="/course">
                                                    <a className="edu-btn btn-secondary">{btn_text} <i className="icon-4"></i></a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default HeroSlider;