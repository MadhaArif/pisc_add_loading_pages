import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

// Install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Navigation]);

const HeroSlider = () => {
    const [loop, setLoop] = useState(true);
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
                result?.values.shift() && setSlider(result?.values);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        if (slider.length > 0) {
            setLoop(true);
        }
    }, [slider]);

    return (
        <div className="hero-banner hero-style-3 bg-image">
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}  // Always enable loop for infinite cycling
                grabCursor={true}
                draggable={true}
                effect="fade"
                className="swiper university-activator"
                speed={300}  // faster fade animation
                autoplay={{
                    delay: 4000
                }}
                navigation={{
                    nextEl: ".slide-next",
                    prevEl: ".slide-prev"
                }}
                // lazy={{
                //     loadPrevNext: false,
                //     loadPrevNextAmount: 1
                // }}
            >
                {slider.map((item, ind) => {
                    const [id, src, subtitle, title, sm_text, btn_text] = item;
                    const img = `/assets/images/course/${src}`;

                    return (
                        <SwiperSlide key={ind}>
                            <img data-transform-origin='center center' src={img} alt="image" style={{height: '80vh'}} />

                            <div className="thumbnail-bg-content">
                                <div className="container edublink-animated-shape">
                                    <div className="row">
                                        <div className="col-7">
                                            <div className="banner-content">
                                                <span className="subtitle" data-sal="slide-up" data-sal-duration="200">{subtitle}</span>
                                                <h1 style={{ fontWeight: 700, fontSize: '65px' }} className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="200">
                                                    {title}
                                                </h1>

                                                <p data-sal-delay="200" data-sal="slide-up" data-sal-duration="200">{sm_text}</p>
                                                <div className="banner-btn" data-sal-delay="400" data-sal="slide-up" data-sal-duration="200">
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